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

      {/* Ken Burns backgrounds */}
      <div className="absolute inset-0">
        {BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-center bg-cover hero-img-${i + 1}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Base gradient — darkens top, middle and bottom */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(6,4,2,0.62) 0%, rgba(6,4,2,0.38) 30%, rgba(6,4,2,0.55) 60%, rgba(6,4,2,0.88) 100%)',
        }} />
        {/* Text scrim — radial vignette behind the copy area */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 75% 60% at 50% 48%, rgba(6,4,2,0.48) 0%, transparent 100%)',
        }} />
      </div>

      {/* Centre content — offset up to account for the panel strip */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ paddingBottom: 60 }}
      >

        {/* Eyebrow */}
        <p
          className="anim-fade-up anim-d1"
          style={{
            fontFamily: 'DM Sans,sans-serif',
            fontSize: '0.6rem', fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#D4AA47', marginBottom: '1.6rem',
            display: 'flex', alignItems: 'center', gap: 16,
          }}
        >
          <span style={{ width: 32, height: 1, background: '#B8922A', display: 'inline-block' }} />
          Cádiz &nbsp;·&nbsp; Andalucía
          <span style={{ width: 32, height: 1, background: '#B8922A', display: 'inline-block' }} />
        </p>

        {/* H1 */}
        <h1
          className="anim-fade-up anim-d2"
          style={{
            fontFamily: 'Cormorant Garamond,serif',
            fontSize: 'clamp(3rem,6.5vw,5.6rem)',
            fontWeight: 300, lineHeight: 1.06,
            letterSpacing: '-0.01em',
            color: '#FAF7F2',
            textShadow: '0 2px 24px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.6)',
            maxWidth: 840, margin: '0 0 1.4rem',
          }}
        >
          El Picnic Perfecto,<br />
          <em style={{ color: '#D4AA47', fontStyle: 'italic', fontWeight: 300 }}>
            desde el corazón de Cádiz
          </em>
        </h1>

        {/* Subtext */}
        <p
          className="anim-fade-up anim-d3"
          style={{
            fontFamily: 'DM Sans,sans-serif',
            fontSize: 'clamp(0.84rem,1.6vw,0.96rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.82)',
            textShadow: '0 1px 12px rgba(0,0,0,0.7)',
            lineHeight: 1.9,
            maxWidth: 420,
            margin: '0 auto 3rem',
            letterSpacing: '0.03em',
          }}
        >
          Cestas artesanales con los mejores productos locales.<br />
          Entregadas donde quieras, cuando quieras.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up anim-d4 flex flex-wrap justify-center" style={{ gap: 12 }}>
          {/* Primary — white fill → dark on hover */}
          <Link
            href="/cestas"
            className="no-underline"
            style={{
              display: 'inline-block',
              background: '#fff',
              color: '#1C1209',
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.63rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              padding: '15px 34px',
              transition: 'background 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#1C1209'
              el.style.color = '#fff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#fff'
              el.style.color = '#1C1209'
            }}
          >
            Explorar Cestas →
          </Link>

          {/* Secondary — outline white */}
          <Link
            href="/productos"
            className="no-underline"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#fff',
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.63rem', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              padding: '15px 34px',
              border: '1px solid rgba(255,255,255,0.42)',
              transition: 'border-color 0.25s ease, background 0.25s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,0.85)'
              el.style.background = 'rgba(255,255,255,0.08)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,0.42)'
              el.style.background = 'transparent'
            }}
          >
            Ver Productos
          </Link>
        </div>
      </div>

      {/* Scroll indicator — positioned above the panel strip */}
      <div
        className="absolute z-10 flex flex-col items-center gap-2 anim-fade-up anim-d5"
        style={{ bottom: 36, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div style={{
          width: 22, height: 36,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 12,
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div className="scroll-wheel" style={{ width: 2, height: 6, background: '#B8922A', borderRadius: 2 }} />
        </div>
      </div>


    </section>
  )
}
