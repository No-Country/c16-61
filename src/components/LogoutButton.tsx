'use client'

import { logout } from '@/auth'

export const LogoutButton = () => {
  // const { status } = useSession()

  // if (status === 'loading') {
  //   return <p style={{ padding: '2px' }}>
  //     <span >Espere...</span>
  //   </p >
  // }

  // if (status === 'unauthenticated') {
  //   return <p
  //     onClick={async () => { await signIn() }}
  //   >
  //     <span >Ingresar</span>
  //   </p >
  // }

  return (
    <p
      onClick={async () => { await logout() }}
    >
      <span >Cerrar sesión</span>
    </p>
  )
}
