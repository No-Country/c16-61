import { NextResponse } from 'next/server'
import { client } from '@/libs/algolia'

export async function GET(req: Request): Promise<NextResponse> {
  const index = client.initIndex('properties')
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('query') || ''

  /* Convierto searchParams en un objeto */
  const searchParamsObject = {};
  searchParams.forEach((value, key) => {
    searchParamsObject[key] = value;
  });
  /* Saco query por que no es parte de los parametros */
  delete searchParamsObject['query'];

  /* Junto los parametros en un string y les agrego un AND en el medio para que funcione con algolia */
 const filtersString = Object.keys(searchParamsObject)
  .map(key => `${key}=${searchParamsObject[key]}`)
  .join(' AND ');

  try {
    const responseAlgolia = await index.search(query, {
      filters:filtersString,
    })

    return NextResponse.json(responseAlgolia.hits)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
