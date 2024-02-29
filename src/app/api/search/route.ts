import { NextResponse } from 'next/server'
// import { client } from '@/libs/algolia'

export async function GET(request: Request) {
  return NextResponse.json({ resp: 'ok' })
  // const index = client.initIndex('properties')

  // try {
  // const params = await request.json()

  // const resp = await index.search(body.query, {
  //   params: {
  //     filters: 'bathroms=2'
  //   }
  // })
  // console.log(resp)

  // return NextResponse.json({ resp: 'ok' })
  // } catch (error) {
  //   return NextResponse.json(error, { status: 400 })
  // }
}
