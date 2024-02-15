import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

export async function GET() {
  await prisma.user.deleteMany() // DELETE ALL users

  await prisma.user.createMany({
    data: [
      {
        email: 'admin@mail.com',
        password: '123456'
      },
      {
        email: 'user1@mail.com',
        password: '123456'
      }
    ]
  }
  )

  return NextResponse.json({ message: 'Executed seeded' })
}
