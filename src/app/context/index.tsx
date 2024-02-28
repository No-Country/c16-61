'use client'
import { createContext, useContext, useState } from 'react'

const FeaturedPropertiesContext = createContext<any>({})

const AllPropertiesContext = createContext<any>({})

export function AppWrapper ({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const [testArray, setTestArray] = useState([])

  const [allProperties, setAllProperties] = useState([])

  return (
        <AllPropertiesContext.Provider value={{ allProperties, setAllProperties }}>
            <FeaturedPropertiesContext.Provider value={{ testArray, setTestArray }}>
                {children}
            </FeaturedPropertiesContext.Provider>
        </AllPropertiesContext.Provider>
  )
}

export function useFeaturedPropertiesContext () {
  return useContext(FeaturedPropertiesContext)
}
export function useAllPropertiesContext () {
  return useContext(AllPropertiesContext)
}
