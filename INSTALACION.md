# Guía de Instalación y Configuración - Su Picnic

## 📋 Requisitos del Sistema

### Requisitos Mínimos
- Python 3.8 o superior
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- 100 MB de espacio libre en disco
- Conexión a internet (para dependencias)

### Requisitos Recomendados
- Python 3.11
- 4 GB de RAM
- Navegador actualizado
- Conexión estable a internet

## 🚀 Instalación Paso a Paso

### 1. Preparación del Entorno

```bash
# Crear directorio del proyecto
mkdir supicnic-project
cd supicnic-project

# Descomprimir archivos del proyecto
# (copiar todos los archivos descargados aquí)
```

### 2. Configuración del Backend

```bash
# Navegar al directorio del backend
cd supicnic_backend

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En macOS/Linux:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Inicializar base de datos
python src/main.py
# (Ctrl+C para detener después de que se inicialice)
```

### 3. Configuración del Frontend

```bash
# Navegar al directorio del frontend
cd ../supicnic-website

# Verificar que todas las imágenes estén en la carpeta images/
ls images/

# Iniciar servidor web local
python -m http.server 8080
```

### 4. Verificación de la Instalación

1. **Backend:** Abrir http://localhost:5000 en el navegador
2. **Frontend:** Abrir http://localhost:8080 en el navegador
3. **Verificar funcionalidad:** Probar agregar productos al carrito

## 🔧 Configuración Avanzada

### Variables de Entorno

Crear archivo `.env` en el directorio del backend:

```env
FLASK_ENV=development
SECRET_KEY=tu_clave_secreta_aqui
DATABASE_URL=sqlite:///src/database/app.db
```

### Configuración de Base de Datos

Para usar PostgreSQL en lugar de SQLite:

```python
# En src/main.py, cambiar:
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://usuario:password@localhost/supicnic'
```

### Configuración de CORS

Para permitir otros dominios:

```python
# En src/main.py, modificar:
CORS(app, origins=['http://tu-dominio.com'])
```

## 🌐 Despliegue en Producción

### Opción 1: Servidor Local

```bash
# Backend
cd supicnic_backend
source venv/bin/activate
gunicorn -w 4 -b 0.0.0.0:5000 src.main:app

# Frontend
cd supicnic-website
python -m http.server 80
```

### Opción 2: Servicios en la Nube

#### Heroku (Backend)
```bash
# Crear Procfile
echo "web: gunicorn src.main:app" > Procfile

# Desplegar
heroku create supicnic-api
git push heroku main
```

#### Netlify (Frontend)
1. Comprimir carpeta `supicnic-website`
2. Subir a Netlify
3. Actualizar URL de API en `script.js`

### Opción 3: Docker

```dockerfile
# Dockerfile para backend
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "src/main.py"]
```

## 🔍 Solución de Problemas

### Problema: "No se cargan los productos"
**Solución:**
1. Verificar que el backend esté ejecutándose
2. Comprobar la URL de la API en `script.js`
3. Revisar la consola del navegador para errores CORS

### Problema: "Error 404 en imágenes"
**Solución:**
1. Verificar que las imágenes estén en `supicnic-website/images/`
2. Comprobar los nombres de archivo en el código
3. Verificar permisos de lectura

### Problema: "Base de datos no inicializada"
**Solución:**
```bash
cd supicnic_backend
source venv/bin/activate
python -c "from src.main import app; from src.models.supicnic import db; app.app_context().push(); db.create_all()"
```

### Problema: "Puerto ya en uso"
**Solución:**
```bash
# Encontrar proceso usando el puerto
lsof -i :5000
# Terminar proceso
kill -9 [PID]
```

## 📊 Monitoreo y Logs

### Logs del Backend
```bash
# Ver logs en tiempo real
tail -f logs/app.log
```

### Métricas de Rendimiento
```bash
# Instalar herramientas de monitoreo
pip install flask-monitoring-dashboard
```

## 🔐 Seguridad

### Configuraciones de Seguridad
1. Cambiar `SECRET_KEY` en producción
2. Usar HTTPS en producción
3. Configurar firewall para puertos específicos
4. Implementar rate limiting

### Backup de Base de Datos
```bash
# Backup SQLite
cp src/database/app.db backup/app_$(date +%Y%m%d).db

# Restaurar backup
cp backup/app_20231220.db src/database/app.db
```

## 📱 Optimización Móvil

### Configuración PWA (Opcional)
```json
// manifest.json
{
  "name": "Su Picnic",
  "short_name": "SuPicnic",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2c5530"
}
```

## 🔄 Actualizaciones

### Actualizar Dependencias
```bash
# Backend
pip install --upgrade -r requirements.txt

# Frontend
# Verificar versiones de CDN en index.html
```

### Migración de Base de Datos
```bash
# Crear script de migración
python scripts/migrate_db.py
```

## 📞 Soporte Técnico

### Información de Contacto
- **Documentación:** README.md
- **Logs:** Revisar archivos de log
- **Issues:** Crear ticket de soporte

### Comandos Útiles
```bash
# Verificar estado del sistema
python scripts/health_check.py

# Limpiar cache
rm -rf __pycache__/
rm -rf .pytest_cache/

# Reiniciar servicios
./scripts/restart_services.sh
```

---

**¡Instalación completada! Su Picnic está listo para usar.**

