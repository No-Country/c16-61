import { signOut, useSession } from 'next-auth/react'
import styles from './OptionList.module.css'

export function OptionListComponent ({ changesShow }) {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <>
      <ul className={`${styles.nav} nav flex-column`}>
        {
          !user
            ? (<>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow('InitSesion') }}>Iniciar Sesión</a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow('Register') }}>Registrarse</a>
              </li>
            </>)
            : (<>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} active`} onClick={(e) => { e.preventDefault(); changesShow('MyData') }} >Mi Datos</a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.closeLink} active`} onClick={async () => { await signOut() }} >Cerrar Sesión</a>
              </li>
            </>)
        }
      </ul >
      {
        user &&
        (<>
          <p className={`${styles.navMail}`}>Bienvenido</p>
          <p className={styles.navMail}>{user?.email}</p>
        </>)
      }
    </>
  )
}
