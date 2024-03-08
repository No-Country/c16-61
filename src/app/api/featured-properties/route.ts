import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

export async function GET(request: Request) {
  const propertiesRankings = await prisma.propertyRating.findMany({
    include: {
      property: true
    },
    orderBy: {
      rating: 'desc'
    }
  })

  return NextResponse.json(propertiesRankings)
}
