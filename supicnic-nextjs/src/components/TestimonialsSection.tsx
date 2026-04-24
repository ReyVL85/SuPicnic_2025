const reviews = [
  { initials: 'MC', name: 'María & Carlos', location: 'Cádiz', color: '#2A5E42', text: '"La cesta romántica superó todas nuestras expectativas. Productos frescos, presentación impecable y entrega puntual. Una experiencia de diez."' },
  { initials: 'FG', name: 'Familia García', location: 'San Fernando', color: '#0D2545', text: '"Perfecto para nuestra celebración familiar. Los niños disfrutaron tanto como los mayores. La calidad de los embutidos y quesos, extraordinaria."' },
  { initials: 'AM', name: 'Ana Martínez', location: 'El Puerto de Santa María', color: '#B8922A', text: '"El vino local es espectacular. Lo he recomendado a todos mis amigos. Su Picnic se ha convertido en nuestra opción para cada ocasión especial."' },
]

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '.75rem' }}>
            — Testimonios —
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, color: '#2C2424', margin: '0 0 1rem' }}>
            Lo que dicen nuestros <em style={{ color: '#B8922A' }}>clientes</em>
          </h2>
          <div style={{ width: 40, height: 2, background: '#B8922A', margin: '0 auto' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.name} className="relative p-8" style={{ background: '#FAF7F2', borderTop: '3px solid #B8922A', boxShadow: '0 4px 24px rgba(0,0,0,.06)' }}>
              <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '5rem', lineHeight: .8, color: '#B8922A', opacity: .18, position: 'absolute', top: '1rem', left: '1.5rem' }}>"</span>
              <div className="flex gap-1 mb-4" style={{ position: 'relative', zIndex: 1 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#B8922A', fontSize: '.85rem' }}>★</span>)}
              </div>
              <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.08rem', fontStyle: 'italic', color: '#5A4E4E', lineHeight: 1.7, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full text-white text-xs font-bold"
                  style={{ width: 42, height: 42, background: r.color, fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', letterSpacing: '.05em', flexShrink: 0 }}>
                  {r.initials}
                </div>
                <div>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.88rem', fontWeight: 600, color: '#2C2424', margin: 0 }}>{r.name}</p>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', color: '#7A6E6E', margin: 0, letterSpacing: '.04em' }}>{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
