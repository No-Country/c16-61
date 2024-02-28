import { NextResponse } from 'next/server'
import * as yup from 'yup'
import prisma from '@/libs/prisma'

const postSchema = yup.object({
  name: yup.string().required(), // nombre de la propiedad
  coveredArea: yup.number().positive().required(), // m² cubiertos
  totalLandArea: yup.number().positive().required(), // m² totales de terreno
  bathrooms: yup.number().integer().positive().required(), // cantidad de baños
  bedrooms: yup.number().integer().positive().required(), // cantidad de dormitorios
  price: yup.number().positive().required(), // precio del inmueble
  img: yup.string().url().nullable(), // imagen de la propiedad, asegúrate de que es una URL válida o null
  amenities: yup.array().required(), // comodidades
  services: yup.array().required(), // servicios
  nearbyPlaces: yup.array().required(), // lugares de cercanía
  nearbyBusStops: yup.array().required() // paradas de colectivo cercanas
})

export async function GET (request: Request) {
  const properties = await prisma.property.findMany()

  return NextResponse.json(properties)
}

export async function POST (request: Request) {
  try {
    const body = await postSchema.validate(await request.json())

    const property = await prisma.property.create({
      data: body
    })
    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
