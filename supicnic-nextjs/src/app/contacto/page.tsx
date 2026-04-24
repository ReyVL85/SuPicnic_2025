'use client'
import { useState } from 'react'

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contacto', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    } catch {}
    setSent(true)
    setLoading(false)
  }

  const info = [
    { icon: '📍', title: 'Ubicación', desc: 'Cádiz, Andalucía — España' },
    { icon: '📞', title: 'Teléfono', desc: '+34 956 XXX XXX' },
    { icon: '✉️', title: 'Email', desc: 'info@supicnic.es' },
    { icon: '🕐', title: 'Horario', desc: 'Lun–Vie 9:00–18:00 · Sáb 10:00–16:00' },
  ]

  return (
    <div style={{ background: '#111318', minHeight: '100vh', paddingTop: 65 }}>

      {/* Hero */}
      <div className="relative overflow-hidden flex items-end" style={{ height: 280 }}>
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/images/WOuWNun9bBl1.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,19,24,1) 0%, rgba(17,19,24,.45) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-10">
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D4AA47', marginBottom: '.5rem' }}>— Contacto —</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 300, color: '#FAF7F2', margin: 0 }}>
            Ponte en <em>Contacto</em>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Info */}
        <div>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(250,247,242,.6)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
            Estamos aquí para ayudarte a crear tu experiencia picnic perfecta. Contáctanos para realizar tu pedido o resolver cualquier duda.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            {info.map(i => (
              <div key={i.title} className="flex items-start gap-4 p-4 rounded" style={{ background: 'rgba(250,247,242,.04)', border: '1px solid rgba(250,247,242,.07)' }}>
                <span className="text-xl mt-0.5">{i.icon}</span>
                <div>
                  <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.05rem', fontWeight: 600, color: '#FAF7F2', margin: '0 0 .2rem' }}>{i.title}</p>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.85rem', color: 'rgba(250,247,242,.5)', margin: 0 }}>{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="p-8 rounded" style={{ background: 'rgba(250,247,242,.03)', border: '1px solid rgba(250,247,242,.08)' }}>
          {sent ? (
            <div className="text-center py-12">
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</p>
              <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', fontWeight: 400, color: '#FAF7F2', marginBottom: '.5rem' }}>¡Mensaje enviado!</h3>
              <p style={{ fontFamily: 'DM Sans,sans-serif', color: 'rgba(250,247,242,.55)', fontSize: '.9rem' }}>Te contactaremos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handle} className="flex flex-col gap-4">
              <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.6rem', fontWeight: 400, color: '#FAF7F2', margin: '0 0 .5rem' }}>Envíanos un Mensaje</h2>
              {(['nombre', 'email', 'asunto'] as const).map(field => (
                <div key={field}>
                  <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(250,247,242,.45)', display: 'block', marginBottom: '.4rem' }}>
                    {field === 'nombre' ? 'Nombre' : field === 'email' ? 'Email' : 'Asunto'} *
                  </label>
                  <input required type={field === 'email' ? 'email' : 'text'} value={form[field]}
                    onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                    className="w-full px-4 py-3 rounded outline-none transition-all"
                    style={{ background: 'rgba(250,247,242,.06)', border: '1px solid rgba(250,247,242,.1)', color: '#FAF7F2', fontFamily: 'DM Sans,sans-serif', fontSize: '.9rem' }}
                    onFocus={e => (e.target.style.borderColor = '#B8922A')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(250,247,242,.1)')}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(250,247,242,.45)', display: 'block', marginBottom: '.4rem' }}>Mensaje *</label>
                <textarea required rows={5} value={form.mensaje} onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
                  className="w-full px-4 py-3 rounded outline-none transition-all resize-none"
                  style={{ background: 'rgba(250,247,242,.06)', border: '1px solid rgba(250,247,242,.1)', color: '#FAF7F2', fontFamily: 'DM Sans,sans-serif', fontSize: '.9rem' }}
                  onFocus={e => (e.target.style.borderColor = '#B8922A')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(250,247,242,.1)')}
                />
              </div>
              <button type="submit" disabled={loading}
                style={{ background: '#B8922A', color: '#fff', fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '.9rem', borderRadius: 999, border: 'none', cursor: loading ? 'wait' : 'pointer', boxShadow: '0 6px 24px rgba(184,146,42,.38)', opacity: loading ? .7 : 1, transition: 'all .3s' }}>
                {loading ? 'Enviando...' : 'Enviar Mensaje →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
