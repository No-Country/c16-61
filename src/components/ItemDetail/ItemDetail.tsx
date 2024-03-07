'use client'

import { useParams } from 'next/navigation'
import Card from 'react-bootstrap/Card'
import style from './ItemDetail.module.css'
import { useAllSearchPropertiesContext, useFeaturedPropertiesContext } from '@/app/context'

export function ItemDetail(): JSX.Element {
  const id = useParams().id
  let item = {} as any
  let idWithoutLetter = id.slice(1)
  let property
  if (id.slice(0, 1) === 'f') {
    const context = useFeaturedPropertiesContext()
    item = context.testArray.find((item: any) => { return item.property.id === idWithoutLetter })
    property = item.property
  } else if (id.slice(0, 1) === 's') {
    const context = useAllSearchPropertiesContext()
    item = context.allProperties.find((item: any) => {
      return item.id === idWithoutLetter
    })
    property = item
  }

  return (
    <article className={style.containerCard}>
      <Card className={style.card}>
        <div className={style.contenedorPhoto}>
          <Card.Img
            className={style.photoDetail}
            variant="left"
            alt="casa"
            src={property.img}
          />
        </div>
        <Card.Body className={style.cardBody}>
          <Card.Title className={style.title}>{property.name} </Card.Title>
          <h3>${property.price} </h3>
          <Card.Text className={style.icons}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bathfilled.svg?alt=media&token=78b7c5a4-289c-4c87-b0e4-f395f3c31add"
              alt="baños"
            />
            <span>{property.bathrooms}</span>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bedfilled.svg?alt=media&token=81a6b35c-fc50-45be-a04f-c77da8110356"
              alt="habtaciones"
            />
            <span>{property.bedrooms}</span>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/coverarea.svg?alt=media&token=bfaf3f49-8f05-4826-8e45-0dc7eb55f8ce"
              alt="area-cubierta"
            />
            <span>{property.coveredArea}km2</span>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/busstop.svg?alt=media&token=bc4ff7fd-ad7d-4bfd-b4b1-2c8cdf1a4ff0"
              alt="paradas-bus"
            />
            <span>{property.nearbyBusStops.length}</span>
          </Card.Text>
            <button className={style.button}><a href={'mailto:imomubiales@gmail.com?subject=Estoy%20interesado%20en%20la%20propiedad%20' + property.name } className={style.contact}>Contacto</a></button>
        </Card.Body>
      </Card>
    </article>
  )
}
