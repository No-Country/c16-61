import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

export function ButtonAddProperty(): JSX.Element {
  return (
    <Link
      href='/properties/create'
    >
      <span>Crear propiedad</span>{' '}
      <FaPlus size={20} />
    </Link>
  )
}
