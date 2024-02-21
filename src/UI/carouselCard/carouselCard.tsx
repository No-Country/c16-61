"use client"

import styles from "./carouselCard.module.css"
export function CarouselCard({item}) {
    return (
      <div  className={styles.container} >
        <img className={styles.slides}  src={item.src} alt="slides" />
        <div className={styles.description}>
          <h3>{item.nombre}</h3>
          <p> Precio: ${item.precio}</p>
          <p> Habitaciones: {item.habitacion}</p>
          <p> Baños: {item.banios}</p>
        </div>
      </div>
    )
  }