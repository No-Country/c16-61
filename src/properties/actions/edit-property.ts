'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import prisma from '@/libs/prisma'
import { type UpdateProperty } from '@/properties'

export const editProperty = async (
  id: string,
  prevState: string | undefined,
  formData: FormData
): Promise<string> => {
  const fieldsWithMultipleValues = ['amenities', 'services', 'nearbyPlaces', 'nearbyBusStops']

  const formDataObj = Array.from(formData.entries()).reduce((acc, [key, value]) => {
    // Directly add the value for non-multivalued fields
    if (!fieldsWithMultipleValues.includes(key)) {
      acc[key] = value
      return acc
    }

    // Initialize the field as an empty array if it does not already exist and add the value
    acc[key] = acc[key] || []
    acc[key].push(value)

    return acc
  }, {}) as UpdateProperty

  // format the data to be saved in the database
  const data: UpdateProperty = {
    ...formDataObj,
    coveredArea: Number(formDataObj.coveredArea),
    totalLandArea: Number(formDataObj.totalLandArea),
    bathrooms: Number(formDataObj.bathrooms),
    bedrooms: Number(formDataObj.bedrooms),
    price: Number(formDataObj.price)
  }

  const parsedProperty = z
    .object({
      name: z.string(),
      coveredArea: z.number().positive(), // m² cubiertos
      totalLandArea: z.number().positive(), // m² totales de terreno
      bathrooms: z.number().positive(), // cantidad de baños
      bedrooms: z.number().positive(), // cantidad de dormitorios
      price: z.number().positive(), // precio del inmueble
      img: z.string().url().nullable().optional(), // imagen de la propiedad, asegúrate de que es una URL válida o null
      amenities: z.array(z.string()), // comodidades
      services: z.array(z.string()), // servicios
      nearbyPlaces: z.array(z.string()), // lugares de cercanía
      nearbyBusStops: z.array(z.string()) // paradas de colectivo cercanas
    })
    .safeParse(data)

  if (!parsedProperty.success) {
    return 'No se actualizo la propiedad, los datos no son válidos.'
  }

  await prisma.property.update({
    where: { id },
    data
  })

  revalidatePath('/dashboard')
  redirect('/dashboard')
}
