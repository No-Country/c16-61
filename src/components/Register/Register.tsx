import styles from "./Register.module.css"
import { CustomButton } from "@/UI/button/Button"
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";

export default function Register({changesShow}): JSX.Element {

    const [showState, changesShowState] = useState("none");
  async function RegisterUser(event) {
    event.preventDefault()
    const name = event.target.inputName.value
    const email = event.target.inputEmail.value
    const password = event.target.inputPassword5.value


    const result = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })

    if (result.status === 400) {
        changesShowState("block")

        setTimeout(() => {
            changesShowState("none")
        },6000)
    }
    console.log(result);
    
    
  }

    return (
        <Form className={styles.container} onSubmit={(e) => RegisterUser(e)}>
          <h4  className={styles.title}>Registrarse</h4>
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
            <Alert show key={"danger"} style={{display: showState}} variant={"danger"}> Ya se encuentra registrado. </Alert>
            <CustomButton className={styles.button} type="submit" onClick={() => {}} text="Enviar"></CustomButton>
            <CustomButton onClick={() => changesShow("NoUser")} text="Volver"></CustomButton>
        </Form>
    )
  }