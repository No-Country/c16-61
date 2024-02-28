import { NextResponse } from 'next/server'
import { client } from '@/libs/algolia'

export async function GET (request: NextResponse, { params }) {
    /* const index = client.initIndex('properties') */

   /*  try {
        const params = await request.json()
        
        console.log(params);
        
        const resp = await index.search(body.query,{
            params:{
                filters:"bathroms=2"
            }
        })
        console.log(resp);

        return NextResponse.json({ resp: "ok" })

    } catch (error) {
        const errorJson = JSON.stringify(error)
        console.log(errorJson);


        return NextResponse.json(error, { status: 400 })
    } */
}
