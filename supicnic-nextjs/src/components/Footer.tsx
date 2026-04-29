'use client'
import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  { href: '/',           label: 'Inicio' },
  { href: '/productos',  label: 'Productos' },
  { href: '/cestas',     label: 'Cestas' },
  { href: '/#nosotros',  label: 'Nosotros' },
  { href: '/contacto',   label: 'Contacto' },
]

const CONTACT = [
  {
    label: 'Cádiz, Andalucía — España',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    label: '+34 956 XXX XXX',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z"/></svg>,
  },
  {
    label: 'info@supicnic.es',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: 'Lun–Vie 9:00–18:00',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  },
]

const SOCIAL = [
  {
    label: 'Facebook',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.55 1.9 1.86 0 3.11-2.39 3.11-5.22 0-2.15-1.45-3.76-4.08-3.76-2.97 0-4.82 2.22-4.82 4.69 0 .85.25 1.45.64 1.92.18.21.2.3.14.54-.05.18-.15.61-.19.78-.06.25-.25.34-.46.25-1.3-.53-1.9-1.96-1.9-3.56 0-2.64 2.24-5.84 6.7-5.84 3.59 0 5.96 2.6 5.96 5.39 0 3.7-2.05 6.47-5.07 6.47-1.01 0-1.97-.55-2.3-1.17l-.64 2.49c-.22.84-.69 1.68-1.07 2.33.81.25 1.66.38 2.55.38 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1C1209' }}>

      {/* Gold top line */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #B8922A 20%, #B8922A 80%, transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 0' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '48px 40px', paddingBottom: 56 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Image
              src="/logo_supicnic.png"
              alt="Su Picnic"
              width={160}
              height={56}
              style={{ objectFit: 'contain', height: 70, width: 'auto', marginBottom: 20 }}
            />
            <p style={{
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.8rem', fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.85, margin: '0 0 24px',
            }}>
              Cestas artesanales con los mejores<br />
              productos de Cádiz y Andalucía.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 36, height: 36,
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#B8922A'
                    el.style.color = '#D4AA47'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.12)'
                    el.style.color = 'rgba(255,255,255,0.45)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer on md */}
          <div className="hidden md:block" />

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.58rem', fontWeight: 700,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: '#B8922A', margin: '0 0 22px',
            }}>
              Navegación
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontFamily: 'DM Sans,sans-serif',
                      fontSize: '0.8rem', fontWeight: 300,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      letterSpacing: '0.03em',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#D4AA47')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.58rem', fontWeight: 700,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: '#B8922A', margin: '0 0 22px',
            }}>
              Contacto
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CONTACT.map(c => (
                <li key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
                  <span style={{
                    fontFamily: 'DM Sans,sans-serif',
                    fontSize: '0.78rem', fontWeight: 300,
                    color: 'rgba(255,255,255,0.48)',
                    lineHeight: 1.5, letterSpacing: '0.02em',
                  }}>
                    {c.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 8,
        }}>
          <p style={{
            fontFamily: 'DM Sans,sans-serif',
            fontSize: '0.68rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.22)',
            margin: 0, letterSpacing: '0.04em',
          }}>
            © 2025 Su Picnic · Todos los derechos reservados
          </p>
          <p style={{
            fontFamily: 'DM Sans,sans-serif',
            fontSize: '0.68rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.22)',
            margin: 0, letterSpacing: '0.04em',
          }}>
            Cádiz, Andalucía
          </p>
        </div>
      </div>

    </footer>
  )
}
