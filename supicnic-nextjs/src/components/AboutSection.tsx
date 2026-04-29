'use client'

const features = [
  {
    title: 'Productos Naturales',
    desc: 'Sin conservantes, directo del campo gaditano',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 7 4 2 5c0 5 3 9 10 7M12 12c0-5 5-8 10-7-1 5-4 9-10 7"/>
      </svg>
    ),
  },
  {
    title: 'Origen Local',
    desc: 'Productores artesanos de Cádiz seleccionados',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Calidad Premium',
    desc: 'Riguroso proceso de selección experta',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ),
  },
  {
    title: 'Entrega en 24h',
    desc: 'Playas, parques y domicilio en toda la provincia',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8922A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden" style={{ borderRadius: 2, boxShadow: '0 20px 60px rgba(0,0,0,.12)' }}>
            <img src="/images/rvZb857Mt6VR.jpg" alt="Cádiz" className="w-full object-cover" style={{ height: 520, objectPosition: 'center' }} />
          </div>
          <div className="absolute -bottom-5 -right-5 px-6 py-5" style={{ background: '#B8922A', boxShadow: '0 8px 30px rgba(184,146,42,.4)', maxWidth: 200 }}>
            <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.45rem', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1.25, margin: '0 0 6px' }}>
              "El sabor del sur<br />en cada bocado"
            </p>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(255,255,255,0.5)' }} />
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.78)', margin: '6px 0 0' }}>
              Cádiz, Andalucía
            </p>
          </div>
        </div>
        {/* Text */}
        <div className="order-1 lg:order-2">
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '.75rem' }}>— Nuestra Historia —</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, color: '#2C2424', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Sabores auténticos<br /><em style={{ color: '#B8922A' }}>del sur de España</em>
          </h2>
          <div style={{ width: 40, height: 2, background: '#B8922A', marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.95rem', fontWeight: 300, color: '#7A6E6E', lineHeight: 1.85, marginBottom: '1rem' }}>
            Su Picnic nació de la pasión por los productos locales gaditanos y el deseo de compartir experiencias únicas al aire libre. Cada cesta es una ventana a la cultura y gastronomía de Cádiz.
          </p>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.95rem', fontWeight: 300, color: '#7A6E6E', lineHeight: 1.85, marginBottom: '2rem' }}>
            Trabajamos directamente con productores artesanos de la región para garantizar frescura, calidad y autenticidad en cada pedido.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map(f => (
              <div key={f.title} style={{
                padding: '20px 18px',
                background: '#FAF7F2',
                borderBottom: '2px solid #B8922A',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
                <span>{f.icon}</span>
                <div>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1C1209', margin: '0 0 4px' }}>
                    {f.title}
                  </p>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', fontWeight: 300, color: '#7A6E6E', margin: 0, lineHeight: 1.6 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a href="/productos"
            style={{ display: 'inline-block', background: '#B8922A', color: '#fff', fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', padding: '.85rem 2.2rem', textDecoration: 'none', transition: 'all .3s', boxShadow: '0 4px 18px rgba(184,146,42,.35)' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.background = '#9A7820'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.background = '#B8922A'}
          >Descubrir Productos →</a>
        </div>
      </div>
    </section>
  )
}
