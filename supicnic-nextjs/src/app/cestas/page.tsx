'use client'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const CESTAS = [
  { id: 1, nombre: 'Cesta Romántica', desc: 'Vino tinto de Jerez, queso payoyo, jamón ibérico, aceitunas aloreñas y chocolate artesanal.', precio: 89.99, img: '/images/mtHLEHbNjgxg.jpg', cat: 'romantica', badge: 'Romántica', include: ['🍷 Vino Jerez', '🧀 Queso Payoyo', '🥩 Jamón Ibérico'] },
  { id: 2, nombre: 'Cesta Familiar', desc: 'Vinos de la región, quesos variados, embutidos locales, frutas frescas y dulces típicos.', precio: 129.99, img: '/images/GIlHXzpxLG9m.jpg', cat: 'familiar', badge: 'Familiar', include: ['🍷 Vinos Variados', '🧀 Quesos Locales', '🍎 Frutas Frescas'] },
  { id: 3, nombre: 'Cesta Celebración', desc: 'Vino fino de Jerez, jamón de bellota, queso payoyo, aceitunas, pan artesanal y cava.', precio: 159.99, img: '/images/OOPP2Zcv3lPs.jpg', cat: 'celebracion', badge: 'Celebración', include: ['🥂 Vino Fino', '🥩 Jamón Bellota', '🎂 Dulces Típicos'] },
  { id: 4, nombre: 'Cesta Romántica Premium', desc: 'Vino tinto reserva, jamón ibérico de bellota, queso payoyo curado y chocolate artesanal.', precio: 119.99, img: '/images/WOuWNun9bBl1.jpg', cat: 'romantica', badge: 'Premium', include: ['🍷 Vino Reserva', '🥩 Jamón Bellota', '🧀 Queso Curado'] },
  { id: 5, nombre: 'Cesta Familiar Grande', desc: 'Vinos variados, quesos artesanales, embutidos locales, frutas frescas y bebidas.', precio: 179.99, img: '/images/rvZb857Mt6VR.jpg', cat: 'familiar', badge: 'Familiar Grande', include: ['🍷 Vinos Variados', '🧀 Quesos Artesanales', '🍎 Frutas Frescas'] },
  { id: 6, nombre: 'Cesta Celebración Premium', desc: 'Selección premium para eventos especiales con productos exclusivos y cava.', precio: 199.99, img: '/images/mtHLEHbNjgxg.jpg', cat: 'celebracion', badge: 'Premium', include: ['🥂 Vino Fino Premium', '🥩 Jamón Bellota', '🎂 Dulces Premium'] },
]

const CATS = [
  { key: 'todas', label: 'Todas' },
  { key: 'romantica', label: 'Románticas' },
  { key: 'familiar', label: 'Familiares' },
  { key: 'celebracion', label: 'Celebraciones' },
]

export default function CestasPage() {
  const [cat, setCat] = useState('todas')
  const [notif, setNotif] = useState('')
  const { add } = useCart()

  const shown = cat === 'todas' ? CESTAS : CESTAS.filter(c => c.cat === cat)

  const handleAdd = (c: typeof CESTAS[0]) => {
    add({ id: c.id, nombre: c.nombre, precio: c.precio, imagen_url: c.img.slice(1), tipo: 'cesta' })
    setNotif(`${c.nombre} añadida`)
    setTimeout(() => setNotif(''), 3000)
  }

  return (
    <div style={{ background: '#111318', minHeight: '100vh', paddingTop: 65 }}>
      {notif && (
        <div className="fixed top-20 right-6 z-50 px-5 py-3 rounded text-white text-sm font-medium"
          style={{ background: '#B8922A', fontFamily: 'DM Sans,sans-serif', boxShadow: '0 8px 30px rgba(184,146,42,.4)' }}>
          🧺 {notif}
        </div>
      )}

      {/* Hero */}
      <div className="relative overflow-hidden flex items-end" style={{ height: 320 }}>
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/images/mtHLEHbNjgxg.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,19,24,1) 0%, rgba(17,19,24,.4) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D4AA47', marginBottom: '.5rem' }}>— Colección —</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 300, color: '#FAF7F2', margin: 0 }}>
            Nuestras Cestas <em>Artesanales</em>
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap gap-3">
        {CATS.map(f => (
          <button key={f.key} onClick={() => setCat(f.key)}
            style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '.6rem 1.4rem', borderRadius: 999, cursor: 'pointer', transition: 'all .3s', border: cat === f.key ? 'none' : '1.5px solid rgba(250,247,242,.15)', background: cat === f.key ? '#B8922A' : 'transparent', color: cat === f.key ? '#fff' : 'rgba(250,247,242,.55)' }}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map(c => (
          <div key={c.id} className="group overflow-hidden rounded" style={{ background: 'rgba(250,247,242,.04)', border: '1px solid rgba(250,247,242,.07)' }}>
            <div className="overflow-hidden relative" style={{ height: 240 }}>
              <img src={c.img} alt={c.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute top-4 left-4 px-3 py-1 text-white text-xs font-bold rounded" style={{ background: '#B8922A', fontFamily: 'DM Sans,sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', fontSize: '.65rem' }}>{c.badge}</span>
            </div>
            <div className="p-5">
              <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', fontWeight: 600, color: '#FAF7F2', margin: '0 0 .4rem' }}>{c.nombre}</h3>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', color: 'rgba(250,247,242,.5)', margin: '0 0 .8rem', lineHeight: 1.55 }}>{c.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {c.include.map(i => (
                  <span key={i} style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: 'rgba(250,247,242,.55)', background: 'rgba(250,247,242,.06)', padding: '.25rem .7rem', borderRadius: 999, border: '1px solid rgba(250,247,242,.08)' }}>{i}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(250,247,242,.07)' }}>
                <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.5rem', fontWeight: 600, color: '#D4AA47' }}>€{c.precio.toFixed(2)}</span>
                <button onClick={() => handleAdd(c)}
                  style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '.6rem 1.4rem', borderRadius: 999, cursor: 'pointer', background: '#B8922A', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(184,146,42,.35)', transition: 'all .3s' }}
                  onMouseOver={e => (e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)'}
                  onMouseOut={e => (e.currentTarget as HTMLElement).style.filter = 'brightness(1)'}>
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
