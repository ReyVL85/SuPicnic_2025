'use client'
export default function AboutSection() {
  const features = [
    { icon: '🌿', title: 'Productos Naturales', desc: 'Sin conservantes, directo del campo gaditano' },
    { icon: '📍', title: 'Origen Local', desc: 'Productores artesanos de Cádiz seleccionados' },
    { icon: '🏆', title: 'Calidad Premium', desc: 'Riguroso proceso de selección experta' },
    { icon: '🚚', title: 'Entrega en 24h', desc: 'Playas, parques y domicilio en toda la provincia' },
  ]
  return (
    <section id="nosotros" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden" style={{ borderRadius: 2, boxShadow: '0 20px 60px rgba(0,0,0,.12)' }}>
            <img src="/images/rvZb857Mt6VR.jpg" alt="Cádiz" className="w-full object-cover" style={{ height: 520, objectPosition: 'center' }} />
          </div>
          <div className="absolute -bottom-5 -right-5 px-6 py-4" style={{ background: '#B8922A', boxShadow: '0 8px 30px rgba(184,146,42,.4)' }}>
            <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.4rem', fontWeight: 600, color: '#fff', lineHeight: 1, margin: 0 }}>10+</p>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)', margin: 0 }}>Años de experiencia</p>
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
              <div key={f.title} className="p-4" style={{ background: '#FAF7F2', borderLeft: '3px solid #B8922A' }}>
                <span className="text-lg mb-1 block">{f.icon}</span>
                <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.05rem', fontWeight: 600, color: '#2C2424', margin: '0 0 .2rem' }}>{f.title}</p>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: '#7A6E6E', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
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
