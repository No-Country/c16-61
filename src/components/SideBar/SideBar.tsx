import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import styles from './SideBar.module.css'
import InitSesion from '../InitSes/InitSes'
import MyData from '../MyData/MyData'
import { OptionListComponent } from '../OptionList/OptionList'
import Register from '../Register/Register'
interface SideBarProps {
  show: boolean
  handleClose: () => void
}
export function SideBar(props: SideBarProps): JSX.Element {
  const [showState, changesShow] = useState('NoUser')

  return (

    <Offcanvas style={{ width: '40%' }} show={props.show} onHide={props.handleClose} placement='end'>
      <div className={styles.sideBar}>
        <Offcanvas.Body className={styles.sideBar}>
          {showState === 'NoUser'
            ? (
              <OptionListComponent changesShow={changesShow}></OptionListComponent>
            )
            : showState === 'InitSesion'
              ? (
                <InitSesion changesShow={changesShow}></InitSesion>
              )
              : showState === 'Register'
                ? (
                  <Register changesShow={changesShow}></Register>
                )
                : showState === 'MyData'
                  ? (
                    <MyData changesShow={changesShow}></MyData>
                  )
                  : (
                    <OptionListComponent changesShow={changesShow}></OptionListComponent>
                  )}
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  )
}
