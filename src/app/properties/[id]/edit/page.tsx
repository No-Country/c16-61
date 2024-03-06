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

  console.log('property', property)

  return (
    <>
      <div>PropertyEditPage</div>
      <FormEditProperty property={property} />
    </>
  )
}

export default PropertyEditPage
