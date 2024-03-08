import { useState } from 'react'

import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import styles from './Register.module.css'

import { CustomButton } from '@/UI/button/Button'

export default function Register({ changesShow }): JSX.Element {
  const [showStateDanger, changesShowStateDanger] = useState('none')
  const [showStateSuccess, changesShowStateSuccess] = useState('none')
  async function RegisterUser(event) {
    event.preventDefault()
    const name = event.target.inputName.value
    const email = event.target.inputEmail.value
    const password = event.target.inputPassword5.value

    const result = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })

    if (result.status === 400) {
      changesShowStateDanger('block')

      setTimeout(() => {
        changesShowStateDanger('none')
      }, 6000)
    }else if(result.status === 201){
      changesShowStateSuccess('block')

      setTimeout(() => {
        changesShowStateSuccess('none')
      }, 4000)
      
      setTimeout(() => {
        changesShow()
      }, 4000)
    }
  }

  return (
    <Form className={styles.container} onSubmit={async (e) => { await RegisterUser(e) }}>
      <h4 className={styles.title}>Registrarse</h4>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputEmail">Nombre</Form.Label>
        <Form.Control
          type="name"
          id="inputName"
        />
      </div>
      <div className={styles.containerInput}>
        <Form.Label htmlFor="inputPassword5">Email</Form.Label>
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
      <Alert show key={'success'} style={{ display: showStateSuccess }} variant={'success'}> Registro Exitoso. Por favor, inicie sesión. </Alert>
      <Alert show key={'danger'} style={{ display: showStateDanger }} variant={'danger'}> Ya se encuentra registrado. </Alert>
      <CustomButton className={styles.button} type="submit" onClick={() => { }} text="Enviar"></CustomButton>
      <CustomButton className={styles.returnButton}onClick={() => changesShow('NoUser')} text="Volver"></CustomButton>
    </Form>
  )
}
