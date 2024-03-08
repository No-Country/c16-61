'use client'

import { useEffect } from 'react'
import { useFeaturedPropertiesContext } from '../context'
import { SearchBar } from '@/components/SearchBar/SearchBar'

export default function Search(router): JSX.Element {
  const contextFeaturedProperties = useFeaturedPropertiesContext()

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch('/api/featured-properties')
        const data = await response.json()
        const newArray = [] as any
        for (let index = 0; index < 3; index++) {
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
      <SearchBar testArray={contextFeaturedProperties.testArray} router={router} initialShowResults={true}></SearchBar>
    </div>
  )
}
