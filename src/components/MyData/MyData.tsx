import styles from "./MyData.module.css"
import { CustomButton } from "@/UI/button/Button"
import { useEffect } from "react";
import Form from 'react-bootstrap/Form';

export default function MyData({changesShow}): JSX.Element {

    async function fillData() {
        const result = await fetch("http://localhost:3000/api/users/efd8cfaf-4057-4da3-8ab9-a064ed946dc0", {
            
        })
        console.log(result);
    }

    useEffect(() => {
        fillData()
    }, [])
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>Mis Datos</h4>
        <div className={styles.containerInput}>
            <Form.Label htmlFor="inputName">Nombre</Form.Label>
                <Form.Control
                type="text"
                id="inputName"
                placeholder="Nombre"
                />
        </div>
        <div className={styles.containerInput}>
            <Form.Label htmlFor="inputEmail">Email</Form.Label>
                <Form.Control
                type="email"
                id="inputEmail"
                placeholder="name@example.com"
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
            <Form.Label htmlFor="inputPassword5">Nueva Contraseña</Form.Label>
                <Form.Control
                type="password"
                id="inputPassword5"
                placeholder="******"
                />
        </div>
        <div className={styles.containerInput}>
            <Form.Label htmlFor="inputPassword5">Repetir Contraseña</Form.Label>
                <Form.Control
                type="password"
                id="inputPassword5"
                placeholder="******"
                />
        </div>
        <CustomButton className={styles.button} onClick={() => changesShow("NoUser")} text="Volver"></CustomButton>
      </div>
    )
  }