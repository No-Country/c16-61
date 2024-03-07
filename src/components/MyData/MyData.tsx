import { useSession } from 'next-auth/react'

import Card from 'react-bootstrap/Card'
import styles from './MyData.module.css'
import { CustomButton } from '@/UI/button/Button'

export default function MyData({ changesShow }): JSX.Element {
  const { data: session } = useSession()
  const user = session?.user
  const userImage = session?.user.image || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'

  return (

    <div className={styles.container} >
      <h4 className={styles.title}>Mis Datos</h4>
      <Card className={styles.card} style={{ width: '30rem' }}>
        <Card.Img variant="top" src={userImage} />

        <Card.Body>
          <Card.Title>{user?.name} </Card.Title>
          <Card.Text>
            eMail:  {user?.email}
          </Card.Text>

          {
            user?.roles === 'admin' &&
            <Card.Text>
              Rol:  {user?.roles}
            </Card.Text>
          }
          <CustomButton className={styles.button} onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
        </Card.Body>
      </Card>

    </div >
  )
}
