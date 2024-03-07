'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFeaturedPropertiesContext } from './context'
import styles from './page.module.css'
import FeaturedProducts from '@/components/FeaturedProperties/FeaturedProperties'
import { SearchBar } from '@/components/SearchBar/SearchBar'

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

export default function HomePage(): JSX.Element {
  const contextFeaturedProperties = useFeaturedPropertiesContext()
  const router = useRouter()

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/featured-properties')
        const data = await response.json()
        const newArray = [] as any
        for (let index = 0; index < 3; index++) {
          if(data[index] === undefined){
            break
          }
            
          newArray.push(data[index])
        }
        contextFeaturedProperties.setTestArray(newArray)
      } catch (error) {
        throw new Error('Error al cargar los datos')
      }
    }

    fetchDatos()
  }, [])

  return (
    <div>
      <section className={styles.title} >
        <h1>Imomubiales S.A.</h1>
        <SearchBar testArray={contextFeaturedProperties.testArray} router={router} />
      </section>
      <FeaturedProducts testArray={contextFeaturedProperties.testArray} />
    </div>
  )
}
