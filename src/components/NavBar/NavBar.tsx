'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import styles from './NavBar.module.css'
import { SideBar } from '../SideBar/SideBar'

import { CustomButton } from '@/UI/button/Button'

export function NavBar(): JSX.Element {
  const [show, setShow] = useState(false)

  const { data: session } = useSession()
  const user = session?.user

  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }

  return (
    <nav className={styles.navbar} >
      <div className={styles.titleContainer}>
        <Link href="/">
          <img src="./logoHeader.svg" alt="Logo Header" className={styles.logo} />
        </Link>
        <p className={styles.title}>Imomubiales</p>
      </div>
      <div >
        {
          user
            ? <CustomButton className={styles.buttonNew} text={`Bienvenido ${user.name} `} variant="primary" onClick={handleShow} ></CustomButton>
            : <CustomButton className={styles.buttonNew} text="Iniciar Sesión" variant="primary" onClick={handleShow} ></CustomButton>
        }

      </div>
      <SideBar show={show} handleClose={handleClose} />
    </nav>
  )
}
