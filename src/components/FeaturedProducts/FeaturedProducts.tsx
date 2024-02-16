"use client"

import Carousel from 'react-bootstrap/Carousel';
import { CarouselCard } from '@/UI/carouselCard';
import style from "./FeaturedProducts.module.css"
export default function FeaturedProducts() {

  const testArray = [{ nombre: "Alquiler destacado 1 ", precio: 1000, src: "./house1.jpg", habitacion: 3, baños: 2 },
                     { nombre: "Alquiler destacado 2 ", precio: 2000, src: "./house2.jpg", habitacion: 2, baños: 1 }, 
                     { nombre: "Alquiler destacado 3 ", precio: 3000, src: "./house3.jpg", habitacion: 4, baños: 2 },]
                     
  return (
    <main className={style.container}>
      <Carousel className={style.containerCarousel} onClick={( )=>{console.log("click");
      }} style={{ width: "80%", height: "292px" }}>
        {testArray.map((item, index) => (
          <Carousel.Item key={index}>
            <CarouselCard item={item}></CarouselCard>
          </Carousel.Item>
        ))}
      </Carousel>
    </main>
  )
}