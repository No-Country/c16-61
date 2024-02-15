import { type UserProps } from '@/users'
export const UsersGrid = ({ users = [] }: UserProps) => {
  return (
    <>
      <h1>Muestra todos los usuarios</h1>
      {
        users.map((user) => (
          // TODO UserCard
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      }
    </>

  )
}
