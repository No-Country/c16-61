import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getUserSessionServer } from '@/auth'
import { LogoutButton } from '@/components'

const ProfilePage = async () => {
  const user = await getUserSessionServer()

  if (!user) redirect('/auth/login')

  const userName = user.name || 'Nombre de usuario'
  const userImage = user.image || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'

  return (
    <div style={{ padding: '10px' }}>
      <h1>Perfil de usuario</h1>
      <div style={{ padding: '10px' }}>
        <div style={{ marginRight: '10px', padding: '10px' }}>
          <Image src={userImage} alt={userName} width={100} height={100} style={{ marginBottom: '20px' }} />
          <p>Nombre: {userName}</p>
          <p>Email: {user.email}</p>
          <button type='button' style={{ padding: '5px' }}>
            <LogoutButton />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
