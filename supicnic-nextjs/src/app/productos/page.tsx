'use client'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'
import type { Producto } from '@/types'

const FALLBACK: Producto[] = [
  { id_producto: 1, nombre: 'Vino Tinto de Jerez', descripcion: 'Exquisito vino tinto de la región de Jerez con notas frutales y un final aterciopelado.', tipo: 'vino', precio_unitario: 15.99, imagen_url: 'images/ti4zful36VGN.jpg', stock: 25 },
  { id_producto: 2, nombre: 'Queso de Cabra Gaditano', descripcion: 'Queso artesanal de cabra con denominación de origen. Elaborado en pequeñas queserías.', tipo: 'queso', precio_unitario: 12.50, imagen_url: 'images/OOPP2Zcv3lPs.jpg', stock: 15 },
  { id_producto: 3, nombre: 'Chorizo Ibérico', descripcion: 'Chorizo ibérico curado en la sierra gaditana. Sabor intenso y aroma inigualable.', tipo: 'chorizo', precio_unitario: 18.75, imagen_url: 'images/hS9hwj6MKPep.jpg', stock: 20 },
  { id_producto: 4, nombre: 'Aceitunas Manzanilla', descripcion: 'Aceitunas de Sanlúcar de Barrameda, aliñadas según la receta tradicional gaditana.', tipo: 'otros', precio_unitario: 8.99, imagen_url: 'images/T7RxJRYpoE8N.png', stock: 30 },
  { id_producto: 5, nombre: 'Vino Blanco Fino', descripcion: 'Vino blanco fino de Jerez, perfecto con mariscos. Fresco, seco y de gran personalidad.', tipo: 'vino', precio_unitario: 14.50, imagen_url: 'images/OtKRbcFVFcxD.jpg', stock: 18 },
  { id_producto: 6, nombre: 'Queso Manchego Curado', descripcion: 'Queso manchego curado de más de 12 meses. Sabor intenso con notas a frutos secos.', tipo: 'queso', precio_unitario: 16.99, imagen_url: 'images/MEjNGmhr1GTc.jpg', stock: 12 },
]

