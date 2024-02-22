
import styles from "./OptionList.module.css";

export function OptionListComponent({changesShow}) {
    return (
      <>      
              <ul className={`${styles.nav} nav flex-column`}>
                <li className={styles.navItem}>
                  <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow("InitSesion")}}>Iniciar Sesión</a>
                </li>
                <li className={styles.navItem}>
                  <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow("Register")}}>Registrarse</a>
                </li>
                <li className={styles.navItem}>
                  <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow("MyData")}} >Mi Datos</a>
                </li>
                <li className={styles.navItem}>
                  <a className={`${styles.closeLink} active`}  >Cerrar Sesión</a>
                </li>
              </ul>
              <p className={`${styles.navMail}`}>Bienvenido</p>
              <p className={styles.navMail}>test@test.com</p>
      </>
    );
  }