import { type Property } from '@prisma/client'
import styles from './PropertiesGrid.module.css'
import { PropertiesGridItem } from '..'

interface PropertiesGridProps {
  properties: Property[]
}

export const PropertiesGrid = ({ properties }: PropertiesGridProps) => {
  return (
    <div className={styles.propertiesGrid}>
      {properties.map((property) => (
        <div className={styles.propertiesGridItem} key={property.id}>
        <PropertiesGridItem property={property} />
      </div>
      ))}
    </div>
  )
}
