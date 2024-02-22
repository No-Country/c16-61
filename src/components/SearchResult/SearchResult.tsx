import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation';
import styles from './SearchResult.module.css';

export function SearchResult({testArray}): JSX.Element {
    const router = useRouter();

    return (
        <div>
            <h3 className={styles.title}>Search Results</h3>
            <div className={styles.cardContainer}>
            {testArray.map((item, index) => (
                <Card key={index} style={{ width: '18rem' }} className={styles.card} onClick={() => { router.push(`/product/${item.id}`) }}>
                    <Card.Img variant="top" src={item.property.img} className={styles.img} />
                    <Card.Body>
                        <Card.Title>{item.property.name}</Card.Title>
                        <Card.Text>
                            <p>Precio: ${item.property.price}</p>
                            <p>Habitaciones: {item.property.bedrooms}</p>
                            <p>Baños: {item.property.bathrooms}</p>  
                        </Card.Text>
                        <Button variant="primary">Contactanos</Button>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
    );
}
