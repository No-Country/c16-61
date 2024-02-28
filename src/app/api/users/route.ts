import { NextResponse } from 'next/server'
import * as yup from 'yup'
import prisma from '@/libs/prisma'

export async function GET (request: Request) {
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

const postSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
})

export async function POST (request: Request) {
  try {
    const body = await postSchema.validate(await request.json())

    const user = await prisma.user.create({
      data: body
    })
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
