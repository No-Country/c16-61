import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagina de propiedades',
  description: 'Contiene la lista de las propiedades de la aplicacion'
}

export default async function UsersPage() {
  return (
    <div>
      <h1>Aquí va el contenido de la pagina propiedades</h1>
    </div>
  )
}
