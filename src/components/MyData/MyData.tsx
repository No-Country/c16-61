import { useSession } from 'next-auth/react'
import Form from 'react-bootstrap/Form'
import styles from './MyData.module.css'
import { CustomButton } from '@/UI/button/Button'

export default function MyData({ changesShow }): JSX.Element {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Mis Datos</h4>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputName">Nombre</Form.Label>
        <Form.Control
          type="text"
          id="inputName"
          value={user?.name || ''}
        />
      </div>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputEmail">Email</Form.Label>
        <Form.Control
          type="email"
          id="inputEmail"
          value={user?.email || ''}
        />
      </div>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputPassword5">Contraseña Actual</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          placeholder="******"
        />
      </div>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputNewPassword">Nueva Contraseña</Form.Label>
        <Form.Control
          type="password"
          id="inputNewPassword"
          placeholder="******"
        />
      </div>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputRepeatPassword">Repetir Contraseña</Form.Label>
        <Form.Control
          type="password"
          id="inputRepeatPassword"
          placeholder="******"
        />
      </div>
      <CustomButton className={styles.button} onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
    </div>
  )
}
