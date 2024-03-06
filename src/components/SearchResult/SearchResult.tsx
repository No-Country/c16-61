import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './SearchResult.module.css'
import { useQueryParamsContext } from '@/app/context'

export function SearchResult (): JSX.Element {
  const router = useRouter()
  const [propertiesArray, setPropertiesArray] = useState([]) as any

  const { queryParams } = useQueryParamsContext()
  useEffect(() => {
    const fetching = async () => {
      if (Object.keys(queryParams).length == 1) {
        const results = await fetch(`http://localhost:3000/api/search-properties?query=${queryParams.query}`)
        const data = await results.json()
        setPropertiesArray(data)
        console.log('if')
      } else {
        let fetchString = 'http://localhost:3000/api/search-properties?'
        const params = Object.keys(queryParams)
        /* quiero iterar las propiedades de prueba */
        for (let index = 0; index < params.length; index++) {
          if (index == 0) {
            fetchString += `${params[index]}=${queryParams[params[index]]}`
          } else {
            fetchString += `&${params[index]}=${queryParams[params[index]]}`
          }
        }

        const results = await fetch(fetchString)
        const data = await results.json()
        setPropertiesArray(data)
      }
    }
    fetching()
  }, [queryParams])

  return (
        <div>
            <h3 className={styles.title}>Search Results</h3>
            <div className={styles.cardContainer}>
            {propertiesArray.map((item, index) => (
                <Card key={index} style={{ width: '18rem' }} className={styles.card} >
                    <Card.Img variant="top" src={item.img} className={styles.img} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <p>Precio: ${item.price}</p>
                            <p>Habitaciones: {item.bedrooms}</p>
                            <p>Baños: {item.bathrooms}</p>
                        </Card.Text>
                        <Button onClick={() => { router.push(`/product/${item.id}`) }} variant="primary">Mas Info</Button>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
  )
}
