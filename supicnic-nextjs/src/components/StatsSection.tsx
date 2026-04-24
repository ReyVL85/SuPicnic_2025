const stats = [
  { number: '500+', label: 'Clientes Satisfechos' },
  { number: '1.000+', label: 'Cestas Entregadas' },
  { number: '4.9', label: 'Valoración Media' },
  { number: '24h', label: 'Tiempo de Entrega' },
]

export default function StatsSection() {
  return (
    <section style={{ background: '#B8922A' }}>
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center relative">
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10" style={{ background: 'rgba(255,255,255,.25)' }} />
            )}
            <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.4rem,5vw,3.6rem)', fontWeight: 300, color: '#fff', lineHeight: 1, margin: '0 0 .3rem' }}>
              {s.number}
            </p>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.75)', margin: 0 }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
