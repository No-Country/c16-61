'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export const LogoutButton = () => {
  const { status } = useSession()

  if (status === 'loading') {
    return <p style={{ padding: '2px' }}>
      <span >Espere...</span>
    </p >
  }

  if (status === 'unauthenticated') {
    return <p
      onClick={async () => { await signIn() }}
    >
      <span >Ingresar</span>
    </p >
  }

  return (
    <p
      onClick={async () => { await signOut() }}
    >
      <span >Cerrar sesión</span>
    </p>
  )
}
