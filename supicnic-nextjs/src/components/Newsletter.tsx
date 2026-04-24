'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section style={{ background: '#FAF7F2', borderTop: '2px solid #B8922A' }}>
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '.75rem' }}>
          — Newsletter —
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 400, color: '#111318', margin: '0 0 .75rem' }}>
          Recibe lo mejor de Cádiz
        </h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.92rem', color: '#6B6B73', margin: '0 auto 2rem', maxWidth: 380, lineHeight: 1.7 }}>
          Ofertas exclusivas, nuevas cestas y consejos de maridaje
        </p>
        {sent ? (
          <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#2A5E42', fontStyle: 'italic' }}>¡Gracias! Te hemos añadido a nuestra lista.</p>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => { e.preventDefault(); if (email) setSent(true) }}>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com"
              className="flex-1 px-5 py-3 text-sm outline-none transition-all"
              style={{ border: '1.5px solid #EFE9DD', borderRadius: 999, fontFamily: 'DM Sans,sans-serif', background: '#fff', color: '#111318' }}
              onFocus={e => (e.target.style.borderColor = '#B8922A')}
              onBlur={e => (e.target.style.borderColor = '#EFE9DD')}
            />
            <button type="submit"
              style={{ background: '#B8922A', color: '#fff', fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '.85rem 1.75rem', borderRadius: 999, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Suscribirse
            </button>
          </form>
        )}
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: '#9B9BA3', marginTop: '1rem', letterSpacing: '.03em' }}>Sin spam · Cancela cuando quieras</p>
      </div>
    </section>
  )
}
