'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/libs/prisma'

interface ResponseDeleteProperty {
  message: string
}

export const deleteProperty = async (
  id: string
): Promise<ResponseDeleteProperty> => {
  await prisma.property.delete({
    where: { id }
  })

  revalidatePath('/dashboard')
  return { message: 'Deleted property.' }
}
