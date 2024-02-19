
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from './ItemDetail.module.css'

export default function ItemDetail() {

  const testArray = useContext(FeaturedProductsContext);
  const id = useParams().id
  const idNumber = Number(id)
  
  const item = testArray.find((item) => {    
    return item.id == idNumber
  })
  
  return (
   <article className={style.containerCard} >
      <Card className={style.card}>
        <Card.Img className={style.photoDetail} variant="left" width={400} height={400} alt="casa" src='https://img.freepik.com/vector-gratis/plantilla-pegatina-mini-casa-aislada_1308-60687.jpg' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Adquirir</Button>
        </Card.Body>
      </Card>
    </article>
  );
}
