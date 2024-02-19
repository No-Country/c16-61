import styles from "./InitSes.module.css"

export default function InitSesion({changesShow}): JSX.Element {

    return (
      <div className={styles.container}>
        <h4 className={styles.title}>Iniciar Sesión</h4>
        <div className={styles.containerInput}>
            <label htmlFor="email"> Ingrese su Email</label>
            <input type="email" placeholder="Email" />
        </div>
        <div className={styles.containerInput}>
            <label htmlFor="password"> Ingrese su Contraseña</label>
            <input type="password" placeholder="Password" />
        </div>
        <button onClick={() => changesShow("NoUser")}>Volver</button>
      </div>
    )
  }