'use client'
import { useState } from 'react'

const INFO = [
  {
    label: 'Ubicación',
    value: 'Cádiz, Andalucía — España',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Teléfono',
    value: '+34 956 XXX XXX',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@supicnic.es',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Horario',
    value: 'Lun–Vie 9:00–18:00 · Sáb 10:00–16:00',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
  },
]

export default function ContactoPage() {
  const [form, setForm]     = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [btnHover, setBtnHover] = useState(false)

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try { await fetch('/api/contacto', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }) } catch {}
    setSent(true)
    setLoading(false)
  }

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '12px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? '#B8922A' : 'rgba(0,0,0,0.18)'}`,
    outline: 'none',
    fontFamily: 'DM Sans,sans-serif',
    fontSize: '0.9rem',
    fontWeight: 300,
    color: '#1C1209',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box' as const,
  })

  return (
    <div style={{ background: '#F8F5F0', minHeight: '100vh', paddingTop: 76 }}>

      {/* Hero */}
      <div style={{ position: 'relative', height: 400, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/WOuWNun9bBl1.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: 'scale(1.04)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,8,5,0.45) 0%, rgba(10,8,5,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>
          <p style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AA47',
            marginBottom: '1.2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
          }}>
            <span style={{ width: 28, height: 1, background: '#B8922A', display: 'inline-block' }} />
            Contacto
            <span style={{ width: 28, height: 1, background: '#B8922A', display: 'inline-block' }} />
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond,serif',
            fontSize: 'clamp(2.6rem,5vw,4.2rem)',
            fontWeight: 300, color: '#FAF7F2',
            margin: 0, lineHeight: 1.08, letterSpacing: '-0.01em',
          }}>
            Ponte en <em style={{ color: '#D4AA47' }}>Contacto</em>
          </h1>
          <p style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.58)', marginTop: '1.1rem', letterSpacing: '0.05em',
          }}>
            Estamos aquí para crear contigo la experiencia picnic perfecta
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px 100px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80 }}>

          {/* Left — info */}
          <div>
            <p style={{
              fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem', fontWeight: 300,
              color: '#6B5F54', lineHeight: 1.85, marginBottom: '3rem',
              maxWidth: 420,
            }}>
              Contáctanos para realizar tu pedido personalizado, resolver cualquier duda
              o simplemente conocernos mejor. Te respondemos en menos de 24 horas.
            </p>

            {/* Info rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {INFO.map((item, i) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 20,
                  padding: '22px 0',
                  borderTop: i === 0 ? '1px solid rgba(0,0,0,0.09)' : 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.09)',
                }}>
                  <span style={{ color: '#B8922A', flexShrink: 0, marginTop: 2 }}>
                    {item.svg}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'DM Sans,sans-serif',
                      fontSize: '0.6rem', fontWeight: 700,
                      letterSpacing: '0.22em', textTransform: 'uppercase',
                      color: '#9A8878', margin: '0 0 5px',
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: 'Cormorant Garamond,serif',
                      fontSize: '1.1rem', fontWeight: 500,
                      color: '#1C1209', margin: 0, lineHeight: 1.3,
                    }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: '#fff', padding: '48px 44px', boxShadow: '0 4px 40px rgba(0,0,0,0.07)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 56, height: 56, borderRadius: '50%',
                  background: '#F4EFE8', marginBottom: 24,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8922A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </span>
                <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2rem', fontWeight: 400, color: '#1C1209', margin: '0 0 10px' }}>
                  Mensaje enviado
                </h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.84rem', fontWeight: 300, color: '#7C6F64', margin: 0, lineHeight: 1.7 }}>
                  Gracias por escribirnos.<br />Te responderemos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handle} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div>
                  <p style={{
                    fontFamily: 'DM Sans,sans-serif', fontSize: '0.62rem', fontWeight: 600,
                    letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B8922A',
                    margin: '0 0 10px',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <span style={{ width: 18, height: 1, background: '#B8922A', display: 'inline-block' }} />
                    Escríbenos
                  </p>
                  <h2 style={{
                    fontFamily: 'Cormorant Garamond,serif',
                    fontSize: '2rem', fontWeight: 400,
                    color: '#1C1209', margin: 0, lineHeight: 1.1,
                  }}>
                    Envíanos un Mensaje
                  </h2>
                </div>

                {/* Nombre + Email in 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 28 }}>
                  {(['nombre', 'email'] as const).map(field => (
                    <div key={field}>
                      <label style={{
                        fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', fontWeight: 700,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        color: focused === field ? '#B8922A' : '#9A8878',
                        display: 'block', marginBottom: 8,
                        transition: 'color 0.2s ease',
                      }}>
                        {field === 'nombre' ? 'Nombre' : 'Email'} *
                      </label>
                      <input
                        required
                        type={field === 'email' ? 'email' : 'text'}
                        value={form[field]}
                        onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(field)}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{
                    fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: focused === 'asunto' ? '#B8922A' : '#9A8878',
                    display: 'block', marginBottom: 8,
                    transition: 'color 0.2s ease',
                  }}>
                    Asunto *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.asunto}
                    onChange={e => setForm(p => ({ ...p, asunto: e.target.value }))}
                    onFocus={() => setFocused('asunto')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('asunto')}
                  />
                </div>

                <div>
                  <label style={{
                    fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: focused === 'mensaje' ? '#B8922A' : '#9A8878',
                    display: 'block', marginBottom: 8,
                    transition: 'color 0.2s ease',
                  }}>
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
                    onFocus={() => setFocused('mensaje')}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('mensaje'), resize: 'none', display: 'block' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  style={{
                    fontFamily: 'DM Sans,sans-serif',
                    fontSize: '0.63rem', fontWeight: 700,
                    letterSpacing: '0.24em', textTransform: 'uppercase',
                    padding: '16px 32px',
                    cursor: loading ? 'wait' : 'pointer',
                    border: '1px solid #1C1209',
                    background: btnHover && !loading ? '#1C1209' : 'transparent',
                    color: btnHover && !loading ? '#fff' : '#1C1209',
                    opacity: loading ? 0.6 : 1,
                    transition: 'background 0.22s ease, color 0.22s ease',
                    alignSelf: 'flex-start',
                  }}
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}
