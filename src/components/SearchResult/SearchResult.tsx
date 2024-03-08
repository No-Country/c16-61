import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './SearchResult.module.css'
import { useQueryParamsContext, useAllSearchPropertiesContext } from '@/app/context'
import Spinner from 'react-bootstrap/Spinner';

export function SearchResult (): JSX.Element {
  const router = useRouter()
  const [propertiesArray, setPropertiesArray] = useState([true]) as any

  const { queryParams } = useQueryParamsContext()
  const { setAllProperties } = useAllSearchPropertiesContext()
  useEffect(() => {

    console.log(propertiesArray);
    
    const fetching = async () => {
      if (Object.keys(queryParams).length === -1) {
        const results = await fetch(`/api/search-properties?query=${queryParams.query}`)
        const data = await results.json()
        setPropertiesArray(data)
        setAllProperties(data)
      } else {
        let fetchString = '/api/search-properties?'
        const params = Object.keys(queryParams)
        /* quiero iterar las propiedades de prueba */
        for (let index = 0; index < params.length; index++) {
          if (index === 0) {
            fetchString += `${params[index]}=${queryParams[params[index]]}`
          } else {
            fetchString += `&${params[index]}=${queryParams[params[index]]}`
          }
        }

        const results = await fetch(fetchString)
        const data = await results.json()
        setPropertiesArray(data)
        setAllProperties(data)
      }
    }
    fetching()
  }, [queryParams])

  return (
        <div className={styles.container}>
            <h3 className={styles.title}>Resultados</h3>
            <div className={styles.cardContainer}>
              { 
                propertiesArray[0] === true ? (
                  <div className={styles.spinnerContainer}> 
                    <Spinner className={styles.spinner} animation="border" variant="primary" />
                    <p>Cargando...</p>               
                  </div>               
                ) :
                propertiesArray.length === 0
                  ? <p className={styles.noResults}>No se encontraron resultados</p>
                  : propertiesArray.map((item, index) => (
                      <Card key={index} style={{ width: '18rem' }} className={styles.card} >
                         <Card.Img variant="top" src={item.img} className={styles.img} />
                      <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                              <p>Precio: ${item.price}</p>
                              <p>Habitaciones: {item.bedrooms}</p>
                              <p>Baños: {item.bathrooms}</p>
                          </Card.Text>
                          <Button className={styles.button}onClick={() => { router.push(`/product/s${item.id}`) }} variant="primary">Más Info</Button>
                      </Card.Body>
                  </Card>
                  ))
              }
            </div>
        </div>
  )
}
