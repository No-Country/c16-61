import { useSession } from 'next-auth/react'

import Card from 'react-bootstrap/Card'
import styles from './MyData.module.css'
import { CustomButton } from '@/UI/button/Button'

export default function MyData({ changesShow }): JSX.Element {
  const { data: session } = useSession()
  const user = session?.user

  return (

    <div className={styles.container} >
      <h4 className={styles.title}>Mis Datos</h4>
      <Card className={styles.card} style={{ width: '30rem' }}>
        <Card.Img variant="top" src={user?.image} />
        <Card.Body>
          <Card.Title>{user?.name} </Card.Title>
          <Card.Text>
            eMail:  {user?.email}
          </Card.Text>

          <Card.Text>
            Rol:  {user?.roles}
          </Card.Text>
          <CustomButton className={styles.button} onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
        </Card.Body>
      </Card>

    </div >
  )
}
