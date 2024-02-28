'use client'

import styles from './Logo.module.css'

export function CustomLogo(props): JSX.Element {
    return (
        <>
            <div className={styles.container}>
                <img className={props.className} src={props.src} alt={props.alt} onClick={props.onClick} />
            </div>
        </>
    )
}
