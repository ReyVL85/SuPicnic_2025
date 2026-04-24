'use client'
import { useCart } from '@/context/CartContext'
import { useEffect, useRef } from 'react'

export default function CartModal() {
  const { items, change, remove, total, count } = useCart()
  const ref = useRef<HTMLDivElement>(null)

  const close = () => { if (ref.current) ref.current.style.display = 'none' }

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (e.target === ref.current) close() }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  })

  return (
    <div id="cart-modal" ref={ref}
      className="fixed inset-0 z-[100] items-center justify-center"
      style={{ display: 'none', background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(4px)' }}
    >
      <div className="relative w-full max-w-lg mx-4 rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#fff', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4" style={{ background: '#111318', borderBottom: '1px solid rgba(184,146,42,.2)' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.5rem', fontWeight: 400, color: '#fff', margin: 0 }}>
            Carrito · <span style={{ color: '#D4AA47' }}>{count}</span>
          </h2>
          <button onClick={close} style={{ color: 'rgba(255,255,255,.6)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem' }}>✕</button>
        </div>

        {/* Items */}
        <div className="overflow-y-auto flex-1 px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-12" style={{ color: '#6B6B73' }}>
              <p style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🧺</p>
              <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem' }}>Tu carrito está vacío</p>
            </div>
          ) : items.map(item => (
            <div key={`${item.tipo}-${item.id}`} className="flex items-center gap-4 py-3" style={{ borderBottom: '1px solid #F2EDE3' }}>
              <div className="w-14 h-14 rounded-xl bg-center bg-cover flex-shrink-0"
                style={{ backgroundImage: `url(/${item.imagen_url})` }} />
              <div className="flex-1 min-w-0">
                <p className="truncate" style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{item.nombre}</p>
                <p style={{ color: '#B8922A', fontFamily: 'Cormorant Garamond,serif', fontSize: '1rem', margin: 0 }}>€{(item.precio * item.cantidad).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => change(item.id, item.tipo, -1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-sm transition-colors"
                  style={{ border: '1.5px solid #E0D5C5', background: 'none', cursor: 'pointer' }}>−</button>
                <span style={{ fontSize: '.9rem', fontWeight: 600, minWidth: 20, textAlign: 'center' }}>{item.cantidad}</span>
                <button onClick={() => change(item.id, item.tipo, 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-sm transition-colors"
                  style={{ border: '1.5px solid #E0D5C5', background: 'none', cursor: 'pointer' }}>+</button>
                <button onClick={() => remove(item.id, item.tipo)} style={{ color: '#c0392b', background: 'none', border: 'none', cursor: 'pointer', marginLeft: 4, fontSize: '.9rem' }}>🗑</button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4" style={{ borderTop: '1px solid #F2EDE3' }}>
            <div className="flex justify-between items-center mb-4">
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: '.9rem', color: '#6B6B73' }}>Total</span>
              <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.5rem', fontWeight: 600, color: '#B8922A' }}>€{total.toFixed(2)}</span>
            </div>
            <button className="w-full py-3 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#B8922A,#D4AA47)', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', letterSpacing: '.08em', textTransform: 'uppercase', boxShadow: '0 6px 24px rgba(184,146,42,.38)' }}>
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
