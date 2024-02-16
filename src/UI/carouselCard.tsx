"use client"

import styles from "./carouselCard.module.css"
export function CarouselCard({item}) {
    return (
      <div  className={styles.container} >
        <img src={item.src} alt="slides" style={{ width: "50%", height: "292px" }} />
        <div className={styles.description}>
          <h3>{item.nombre}</h3>
          <p> Precio: ${item.precio}</p>
          <p> Habitaciones: {item.habitacion}</p>
          <p> Baños: {item.banios}</p>
        </div>
      </div>
    )
  }