import styles from "./MyData.module.css"

export default function MyData({changesShow}): JSX.Element {

    return (
      <div className={styles.container}>
        <h4 className={styles.title}>Mis Datos</h4>
        <div className={styles.containerInput}>
            <label htmlFor="text"> Nombre</label>
            <input type="text" placeholder="Nombre" />
        </div>
        <div className={styles.containerInput}>
            <label htmlFor="email"> Email</label>
            <input type="email" placeholder="Nombre" />
        </div>
        <div className={styles.containerInput}>
            <label htmlFor="password"> Contraseña Actual</label>
            <input type="password"  />
        </div>
        <div className={styles.containerInput}>
            <label htmlFor="password"> Nueva Contraseña</label>
            <input type="password"  />
        </div>
        <div className={styles.containerInput}>
            <label htmlFor="password"> Repetir Nueva Contraseña</label>
            <input type="password"  />
        </div>
        <button onClick={() => changesShow("NoUser")}>Volver</button>
      </div>
    )
  }