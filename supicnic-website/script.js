// Configuración de la API
const API_BASE_URL = 'https://qjh9iecej3pj.manus.space/api';

// Datos de productos y cestas (ahora se cargarán desde la API)
let productos = [];
let cestas = [];

// Carrito de compras
let carrito = [];

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Determinar en qué página estamos
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    inicializarDatos();
    configurarEventos();
    actualizarContadorCarrito();
    
    // Cargar contenido específico según la página
    if (currentPage === 'productos.html') {
        cargarProductosDesdeAPI().then(() => {
            cargarProductos();
        }).catch(() => {
            cargarProductosLocales();
            cargarProductos();
        });
    } else if (currentPage === 'cestas.html') {
        // En la página de cestas, las cestas ya están en el HTML
        // Solo inicializar los filtros
        inicializarFiltrosCestas();
    }
});

// Inicializar datos desde la API
async function inicializarDatos() {
    try {
        // Inicializar datos de prueba en el backend
        await fetch(`${API_BASE_URL}/init-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        // Cargar productos y cestas
        await cargarProductosDesdeAPI();
        await cargarCestasDesdeAPI();
        
    } catch (error) {
        console.error('Error inicializando datos:', error);
        // Fallback a datos locales si la API no está disponible
        cargarProductosLocales();
        cargarCestasLocales();
    }
}

// Cargar productos desde la API
async function cargarProductosDesdeAPI() {
    try {
        const response = await fetch(`${API_BASE_URL}/productos`);
        if (response.ok) {
            productos = await response.json();
            cargarProductos();
        } else {
            throw new Error('Error cargando productos');
        }
    } catch (error) {
        console.error('Error cargando productos desde API:', error);
        cargarProductosLocales();
    }
}

// Cargar cestas desde la API
async function cargarCestasDesdeAPI() {
    try {
        const response = await fetch(`${API_BASE_URL}/cestas`);
        if (response.ok) {
            cestas = await response.json();
            cargarCestas();
        } else {
            throw new Error('Error cargando cestas');
        }
    } catch (error) {
        console.error('Error cargando cestas desde API:', error);
        cargarCestasLocales();
    }
}

// Datos locales de fallback
function cargarProductosLocales() {
    productos = [
        {
            id_producto: 1,
            nombre: "Vino Tinto de Jerez",
            descripcion: "Exquisito vino tinto de la región de Jerez, con notas frutales y cuerpo medio.",
            tipo: "vino",
            precio_unitario: 15.99,
            imagen_url: "images/ti4zful36VGN.jpg",
            stock: 25
        },
        {
            id_producto: 2,
            nombre: "Queso de Cabra Gaditano",
            descripcion: "Queso artesanal de cabra con denominación de origen de Cádiz.",
            tipo: "queso",
            precio_unitario: 12.50,
            imagen_url: "images/OOPP2Zcv3lPs.jpg",
            stock: 15
        },
        {
            id_producto: 3,
            nombre: "Chorizo Ibérico",
            descripcion: "Chorizo ibérico curado tradicionalmente en la sierra gaditana.",
            tipo: "chorizo",
            precio_unitario: 18.75,
            imagen_url: "images/hS9hwj6MKPep.jpg",
            stock: 20
        },
        {
            id_producto: 4,
            nombre: "Aceitunas Manzanilla",
            descripcion: "Aceitunas manzanilla de Sanlúcar de Barrameda, aliñadas tradicionalmente.",
            tipo: "otros",
            precio_unitario: 8.99,
            imagen_url: "images/T7RxJRYpoE8N.png",
            stock: 30
        },
        {
            id_producto: 5,
            nombre: "Vino Blanco Fino",
            descripcion: "Vino blanco fino de Jerez, perfecto para acompañar mariscos.",
            tipo: "vino",
            precio_unitario: 14.50,
            imagen_url: "images/OtKRbcFVFcxD.jpg",
            stock: 18
        },
        {
            id_producto: 6,
            nombre: "Queso Manchego Curado",
            descripcion: "Queso manchego curado con sabor intenso y textura firme.",
            tipo: "queso",
            precio_unitario: 16.99,
            imagen_url: "images/MEjNGmhr1GTc.jpg",
            stock: 12
        }
    ];
    cargarProductos();
}

function cargarCestasLocales() {
    cestas = [
        {
            id_cesta: 1,
            nombre: "Cesta Romántica",
            descripcion: "Perfecta para una cita romántica en la playa al atardecer.",
            precio_base: 45.99,
            imagen_url: "images/mtHLEHbNjgxg.jpg"
        },
        {
            id_cesta: 2,
            nombre: "Cesta Familiar",
            descripcion: "Ideal para disfrutar en familia en el parque o la playa.",
            precio_base: 65.99,
            imagen_url: "images/MFD4MZYrVOA2.jpg"
        },
        {
            id_cesta: 3,
            nombre: "Cesta Gourmet",
            descripcion: "Selección premium de productos gaditanos para los paladares más exigentes.",
            precio_base: 89.99,
            imagen_url: "images/OOPP2Zcv3lPs.jpg"
        }
    ];
    cargarCestas();
}

// Cargar productos dinámicamente
function cargarProductos() {
    const container = document.getElementById('productos-container');
    container.innerHTML = '';
    
    productos.forEach(producto => {
        const productCard = crearTarjetaProducto(producto);
        container.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4 product-item';
    col.setAttribute('data-tipo', producto.tipo);
    
    const id = producto.id_producto || producto.id;
    const precio = producto.precio_unitario || producto.precio;
    
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text text-muted flex-grow-1">${producto.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <span class="price">€${precio}</span>
                    <button class="btn btn-add-cart" onclick="agregarAlCarrito(${id}, 'producto')">
                        <i class="fas fa-cart-plus me-1"></i>Agregar
                    </button>
                </div>
                <small class="text-muted mt-2">Stock: ${producto.stock} unidades</small>
            </div>
        </div>
    `;
    
    return col;
}

// Cargar cestas
function cargarCestas() {
    const container = document.getElementById('cestas-container');
    
    // Solo cargar cestas dinámicas si el contenedor está vacío y estamos en una página que necesita cestas dinámicas
    if (container && container.children.length === 0 && cestas.length > 0) {
        cestas.forEach(cesta => {
            const cestaCard = crearTarjetaCesta(cesta);
            container.appendChild(cestaCard);
        });
    }
}

// Crear tarjeta de cesta
function crearTarjetaCesta(cesta) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    const id = cesta.id_cesta || cesta.id;
    const precio = cesta.precio_base || cesta.precio;
    
    const incluyeItems = [
        "Productos locales seleccionados",
        "Cubiertos y utensilios",
        "Manta para picnic",
        "Servilletas y vasos",
        "Guía de productos incluidos"
    ];
    
    const incluyeList = incluyeItems.map(item => `<li>${item}</li>`).join('');
    
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${cesta.imagen_url}" class="card-img-top" alt="${cesta.nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${cesta.nombre}</h5>
                <p class="card-text text-muted">${cesta.descripcion}</p>
                <div class="mb-3">
                    <h6>Incluye:</h6>
                    <ul class="list-unstyled">
                        ${incluyeList}
                    </ul>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <span class="price">€${precio}</span>
                    <button class="btn btn-add-cart" onclick="agregarAlCarrito(${id}, 'cesta')">
                        <i class="fas fa-cart-plus me-1"></i>Agregar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Configurar eventos
function configurarEventos() {
    // Filtros de productos
    const filtros = document.querySelectorAll('[data-filter]');
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Remover clase active de todos los filtros
            filtros.forEach(f => f.classList.remove('active'));
            // Agregar clase active al filtro clickeado
            this.classList.add('active');
            
            const tipoFiltro = this.getAttribute('data-filter');
            filtrarProductos(tipoFiltro);
        });
    });
    
    // Filtros de cestas
    const filtrosCestas = document.querySelectorAll('.filter-btn');
    filtrosCestas.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Solo manejar filtros de cestas (no de productos)
            if (this.hasAttribute('data-categoria')) {
                const categoria = this.getAttribute('data-categoria');
                
                // Filtrar las cestas
                filtrarCestas(categoria);
                
                // Sincronizar filtros
                sincronizarFiltros(categoria);
                
                // Hacer scroll a la sección de cestas
                const seccionCestas = document.getElementById('cestas');
                if (seccionCestas) {
                    seccionCestas.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Carrito
    document.getElementById('carrito-btn').addEventListener('click', function(e) {
        e.preventDefault();
        mostrarCarrito();
    });
    
    // Proceder al pago
    document.getElementById('proceder-pago').addEventListener('click', function() {
        if (carrito.length === 0) {
            alert('El carrito está vacío');
            return;
        }
        
        const carritoModal = bootstrap.Modal.getInstance(document.getElementById('carritoModal'));
        carritoModal.hide();
        
        const pagoModal = new bootstrap.Modal(document.getElementById('pagoModal'));
        pagoModal.show();
    });
    
    // Método de pago
    document.getElementById('metodoPago').addEventListener('change', function() {
        const tarjetaFields = document.getElementById('tarjeta-fields');
        if (this.value === 'tarjeta') {
            tarjetaFields.style.display = 'block';
        } else {
            tarjetaFields.style.display = 'none';
        }
    });
    
    // Confirmar pago
    document.getElementById('confirmar-pago').addEventListener('click', procesarPago);
    
    // Formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        enviarFormularioContacto(this);
    });
    
    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Botones de categorías en la sección de categorías
    const botonesCategorias = document.querySelectorAll('.category-card .filter-btn');
    console.log('Botones de categorías encontrados:', botonesCategorias.length); // Debug
    
    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            console.log('Clic en categoría:', categoria); // Debug
            
            // Filtrar las cestas
            filtrarCestas(categoria);
            
            // Sincronizar filtros
            sincronizarFiltros(categoria);
            
            // Hacer scroll a la sección de cestas
            const seccionCestas = document.getElementById('cestas');
            if (seccionCestas) {
                seccionCestas.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Filtrar productos
function filtrarProductos(tipo) {
    const productos = document.querySelectorAll('.product-item');
    
    productos.forEach(producto => {
        if (tipo === 'todos' || producto.getAttribute('data-tipo') === tipo) {
            producto.style.display = 'block';
            producto.classList.add('fade-in-up');
        } else {
            producto.style.display = 'none';
        }
    });
}

// Filtrar cestas
function filtrarCestas(categoria) {
    // Solo filtrar cestas (no otros elementos con data-categoria)
    const cestas = document.querySelectorAll('#cestas-container [data-categoria]');
    let cestasVisibles = 0;
    
    cestas.forEach(cesta => {
        const cestaCategoria = cesta.getAttribute('data-categoria');
        
        if (categoria === 'todas' || cestaCategoria === categoria) {
            cesta.style.display = 'block';
            cesta.classList.add('fade-in-up');
            cestasVisibles++;
        } else {
            cesta.style.display = 'none';
        }
    });
    
    // Mostrar mensaje si no hay cestas en la categoría seleccionada
    const container = document.getElementById('cestas-container');
    
    if (cestasVisibles === 0 && categoria !== 'todas') {
        // Crear mensaje de "no hay cestas"
        const mensajeDiv = document.createElement('div');
        mensajeDiv.className = 'col-12 text-center py-5';
        mensajeDiv.innerHTML = `
            <div class="alert alert-info">
                <i class="fas fa-info-circle me-2"></i>
                No hay cestas disponibles en la categoría "${categoria}". 
                <button class="btn btn-outline-primary ms-2 filter-btn" data-categoria="todas">
                    Ver todas las cestas
                </button>
            </div>
        `;
        
        // Limpiar contenedor y agregar mensaje
        container.innerHTML = '';
        container.appendChild(mensajeDiv);
        
        // Agregar evento al botón "Ver todas"
        const verTodasBtn = mensajeDiv.querySelector('.filter-btn');
        verTodasBtn.addEventListener('click', function() {
            filtrarCestas('todas');
            // Restaurar todas las cestas
            cargarCestasDesdeHTML();
        });
    }
}

// Inicializar filtros de cestas
function inicializarFiltrosCestas() {
    console.log('Inicializando filtros de cestas...'); // Debug
    
    // Asegurar que el botón "Todas" esté activo por defecto
    const botonTodas = document.querySelector('.filter-btn[data-categoria="todas"]');
    if (botonTodas) {
        // Remover active de todos los filtros
        document.querySelectorAll('.filter-btn[data-categoria]').forEach(f => f.classList.remove('active'));
        // Activar el botón "Todas"
        botonTodas.classList.add('active');
        console.log('Botón "Todas" activado'); // Debug
    }
    
    // Verificar que las cestas estén presentes
    const cestas = document.querySelectorAll('#cestas-container [data-categoria]');
    console.log('Cestas encontradas:', cestas.length); // Debug
    
    // Mostrar todas las cestas por defecto
    filtrarCestas('todas');
    
    // Configurar animaciones de las cestas
    setTimeout(() => {
        const cestasCards = document.querySelectorAll('.cesta-card');
        console.log('Cestas cards encontradas:', cestasCards.length); // Debug
        cestasCards.forEach((cesta, index) => {
            // Asegurar que las cestas sean visibles
            cesta.style.display = 'block';
            setTimeout(() => {
                cesta.classList.add('fade-in-up');
            }, index * 100); // Animación escalonada
        });
    }, 100);
}

// Función para sincronizar filtros
function sincronizarFiltros(categoria) {
    console.log('Sincronizando filtros para categoría:', categoria); // Debug
    
    // Remover active de todos los filtros
    const todosLosFiltros = document.querySelectorAll('.filter-btn[data-categoria]');
    todosLosFiltros.forEach(f => f.classList.remove('active'));
    
    // Activar el filtro correspondiente
    const filtroCorrespondiente = document.querySelector(`.filter-btn[data-categoria="${categoria}"]`);
    if (filtroCorrespondiente) {
        filtroCorrespondiente.classList.add('active');
        console.log('Filtro sincronizado:', categoria); // Debug
        return true;
    } else {
        console.log('No se encontró filtro para:', categoria); // Debug
        return false;
    }
}

// Función para restaurar las cestas desde el HTML
function cargarCestasDesdeHTML() {
    const cestasHTML = `
        <!-- Cestas Románticas -->
        <div class="col-lg-4 col-md-6 mb-4" data-categoria="romantica">
            <div class="card h-100 border-0 shadow-sm cesta-card">
                <img src="images/mtHLEHbNjgxg.jpg" class="card-img-top" alt="Cesta Romántica Cádiz">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge" style="background-color: var(--andalucia-green); color: white;">Romántica</span>
                        <span class="text-muted">€89.99</span>
                    </div>
                    <h5 class="card-title fw-bold">Cesta Romántica Cádiz</h5>
                    <p class="card-text text-muted">Vino tinto de Jerez, queso payoyo, jamón ibérico, aceitunas aloreñas, pan artesanal y chocolate de Ronda.</p>
                    <div class="productos-incluidos mb-3">
                        <small class="text-muted">
                            <i class="fas fa-wine-bottle me-1"></i>Vino Jerez
                            <i class="fas fa-cheese me-2 ms-2"></i>Queso Payoyo
                            <i class="fas fa-drumstick-bite me-2"></i>Jamón Ibérico
                        </small>
                    </div>
                    <button class="btn btn-primary w-100" onclick="agregarAlCarrito('Cesta Romántica Cádiz', 89.99)">
                        <i class="fas fa-shopping-cart me-2"></i>Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>

        <!-- Cestas Familiares -->
        <div class="col-lg-4 col-md-6 mb-4" data-categoria="familiar">
            <div class="card h-100 border-0 shadow-sm cesta-card">
                <img src="images/GIlHXzpxLG9m.jpg" class="card-img-top" alt="Cesta Familiar Cádiz">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge" style="background-color: var(--cadiz-blue); color: white;">Familiar</span>
                        <span class="text-muted">€129.99</span>
                    </div>
                    <h5 class="card-title fw-bold">Cesta Familiar Cádiz</h5>
                    <p class="card-text text-muted">Vinos de la región, quesos variados, embutidos locales, frutas frescas, pan artesanal y dulces típicos.</p>
                    <div class="productos-incluidos mb-3">
                        <small class="text-muted">
                            <i class="fas fa-wine-bottle me-1"></i>Vinos Variados
                            <i class="fas fa-cheese me-2 ms-2"></i>Quesos Locales
                            <i class="fas fa-apple-alt me-2"></i>Frutas Frescas
                        </small>
                    </div>
                    <button class="btn btn-primary w-100" onclick="agregarAlCarrito('Cesta Familiar Cádiz', 129.99)">
                        <i class="fas fa-shopping-cart me-2"></i>Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>

        <!-- Cestas de Celebraciones -->
        <div class="col-lg-4 col-md-6 mb-4" data-categoria="celebracion">
            <div class="card h-100 border-0 shadow-sm cesta-card">
                <img src="images/OOPP2Zcv3lPs.jpg" class="card-img-top" alt="Cesta Celebración Cádiz">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge" style="background-color: var(--andalucia-green); color: white;">Celebración</span>
                        <span class="text-muted">€159.99</span>
                    </div>
                    <h5 class="card-title fw-bold">Cesta Celebración Cádiz</h5>
                    <p class="card-text text-muted">Vino fino de Jerez, jamón de bellota, queso payoyo, aceitunas, pan artesanal, dulces típicos y cava.</p>
                    <div class="productos-incluidos mb-3">
                        <small class="text-muted">
                            <i class="fas fa-wine-bottle me-1"></i>Vino Fino
                            <i class="fas fa-drumstick-bite me-2 ms-2"></i>Jamón Bellota
                            <i class="fas fa-birthday-cake me-2"></i>Dulces Típicos
                        </small>
                    </div>
                    <button class="btn btn-primary w-100" onclick="agregarAlCarrito('Cesta Celebración Cádiz', 159.99)">
                        <i class="fas fa-shopping-cart me-2"></i>Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>

        <!-- Cesta Romántica Premium -->
        <div class="col-lg-4 col-md-6 mb-4" data-categoria="romantica">
            <div class="card h-100 border-0 shadow-sm cesta-card">
                <img src="images/WOuWNun9bBl1.jpg" class="card-img-top" alt="Cesta Romántica Premium">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge" style="background-color: var(--andalucia-green); color: white;">Romántica Premium</span>
                        <span class="text-muted">€119.99</span>
                    </div>
                    <h5 class="card-title fw-bold">Cesta Romántica Premium</h5>
                    <p class="card-text text-muted">Vino tinto reserva, jamón ibérico de bellota, queso payoyo curado, aceitunas aloreñas y chocolate artesanal.</p>
                    <div class="productos-incluidos mb-3">
                        <small class="text-muted">
                            <i class="fas fa-wine-bottle me-1"></i>Vino Reserva
                            <i class="fas fa-drumstick-bite me-2 ms-2"></i>Jamón Bellota
                            <i class="fas fa-cheese me-2"></i>Queso Curado
                        </small>
                    </div>
                    <button class="btn btn-primary w-100" onclick="agregarAlCarrito('Cesta Romántica Premium', 119.99)">
                        <i class="fas fa-shopping-cart me-2"></i>Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>

        <!-- Cesta Familiar Grande -->
        <div class="col-lg-4 col-md-6 mb-4" data-categoria="familiar">
            <div class="card h-100 border-0 shadow-sm cesta-card">
                <img src="images/rvZb857Mt6VR.jpg" class="card-img-top" alt="Cesta Familiar Grande">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge" style="background-color: var(--cadiz-blue); color: white;">Familiar Grande</span>
                        <span class="text-muted">€179.99</span>
                    </div>
                    <h5 class="card-title fw-bold">Cesta Familiar Grande</h5>
                    <p class="card-text text-muted">Vinos variados, quesos artesanales, embutidos locales, frutas frescas, pan artesanal, dulces y bebidas.</p>
                    <div class="productos-incluidos mb-3">
                        <small class="text-muted">
                            <i class="fas fa-wine-bottle me-1"></i>Vinos Variados
                            <i class="fas fa-cheese me-2 ms-2"></i>Quesos Artesanales
                            <i class="fas fa-apple-alt me-2"></i>Frutas Frescas
                        </small>
                    </div>
                    <button class="btn btn-primary w-100" onclick="agregarAlCarrito('Cesta Familiar Grande', 179.99)">
                        <i class="fas fa-shopping-cart me-2"></i>Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>

        <!-- Cesta Celebración Premium -->
        <div class="col-lg-4 col-md-6 mb-4" data-categoria="celebracion">
            <div class="card h-100 border-0 shadow-sm cesta-card">
                <img src="images/mtHLEHbNjgxg.jpg" class="card-img-top" alt="Cesta Celebración Premium">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge" style="background-color: var(--andalucia-green); color: white;">Celebración Premium</span>
                        <span class="text-muted">€199.99</span>
                    </div>
                    <h5 class="card-title fw-bold">Cesta Celebración Premium</h5>
                    <p class="card-text text-muted">Vino fino de Jerez, jamón de bellota, quesos premium, aceitunas, pan artesanal, dulces típicos y cava.</p>
                    <div class="productos-incluidos mb-3">
                        <small class="text-muted">
                            <i class="fas fa-wine-bottle me-1"></i>Vino Fino Premium
                            <i class="fas fa-drumstick-bite me-2 ms-2"></i>Jamón Bellota
                            <i class="fas fa-birthday-cake me-2"></i>Dulces Premium
                        </small>
                    </div>
                    <button class="btn btn-primary w-100" onclick="agregarAlCarrito('Cesta Celebración Premium', 199.99)">
                        <i class="fas fa-shopping-cart me-2"></i>Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const container = document.getElementById('cestas-container');
    container.innerHTML = cestasHTML;
}

// Agregar al carrito
function agregarAlCarrito(id, tipo) {
    let item;
    
    if (tipo === 'producto') {
        item = productos.find(p => (p.id_producto || p.id) === id);
    } else {
        item = cestas.find(c => (c.id_cesta || c.id) === id);
    }
    
    if (!item) return;
    
    // Verificar si el item ya está en el carrito
    const itemExistente = carrito.find(c => c.id === id && c.tipo === tipo);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: id,
            nombre: item.nombre,
            precio: item.precio_unitario || item.precio_base || item.precio,
            imagen_url: item.imagen_url,
            tipo: tipo,
            cantidad: 1
        });
    }
    
    actualizarContadorCarrito();
    mostrarNotificacion(`${item.nombre} agregado al carrito`);
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById('carrito-count');
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    contador.textContent = totalItems;
}

// Mostrar carrito
function mostrarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
    
    carritoItems.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<p class="text-center text-muted">El carrito está vacío</p>';
        carritoTotal.textContent = '€0.00';
    } else {
        let total = 0;
        
        carrito.forEach((item, index) => {
            const itemTotal = item.precio * item.cantidad;
            total += itemTotal;
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item d-flex justify-content-between align-items-center';
            itemDiv.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${item.imagen_url}" alt="${item.nombre}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;" class="me-3">
                    <div>
                        <h6 class="mb-0">${item.nombre}</h6>
                        <small class="text-muted">${item.tipo === 'producto' ? 'Producto' : 'Cesta'}</small>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary me-2" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span class="mx-2">${item.cantidad}</span>
                    <button class="btn btn-sm btn-outline-secondary me-3" onclick="cambiarCantidad(${index}, 1)">+</button>
                    <span class="fw-bold">€${itemTotal.toFixed(2)}</span>
                    <button class="btn btn-sm btn-outline-danger ms-2" onclick="eliminarDelCarrito(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            carritoItems.appendChild(itemDiv);
        });
        
        carritoTotal.textContent = `€${total.toFixed(2)}`;
    }
    
    const carritoModal = new bootstrap.Modal(document.getElementById('carritoModal'));
    carritoModal.show();
}

// Cambiar cantidad en el carrito
function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;
    
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Eliminar del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Procesar pago
async function procesarPago() {
    const metodoPago = document.getElementById('metodoPago').value;
    const tipoEntrega = document.getElementById('tipoEntrega').value;
    const direccionEntrega = document.getElementById('direccionEntrega').value;
    
    if (!metodoPago || !tipoEntrega || !direccionEntrega) {
        alert('Por favor, completa todos los campos requeridos');
        return;
    }
    
    if (metodoPago === 'tarjeta') {
        const numeroTarjeta = document.getElementById('numeroTarjeta').value;
        const fechaExpiracion = document.getElementById('fechaExpiracion').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!numeroTarjeta || !fechaExpiracion || !cvv) {
            alert('Por favor, completa todos los datos de la tarjeta');
            return;
        }
    }
    
    // Preparar datos del pedido
    const items = carrito.map(item => ({
        id: item.id,
        tipo: item.tipo,
        cantidad: item.cantidad
    }));
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    
    const pedidoData = {
        items: items,
        destino_tipo: tipoEntrega,
        direccion_entrega: direccionEntrega,
        metodo_pago: metodoPago,
        fecha_entrega: new Date().toISOString().split('T')[0]
    };
    
    // Mostrar estado de procesamiento
    const confirmarBtn = document.getElementById('confirmar-pago');
    confirmarBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Procesando...';
    confirmarBtn.disabled = true;
    
    try {
        const response = await fetch(`${API_BASE_URL}/pedidos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedidoData)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            // Cerrar modal de pago
            const pagoModal = bootstrap.Modal.getInstance(document.getElementById('pagoModal'));
            pagoModal.hide();
            
            // Limpiar carrito
            carrito = [];
            actualizarContadorCarrito();
            
            // Mostrar confirmación
            mostrarNotificacion(
                `¡Pedido #${result.pedido_id} creado exitosamente! Total: €${result.total.toFixed(2)}. Código de transacción: ${result.codigo_transaccion}`,
                'success'
            );
            
            // Resetear formulario
            document.getElementById('pagoForm').reset();
        } else {
            throw new Error(result.error || 'Error procesando el pedido');
        }
        
    } catch (error) {
        console.error('Error procesando pago:', error);
        mostrarNotificacion('Error procesando el pago. Por favor, inténtalo de nuevo.', 'error');
    } finally {
        // Restaurar botón
        confirmarBtn.innerHTML = 'Confirmar Pago';
        confirmarBtn.disabled = false;
    }
}

