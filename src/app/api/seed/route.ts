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

  // algolia
  const index = client.initIndex('properties')
  // clean Algolia index before starting seeding new data
  await index.clearObjects()

  // Crear usuarios de prueba
  await prisma.user.createMany({
    data: [
      {
        id: '218da11a-3790-4040-b1f0-d5e6de9d5250',
        email: 'admin@mail.com',
        name: 'Administrador',
        password: bcrypt.hashSync('admin123'),
        roles: 'admin'
      },
      {
        id: '618c01ea-fc81-4ac3-a6b3-bf07d87e607e',
        email: 'user1@mail.com',
        name: 'Usuario 1',
        password: bcrypt.hashSync('user01')
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
      },
      {
        id: '4e021ab1-8221-4bfd-b1d2-5e3456d78901',
        name: 'Departamento en venta en Zona Norte',
        coveredArea: 85.0,
        totalLandArea: 0.0, // Asumiendo que es un departamento y no cuenta con terreno adicional
        bathrooms: 1,
        bedrooms: 2,
        price: 190000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/apt1.jpg?alt=media&token=a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        amenities: ['Gimnasio', 'Seguridad 24 horas'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
        nearbyPlaces: ['Centro Comercial', 'Gimnasio'],
        nearbyBusStops: ['Parada 4', 'Parada 5']
      },
      {
        id: '5f633aab-c3a4-48ed-8a67-7e1234567890',
        name: 'Casa en venta en Solares',
        coveredArea: 150.0,
        totalLandArea: 250.0,
        bathrooms: 3,
        bedrooms: 4,
        price: 320000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house4.jpg?alt=media&token=a7b8c9d0-e1f2-g3h4-i5j6-k7l8m9n0o1p2',
        amenities: ['Jardín', 'Piscina', 'Terraza'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet', 'Seguridad privada'],
        nearbyPlaces: ['Escuela Secundaria', 'Hospital'],
        nearbyBusStops: ['Parada 6', 'Parada 7']
      },
      {
        id: '6a789abc-d1e2-f3g4-h5i6-j7k8l9m0n1o2',
        name: 'Penthouse de lujo en Centro',
        coveredArea: 200.0,
        totalLandArea: 0.0,
        bathrooms: 2,
        bedrooms: 3,
        price: 450000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/penthouse1.jpg?alt=media&token=a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
        amenities: ['Vista panorámica', 'Acceso a rooftop', 'Piscina'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet', 'Servicio de limpieza'],
        nearbyPlaces: ['Teatro', 'Restaurantes de lujo'],
        nearbyBusStops: ['Parada 8']
      },
      {
        id: '7b890def-g1h2-i3j4-k5l6-m7n8o9p0q1r2',
        name: 'Casa de campo en Las Montañas',
        coveredArea: 180.0,
        totalLandArea: 500.0,
        bathrooms: 2,
        bedrooms: 3,
        price: 275000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/countryhouse1.jpg?alt=media&token=b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6',
        amenities: ['Jardín amplio', 'Vista a la montaña'],
        services: ['Agua de pozo', 'Luz', 'Internet por satélite'],
        nearbyPlaces: ['Parque Nacional', 'Lago'],
        nearbyBusStops: ['Parada de Montaña 1']
      },
      {
        id: '8c901ghi-j2k3-l4m5-n6o7-p8q9r0s1t2u3',
        name: 'Loft moderno en el centro',
        coveredArea: 100.0,
        totalLandArea: 0.0,
        bathrooms: 1,
        bedrooms: 1,
        price: 210000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/loft1.jpg?alt=media&token=d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
        amenities: ['Estilo industrial', 'Cocina americana'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
        nearbyPlaces: ['Mercado local', 'Cafeterías'],
        nearbyBusStops: ['Parada 9', 'Parada 10']
      },
      {
        id: '9d0123ef-g4h5-i6j7-k8l9-m0n1o2p3q4r5',
        name: 'Villa de lujo en Costa del Sol',
        coveredArea: 300.0,
        totalLandArea: 800.0,
        bathrooms: 4,
        bedrooms: 5,
        price: 750000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/villa1.jpg?alt=media&token=f1g2h3i4-j5k6-l7m8-n9o0-p1q2r3s4t5u6',
        amenities: ['Frente al mar', 'Jardín', 'Piscina infinita'],
        services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet', 'Seguridad 24 horas'],
        nearbyPlaces: ['Club de playa', 'Campo de golf'],
        nearbyBusStops: ['Parada de Costa 1']
      },
      {
        id: '0a1234bc-d5e6-f7g8-h9i0-j1k2l3m4n5o6',
        name: 'Apartamento en zona universitaria',
        coveredArea: 60.0,
        totalLandArea: 0.0,
        bathrooms: 1,
        bedrooms: 1,
        price: 130000,
        img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/apartment1.jpg?alt=media&token=g1h2i3j4-k5l6-m7n8-o9p0-q1r2s3t4u5v6',
        amenities: ['Cerca de la universidad', 'Balcón'],
        services: ['Agua corriente', 'Luz', 'Internet'],
        nearbyPlaces: ['Biblioteca', 'Cafeterías', 'Supermercado'],
        nearbyBusStops: ['Parada Universitaria 1', 'Parada Universitaria 2']
      }
    ]
  })

  // crear calificaciones de prueba
  const propertyIds = ['26d0a232-63c5-4cd4-a388-a047580e95f7', '2e0944b0-e9e3-41f9-b450-89bcac180143', '2e0944b0-e9e3-41f9-b450-89bcac180142', '4e021ab1-8221-4bfd-b1d2-5e3456d78901',
    '5f633aab-c3a4-48ed-8a67-7e1234567890',
    '6a789abc-d1e2-f3g4-h5i6-j7k8l9m0n1o2',
    '7b890def-g1h2-i3j4-k5l6-m7n8o9p0q1r2',
    '8c901ghi-j2k3-l4m5-n6o7-p8q9r0s1t2u3',
    '9d0123ef-g4h5-i6j7-k8l9-m0n1o2p3q4r5',
    '0a1234bc-d5e6-f7g8-h9i0-j1k2l3m4n5o6']

  const userIds = ['218da11a-3790-4040-b1f0-d5e6de9d5250', '618c01ea-fc81-4ac3-a6b3-bf07d87e607e']

  const ratingsData: CreatePropertyRating[] = []

  // Crear propiedaes en algolia tambien
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
    },
    {
      objectID: 'myID4',
      id: '4e021ab1-8221-4bfd-b1d2-5e3456d78901',
      name: 'Departamento en venta en Zona Norte',
      coveredArea: 85.0,
      totalLandArea: 0.0, // Asumiendo que es un departamento y no cuenta con terreno adicional
      bathrooms: 1,
      bedrooms: 2,
      price: 190000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/29624-00.jpg?alt=media&token=5d4806f2-9195-4467-a0dc-b2ee44e91659',
      amenities: ['Gimnasio', 'Seguridad 24 horas'],
      services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
      nearbyPlaces: ['Centro Comercial', 'Gimnasio'],
      nearbyBusStops: ['Parada 4', 'Parada 5']
    },
    {
      objectID: 'myID5',
      id: '5f633aab-c3a4-48ed-8a67-7e1234567890',
      name: 'Casa en venta en Solares',
      coveredArea: 150.0,
      totalLandArea: 250.0,
      bathrooms: 3,
      bedrooms: 4,
      price: 320000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/31642-00.jpg?alt=media&token=aa3f8961-474f-4c45-b99a-6c74b381e553',
      amenities: ['Jardín', 'Piscina', 'Terraza'],
      services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet', 'Seguridad privada'],
      nearbyPlaces: ['Escuela Secundaria', 'Hospital'],
      nearbyBusStops: ['Parada 6', 'Parada 7']
    },
    {
      objectID: 'myID6',
      id: '6a789abc-d1e2-f3g4-h5i6-j7k8l9m0n1o2',
      name: 'Penthouse de lujo en Centro',
      coveredArea: 200.0,
      totalLandArea: 0.0,
      bathrooms: 2,
      bedrooms: 3,
      price: 450000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/33762-00.webp?alt=media&token=ef39242d-25a0-4eca-a640-a3e577ae4821',
      amenities: ['Vista panorámica', 'Acceso a rooftop', 'Piscina'],
      services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet', 'Servicio de limpieza'],
      nearbyPlaces: ['Teatro', 'Restaurantes de lujo'],
      nearbyBusStops: ['Parada 8']
    },
    {
      objectID: 'myID7',
      id: '7b890def-g1h2-i3j4-k5l6-m7n8o9p0q1r2',
      name: 'Casa de campo en Las Montañas',
      coveredArea: 180.0,
      totalLandArea: 500.0,
      bathrooms: 2,
      bedrooms: 3,
      price: 275000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/33840-00.jpg?alt=media&token=b2f259f4-6372-4d09-aa3e-c9290e6365e3',
      amenities: ['Jardín amplio', 'Vista a la montaña'],
      services: ['Agua de pozo', 'Luz', 'Internet por satélite'],
      nearbyPlaces: ['Parque Nacional', 'Lago'],
      nearbyBusStops: ['Parada de Montaña 1']
    },
    {
      objectID: 'myID8',
      id: '8c901ghi-j2k3-l4m5-n6o7-p8q9r0s1t2u3',
      name: 'Loft moderno en el centro',
      coveredArea: 100.0,
      totalLandArea: 0.0,
      bathrooms: 1,
      bedrooms: 1,
      price: 210000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/35863-00.jpg?alt=media&token=5fadad28-3e4a-4061-b377-10b14d837c64',
      amenities: ['Estilo industrial', 'Cocina americana'],
      services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet'],
      nearbyPlaces: ['Mercado local', 'Cafeterías'],
      nearbyBusStops: ['Parada 9', 'Parada 10']
    },
    {
      objectID: 'myID9',
      id: '9d0123ef-g4h5-i6j7-k8l9-m0n1o2p3q4r5',
      name: 'Villa de lujo en Costa del Sol',
      coveredArea: 300.0,
      totalLandArea: 800.0,
      bathrooms: 4,
      bedrooms: 5,
      price: 750000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/35940-00.jpg?alt=media&token=eb7a1c23-63f7-4a03-aa82-705acc027260',
      amenities: ['Frente al mar', 'Jardín', 'Piscina infinita'],
      services: ['Agua corriente', 'Luz', 'Gas natural', 'Internet', 'Seguridad 24 horas'],
      nearbyPlaces: ['Club de playa', 'Campo de golf'],
      nearbyBusStops: ['Parada de Costa 1']
    },
    {
      objectID: 'myID10',
      id: '0a1234bc-d5e6-f7g8-h9i0-j1k2l3m4n5o6',
      name: 'Apartamento en zona universitaria',
      coveredArea: 60.0,
      totalLandArea: 0.0,
      bathrooms: 1,
      bedrooms: 1,
      price: 130000,
      img: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/35940-00.jpg?alt=media&token=eb7a1c23-63f7-4a03-aa82-705acc027260',
      amenities: ['Cerca de la universidad', 'Balcón'],
      services: ['Agua corriente', 'Luz', 'Internet'],
      nearbyPlaces: ['Biblioteca', 'Cafeterías', 'Supermercado'],
      nearbyBusStops: ['Parada Universitaria 1', 'Parada Universitaria 2']
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
