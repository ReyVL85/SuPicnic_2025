export default function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ height: 420 }}>
      <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/images/WOuWNun9bBl1.jpg')" }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,12,16,.85) 0%, rgba(10,12,16,.65) 100%)' }} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D4AA47', marginBottom: '1rem' }}>
          — Haz tu pedido —
        </p>
        <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 300, color: '#FAF7F2', margin: '0 0 1rem', lineHeight: 1.15 }}>
          ¿Listo para tu próxima<br /><em style={{ color: '#D4AA47' }}>aventura picnic?</em>
        </h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', fontWeight: 300, color: 'rgba(250,247,242,.65)', maxWidth: 420, margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Crea momentos inolvidables con lo mejor de Cádiz
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/cestas"
            style={{ display: 'inline-block', background: '#B8922A', color: '#fff', fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '.9rem 2.2rem', borderRadius: 999, textDecoration: 'none', boxShadow: '0 8px 30px rgba(184,146,42,.4)' }}>
            Explorar Cestas
          </a>
          <a href="/contacto"
            style={{ display: 'inline-block', background: 'rgba(255,255,255,.1)', color: '#fff', fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '.9rem 2.2rem', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,.3)', backdropFilter: 'blur(8px)' }}>
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
