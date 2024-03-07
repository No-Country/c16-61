import Link from 'next/link'
import { useSession } from 'next-auth/react'
import styles from './OptionList.module.css'
import { logout } from '@/auth'

export function OptionListComponent({ changesShow }) {
  const { data: session } = useSession()
  const isAuthenticated = !!session?.user

  return (
    <>
      <ul className={`${styles.nav} nav flex-column`}>
        {
          !isAuthenticated
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
              {
                isAuthenticated && session.user?.roles?.includes('admin') &&
                <li className={`${styles.navItem}`}>
                  <Link href='/dashboard'>
                    Propiedades
                  </Link>
                </li>
              }
              <li className={styles.navItem}>
                <a className={`${styles.closeLink} active`} onClick={async () => { await logout() }} >Cerrar Sesión</a>
              </li>
            </>)
        }
      </ul >
      {
        isAuthenticated &&
        (<>
          <p>Bienvenido</p>
          <p className={styles.navMail}>{session.user?.email}</p>
        </>)
      }
    </>
  )
}
