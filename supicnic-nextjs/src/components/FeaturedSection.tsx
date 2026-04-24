'use client'
const cestas = [
  { img: '/images/mtHLEHbNjgxg.jpg', name: 'Cesta Romántica', desc: 'Vino de Jerez, queso payoyo, jamón ibérico y chocolate artesanal', price: '€89.99', badge: 'Romántica' },
  { img: '/images/GIlHXzpxLG9m.jpg', name: 'Cesta Familiar', desc: 'Vinos, quesos variados, embutidos locales y frutas frescas de temporada', price: '€129.99', badge: 'Familiar' },
  { img: '/images/OOPP2Zcv3lPs.jpg', name: 'Cesta Gourmet', desc: 'Selección premium de los mejores productos gaditanos para ocasiones especiales', price: '€159.99', badge: 'Premium' },
]

export default function FeaturedSection() {
  return (
    <section style={{ background: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-16">
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '.75rem' }}>
            — Colección —
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, color: '#2C2424', margin: '0 0 1rem' }}>
            Nuestras Cestas <em style={{ color: '#B8922A' }}>Artesanales</em>
          </h2>
          <div style={{ width: 40, height: 2, background: '#B8922A', margin: '0 auto' }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cestas.map(c => (
            <div key={c.name} className="group relative overflow-hidden" style={{ borderRadius: 4 }}>
              <div className="overflow-hidden" style={{ height: 360 }}>
                <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: 'linear-gradient(to top, rgba(10,12,16,.92) 0%, rgba(10,12,16,.3) 50%, transparent 100%)' }}>
                <span style={{ display: 'inline-block', fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#D4AA47', marginBottom: '.5rem' }}>{c.badge}</span>
                <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.5rem', fontWeight: 600, color: '#FAF7F2', margin: '0 0 .4rem' }}>{c.name}</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', color: 'rgba(250,247,242,.65)', margin: '0 0 1rem', lineHeight: 1.5 }}>{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.4rem', fontWeight: 600, color: '#D4AA47' }}>{c.price}</span>
                  <a href="/cestas"
                    style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,.35)', padding: '.5rem 1.2rem', borderRadius: 999, transition: 'all .3s' }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#B8922A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8922A'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.35)'; }}
                  >Ver Cesta</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/cestas"
            style={{ display: 'inline-block', border: '1.5px solid #B8922A', color: '#B8922A', fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', padding: '.85rem 2.2rem', textDecoration: 'none', transition: 'all .3s' }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#B8922A'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#B8922A'; }}
          >Ver todas las cestas →</a>
        </div>
      </div>
    </section>
  )
}
