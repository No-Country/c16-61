import type { Metadata } from 'next'
import { LoginForm } from './ui/LoginForm'

export const metadata: Metadata = {
  title: 'Pagina para iniciar sesión',
  description: 'Contiene el formulario para iniciar sesión en la aplicación.'
}

export default async function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
