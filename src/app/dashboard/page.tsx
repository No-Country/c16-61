import { redirect } from 'next/navigation'
import { getUserSessionServer } from '@/auth'
import { PropertiesGrid } from '@/components'
import prisma from '@/libs/prisma'
import { ButtonAddProperty } from '@/properties'

const DashboardPage = async () => {
  const user = await getUserSessionServer()
  const isAdmin = user?.roles?.includes('admin')

  if (!isAdmin) redirect('/')

  const properties = await prisma.property.findMany()

  return (
    <div>
      <h1>Panel de administrador</h1>
      <p>Bienvenido al panel de administrador.</p>

      <ButtonAddProperty />

      <PropertiesGrid properties={properties} />
    </div>
  )
}

export default DashboardPage
