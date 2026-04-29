'use client'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const CESTAS = [
  { id: 1, nombre: 'Cesta Romántica',           desc: 'Vino tinto de Jerez, queso payoyo, jamón ibérico, aceitunas aloreñas y chocolate artesanal.',      precio: 89.99,  img: '/images/mtHLEHbNjgxg.jpg', cat: 'romantica',   badge: 'Romántica',       include: ['🍷 Vino Jerez', '🧀 Queso Payoyo', '🥩 Jamón Ibérico'] },
  { id: 2, nombre: 'Cesta Familiar',             desc: 'Vinos de la región, quesos variados, embutidos locales, frutas frescas y dulces típicos.',           precio: 129.99, img: '/images/GIlHXzpxLG9m.jpg', cat: 'familiar',    badge: 'Familiar',        include: ['🍷 Vinos Variados', '🧀 Quesos Locales', '🍎 Frutas Frescas'] },
  { id: 3, nombre: 'Cesta Celebración',          desc: 'Vino fino de Jerez, jamón de bellota, queso payoyo, aceitunas, pan artesanal y cava.',               precio: 159.99, img: '/images/OOPP2Zcv3lPs.jpg', cat: 'celebracion', badge: 'Celebración',     include: ['🥂 Vino Fino', '🥩 Jamón Bellota', '🎂 Dulces Típicos'] },
  { id: 4, nombre: 'Cesta Romántica Premium',    desc: 'Vino tinto reserva, jamón ibérico de bellota, queso payoyo curado y chocolate artesanal selecto.',   precio: 119.99, img: '/images/WOuWNun9bBl1.jpg', cat: 'romantica',   badge: 'Premium',         include: ['🍷 Vino Reserva', '🥩 Jamón Bellota', '🧀 Queso Curado'] },
  { id: 5, nombre: 'Cesta Familiar Grande',      desc: 'Vinos variados, quesos artesanales, embutidos locales, frutas frescas y bebidas para toda la mesa.', precio: 179.99, img: '/images/rvZb857Mt6VR.jpg', cat: 'familiar',    badge: 'Familiar Grande', include: ['🍷 Vinos Variados', '🧀 Quesos Artesanales', '🍎 Frutas Frescas'] },
  { id: 6, nombre: 'Cesta Celebración Premium',  desc: 'Selección exclusiva para eventos especiales: vino fino premium, jamón de bellota y cava.',            precio: 199.99, img: '/images/mtHLEHbNjgxg.jpg', cat: 'celebracion', badge: 'Premium',         include: ['🥂 Vino Fino Premium', '🥩 Jamón Bellota', '🎂 Dulces Premium'] },
]

const CATS = [
  { key: 'todas',      label: 'Todas' },
  { key: 'romantica',  label: 'Románticas' },
  { key: 'familiar',   label: 'Familiares' },
  { key: 'celebracion',label: 'Celebraciones' },
]

export default function CestasPage() {
  const [cat, setCat]   = useState('todas')
  const [notif, setNotif] = useState('')
  const { add } = useCart()

  const shown = cat === 'todas' ? CESTAS : CESTAS.filter(c => c.cat === cat)

  const handleAdd = (c: typeof CESTAS[0]) => {
    add({ id: c.id, nombre: c.nombre, precio: c.precio, imagen_url: c.img.slice(1), tipo: 'cesta' })
    setNotif(c.nombre)
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
          {notif} añadida al carrito
        </div>
      )}

      {/* Hero */}
      <div style={{ position: 'relative', height: 400, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/mtHLEHbNjgxg.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: 'scale(1.04)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,8,5,0.48) 0%, rgba(10,8,5,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>
          <p style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AA47',
            marginBottom: '1.2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
          }}>
            <span style={{ width: 28, height: 1, background: '#B8922A', display: 'inline-block' }} />
            Colección
            <span style={{ width: 28, height: 1, background: '#B8922A', display: 'inline-block' }} />
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond,serif',
            fontSize: 'clamp(2.6rem,5vw,4.2rem)',
            fontWeight: 300, color: '#FAF7F2',
            margin: 0, lineHeight: 1.08, letterSpacing: '-0.01em',
          }}>
            Nuestras Cestas <em style={{ color: '#D4AA47' }}>Artesanales</em>
          </h1>
          <p style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.58)', marginTop: '1.1rem', letterSpacing: '0.05em',
          }}>
            Elaboradas a mano con los mejores productos de Cádiz y su comarca
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
            {CATS.map(f => (
              <button
                key={f.key}
                onClick={() => setCat(f.key)}
                style={{
                  fontFamily: 'DM Sans,sans-serif',
                  fontSize: '0.66rem',
                  fontWeight: cat === f.key ? 600 : 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '10px 22px',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'transparent',
                  color: cat === f.key ? '#1C1209' : '#9A8878',
                  borderBottom: cat === f.key ? '2px solid #B8922A' : '2px solid transparent',
                  marginBottom: -1,
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', color: '#9A8878', letterSpacing: '0.06em', paddingBottom: 12 }}>
            {shown.length} {shown.length === 1 ? 'cesta' : 'cestas'}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 100px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
          {shown.map(c => (
            <CestaCard key={c.id} c={c} onAdd={handleAdd} />
          ))}
        </div>
      </div>

    </div>
  )
}

function CestaCard({ c, onAdd }: { c: typeof CESTAS[0]; onAdd: (c: typeof CESTAS[0]) => void }) {
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
          src={c.img}
          alt={c.nombre}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.75s ease',
          }}
        />
        <span style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(28,18,9,0.75)',
          backdropFilter: 'blur(8px)',
          color: '#D4AA47',
          fontFamily: 'DM Sans,sans-serif',
          fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase',
          padding: '5px 11px',
        }}>
          {c.badge}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 24px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: 'Cormorant Garamond,serif',
          fontSize: '1.38rem', fontWeight: 600,
          color: '#1C1209', margin: '0 0 10px', lineHeight: 1.2,
        }}>
          {c.nombre}
        </h3>
        <p style={{
          fontFamily: 'DM Sans,sans-serif',
          fontSize: '0.8rem', fontWeight: 300,
          color: '#7C6F64', lineHeight: 1.7,
          margin: '0 0 18px',
        }}>
          {c.desc}
        </p>

        {/* Include tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22, flex: 1, alignContent: 'flex-start' }}>
          {c.include.map(item => (
            <span key={item} style={{
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.64rem', fontWeight: 500,
              color: '#5C5046',
              background: '#F4EFE8',
              border: '1px solid rgba(184,146,42,0.18)',
              padding: '4px 10px',
              letterSpacing: '0.03em',
            }}>
              {item}
            </span>
          ))}
        </div>

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
            €{c.precio.toFixed(2)}
          </span>
          <button
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            onClick={() => onAdd(c)}
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
      </div>
    </article>
  )
}
