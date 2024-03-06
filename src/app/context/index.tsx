'use client'
import { createContext, useContext, useState } from 'react'

const FeaturedPropertiesContext = createContext<any>({})

const AllPropertiesContext = createContext<any>({})

const QueryParamsContext = createContext<any>({})

export function AppWrapper ({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const [testArray, setTestArray] = useState([])

  const [allProperties, setAllProperties] = useState([])

  const [queryParams, setQueryParams] = useState({})

  return (
    <QueryParamsContext.Provider value={{ queryParams, setQueryParams }}>
        <AllPropertiesContext.Provider value={{ allProperties, setAllProperties }}>
            <FeaturedPropertiesContext.Provider value={{ testArray, setTestArray }}>
                {children}
            </FeaturedPropertiesContext.Provider>
        </AllPropertiesContext.Provider>
    </QueryParamsContext.Provider>
  )
}

export function useFeaturedPropertiesContext () {
  return useContext(FeaturedPropertiesContext)
}
export function useAllPropertiesContext () {
  return useContext(AllPropertiesContext)
}

export function useQueryParamsContext () {
  return useContext(QueryParamsContext)
}
