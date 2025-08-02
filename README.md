# Su Picnic - Sitio Web Completo

## 🌐 URLs de Despliegue

**Sitio Web Principal:** https://vmchffdr.manus.space
**API Backend:** https://qjh9iecej3pj.manus.space

## 📋 Descripción del Proyecto

Su Picnic es un sitio web responsive y profesional para la venta y alquiler de cestas de picnic con productos exclusivos de la región de Cádiz. El sitio incluye un sistema completo de comercio electrónico con carrito de compras, procesamiento de pedidos y métodos de pago.

## ✨ Características Principales

### Frontend
- **Diseño Responsive:** Compatible con dispositivos móviles, tablets y desktop
- **Bootstrap 5:** Framework CSS moderno para un diseño profesional
- **Carrusel de Imágenes:** Muestra imágenes de Cádiz y productos de picnic
- **Sistema de Filtros:** Filtrado de productos por categoría (vinos, quesos, embutidos, otros)
- **Carrito de Compras:** Funcionalidad completa con agregar, quitar y modificar cantidades
- **Animaciones:** Efectos suaves y transiciones elegantes

### Backend
- **API REST:** Desarrollada en Flask con endpoints completos
- **Base de Datos:** SQLite con modelos relacionales
- **CORS:** Configurado para permitir peticiones desde el frontend
- **Gestión de Pedidos:** Sistema completo de procesamiento de pedidos
- **Métodos de Pago:** Integración simulada con tarjeta, PayPal y Bizum

### Funcionalidades del Sistema
- **Catálogo de Productos:** Gestión de productos locales de Cádiz
- **Cestas Prediseñadas:** Cestas temáticas (Romántica, Familiar, Gourmet)
- **Sistema de Pedidos:** Proceso completo desde carrito hasta confirmación
- **Múltiples Destinos:** Entrega a domicilio, playa o parque
- **Formulario de Contacto:** Sistema de comunicación con clientes

## 🗂️ Estructura del Proyecto

### Frontend (/supicnic-website/)
```
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidad JavaScript
└── images/             # Imágenes de productos y Cádiz
```

### Backend (/supicnic_backend/)
```
├── src/
│   ├── main.py                    # Punto de entrada de la aplicación
│   ├── models/
│   │   ├── user.py               # Modelo de usuario base
│   │   └── supicnic.py           # Modelos de Su Picnic
│   └── routes/
│       ├── user.py               # Rutas de usuario base
│       └── supicnic.py           # Rutas de la API de Su Picnic
├── requirements.txt              # Dependencias de Python
└── venv/                        # Entorno virtual
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5 semántico
- CSS3 con variables personalizadas
- Bootstrap 5.3.0
- JavaScript ES6+
- Font Awesome 6.0.0

### Backend
- Python 3.11
- Flask 3.1.1
- SQLAlchemy (ORM)
- Flask-CORS
- SQLite

## 📊 Modelos de Base de Datos

- **Usuarios:** Gestión de clientes y administradores
- **Productos:** Catálogo de productos locales
- **Cestas:** Cestas prediseñadas
- **Pedidos:** Gestión de pedidos y estados
- **Pagos:** Procesamiento de transacciones
- **Valoraciones:** Sistema de reseñas

## 🎨 Diseño y UX

- **Paleta de Colores:** Verde natural (#2c5530), dorado (#ffd700), marrón (#8b4513)
- **Tipografía:** Segoe UI para legibilidad óptima
- **Imágenes:** Alta calidad de Cádiz y productos gastronómicos
- **Responsive:** Breakpoints optimizados para todos los dispositivos

## 🔧 Instalación Local

### Frontend
```bash
cd supicnic-website
python -m http.server 8080
```

### Backend
```bash
cd supicnic_backend
source venv/bin/activate
pip install -r requirements.txt
python src/main.py
```

## 📱 Funcionalidades Móviles

- Navegación táctil optimizada
- Carrusel responsive
- Formularios adaptados para móviles
- Botones de tamaño adecuado para touch
- Imágenes optimizadas para diferentes resoluciones

## 🔒 Seguridad

- Validación de datos en frontend y backend
- Sanitización de inputs
- Manejo seguro de transacciones (simuladas)
- CORS configurado correctamente

## 📈 Rendimiento

- Imágenes optimizadas
- CSS y JS minificados en producción
- Carga asíncrona de datos
- Fallback para conectividad limitada

## 🎯 Casos de Uso

1. **Cliente Navegando:** Explora productos y cestas
2. **Compra Online:** Añade productos al carrito y realiza pedido
3. **Pedido Personalizado:** Contacta para cestas especiales
4. **Entrega Flexible:** Elige entre domicilio, playa o parque

## 📞 Soporte

Para soporte técnico o consultas sobre el sitio web, contactar a través del formulario integrado en el sitio.

---

**Desarrollado con ❤️ para Su Picnic - Cestas Artesanales de Cádiz**

