'use client'
import { useEffect } from 'react'
import { useFeaturedPropertiesContext, useAllPropertiesContext } from './context'
import styles from './page.module.css'
import FeaturedProducts from '@/components/FeaturedProperties/FeaturedProperties'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { SearchResult } from '@/components/SearchResult/SearchResult'

interface Product {
  nombre: string
  precio: number
  src: string
  habitacion: number
  baños: number
  id: number
  coverArea: string
  rating: number
  nearbyBusStop: number
  nearbyPlaces: number
}

export default function HomePage (): JSX.Element {
  const testArrayPrueba: Product[] = [{ nombre: 'Alquiler destacado 1 ', precio: 1000, src: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house1.jpg?alt=media&token=51a05d54-9be7-4534-8ed4-fb3ca2733f72', habitacion: 3, baños: 2, id: 1, coverArea: '5km', rating: 5, nearbyBusStop: 2, nearbyPlaces: 3 },
    { nombre: 'Alquiler destacado 2 ', precio: 2000, src: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house2.jpg?alt=media&token=fb466f42-8b7e-4525-bf09-67dece75320e', habitacion: 2, baños: 1, id: 2, coverArea: '2km', rating: 5, nearbyBusStop: 1, nearbyPlaces: 3 },
    { nombre: 'Alquiler destacado 3 ', precio: 3000, src: 'https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house3.jpg?alt=media&token=6a24c877-37eb-447a-8552-33cff8b5688e', habitacion: 4, baños: 2, id: 3, coverArea: '4km', rating: 5, nearbyBusStop: 2, nearbyPlaces: 2 }]

  const contextFeaturedProperties = useFeaturedPropertiesContext()
  const contextAllProperties = useAllPropertiesContext()

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/featured-properties')
        const data = await response.json()

        contextAllProperties.setAllProperties(testArrayPrueba)

        const newArray = [] as any
        for (let index = 0; index < 3; index++) {
          newArray.push(data[index])
        }
        contextFeaturedProperties.setTestArray(newArray)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchDatos()
  }, [])

  return (

    <div>
      <section className={styles.title} >
        <h1>Inmobiliaria</h1>
        <SearchBar testArray={contextFeaturedProperties.testArray} />
      </section>
      <FeaturedProducts testArray={contextFeaturedProperties.testArray} />
    </div>

  )
}
