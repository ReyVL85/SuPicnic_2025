from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from src.models.supicnic import db, Producto, Cesta, Pedido, PedidoItem, Pago, Usuario
import uuid
from datetime import datetime, date

supicnic_bp = Blueprint('supicnic', __name__)

@supicnic_bp.route('/productos', methods=['GET'])
@cross_origin()
def get_productos():
    """Obtener todos los productos"""
    try:
        productos = Producto.query.all()
        return jsonify([producto.to_dict() for producto in productos])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/productos/<int:id_producto>', methods=['GET'])
@cross_origin()
def get_producto(id_producto):
    """Obtener un producto específico"""
    try:
        producto = Producto.query.get_or_404(id_producto)
        return jsonify(producto.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/cestas', methods=['GET'])
@cross_origin()
def get_cestas():
    """Obtener todas las cestas"""
    try:
        cestas = Cesta.query.all()
        return jsonify([cesta.to_dict() for cesta in cestas])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/cestas/<int:id_cesta>', methods=['GET'])
@cross_origin()
def get_cesta(id_cesta):
    """Obtener una cesta específica"""
    try:
        cesta = Cesta.query.get_or_404(id_cesta)
        return jsonify(cesta.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/pedidos', methods=['POST'])
@cross_origin()
def crear_pedido():
    """Crear un nuevo pedido"""
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        required_fields = ['items', 'destino_tipo', 'direccion_entrega', 'metodo_pago']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Campo requerido: {field}'}), 400
        
        # Calcular total
        total = 0
        items_validados = []
        
        for item in data['items']:
            if item['tipo'] == 'producto':
                producto = Producto.query.get(item['id'])
                if not producto:
                    return jsonify({'error': f'Producto {item["id"]} no encontrado'}), 404
                precio = float(producto.precio_unitario)
            else:  # cesta
                cesta = Cesta.query.get(item['id'])
                if not cesta:
                    return jsonify({'error': f'Cesta {item["id"]} no encontrada'}), 404
                precio = float(cesta.precio_base)
            
            cantidad = item.get('cantidad', 1)
            subtotal = precio * cantidad
            total += subtotal
            
            items_validados.append({
                'tipo_item': item['tipo'],
                'id_item': item['id'],
                'cantidad': cantidad,
                'precio_unitario': precio
            })
        
        # Crear pedido
        pedido = Pedido(
            total=total,
            destino_tipo=data['destino_tipo'],
            direccion_entrega=data['direccion_entrega'],
            metodo_pago=data['metodo_pago'],
            fecha_entrega=datetime.strptime(data.get('fecha_entrega', str(date.today())), '%Y-%m-%d').date()
        )
        
        db.session.add(pedido)
        db.session.flush()  # Para obtener el ID del pedido
        
        # Crear items del pedido
        for item_data in items_validados:
            item = PedidoItem(
                id_pedido=pedido.id_pedido,
                **item_data
            )
            db.session.add(item)
        
        # Crear registro de pago
        codigo_transaccion = str(uuid.uuid4())
        pago = Pago(
            id_pedido=pedido.id_pedido,
            metodo_pago=data['metodo_pago'],
            estado_pago='completado',  # Simulamos pago exitoso
            monto=total,
            codigo_transaccion=codigo_transaccion
        )
        
        db.session.add(pago)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'pedido_id': pedido.id_pedido,
            'total': float(total),
            'codigo_transaccion': codigo_transaccion,
            'mensaje': 'Pedido creado exitosamente'
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/pedidos/<int:id_pedido>', methods=['GET'])
@cross_origin()
def get_pedido(id_pedido):
    """Obtener un pedido específico"""
    try:
        pedido = Pedido.query.get_or_404(id_pedido)
        pedido_dict = pedido.to_dict()
        
        # Agregar items del pedido
        items = []
        for item in pedido.items:
            item_dict = item.to_dict()
            
            # Agregar información del producto/cesta
            if item.tipo_item == 'producto':
                producto = Producto.query.get(item.id_item)
                if producto:
                    item_dict['nombre'] = producto.nombre
                    item_dict['imagen_url'] = producto.imagen_url
            else:  # cesta
                cesta = Cesta.query.get(item.id_item)
                if cesta:
                    item_dict['nombre'] = cesta.nombre
                    item_dict['imagen_url'] = cesta.imagen_url
            
            items.append(item_dict)
        
        pedido_dict['items'] = items
        
        # Agregar información de pagos
        pagos = [pago.to_dict() for pago in pedido.pagos]
        pedido_dict['pagos'] = pagos
        
        return jsonify(pedido_dict)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/pedidos', methods=['GET'])
@cross_origin()
def get_pedidos():
    """Obtener todos los pedidos"""
    try:
        pedidos = Pedido.query.order_by(Pedido.fecha_pedido.desc()).all()
        return jsonify([pedido.to_dict() for pedido in pedidos])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/procesar-pago', methods=['POST'])
@cross_origin()
def procesar_pago():
    """Procesar pago (simulación)"""
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        required_fields = ['metodo_pago', 'monto']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Campo requerido: {field}'}), 400
        
        # Simular procesamiento según el método de pago
        metodo = data['metodo_pago']
        monto = float(data['monto'])
        
        # Validaciones específicas por método
        if metodo == 'tarjeta':
            if not all(k in data for k in ['numero_tarjeta', 'fecha_expiracion', 'cvv']):
                return jsonify({'error': 'Datos de tarjeta incompletos'}), 400
        elif metodo == 'paypal':
            if 'email_paypal' not in data:
                return jsonify({'error': 'Email de PayPal requerido'}), 400
        elif metodo == 'bizum':
            if 'telefono_bizum' not in data:
                return jsonify({'error': 'Teléfono de Bizum requerido'}), 400
        
        # Simular respuesta exitosa
        codigo_transaccion = str(uuid.uuid4())
        
        return jsonify({
            'success': True,
            'codigo_transaccion': codigo_transaccion,
            'estado': 'completado',
            'monto': monto,
            'metodo_pago': metodo,
            'fecha_procesamiento': datetime.now().isoformat(),
            'mensaje': f'Pago de €{monto:.2f} procesado exitosamente via {metodo}'
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/contacto', methods=['POST'])
@cross_origin()
def enviar_contacto():
    """Procesar formulario de contacto"""
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        required_fields = ['nombre', 'email', 'asunto', 'mensaje']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Campo requerido: {field}'}), 400
        
        # En un entorno real, aquí se enviaría el email
        # Por ahora solo simulamos la respuesta
        
        return jsonify({
            'success': True,
            'mensaje': 'Mensaje enviado exitosamente. Te contactaremos pronto.'
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@supicnic_bp.route('/init-data', methods=['POST'])
@cross_origin()
def init_data():
    """Inicializar datos de prueba"""
    try:
        # Verificar si ya hay datos
        if Producto.query.first():
            return jsonify({'mensaje': 'Los datos ya están inicializados'})
        
        # Crear productos de prueba
        productos = [
            Producto(
                nombre="Vino Tinto de Jerez",
                descripcion="Exquisito vino tinto de la región de Jerez, con notas frutales y cuerpo medio.",
                tipo="vino",
                precio_unitario=15.99,
                stock=25,
                imagen_url="images/ti4zful36VGN.jpg"
            ),
            Producto(
                nombre="Queso de Cabra Gaditano",
                descripcion="Queso artesanal de cabra con denominación de origen de Cádiz.",
                tipo="queso",
                precio_unitario=12.50,
                stock=15,
                imagen_url="images/OOPP2Zcv3lPs.jpg"
            ),
            Producto(
                nombre="Chorizo Ibérico",
                descripcion="Chorizo ibérico curado tradicionalmente en la sierra gaditana.",
                tipo="chorizo",
                precio_unitario=18.75,
                stock=20,
                imagen_url="images/hS9hwj6MKPep.jpg"
            ),
            Producto(
                nombre="Aceitunas Manzanilla",
                descripcion="Aceitunas manzanilla de Sanlúcar de Barrameda, aliñadas tradicionalmente.",
                tipo="otros",
                precio_unitario=8.99,
                stock=30,
                imagen_url="images/T7RxJRYpoE8N.png"
            ),
            Producto(
                nombre="Vino Blanco Fino",
                descripcion="Vino blanco fino de Jerez, perfecto para acompañar mariscos.",
                tipo="vino",
                precio_unitario=14.50,
                stock=18,
                imagen_url="images/OtKRbcFVFcxD.jpg"
            ),
            Producto(
                nombre="Queso Manchego Curado",
                descripcion="Queso manchego curado con sabor intenso y textura firme.",
                tipo="queso",
                precio_unitario=16.99,
                stock=12,
                imagen_url="images/MEjNGmhr1GTc.jpg"
            )
        ]
        
        for producto in productos:
            db.session.add(producto)
        
        # Crear cestas de prueba
        cestas = [
            Cesta(
                nombre="Cesta Romántica",
                descripcion="Perfecta para una cita romántica en la playa al atardecer.",
                precio_base=45.99,
                imagen_url="images/mtHLEHbNjgxg.jpg"
            ),
            Cesta(
                nombre="Cesta Familiar",
                descripcion="Ideal para disfrutar en familia en el parque o la playa.",
                precio_base=65.99,
                imagen_url="images/MFD4MZYrVOA2.jpg"
            ),
            Cesta(
                nombre="Cesta Gourmet",
                descripcion="Selección premium de productos gaditanos para los paladares más exigentes.",
                precio_base=89.99,
                imagen_url="images/OOPP2Zcv3lPs.jpg"
            )
        ]
        
        for cesta in cestas:
            db.session.add(cesta)
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'mensaje': 'Datos inicializados correctamente'
        })
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

