from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'usuarios'
    
    id_usuario = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(255), nullable=False)
    rol = db.Column(db.String(10), default='cliente')
    direccion = db.Column(db.Text)
    telefono = db.Column(db.String(20))
    fecha_registro = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    def to_dict(self):
        return {
            'id_usuario': self.id_usuario,
            'nombre': self.nombre,
            'email': self.email,
            'rol': self.rol,
            'direccion': self.direccion,
            'telefono': self.telefono,
            'fecha_registro': self.fecha_registro.isoformat() if self.fecha_registro else None
        }

class Producto(db.Model):
    __tablename__ = 'productos'
    
    id_producto = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    tipo = db.Column(db.String(20))
    precio_unitario = db.Column(db.Numeric(6, 2), nullable=False)
    stock = db.Column(db.Integer, default=0)
    origen_localidad = db.Column(db.String(50), default='Cádiz')
    imagen_url = db.Column(db.Text)
    
    def to_dict(self):
        return {
            'id_producto': self.id_producto,
            'nombre': self.nombre,
            'descripcion': self.descripcion,
            'tipo': self.tipo,
            'precio_unitario': float(self.precio_unitario),
            'stock': self.stock,
            'origen_localidad': self.origen_localidad,
            'imagen_url': self.imagen_url
        }

class Cesta(db.Model):
    __tablename__ = 'cestas'
    
    id_cesta = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    precio_base = db.Column(db.Numeric(6, 2), nullable=False)
    imagen_url = db.Column(db.Text)
    
    def to_dict(self):
        return {
            'id_cesta': self.id_cesta,
            'nombre': self.nombre,
            'descripcion': self.descripcion,
            'precio_base': float(self.precio_base),
            'imagen_url': self.imagen_url
        }

class Pedido(db.Model):
    __tablename__ = 'pedidos'
    
    id_pedido = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id_usuario'))
    fecha_pedido = db.Column(db.DateTime, default=db.func.current_timestamp())
    estado = db.Column(db.String(20), default='pendiente')
    total = db.Column(db.Numeric(8, 2))
    destino_tipo = db.Column(db.String(20))
    direccion_entrega = db.Column(db.Text)
    fecha_entrega = db.Column(db.Date)
    metodo_pago = db.Column(db.String(50))
    
    usuario = db.relationship('Usuario', backref='pedidos')
    
    def to_dict(self):
        return {
            'id_pedido': self.id_pedido,
            'id_usuario': self.id_usuario,
            'fecha_pedido': self.fecha_pedido.isoformat() if self.fecha_pedido else None,
            'estado': self.estado,
            'total': float(self.total) if self.total else 0,
            'destino_tipo': self.destino_tipo,
            'direccion_entrega': self.direccion_entrega,
            'fecha_entrega': self.fecha_entrega.isoformat() if self.fecha_entrega else None,
            'metodo_pago': self.metodo_pago
        }

class PedidoItem(db.Model):
    __tablename__ = 'pedido_items'
    
    id = db.Column(db.Integer, primary_key=True)
    id_pedido = db.Column(db.Integer, db.ForeignKey('pedidos.id_pedido'))
    tipo_item = db.Column(db.String(20))  # 'producto' o 'cesta'
    id_item = db.Column(db.Integer)  # id del producto o cesta
    cantidad = db.Column(db.Integer, default=1)
    precio_unitario = db.Column(db.Numeric(8, 2))
    
    pedido = db.relationship('Pedido', backref='items')
    
    def to_dict(self):
        return {
            'id': self.id,
            'id_pedido': self.id_pedido,
            'tipo_item': self.tipo_item,
            'id_item': self.id_item,
            'cantidad': self.cantidad,
            'precio_unitario': float(self.precio_unitario) if self.precio_unitario else 0
        }

class Pago(db.Model):
    __tablename__ = 'pagos'
    
    id_pago = db.Column(db.Integer, primary_key=True)
    id_pedido = db.Column(db.Integer, db.ForeignKey('pedidos.id_pedido'))
    metodo_pago = db.Column(db.String(50), nullable=False)
    estado_pago = db.Column(db.String(20), default='pendiente')
    fecha_pago = db.Column(db.DateTime, default=db.func.current_timestamp())
    monto = db.Column(db.Numeric(8, 2), nullable=False)
    codigo_transaccion = db.Column(db.String(100), unique=True)
    
    pedido = db.relationship('Pedido', backref='pagos')
    
    def to_dict(self):
        return {
            'id_pago': self.id_pago,
            'id_pedido': self.id_pedido,
            'metodo_pago': self.metodo_pago,
            'estado_pago': self.estado_pago,
            'fecha_pago': self.fecha_pago.isoformat() if self.fecha_pago else None,
            'monto': float(self.monto),
            'codigo_transaccion': self.codigo_transaccion
        }

