import { FaMinus } from 'react-icons/fa'
import { deleteProperty } from '@/properties'

export function ButtonDeleteProperty({ id }: { id: string }): JSX.Element {
  const deletePropertyWithId = deleteProperty.bind(null, id)
  return (
    <form action={deletePropertyWithId}>
      <button className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>Borrar</span>
        <FaMinus size={20} />
      </button>
    </form>
  )
}
