import { signIn } from 'next-auth/react'
import Form from 'react-bootstrap/Form'
import styles from './InitSes.module.css'
import { CustomButton } from '@/UI/button/Button'
import { CustomLogo } from '@/UI/logo/Logo'

export default function InitSesion({ changesShow }): JSX.Element {
  function initSesionWithAuth(appToLogin: string) {
    signIn(appToLogin, { callbackUrl: 'http://localhost:3000' })
  }

  async function InitSesion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = (event.currentTarget.elements.namedItem('inputEmail') as HTMLInputElement).value
    const password = (event.currentTarget.elements.namedItem('inputPassword') as HTMLInputElement).value

    await signIn('credentials', { email, password, callbackUrl: 'http://localhost:3000' })
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
        <Form.Label htmlFor="inputPassword">Contraseña</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword"
          placeholder="******"
        />
      </div>
      <div className={styles.containerLogos}>
        <CustomLogo onClick={() => { initSesionWithAuth('google') }} className={styles.googleLogo} src="./googleLogo.svg"></CustomLogo>
        <CustomLogo onClick={() => { initSesionWithAuth('github') }} className={styles.githubLogo} src="./githubLogo.svg"></CustomLogo>
      </div>
      <CustomButton className={styles.button} type="submit" onClick={() => { }} text="Iniciar Sesión"></CustomButton>
      <CustomButton onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
    </Form>
  )
}
