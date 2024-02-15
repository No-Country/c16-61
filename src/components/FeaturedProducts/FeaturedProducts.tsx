"use client"

import Carousel from 'react-bootstrap/Carousel';

export default function FeaturedProducts() {

  const testArray = [{ nombre: "producto destacado 1 ", precio: 1000, src: "./house1.jpg" },
                     { nombre: "producto destacado 2 ", precio: 2000, src: "./house2.jpg" }, 
                     { nombre: "producto destacado 3 ", precio: 3000, src: "./house3.jpg" }]
                     
  return (
    <main style={{ width: "100%", display: "flex", justifyContent: "center", overflow: "hidden" }}>
      <Carousel style={{ width: "80%", height: "292px" }}>
        {testArray.map((item, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={item.src} alt="slides" style={{ width: "50%", height: "292px" }} />
              <div style={{ width: "50%", height: "292px" }}> description </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </main>
  )
}