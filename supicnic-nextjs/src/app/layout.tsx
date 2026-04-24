import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartModal from '@/components/CartModal'

export const metadata: Metadata = {
  title: 'Su Picnic — Cestas Artesanales de Cádiz',
  description: 'Cestas de picnic artesanales con los mejores productos locales de Cádiz. Entrega en 24h.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartModal />
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
