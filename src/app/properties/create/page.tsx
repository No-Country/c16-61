import styles from './createProperty.module.css'
import { FormNewProperty } from '@/properties'

const NewPropertyPage = () => {
  return (
    <>
      <h1 className={styles.title}>Añade una Propiedad</h1>

      <FormNewProperty />
    </>
  )
}

export default NewPropertyPage
