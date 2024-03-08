'use client'

import { useRouter } from 'next/navigation'
import Carousel from 'react-bootstrap/Carousel'
import style from './FeaturedProperties.module.css'
import { CarouselCard } from '@/UI/carouselCard/carouselCard'

export default function FeaturedProducts({ testArray }): JSX.Element {
  const router = useRouter()

  return (

    <main className={style.container}>
      <Carousel className={style.containerCarousel} data-bs-theme="dark" >
        {
          testArray.map((item, index) => (
            <Carousel.Item key={index} onClick={() => { router.push(`/product/f${item.property.id}`) }}>
              <CarouselCard item={item.property}></CarouselCard>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </main>

  )
}
