import type { NextApiRequest, NextApiResponse } from 'next'

import { searchOrCreateUser } from '../../../backend/controllers/user'
 

 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    
     const result = await searchOrCreateUser(req.body)

     res.status(200).json({ result })
  } else {
    // Handle any other HTTP method
  }

  
}