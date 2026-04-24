export interface Producto {
  id_producto: number
  nombre: string
  descripcion: string
  tipo: 'vino' | 'queso' | 'chorizo' | 'otros'
  precio_unitario: number
  imagen_url: string
  stock: number
}

export interface Cesta {
  id_cesta: number
  nombre: string
  descripcion: string
  precio_base: number
  imagen_url: string
}

export interface CartItem {
  id: number
  nombre: string
  precio: number
  imagen_url: string
  tipo: 'producto' | 'cesta'
  cantidad: number
}