// Enviar formulario de contacto
async function enviarFormularioContacto(form) {
    const formData = new FormData(form);
    const data = {
        nombre: formData.get('nombre') || form.querySelector('input[type="text"]').value,
        email: formData.get('email') || form.querySelector('input[type="email"]').value,
        asunto: formData.get('asunto') || form.querySelectorAll('input[type="text"]')[1].value,
        mensaje: formData.get('mensaje') || form.querySelector('textarea').value
    };
    
    try {
        const response = await fetch(`${API_BASE_URL}/contacto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            mostrarNotificacion(result.mensaje, 'success');
            form.reset();
        } else {
            throw new Error(result.error || 'Error enviando mensaje');
        }
        
    } catch (error) {
        console.error('Error enviando contacto:', error);
        mostrarNotificacion('¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
        form.reset();
    }
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${tipo === 'success' ? 'success' : tipo === 'error' ? 'danger' : 'info'} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px; max-width: 400px;';
    alertDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Animaciones al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.product-card, .display-4');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
});

// Simulación de integración con Stripe (para demostración)
function initializeStripe() {
    // En un entorno real, aquí se inicializaría Stripe
    console.log('Stripe inicializado (simulación)');
}

// Simulación de integración con PayPal (para demostración)
function initializePayPal() {
    // En un entorno real, aquí se inicializaría PayPal
    console.log('PayPal inicializado (simulación)');
}

// Llamar a las inicializaciones
initializeStripe();
initializePayPal();

