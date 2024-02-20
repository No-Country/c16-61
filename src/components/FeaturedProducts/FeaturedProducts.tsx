"use client"

import Carousel from 'react-bootstrap/Carousel';
import { CarouselCard } from '@/UI/carouselCard/carouselCard';
import style from "./FeaturedProducts.module.css"

import { useRouter } from 'next/navigation'
import { createContext, useContext } from 'react';




export default function FeaturedProducts({testArray}): JSX.Element {
  

  const router = useRouter()
                     
  return (

      <main className={style.container}>
        <Carousel className={style.containerCarousel} >
          {testArray.map((item, index) => (
            <Carousel.Item key={index} onClick={()=>{ router.push(`/product/${item.id}`)}}>
              <CarouselCard item={item}></CarouselCard>
            </Carousel.Item>
          ))}
        </Carousel>
      </main>

  )
}