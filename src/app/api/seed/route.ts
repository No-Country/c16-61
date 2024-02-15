import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'
import { type CreatePropertyRating } from '@/properties-raking'

export async function GET() {
  // DELETE ALL data
  await prisma.propertyRating.deleteMany()
  await prisma.user.deleteMany()
  await prisma.property.deleteMany()

  // Crear usuarios de prueba
  await prisma.user.createMany({
    data: [
      {
        id: '218da11a-3790-4040-b1f0-d5e6de9d5250',
        email: 'admin@mail.com',
        name: 'Administrador',
        password: '123456'
      },
      {
        id: '618c01ea-fc81-4ac3-a6b3-bf07d87e607e',
        email: 'user1@mail.com',
        name: 'Usuario 1',
        password: '123456'
      }
    ]
  }
  )

  // Crear propiedades de prueba
  await prisma.property.createMany({
    data: [
      {
        id: '26d0a232-63c5-4cd4-a388-a047580e95f7',
        coveredArea: 120.5,
        totalLandArea: 200.0,
        bathrooms: 2,
        bedrooms: 3,
        price: 250000,
        img: 'https://repstaticneu.azureedge.net/images/2003/L/WM/Large/7a9d1c70-1d58-45c4-a4ce-a2d1345f3759-4161ac81-1a33-461d-9cf2-f9e03859b301.jpg',
        amenities: ['Jardín', 'Piscina'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
        nearbyPlaces: ['Escuela Primaria', 'Estación de Servicio'],
        nearbyBusStops: ['Parada 1', 'Parada 2']
      },
      {
        id: '2e0944b0-e9e3-41f9-b450-89bcac180143',
        coveredArea: 95.0,
        totalLandArea: 150.0,
        bathrooms: 1,
        bedrooms: 2,
        price: 180000,
        img: 'https://repstaticneu.azureedge.net/images/2003/L/WM/Large/4c4cbe3f-3211-457a-9ceb-359c25838c96-d85b11c2-dfeb-4d60-94b1-e38aeccb4502.jpg',
        amenities: ['Terraza'],
        services: ['Agua corriente', 'Luz', 'Internet'],
        nearbyPlaces: ['Supermercado', 'Parque Central'],
        nearbyBusStops: ['Parada 3']
      }
    ]
  })

  // crear calificaciones de prueba
  const propertyIds = ['26d0a232-63c5-4cd4-a388-a047580e95f7', '2e0944b0-e9e3-41f9-b450-89bcac180143']

  const userIds = ['218da11a-3790-4040-b1f0-d5e6de9d5250', '618c01ea-fc81-4ac3-a6b3-bf07d87e607e']

  const ratingsData: CreatePropertyRating[] = []

  // Aquí generamos datos de calificación para cada combinación de propiedad y usuario.
  propertyIds.forEach((propertyId) => {
    userIds.forEach((userId, index) => {
      ratingsData.push({
        propertyId,
        userId,
        rating: (index % 5) + 1, // Esto asignará una calificación del 1 al 5
        comment: `Comentario de prueba para la propiedad ${propertyId} por el usuario ${userId}`
      })
    })
  })

  // Inserta los datos generados en la base de datos.
  if (ratingsData.length > 0) {
    await prisma.propertyRating.createMany({
      data: ratingsData
    })
  }
  return NextResponse.json({ message: 'Executed seeded' })
}
