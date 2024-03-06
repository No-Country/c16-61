import { NextResponse } from 'next/server'
import { client } from '@/libs/algolia'

interface SearchParams {
  query?: string
}

export async function GET(req: Request): Promise<NextResponse> {
  const index = client.initIndex('properties')
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('query') || ''

  /* Convierto searchParams en un objeto */
  const searchParamsObject: SearchParams = {}
  searchParams.forEach((value, key) => {
    searchParamsObject[key] = value
  })
  /* Saco query por que no es parte de los parametros */
  delete searchParamsObject.query

  /* Junto los parametros en un string y les agrego un AND en el medio para que funcione con algolia */
  const filtersString = Object.keys(searchParamsObject)
    .map(key => {
      const value = searchParamsObject[key] || "0"  // Set value to empty string if it is not defined
      return `${key}=${value}`
    })
    .join(' AND ')

  try {
    if (filtersString){
      const responseAlgolia = await index.search(query, {
        filters: filtersString
      })

      return NextResponse.json(responseAlgolia.hits)
    }else{
      const responseAlgolia = await index.search(query)

        return NextResponse.json(responseAlgolia.hits)
    }

  } catch (error) {

    return NextResponse.json(error, { status: 400 })
  }
}