const FILTERS = [
  { key: 'todos',   label: 'Todos' },
  { key: 'vino',    label: 'Vinos' },
  { key: 'queso',   label: 'Quesos' },
  { key: 'chorizo', label: 'Embutidos' },
  { key: 'otros',   label: 'Otros' },
]

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [filter, setFilter]       = useState('todos')
  const [notif, setNotif]         = useState('')
  const { add } = useCart()

  useEffect(() => {
    fetch('/api/init-data', { method: 'POST' }).catch(() => null)
    fetch('/api/productos').then(r => r.json()).then(setProductos).catch(() => setProductos(FALLBACK))
  }, [])

  const shown = filter === 'todos' ? productos : productos.filter(p => p.tipo === filter)

  const handleAdd = (p: Producto) => {
    add({ id: p.id_producto, nombre: p.nombre, precio: p.precio_unitario, imagen_url: p.imagen_url, tipo: 'producto' })
    setNotif(p.nombre)
    setTimeout(() => setNotif(''), 3000)
  }

  return (
    <div style={{ background: '#F8F5F0', minHeight: '100vh', paddingTop: 76 }}>

      {/* Toast */}
      {notif && (
        <div style={{
          position: 'fixed', bottom: 32, right: 32, zIndex: 100,
          background: '#1C1209', color: '#fff',
          padding: '14px 24px',
          fontFamily: 'DM Sans,sans-serif', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.04em',
          boxShadow: '0 8px 40px rgba(0,0,0,0.22)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#B8922A', flexShrink: 0 }} />
          {notif} añadido al carrito
        </div>
      )}

      {/* Hero */}
      <div style={{ position: 'relative', height: 400, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/GIlHXzpxLG9m.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: 'scale(1.04)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,8,5,0.55) 0%, rgba(10,8,5,0.72) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>
          <p style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AA47',
            marginBottom: '1.2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
          }}>
            <span style={{ width: 28, height: 1, background: '#B8922A', display: 'inline-block' }} />
            Catálogo
            <span style={{ width: 28, height: 1, background: '#B8922A', display: 'inline-block' }} />
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond,serif',
            fontSize: 'clamp(2.6rem,5vw,4.2rem)',
            fontWeight: 300, color: '#FAF7F2',
            margin: 0, lineHeight: 1.08, letterSpacing: '-0.01em',
          }}>
            Productos <em style={{ color: '#D4AA47' }}>Artesanales</em>
          </h1>
          <p style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.58)', marginTop: '1.1rem', letterSpacing: '0.05em',
          }}>
            Selección artesanal de los mejores sabores de Cádiz
          </p>
        </div>
      </div>

      {/* Filters bar */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '28px 0 0',
          borderBottom: '1px solid rgba(0,0,0,0.09)',
        }}>
          <div style={{ display: 'flex' }}>
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  fontFamily: 'DM Sans,sans-serif',
                  fontSize: '0.66rem',
                  fontWeight: filter === f.key ? 600 : 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '10px 22px',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'transparent',
                  color: filter === f.key ? '#1C1209' : '#9A8878',
                  borderBottom: filter === f.key ? '2px solid #B8922A' : '2px solid transparent',
                  marginBottom: -1,
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', color: '#9A8878', letterSpacing: '0.06em', paddingBottom: 12 }}>
            {shown.length} {shown.length === 1 ? 'producto' : 'productos'}
          </span>
        </div>
      </div>

      {/* Product grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 100px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
          {shown.map(p => (
            <ProductCard key={p.id_producto} p={p} onAdd={handleAdd} />
          ))}
        </div>
      </div>

    </div>
  )
}

function ProductCard({ p, onAdd }: { p: Producto; onAdd: (p: Producto) => void }) {
  const [hovered, setHovered] = useState(false)
  const [btnHover, setBtnHover] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        display: 'flex', flexDirection: 'column',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.13)'
          : '0 2px 20px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
    >
      {/* Image */}
      <div style={{ overflow: 'hidden', height: 270, flexShrink: 0, position: 'relative' }}>
        <img
          src={`/${p.imagen_url}`}
          alt={p.nombre}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.75s ease',
          }}
        />
        {/* Category badge */}
        <span style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(28,18,9,0.72)',
          backdropFilter: 'blur(8px)',
          color: '#D4AA47',
          fontFamily: 'DM Sans,sans-serif',
          fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase',
          padding: '5px 11px',
        }}>
          {p.tipo}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 24px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: 'Cormorant Garamond,serif',
          fontSize: '1.38rem', fontWeight: 600,
          color: '#1C1209', margin: '0 0 10px', lineHeight: 1.2,
        }}>
          {p.nombre}
        </h3>
        <p style={{
          fontFamily: 'DM Sans,sans-serif',
          fontSize: '0.8rem', fontWeight: 300,
          color: '#7C6F64', lineHeight: 1.7,
          margin: '0 0 22px', flex: 1,
        }}>
          {p.descripcion}
        </p>

        {/* Price + CTA */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: 18,
        }}>
          <span style={{
            fontFamily: 'Cormorant Garamond,serif',
            fontSize: '1.65rem', fontWeight: 600,
            color: '#1C1209', letterSpacing: '-0.01em',
          }}>
            €{p.precio_unitario.toFixed(2)}
          </span>
          <button
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            onClick={() => onAdd(p)}
            style={{
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.6rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              padding: '11px 22px',
              cursor: 'pointer',
              border: '1px solid #1C1209',
              background: btnHover ? '#1C1209' : 'transparent',
              color: btnHover ? '#fff' : '#1C1209',
              transition: 'background 0.22s ease, color 0.22s ease',
            }}
          >
            + Añadir
          </button>
        </div>

        {p.stock <= 5 && (
          <p style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem',
            color: '#B05028', margin: '10px 0 0', letterSpacing: '0.05em',
          }}>
            Solo {p.stock} unidades disponibles
          </p>
        )}
      </div>
    </article>
  )
}
