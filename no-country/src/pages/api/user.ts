import type { NextApiRequest, NextApiResponse } from 'next'
import { servicio } from '../../../backend/servicios'
 
type ResponseData = {
  message: string
}
 
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

  const respuesta = servicio()

  res.status(200).json({ message: respuesta })
}