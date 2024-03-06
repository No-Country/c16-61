import { notFound } from 'next/navigation'
import prisma from '@/libs/prisma'

const fetchPropertyById = async (id: string) => {
  const property = await prisma.property.findUnique({
    where: { id }
  })

  if (!property) {
    notFound()
  }

  return property
}

export default fetchPropertyById
