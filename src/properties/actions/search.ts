'use server'

import { client } from '@/libs/algolia'

export async function SearchProperties({ query = '' }: { query?: string }) {
  const index = client.initIndex('properties')

  const properties = (await index.search(query)).hits

  return properties
}
