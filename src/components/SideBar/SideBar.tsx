import { Offcanvas } from 'react-bootstrap';
import styles from "./SideBar.module.css";

type SideBarProps = {
  show: boolean;
  handleClose: () => void;
}
export function SideBar(props: SideBarProps) {
  return (
    <>
      <Offcanvas style={{width: "40%"}}show={props.show} onHide={props.handleClose} placement='end'>
        <div className={styles.sideBar}>
          <Offcanvas.Body className={styles.sideBar}>
            <ul className={`${styles.nav} nav flex-column`}>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} active`} href="#">Ingresar</a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} active`} href="#">Mi Perfil</a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} active`} href="#">Buscar</a>
              </li>
            </ul>
            <p className={styles.navMail}>test@test.com</p>
            <a className={`${styles.closeLink}`} href="#">Cerrar Sesión</a>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}
