import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { client } from '@/libs/algolia'
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
        password: bcrypt.hashSync('admin')
      },
      {
        id: '618c01ea-fc81-4ac3-a6b3-bf07d87e607e',
        email: 'user1@mail.com',
        name: 'Usuario 1',
        password: bcrypt.hashSync('user1')
      }
    ]
  }
  )

  // Crear propiedades de prueba
  await prisma.property.createMany({
    data: [
      {
        id: '26d0a232-63c5-4cd4-a388-a047580e95f7',
        name: 'Casa en venta en barrio cerrado',
        coveredArea: 120.5,
        totalLandArea: 200.0,
        bathrooms: 2,
        bedrooms: 3,
        price: 250000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house2.jpg?alt=media&token=fb466f42-8b7e-4525-bf09-67dece75320e',
        amenities: ['Jardín', 'Piscina'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
        nearbyPlaces: ['Escuela Primaria', 'Estación de Servicio'],
        nearbyBusStops: ['Parada 1', 'Parada 2']
      },
      {
        id: '2e0944b0-e9e3-41f9-b450-89bcac180142',
        name: 'Casa en venta Fenix',
        coveredArea: 120.5,
        totalLandArea: 200.0,
        bathrooms: 2,
        bedrooms: 3,
        price: 250000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house3.jpg?alt=media&token=6a24c877-37eb-447a-8552-33cff8b5688e',
        amenities: ['Jardín', 'Piscina'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
        nearbyPlaces: ['Escuela Primaria', 'Estación de Servicio'],
        nearbyBusStops: ['Parada 1', 'Parada 2']
      },
      {
        id: '2e0944b0-e9e3-41f9-b450-89bcac180143',
        name: 'Casa en venta en Puebla',
        coveredArea: 95.0,
        totalLandArea: 150.0,
        bathrooms: 1,
        bedrooms: 2,
        price: 180000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house1.jpg?alt=media&token=51a05d54-9be7-4534-8ed4-fb3ca2733f72',
        amenities: ['Terraza'],
        services: ['Agua corriente', 'Luz', 'Internet'],
        nearbyPlaces: ['Supermercado', 'Parque Central'],
        nearbyBusStops: ['Parada 3']
      }
    ]
  })

  // crear calificaciones de prueba
  const propertyIds = ['26d0a232-63c5-4cd4-a388-a047580e95f7', '2e0944b0-e9e3-41f9-b450-89bcac180143', '2e0944b0-e9e3-41f9-b450-89bcac180142']

  const userIds = ['218da11a-3790-4040-b1f0-d5e6de9d5250', '618c01ea-fc81-4ac3-a6b3-bf07d87e607e']

  const ratingsData: CreatePropertyRating[] = []

  // Crear propiedaes en algolia tambien
  const index = client.initIndex('properties')

  await index.saveObjects([
    {
      objectID: 'myID1',
      id: '26d0a232-63c5-4cd4-a388-a047580e95f7',
      name: 'Casa en venta en barrio cerrado',
      coveredArea: 120.5,
      totalLandArea: 200.0,
      bathrooms: 2,
      bedrooms: 3,
      price: 250000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house2.jpg?alt=media&token=fb466f42-8b7e-4525-bf09-67dece75320e',
      amenities: ['Jardín', 'Piscina'],
      services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
      nearbyPlaces: ['Escuela Primaria', 'Estación de Servicio'],
      nearbyBusStops: ['Parada 1', 'Parada 2']
    },
    {
      objectID: 'myID2',
      id: '2e0944b0-e9e3-41f9-b450-89bcac180142',
      name: 'Casa en venta Fenix',
      coveredArea: 120.5,
      totalLandArea: 200.0,
      bathrooms: 2,
      bedrooms: 3,
      price: 250000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house3.jpg?alt=media&token=6a24c877-37eb-447a-8552-33cff8b5688e',
      amenities: ['Jardín', 'Piscina'],
      services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
      nearbyPlaces: ['Escuela Primaria', 'Estación de Servicio'],
      nearbyBusStops: ['Parada 1', 'Parada 2']
    },
    {
      objectID: 'myID3',
      id: '2e0944b0-e9e3-41f9-b450-89bcac180143',
      name: 'Casa en venta en Puebla',
      coveredArea: 95.0,
      totalLandArea: 150.0,
      bathrooms: 1,
      bedrooms: 2,
      price: 180000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house1.jpg?alt=media&token=51a05d54-9be7-4534-8ed4-fb3ca2733f72',
      amenities: ['Terraza'],
      services: ['Agua corriente', 'Luz', 'Internet'],
      nearbyPlaces: ['Supermercado', 'Parque Central'],
      nearbyBusStops: ['Parada 3']
    }
  ])

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
