import Form from 'react-bootstrap/Form'
import styles from './InitSes.module.css'
import { CustomButton } from '@/UI/button/Button'
import { CustomLogo } from '@/UI/logo/Logo'
import { useSession, signIn } from "next-auth/react"

export default function InitSesion({ changesShow }): JSX.Element {

  function initSesionWithAuth(appToLogin) {

    signIn(appToLogin)
  }

  async function InitSesion(event) {
    event.preventDefault()
    const email = event.target.inputEmail.value
    const password = event.target.inputPassword5.value

    signIn("credentials", { email, password })
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
      <div className={styles.containerLogos}>
        <CustomLogo onClick={() => { initSesionWithAuth("google") }} className={styles.googleLogo} src="./googleLogo.svg"></CustomLogo>
        <CustomLogo onClick={() => { initSesionWithAuth("github") }} className={styles.githubLogo} src="./githubLogo.svg"></CustomLogo>
      </div>
      <CustomButton className={styles.button} type="submit" onClick={() => { }} text="Iniciar Sesión"></CustomButton>
      <CustomButton onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
    </Form>
  )
}
