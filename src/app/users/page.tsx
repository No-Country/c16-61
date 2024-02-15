import type { Metadata } from 'next'
import prisma from '@/libs/prisma'
import { UsersGrid } from '@/users'

export const metadata: Metadata = {
  title: 'Pagina de usuarios',
  description: 'Contiene la lista de usuarios de la aplicacion'
}

export default async function UsersPage() {
  const users = await prisma.user.findMany()

  return (
    <div>
      <UsersGrid users={users} />
    </div>
  )
}
