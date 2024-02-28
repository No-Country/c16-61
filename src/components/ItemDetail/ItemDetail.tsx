import { useParams } from 'next/navigation'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import style from './ItemDetail.module.css'

import { useFeaturedPropertiesContext } from '@/app/context'
/* interface Product {
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
} */

export default function ItemDetail() {
  const context = useFeaturedPropertiesContext()
  const id = useParams().id

  const item: any = context.testArray.find((item: any) => {
    return item.property.id === id
  })

  const {
    img,
    bedrooms,
    bathrooms,
    price,
    name,
    coveredArea,
    nearbyBusStops
  } = item.property

  return (
    <article className={style.containerCard}>
      <Card className={style.card}>
        <div className={style.contenedorPhoto}>
          <Card.Img
            className={style.photoDetail}
            variant="left"
            alt="casa"
            src={img}
          />
        </div>
        <Card.Body className={style.cardBody}>
          <Card.Title className={style.title}>{name} </Card.Title>
          <h3>${price} </h3>
          <Card.Text className={style.icons}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bathfilled.svg?alt=media&token=78b7c5a4-289c-4c87-b0e4-f395f3c31add"
              alt="baños"
            />
            <span>{bathrooms}</span>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bedfilled.svg?alt=media&token=81a6b35c-fc50-45be-a04f-c77da8110356"
              alt="habtaciones"
            />
            <span>{bedrooms}</span>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/coverarea.svg?alt=media&token=bfaf3f49-8f05-4826-8e45-0dc7eb55f8ce"
              alt="area-cubierta"
            />
            <span>{coveredArea}km2</span>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/busstop.svg?alt=media&token=bc4ff7fd-ad7d-4bfd-b4b1-2c8cdf1a4ff0"
              alt="paradas-bus"
            />
            <span>{nearbyBusStops.length}</span>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/starfilled.svg?alt=media&token=893b2383-fd89-4cf6-b492-9011ff74485e"
              alt="rating"
            />
            <span>{item.rating}</span>
          </Card.Text>
          <Button className={style.buttons} variant="primary">
            Añadir a favoritos
          </Button>
          <Button className={style.buttons} variant="primary">
            Puntuar
          </Button>
        </Card.Body>
      </Card>
    </article>
  )
}
