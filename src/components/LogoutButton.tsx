'use client'

import { useSession } from 'next-auth/react'
import { logout } from '@/auth'

export const LogoutButton = () => {
  const { status } = useSession()

  if (status === 'loading') {
    return <p style={{ padding: '2px' }}>
      <span >Espere...</span>
    </p >
  }

  return (
    <p
      onClick={async () => { await logout() }}
      style={{ cursor: 'pointer', margin: '0' }}
    >
      <span >Cerrar sesión</span>
    </p>
  )
}
