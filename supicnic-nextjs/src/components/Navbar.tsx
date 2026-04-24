'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const links = [
  { href: '/',           label: 'Inicio' },
  { href: '/productos',  label: 'Productos' },
  { href: '/cestas',     label: 'Cestas' },
  { href: '/#nosotros',  label: 'Nosotros' },
  { href: '/contacto',   label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2"
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(201,167,118,0.3)', boxShadow: '0 2px 24px rgba(0,0,0,0.08)' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline group">
          <div
            className="transition-all duration-500 group-hover:scale-105"
            style={{
              filter: 'drop-shadow(0 0 14px rgba(184,146,42,0.45)) drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
              transition: 'filter 0.4s ease, transform 0.4s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.filter =
                'drop-shadow(0 0 22px rgba(212,170,71,0.75)) drop-shadow(0 4px 16px rgba(0,0,0,0.5))'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.filter =
                'drop-shadow(0 0 14px rgba(184,146,42,0.45)) drop-shadow(0 2px 8px rgba(0,0,0,0.6))'
            }}
          >
            <Image
              src="/logo_supicnic.png"
              alt="Su Picnic"
              width={320}
              height={110}
              style={{ objectFit: 'contain', height: 110, width: 'auto' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0 list-none m-0 p-0">
          {links.map(l => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href) && l.href !== '/'
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className="px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 no-underline block"
                  style={{ color: active ? '#B8922A' : '#2C2424' }}
                >
                  {l.label}
                </Link>
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full" style={{ background: '#B8922A' }} />
                )}
              </li>
            )
          })}
        </ul>

        {/* Cart + burger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => { const e = document.getElementById('cart-modal'); if (e) { e.style.display = 'flex'; } }}
            className="relative flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300"
            style={{ background: 'linear-gradient(135deg,#B8922A,#D4AA47)', boxShadow: '0 4px 16px rgba(184,146,42,0.35)' }}
            aria-label="Carrito"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ background: '#c0392b', fontSize: '0.65rem' }}>
                {count}
              </span>
            )}
          </button>

          <button className="lg:hidden p-1" style={{ color: '#2C2424' }} onClick={() => setOpen(o => !o)} aria-label="Menú">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                    : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[65px] left-0 right-0 z-40 p-4" style={{ background: 'rgba(17,19,24,0.98)', borderBottom: '1px solid rgba(184,146,42,0.15)' }}>
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-center no-underline transition-all"
                  style={{ color: 'rgba(255,255,255,0.8)' }}>
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
