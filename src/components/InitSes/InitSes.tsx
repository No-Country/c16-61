'use client'

import { signIn } from 'next-auth/react'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useFormState } from 'react-dom'
import styles from './InitSes.module.css'
import { authenticate } from '@/auth'
import { notify } from '@/notifications/Notification'
import { CustomButton } from '@/UI/button/Button'
import { CustomLogo } from '@/UI/logo/Logo'

export default function InitSesion({ changesShow }): JSX.Element {
  const [state, dispatch] = useFormState(authenticate, undefined)

  useEffect(() => {
    if (state === 'SuccessSignin') {
      notify('Sesion iniciada con exito')
      setTimeout(() => {
        // cerrar sidebar
        window.location.replace('/')
      }, 1500)
    }
  }, [state])

  function initSesionWithAuth(appToLogin: string) {
    signIn(appToLogin, { callbackUrl: 'http://localhost:3000' })
  }

  return (
    <Form action={dispatch} className={styles.container} >
      <h4 className={styles.title}>Iniciar Sesión</h4>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputEmail">Email</Form.Label>
        <Form.Control
          type="email"
          id="inputEmail"
          placeholder="name@example.com"
          name='email'
          required
        />
      </div>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputPassword">Contraseña</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword"
          placeholder="******"
          name='password'
          required
        />
      </div>
      <CustomButton className={styles.button} type="submit" onClick={() => { }} text="Iniciar Sesión"></CustomButton>
      <div className={styles.containerLogos}>
        <CustomLogo onClick={() => { initSesionWithAuth('google') }} className={styles.googleLogo} src="./googleLogo.svg"></CustomLogo>
        <CustomLogo onClick={() => { initSesionWithAuth('github') }} className={styles.githubLogo} src="./githubLogo.svg"></CustomLogo>
      </div>
      <CustomButton onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
    </Form>
  )
}
