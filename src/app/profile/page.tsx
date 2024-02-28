import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getUserSessionServer } from '@/auth/actions/auth-actions'
import { LogoutButton } from '@/components'

const ProfilePage = async () => {
  const user = await getUserSessionServer()

  if (!user) redirect('/api/auth/signin')

  const userName = user.name || 'Nombre de usuario'
  const userImage = user.image || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'

  return (
    <div>
      <h1>Perfil de usuario</h1>
      <div>
        <Image src={userImage} alt={userName} width={100} height={100} />
        <h2>{userName}</h2>
      </div>

      <LogoutButton />
    </div>
  )
}

export default ProfilePage