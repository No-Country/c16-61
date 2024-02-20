import styles from "./InitSes.module.css"
import { CustomButton } from "@/UI/button/Button"
import Form from 'react-bootstrap/Form';

export default function InitSesion({changesShow}): JSX.Element {

    return (
      <div className={styles.container}>
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
        <CustomButton onClick={() => changesShow("NoUser")} text="Volver"></CustomButton>
      </div>
    )
  }