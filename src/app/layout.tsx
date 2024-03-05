import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { AppWrapper } from './context'
import { ProviderAuth } from '@/auth'
import { Footer, Header } from '@/components'
import Notification from '@/notifications/Notification'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imomubiales',
  description: 'Explora propiedades exclusivas con Imomubiales. Encuentra, evalúa y guarda tus favoritos en nuestra plataforma inmobiliaria digitalizada.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ProviderAuth>
          <Notification />

          <Header />

          <AppWrapper>
            <main style={{ minHeight: '80vh' }}>
              {children}
            </main>
          </AppWrapper>

          <Footer />

        </ProviderAuth>
      </body>
    </html>
  )
}
