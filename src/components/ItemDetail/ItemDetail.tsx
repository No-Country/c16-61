
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FeaturedProductsContext } from "@/app/page";
import { useContext } from "react";
import { useParams } from "next/navigation";


export default function ItemDetail() {

  const testArray = useContext(FeaturedProductsContext);
  const id = useParams().id
  const idNumber = Number(id)
  
  const item = testArray.find((item) => {    
    return item.id == idNumber
  })
  
  return (
   
      <Card style={{ width: "40%" }}>
        <Card.Img variant="left" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{item?.nombre}</Card.Title>
          <Card.Text>
          {item?.nombre}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
  );
}
