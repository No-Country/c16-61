import { useSession } from 'next-auth/react'
import Form from 'react-bootstrap/Form'
import styles from './MyData.module.css'
import { CustomButton } from '@/UI/button/Button'

<<<<<<< HEAD
export default function MyData ({ changesShow }): JSX.Element {
  async function fillData () {
    const result = await fetch('http://localhost:3000/api/users/efd8cfaf-4057-4da3-8ab9-a064ed946dc0', {
=======
export default function MyData({ changesShow }): JSX.Element {
  const { data: session } = useSession()
  const user = session?.user
>>>>>>> e106dfe921a6b7965df0f9206192f30c8bb54f4d

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
