"use client"

import { useState } from 'react';
import styles from "./NavBar.module.css"
import { SideBar } from '../SideBar/SideBar';

export function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <nav className={styles.navbar} >
        <div className={styles.titleContainer}>
          <img src="" alt="" />
          <p className={styles.title}>Compralo</p>
        </div>

        <div className={styles.buttonNew} >
          <button onClick={handleShow}>Ingresar</button>
        </div>
        <SideBar show={show} handleClose={handleClose} className={styles.offCanvas}/>
      </nav>
    )
  }