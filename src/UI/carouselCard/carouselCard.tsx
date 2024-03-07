'use client'

import styles from './carouselCard.module.css'
export function CarouselCard ({ item }: any) {
  return (
    item.empty === true ? (
      <div className={styles.container} >
          <img className={styles.slides} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVaymkP1TS8r4qARfdPFr0Pvw8BktlhDiKw&usqp=CAU" alt="slides" />
        <div className={styles.description}>
          <h3>No hay propiedades destacadas</h3>
        </div>
       </div>
    ) : (
      <div className={styles.container} >
          <img className={styles.slides} src={item.img} alt="slides" />
        <div className={styles.description}>
          <h3>{item.name}</h3>
          <p> Precio: ${item.price}</p>
          <p> Habitaciones: {item.bedrooms}</p>
          <p> Baños: {item.bathrooms}</p>
        </div>
       </div>
    )
  )
}


{/* <div className={styles.container} >

<img className={styles.slides} src={item.img} alt="slides" />

<div className={styles.description}>

  <h3>{item.name}</h3>

  <p> Precio: ${item.price}</p>

  <p> Habitaciones: {item.bedrooms}</p>

  <p> Baños: {item.bathrooms}</p>

</'div> */}