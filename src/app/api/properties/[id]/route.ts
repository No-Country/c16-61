import { type Property } from '@prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import * as yup from 'yup'
import prisma from '@/libs/prisma'

interface paramsProperty {
  params: {
    id: string
  }
}

const getProperty = async (id: string): Promise<Property | null> => {
  const property = await prisma.property.findFirst({ where: { id } })
  return property
}

export async function GET (request: NextRequest, { params }: paramsProperty) {
  const { id } = params

  try {
    const property = await getProperty(id)

    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 })
    }

    return NextResponse.json(property)
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

const putSchema = yup.object({
  coveredArea: yup.number().positive().optional(), // m² cubiertos
  totalLandArea: yup.number().positive().optional(), // m² totales de terreno
  bathrooms: yup.number().integer().positive().optional(), // cantidad de baños
  bedrooms: yup.number().integer().positive().optional(), // cantidad de dormitorios
  price: yup.number().positive().optional(), // precio del inmueble
  img: yup.string().url().nullable(), // imagen de la propiedad, asegúrate de que es una URL válida o null
  amenities: yup.array().optional(), // comodidades
  services: yup.array().optional(), // servicios
  nearbyPlaces: yup.array().optional(), // lugares de cercanía
  nearbyBusStops: yup.array().optional() // paradas de colectivo cercanas
})

export async function PUT (request: NextRequest, { params }: paramsProperty) {
  const { id } = params

  try {
    const property = await getProperty(id)

    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 })
    }

    const { nearbyPlaces, nearbyBusStops, coveredArea, totalLandArea, bathrooms, bedrooms, price, img, amenities, services } = await putSchema.validate(await request.json())

    const updatedProperty = await prisma.property.update({
      where: { id },
      data: { nearbyPlaces, nearbyBusStops, coveredArea, totalLandArea, bathrooms, bedrooms, price, img, amenities, services }
    })

    return NextResponse.json(updatedProperty)
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
