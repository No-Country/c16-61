import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import styles from './buttonAddProduct.module.css'

export function ButtonAddProperty(): JSX.Element {
  return (
    <Link
      href='/properties/create'
     className={styles.button}>
      <span>Crear Propiedad</span>{' '}
      <FaPlus size={20} />
    </Link>
  )
}
