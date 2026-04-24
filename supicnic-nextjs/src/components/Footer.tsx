'use client'
import Link from 'next/link'

const links = [
  { href: '/productos', label: 'Productos' },
  { href: '/cestas',    label: 'Cestas' },
  { href: '/contacto',  label: 'Contacto' },
  { href: '/#nosotros', label: 'Nosotros' },
]

export default function Footer() {
  return (
    <footer style={{ background:'#111318', borderTop:'1px solid rgba(184,146,42,.22)', padding:'3rem 0 1.5rem', color:'#fff' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <p style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.5rem', fontWeight:400, letterSpacing:'.03em', marginBottom:'.5rem' }}>
              🧺 Su Picnic
            </p>
            <p style={{ color:'rgba(255,255,255,.45)', fontSize:'.85rem', lineHeight:1.7 }}>
              Cestas de picnic artesanales<br />con productos de Cádiz
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center items-start pt-1">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className="no-underline transition-colors duration-200"
                style={{ color:'rgba(255,255,255,.5)', fontSize:'.78rem', fontWeight:500, letterSpacing:'.08em', textTransform:'uppercase' }}
                onMouseOver={e => (e.currentTarget.style.color = '#D4AA47')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}
              >{l.label}</Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 md:justify-end items-start">
            {['f', '📸', '🐦'].map((s, i) => (
              <a key={i} href="#"
                className="flex items-center justify-center rounded-full text-sm transition-all duration-300"
                style={{ width:38, height:38, background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', color:'rgba(255,255,255,.55)', textDecoration:'none' }}
                onMouseOver={e => { e.currentTarget.style.background = '#B8922A'; e.currentTarget.style.color = '#fff'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'rgba(255,255,255,.55)'; }}
              >{s}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,.07)', paddingTop:'1.25rem', textAlign:'center' }}>
          <p style={{ color:'rgba(255,255,255,.28)', fontSize:'.78rem', letterSpacing:'.05em' }}>
            © 2025 Su Picnic · Todos los derechos reservados · Cádiz, Andalucía
          </p>
        </div>
      </div>
    </footer>
  )
}
