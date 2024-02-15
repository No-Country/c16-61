import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

export async function GET(request: Request) {
  // TODO Pagination
  // const { searchParams } = new URL(request.url)

  // const take = Number(searchParams.get('take') ?? 10)

  // const skip = Number(searchParams.get('skip') ?? 0)

  // if (isNaN(take)) {
  //   return NextResponse.json({ message: 'take must be a number' }, { status: 400 })
  // }

  // if (isNaN(skip)) {
  //   return NextResponse.json({ message: 'skip must be a number' }, { status: 400 })
  // }

  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}
