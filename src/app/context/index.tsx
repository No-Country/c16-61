"use client"
import { createContext, useContext, useState } from 'react'

const AppContext = createContext<any>({})

export function AppWrapper({ children }: Readonly<{
    children: React.ReactNode
  }>) {
    const [testArray, setTestArray] = useState([])

    return (
        <AppContext.Provider value={{ testArray, setTestArray }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}