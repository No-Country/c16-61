'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { type CreateProperty } from '..'
import { client } from '@/libs/algolia'
import cloudinary from '@/libs/cloudinary'
import prisma from '@/libs/prisma'

export const createProperty = async (
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
  }, {}) as CreateProperty

  // format the data to be saved in the database
  // get image from formData
  const image = formData.get('img')
  let imageUrl: string | null = null

  if (!image) {
    return 'No se creo la propiedad, los datos no son válidos.'
  }

  if (image instanceof File) {
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // saved img to cloudinary
    const result: { secure_url: string } = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: 'imomubiales' }, (err, result) => {
        if (err) {
          reject(err)
        }

        if (result) {
          resolve({ secure_url: result.secure_url })
        }
      }).end(buffer)
    })

    // get the url of the image
    imageUrl = result.secure_url
  }

  const data: CreateProperty = {
    ...formDataObj,
    coveredArea: Number(formDataObj.coveredArea),
    totalLandArea: Number(formDataObj.totalLandArea),
    bathrooms: Number(formDataObj.bathrooms),
    bedrooms: Number(formDataObj.bedrooms),
    price: Number(formDataObj.price),
    img: imageUrl
  }

  const parsedProperty = z
    .object({
      name: z.string(),
      coveredArea: z.number().positive(), // m² cubiertos
      totalLandArea: z.number().positive(), // m² totales de terreno
      bathrooms: z.number().positive(), // cantidad de baños
      bedrooms: z.number().positive(), // cantidad de dormitorios
      price: z.number().positive(), // precio del inmueble
      img: z.string().url(), // imagen de la propiedad, asegúrate de que es una URL válida o null
      amenities: z.array(z.string()), // comodidades
      services: z.array(z.string()), // servicios
      nearbyPlaces: z.array(z.string()), // lugares de cercanía
      nearbyBusStops: z.array(z.string()) // paradas de colectivo cercanas
    })
    .safeParse(data)

  if (!parsedProperty.success) {
    return 'No se creo la propiedad, los datos no son válidos.'
  }

  const property = await prisma.property.create({
    data
  })

  const index = client.initIndex('properties')

  await index.saveObject({
    objectID: property.id,
    ...property
  })

  revalidatePath('/dashboard')
  redirect('/dashboard')
}
