"use client"

import styles from "./carouselCard.module.css"
export function CarouselCard({item}) {
    return (
      <div  className={styles.container} >
        <img className={styles.slides}  src={item.img} alt="slides" />
        <div className={styles.description}>
          <h3>{item.name}</h3>
          <p> Precio: ${item.price}</p>
          <p> Habitaciones: {item.bedrooms}</p>
          <p> Baños: {item.bathrooms}</p>
        </div>
      </div>
    )
  }