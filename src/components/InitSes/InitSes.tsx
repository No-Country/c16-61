import Form from 'react-bootstrap/Form'
import styles from './InitSes.module.css'
import { CustomButton } from '@/UI/button/Button'

export default function InitSesion({ changesShow }): JSX.Element {
  async function InitSesion(event) {
    event.preventDefault()
    const email = event.target.inputEmail.value
    const password = event.target.inputPassword5.value
  }

  return (
        <Form className={styles.container} onSubmit={async (e) => { await InitSesion(e) }}>
          <h4 className={styles.title}>Iniciar Sesión</h4>
          <div className={styles.containerInput}>
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
              <Form.Control
                type="email"
                id="inputEmail"
                placeholder="name@example.com"
              />
          </div>
          <div className={styles.containerInput}>
            <Form.Label htmlFor="inputPassword5">Contraseña</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                placeholder="******"
              />
          </div>
            <CustomButton className={styles.button} type="submit" onClick={() => {}} text="Iniciar Sesión"></CustomButton>
            <CustomButton onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
        </Form>
  )
}
