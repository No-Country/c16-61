import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from './ItemDetail.module.css'

export default function ItemDetail() {
  return (
   <article className={style.containerCard} >
      <Card className={style.card}>
        <Card.Img className={style.photoDetail} variant="left" width={400} height={400} alt="casa" src='https://img.freepik.com/vector-gratis/plantilla-pegatina-mini-casa-aislada_1308-60687.jpg' />
        <Card.Body>
          <Card.Title>Casa</Card.Title>
          <Card.Text>
            Descripcion de la propiedad
          </Card.Text>
          <Button variant="primary">Adquirir</Button>
        </Card.Body>
      </Card>
    </article>
  );
}
