"use client"

import Carousel from 'react-bootstrap/Carousel';
import templeteIMG from "../../../public/images/templeteImg.svg"
import Image from 'next/image';

export default function FeaturedProducts() {

     const testArray = [{ nombre:"producto destacado 1 ", precio:1000 },{ nombre:"producto destacado 2 ",precio:2000},{ nombre:"producto destacado 3 ",precio:3000}]
    return (
      <main style={{width:"100%", display:"flex", justifyContent:"center", overflow:"hidden"}}>
        <Carousel style={{width:"100%", height:"292px"}}>
            {testArray.map((item, index) => (
              <Carousel.Item key={index}>
                <img src="./templeteImg.svg" alt="slides" style={{width:"100%"}}/>
                <Carousel.Caption>
                  <h3>{item.nombre}</h3>
                  <p>{item.precio}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </main>
    )
  }