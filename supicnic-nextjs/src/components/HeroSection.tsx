'use client'
import Link from 'next/link'

const BG_IMAGES = [
  '/images/GIlHXzpxLG9m.jpg',
  '/images/mtHLEHbNjgxg.jpg',
  '/images/OOPP2Zcv3lPs.jpg',
]

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: 620 }}>

      {/* ── Ken Burns backgrounds ── */}
      <div className="absolute inset-0">
        {BG_IMAGES.map((src, i) => (
          <div key={src}
            className={`absolute inset-0 bg-center bg-cover hero-img-${i + 1}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(10,13,20,.52) 0%, rgba(10,13,20,.28) 40%, rgba(10,13,20,.65) 100%)',
        }} />
      </div>

      {/* ── Centre content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        <p className="anim-fade-up anim-d1 flex items-center gap-3 mb-6"
          style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.72rem', fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'#D4AA47' }}>
          <span style={{ width:5, height:5, borderRadius:'50%', background:'#B8922A', display:'inline-block' }} />
          Cádiz &nbsp;·&nbsp; Andalucía
          <span style={{ width:5, height:5, borderRadius:'50%', background:'#B8922A', display:'inline-block' }} />
        </p>

        <h1 className="anim-fade-up anim-d2 text-white mb-5"
          style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.8rem,6vw,5.2rem)', fontWeight:300, lineHeight:1.08, letterSpacing:'-.01em', textShadow:'0 4px 40px rgba(0,0,0,.5)', maxWidth:780 }}>
          El Picnic Perfecto,<br />
          <em style={{ color:'#D4AA47', fontWeight:300 }}>desde el corazón de Cádiz</em>
        </h1>

        <p className="anim-fade-up anim-d3"
          style={{ fontFamily:'DM Sans,sans-serif', fontSize:'clamp(.92rem,1.8vw,1.08rem)', fontWeight:300, color:'rgba(255,255,255,.7)', lineHeight:1.8, maxWidth:460, margin:'0 auto 2.5rem' }}>
          Cestas artesanales con los mejores productos locales.<br />
          Entregadas donde quieras, cuando quieras.
        </p>

        <div className="anim-fade-up anim-d4 flex flex-wrap justify-center gap-4 mb-10">
          <Link href="/cestas"
            className="no-underline transition-all duration-300 hover:-translate-y-1"
            style={{ display:'inline-block', background:'#B8922A', color:'#fff', fontFamily:'DM Sans,sans-serif', fontSize:'.78rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', padding:'.9rem 2.2rem', borderRadius:999, boxShadow:'0 8px 32px rgba(184,146,42,.45)' }}>
            🧺 Explorar Cestas
          </Link>
          <Link href="/productos"
            className="no-underline transition-all duration-300 hover:-translate-y-1"
            style={{ display:'inline-block', background:'rgba(255,255,255,.1)', color:'#fff', fontFamily:'DM Sans,sans-serif', fontSize:'.78rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', padding:'.9rem 2.2rem', borderRadius:999, border:'1.5px solid rgba(255,255,255,.38)', backdropFilter:'blur(8px)' }}>
            🍷 Ver Productos
          </Link>
        </div>

        <div className="anim-fade-up anim-d5 flex flex-wrap justify-center items-center gap-5 px-6 py-3 rounded-full"
          style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.14)', backdropFilter:'blur(12px)' }}>
          {[
            { icon:'🌿', label:'100% Natural' },
            { icon:'📍', label:'Origen Local' },
            { icon:'🚚', label:'Entrega 24h' },
            { icon:'⭐', label:'4.9 · 500+ clientes' },
          ].map((t, i, arr) => (
            <span key={t.label} className="flex items-center gap-2">
              <span className="text-sm">{t.icon}</span>
              <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.76rem', fontWeight:500, color:'rgba(255,255,255,.82)', letterSpacing:'.04em', whiteSpace:'nowrap' }}>{t.label}</span>
              {i < arr.length - 1 && <span style={{ width:1, height:13, background:'rgba(255,255,255,.2)', marginLeft:4 }} />}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 anim-fade-up anim-d5">
        <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.65rem', fontWeight:500, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(255,255,255,.38)' }}>
          Descubre más
        </span>
        <div className="flex justify-center pt-1.5" style={{ width:22, height:36, border:'1.5px solid rgba(255,255,255,.26)', borderRadius:12 }}>
          <div className="scroll-wheel" style={{ width:3, height:6, background:'#B8922A', borderRadius:2 }} />
        </div>
      </div>

      {/* ── Feature strip (Nuvo-style 3 panels) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-3">
        {[
          { icon: '🧺', title: 'Nuestras Cestas', desc: 'Descubre nuestra colección artesanal', href: '/cestas' },
          { icon: '🍷', title: 'Productos Locales', desc: 'Lo mejor de la despensa gaditana', href: '/productos' },
          { icon: '📍', title: 'Encuéntranos', desc: 'Cádiz, Andalucía — Entrega en 24h', href: '/contacto' },
        ].map((p, i) => (
          <a key={p.title} href={p.href}
            className="flex flex-col items-center justify-center text-center py-5 px-4 no-underline transition-all duration-300 group"
            style={{
              background: i === 1 ? 'rgba(184,146,42,0.92)' : 'rgba(150,115,60,0.85)',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(184,146,42,1)')}
            onMouseLeave={e => (e.currentTarget.style.background = i === 1 ? 'rgba(184,146,42,0.92)' : 'rgba(150,115,60,0.85)')}
          >
            <span className="text-2xl mb-1">{p.icon}</span>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#fff', margin: '0 0 .2rem' }}>{p.title}</p>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 300, color: 'rgba(255,255,255,.8)', margin: 0 }}>{p.desc}</p>
          </a>
        ))}
      </div>

    </section>
  )
}
