import styles from './editProperty.module.css'
import fetchPropertyById from '@/properties/actions/get-property'
import { FormEditProperty } from '@/properties/components/FormEditProperty'

interface PropertyPageProps {
  params: {
    id: string
  }
}

const PropertyEditPage = async ({ params }: PropertyPageProps) => {
  const id = params.id
  const property = await fetchPropertyById(id)

  return (
    <>
      <h1 className={styles.title}>Editar Propiedad</h1>
      <FormEditProperty property={property} />
    </>
  )
}

export default PropertyEditPage
