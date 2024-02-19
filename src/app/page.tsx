"use client"
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { useAppContext } from "./context";
import { SearchBar } from "@/components/SearchBar/SearchBar"
import styles from "./page.module.css"

import { useEffect } from 'react';

interface Product {
  nombre: string;
  precio: number;
  src: string;
  habitacion: number;
  baños: number;
  id: number;
  coverArea:string;
  rating:number;
  nearbyBusStop: number;
  nearbyPlaces: number;
}



export default function HomePage(): JSX.Element {
  
  const testArrayPrueba: Product[] = [{ nombre: "Alquiler destacado 1 ", precio: 1000, src: "https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house1.jpg?alt=media&token=51a05d54-9be7-4534-8ed4-fb3ca2733f72", habitacion: 3, baños: 2, id:1, coverArea:"5km", rating:5,nearbyBusStop:2, nearbyPlaces: 3 },
  { nombre: "Alquiler destacado 2 ", precio: 2000, src: "https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house2.jpg?alt=media&token=fb466f42-8b7e-4525-bf09-67dece75320e", habitacion: 2, baños: 1, id:2, coverArea:"2km",rating:5,nearbyBusStop:1, nearbyPlaces: 3 }, 
  { nombre: "Alquiler destacado 3 ", precio: 3000, src: "https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/house3.jpg?alt=media&token=6a24c877-37eb-447a-8552-33cff8b5688e", habitacion: 4, baños: 2, id:3, coverArea:"4km",rating:5,nearbyBusStop:2, nearbyPlaces: 2 },]


  const context = useAppContext()


  useEffect(() => {

    context.setTestArray(testArrayPrueba)

  }, [])




  return (

    <div>
      <section className={styles.title} >
        <h1>Inmobiliaria</h1>
        <SearchBar />
      </section>
      <FeaturedProducts testArray={context.testArray} />
    </div>


  )
}