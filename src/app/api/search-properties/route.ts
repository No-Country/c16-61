import { NextResponse } from 'next/server'
import { client } from '@/libs/algolia'

export async function GET(req: Request): Promise<NextResponse> {
  const index = client.initIndex('properties')
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('query') || ''

  try {
    const responseAlgolia = await index.search(query)

    return NextResponse.json(responseAlgolia.hits)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
