import http.server
import socketserver
import os

# Cambiar al directorio actual (supicnic-website)
os.chdir(os.path.dirname(os.path.abspath(__file__)))

print(f"Directorio actual: {os.getcwd()}")
print(f"Archivos en el directorio: {os.listdir('.')}")

# Configurar el servidor
handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(('localhost', 8000), handler)

print("Servidor iniciado en http://localhost:8000")
print(f"Sirviendo desde: {os.getcwd()}")

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServidor detenido")
    httpd.server_close() 