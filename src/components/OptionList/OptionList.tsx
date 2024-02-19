
import styles from "./OptionList.module.css";

export function OptionListComponent({changesShow}) {
    return (
      <>      
              <ul className={`${styles.nav} nav flex-column`}>
                <li className={styles.navItem}>
                  <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow("InitSesion")}}>Ingresar</a>
                </li>
                <li className={styles.navItem}>
                  <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow("MyData")}} >Mi Perfil</a>
                </li>
                <li className={styles.navItem}>
                  <a className={`${styles.navLink} active`}  >Buscar</a>
                </li>
              </ul>
              <p className={styles.navMail}>test@test.com</p>
              <a className={`${styles.closeLink}`} href="#">Cerrar Sesión</a>
      </>
    );
  }