import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/libs/prisma'

export const getUserSessionServer = async () => {
  const session = await getServerSession(authOptions)

  const user = session?.user

  return user
}

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    return null
  }

  if (!bcrypt.compareSync(password, user.password || '')) {
    return null
  }

  return user
}
