
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from './ItemDetail.module.css'

import { useAppContext } from "@/app/context";
import { useParams } from "next/navigation";
interface Product {
  nombre: string;
  precio: number;
  src: string;
  habitacion: number;
  baños: number;
  id: number;
  coverArea:string;
  rating:number;
  nearbyBusStop: number;
  nearbyPlaces: number;
}

export default function ItemDetail() {


  const context = useAppContext();
  const id = useParams().id
  const idNumber = Number(id)
  
  const item:Product = context.testArray.find((item:Product) => {    
    return item.id == idNumber
  })

  console.log(item);
  const {src,rating,nearbyBusStop,nearbyPlaces,coverArea,habitacion,baños,precio,nombre} = item
  
  
  return (
   <article className={style.containerCard} >
      <Card className={style.card}>
        <Card.Img className={style.photoDetail} variant="left" width={400} height={400} alt="casa" src={src} />
        <Card.Body>
          <Card.Title>{nombre} </Card.Title>
          <Card.Text className={style.icons} >
            
            <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bathfilled.svg?alt=media&token=78b7c5a4-289c-4c87-b0e4-f395f3c31add" alt="baños" />
            <span>{baños}</span>  

            <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bedfilled.svg?alt=media&token=81a6b35c-fc50-45be-a04f-c77da8110356" alt="habtaciones" />
            <span>{habitacion}</span>  

            <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/coverarea.svg?alt=media&token=bfaf3f49-8f05-4826-8e45-0dc7eb55f8ce" alt="area-cubierta" />
            <span>{coverArea}</span>  

            <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/busstop.svg?alt=media&token=bc4ff7fd-ad7d-4bfd-b4b1-2c8cdf1a4ff0" alt="paradas-bus" />
            <span>{nearbyBusStop}</span> 

            <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/nearbyplaces.svg?alt=media&token=a1d937c1-832d-4e88-8b8c-1815cd5fdc84" alt="intereses-cercanos" />
            <span>{nearbyPlaces}</span> 

            <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/starfilled.svg?alt=media&token=893b2383-fd89-4cf6-b492-9011ff74485e" alt="rating" />
            <span>{rating}</span> 
            
          </Card.Text>
          <Button variant="primary">Añadir a favoritos</Button>
        </Card.Body>
      </Card>
    </article>
  );
}
