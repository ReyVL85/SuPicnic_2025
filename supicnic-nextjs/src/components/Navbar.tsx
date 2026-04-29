'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'

const links = [
  { href: '/',          label: 'Inicio' },
  { href: '/productos', label: 'Productos' },
  { href: '/cestas',    label: 'Cestas' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/contacto',  label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          boxShadow: scrolled ? '0 2px 40px rgba(0,0,0,0.07)' : 'none',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 48px',
          height: 76,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 32,
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/logo_supicnic.png"
              alt="Su Picnic"
              width={200}
              height={68}
              style={{ objectFit: 'contain', height: 68, width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <ul className="hidden lg:flex" style={{ listStyle: 'none', margin: 0, padding: 0, alignItems: 'center', gap: 0 }}>
            {links.map(l => {
              const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href) && l.href !== '/'
              return (
                <li key={l.href} style={{ position: 'relative' }}>
                  <Link
                    href={l.href}
                    style={{
                      display: 'block',
                      padding: '8px 20px',
                      color: active ? '#8B6914' : '#1C1209',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: active ? 600 : 400,
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#8B6914' }}
                    onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#1C1209' }}
                  >
                    {l.label}
                  </Link>
                  {active && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 20,
                      right: 20,
                      height: 1,
                      background: '#B8922A',
                    }} />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Right — cart + burger */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12 }}>

            {/* Cart — luxury minimal */}
            <button
              onClick={() => { const e = document.getElementById('cart-modal'); if (e) e.style.display = 'flex'; }}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                background: 'transparent',
                border: '1px solid rgba(0,0,0,0.14)',
                borderRadius: 2,
                cursor: 'pointer',
                padding: '9px 18px',
                color: '#1C1209',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.63rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#B8922A'
                el.style.color = '#8B6914'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(0,0,0,0.14)'
                el.style.color = '#1C1209'
              }}
              aria-label="Carrito"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/>
              </svg>
              <span className="hidden sm:inline">Carrito</span>
              {count > 0 && (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 17,
                  height: 17,
                  borderRadius: '50%',
                  background: '#B8922A',
                  color: '#fff',
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}>
                  {count}
                </span>
              )}
            </button>

            {/* Mobile burger */}
            <button
              className="lg:hidden"
              onClick={() => setOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1C1209', padding: 6, display: 'flex', alignItems: 'center' }}
              aria-label="Menú"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {open
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden" style={{
          position: 'fixed',
          top: 76,
          left: 0,
          right: 0,
          zIndex: 40,
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 12px 48px rgba(0,0,0,0.08)',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((l, i) => (
              <li key={l.href} style={{ borderBottom: i < links.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    padding: '18px 40px',
                    color: '#1C1209',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.66rem',
                    fontWeight: 500,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
