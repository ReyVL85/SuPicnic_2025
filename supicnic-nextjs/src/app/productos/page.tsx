'use client'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'
import type { Producto } from '@/types'

const FALLBACK: Producto[] = [
  { id_producto: 1, nombre: 'Vino Tinto de Jerez', descripcion: 'Exquisito vino tinto de la región de Jerez con notas frutales.', tipo: 'vino', precio_unitario: 15.99, imagen_url: 'images/ti4zful36VGN.jpg', stock: 25 },
  { id_producto: 2, nombre: 'Queso de Cabra Gaditano', descripcion: 'Queso artesanal de cabra con denominación de origen.', tipo: 'queso', precio_unitario: 12.50, imagen_url: 'images/OOPP2Zcv3lPs.jpg', stock: 15 },
  { id_producto: 3, nombre: 'Chorizo Ibérico', descripcion: 'Chorizo ibérico curado en la sierra gaditana.', tipo: 'chorizo', precio_unitario: 18.75, imagen_url: 'images/hS9hwj6MKPep.jpg', stock: 20 },
  { id_producto: 4, nombre: 'Aceitunas Manzanilla', descripcion: 'Aceitunas de Sanlúcar de Barrameda, aliñadas tradicionalmente.', tipo: 'otros', precio_unitario: 8.99, imagen_url: 'images/T7RxJRYpoE8N.png', stock: 30 },
  { id_producto: 5, nombre: 'Vino Blanco Fino', descripcion: 'Vino blanco fino de Jerez, perfecto con mariscos.', tipo: 'vino', precio_unitario: 14.50, imagen_url: 'images/OtKRbcFVFcxD.jpg', stock: 18 },
  { id_producto: 6, nombre: 'Queso Manchego Curado', descripcion: 'Queso manchego curado con sabor intenso.', tipo: 'queso', precio_unitario: 16.99, imagen_url: 'images/MEjNGmhr1GTc.jpg', stock: 12 },
]

const FILTERS = [
  { key: 'todos', label: 'Todos' },
  { key: 'vino', label: 'Vinos' },
  { key: 'queso', label: 'Quesos' },
  { key: 'chorizo', label: 'Embutidos' },
  { key: 'otros', label: 'Otros' },
]

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [filter, setFilter] = useState('todos')
  const [notif, setNotif] = useState('')
  const { add } = useCart()

  useEffect(() => {
    fetch('/api/init-data', { method: 'POST' }).catch(() => null)
    fetch('/api/productos').then(r => r.json()).then(setProductos).catch(() => setProductos(FALLBACK))
  }, [])

  const shown = filter === 'todos' ? productos : productos.filter(p => p.tipo === filter)

  const handleAdd = (p: Producto) => {
    add({ id: p.id_producto, nombre: p.nombre, precio: p.precio_unitario, imagen_url: p.imagen_url, tipo: 'producto' })
    setNotif(`${p.nombre} añadido`)
    setTimeout(() => setNotif(''), 3000)
  }

  return (
    <div style={{ background: '#FAF7F2', minHeight: '100vh', paddingTop: 65 }}>
      {/* Notif toast */}
      {notif && (
        <div className="fixed top-20 right-6 z-50 px-5 py-3 rounded text-white text-sm font-medium"
          style={{ background: '#B8922A', fontFamily: 'DM Sans,sans-serif', boxShadow: '0 8px 30px rgba(184,146,42,.4)' }}>
          🧺 {notif}
        </div>
      )}

      {/* Hero */}
      <div className="relative overflow-hidden flex items-end" style={{ height: 320 }}>
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/images/GIlHXzpxLG9m.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,19,24,.92) 0%, rgba(17,19,24,.3) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D4AA47', marginBottom: '.5rem' }}>— Catálogo —</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 300, color: '#FAF7F2', margin: 0 }}>
            Productos <em>Artesanales</em>
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '.6rem 1.4rem', borderRadius: 999, cursor: 'pointer', transition: 'all .3s', border: filter === f.key ? 'none' : '1.5px solid rgba(250,247,242,.15)', background: filter === f.key ? '#B8922A' : 'transparent', color: filter === f.key ? '#fff' : 'rgba(250,247,242,.55)' }}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map(p => (
            <div key={p.id_producto} className="group overflow-hidden rounded"
              style={{ background: 'rgba(250,247,242,.04)', border: '1px solid rgba(250,247,242,.07)' }}>
              <div className="overflow-hidden" style={{ height: 220 }}>
                <img src={`/${p.imagen_url}`} alt={p.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#B8922A' }}>{p.tipo}</span>
                <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.25rem', fontWeight: 600, color: '#FAF7F2', margin: '.3rem 0 .4rem' }}>{p.nombre}</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', color: 'rgba(250,247,242,.5)', margin: '0 0 1.2rem', lineHeight: 1.55 }}>{p.descripcion}</p>
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.4rem', fontWeight: 600, color: '#D4AA47' }}>€{p.precio_unitario.toFixed(2)}</span>
                  <button onClick={() => handleAdd(p)}
                    style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '.55rem 1.3rem', borderRadius: 999, cursor: 'pointer', border: '1.5px solid rgba(250,247,242,.2)', background: 'transparent', color: 'rgba(250,247,242,.7)', transition: 'all .3s' }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#B8922A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8922A'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,247,242,.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(250,247,242,.7)'; }}>
                    Añadir
                  </button>
                </div>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: 'rgba(250,247,242,.3)', margin: '.5rem 0 0', letterSpacing: '.03em' }}>Stock: {p.stock} uds.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
