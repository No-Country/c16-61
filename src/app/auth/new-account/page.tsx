import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagina para crear una nueva cuenta',
  description: 'Contiene el formulario para crear una nueva cuenta.'
}

export default async function NewAccountPage() {
  return (
    <div>
      <h1>Pagina para crear una nueva cuenta</h1>
    </div>
  )
}
