import { type User } from '@prisma/client'
import { NextResponse, type NextRequest } from 'next/server'
import * as yup from 'yup'
import prisma from '@/libs/prisma'

interface paramsUser {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: paramsUser) {
  const { id } = params

  try {
    const user = await getUser(id)

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

const putSchema = yup.object({
  name: yup.string().optional(),
  email: yup.string().email().optional(),
  password: yup.string().optional()
})

export async function PUT(request: NextRequest, { params }: paramsUser) {
  const { id } = params

  try {
    const user = await getUser(id)

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const { name, email, password } = await putSchema.validate(await request.json())

    if (email) {
      const emailExists = await validateEmail(email)
      if (!emailExists) {
        return NextResponse.json({ message: 'Email already exists' }, { status: 400 })
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email, password }
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error', error }, { status: 500 })
  }
}
