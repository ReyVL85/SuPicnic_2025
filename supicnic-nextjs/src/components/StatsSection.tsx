const PILLARS = [
  {
    label: 'Ingredientes Naturales',
    desc: 'Sin conservantes ni aditivos artificiales',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 00-9 9c0 4.97 9 13 9 13s9-8.03 9-13a9 9 0 00-9-9z"/>
        <path d="M12 11V7M9.5 9.5L12 7l2.5 2.5"/>
      </svg>
    ),
  },
  {
    label: 'Productores Locales',
    desc: 'De las mejores bodegas y queserías de Cádiz',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Elaboración Artesanal',
    desc: 'Cada cesta preparada con mimo y dedicación',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    label: 'Entrega a Tu Medida',
    desc: 'En la playa, el campo o donde tú elijas',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
]

export default function StatsSection() {
  return (
    <section style={{ background: '#B8922A' }}>
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-0">
        {PILLARS.map((p, i) => (
          <div
            key={p.label}
            className="relative flex flex-col items-center text-center"
            style={{ padding: '16px 24px' }}
          >
            {/* Divider */}
            {i < PILLARS.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12"
                style={{ background: 'rgba(255,255,255,0.22)' }} />
            )}

            {/* Icon */}
            <span style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>
              {p.icon}
            </span>

            {/* Label */}
            <p style={{
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.63rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#fff', margin: '0 0 6px',
            }}>
              {p.label}
            </p>

            {/* Description */}
            <p style={{
              fontFamily: 'DM Sans,sans-serif',
              fontSize: '0.74rem', fontWeight: 300,
              color: 'rgba(255,255,255,0.72)',
              margin: 0, lineHeight: 1.5, letterSpacing: '0.01em',
            }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
