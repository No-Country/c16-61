"use client"

import { SideBar } from '../SideBar/SideBar';
import { CustomButton } from '@/UI/button/Button';
import styles from "./NavBar.module.css"


import { useState } from 'react';

export function NavBar(): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <nav className={styles.navbar} >
        <div className={styles.titleContainer}>
          <img src="./logo.svg" alt="Logo Header" className={styles.logo} />
          <p className={styles.title}>Imomubiales</p>
        </div>
        <div >
          <CustomButton className={styles.buttonNew} text="Iniciar Sesión" variant="primary" onClick={handleShow} ></CustomButton>
        </div>
        <SideBar show={show} handleClose={handleClose} />
      </nav>
    )
  }