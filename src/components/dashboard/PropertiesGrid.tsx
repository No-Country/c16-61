import { type Property } from '@prisma/client'
import { PropertiesGridItem } from '..'

interface PropertiesGridProps {
  properties: Property[]
}

export const PropertiesGrid = ({ properties }: PropertiesGridProps) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10'>
      {
        properties.map((property) => (
          <PropertiesGridItem key={property.id} property={property} />
        ))
      }
    </div>
  )
}
