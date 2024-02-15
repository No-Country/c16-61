import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Footer, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'No Country Props',
  description: 'Explora propiedades exclusivas con No Country Props. Encuentra, evalúa y guarda tus favoritos en nuestra plataforma inmobiliaria digitalizada.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
