"use client"

import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts"
import {SearchBar} from "@/components/SearchBar/SearchBar"
import styles from "./page.module.css"

import { createContext, useContext } from 'react';

interface Product {
  nombre: string;
  precio: number;
  src: string;
  habitacion: number;
  baños: number;
  id: number;
}

const testArray: Product[] = [{ nombre: "Alquiler destacado 1 ", precio: 1000, src: "./house1.jpg", habitacion: 3, baños: 2, id:1 },
{ nombre: "Alquiler destacado 2 ", precio: 2000, src: "./house2.jpg", habitacion: 2, baños: 1, id:2 }, 
{ nombre: "Alquiler destacado 3 ", precio: 3000, src: "./house3.jpg", habitacion: 4, baños: 2, id:3 },]

export const FeaturedProductsContext = createContext(testArray);

export default function HomePage(): JSX.Element {

 const prueba = useContext(FeaturedProductsContext);

  return (
    <FeaturedProductsContext.Provider value={testArray}>
      <main>
        <section className={styles.title} >
          <h1>Inmobiliaria</h1>
          <SearchBar />
        </section>
        <FeaturedProducts testArray={testArray} />
      </main>
    </FeaturedProductsContext.Provider>

  )
}