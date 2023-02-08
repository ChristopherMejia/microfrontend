import { useFetchUsers } from '../hooks/useFetchUsers';
import { ThUsers, TdUsers } from '../styles/Users';

const Users = () => {

  const { users } = useFetchUsers();

  return (
    <>
        <h3> Users </h3>
        <table>
            <thead>
                <tr>
                    <ThUsers>#</ThUsers>
                    <ThUsers>Name</ThUsers>
                    <ThUsers>Username</ThUsers>
                    <ThUsers>Email</ThUsers>
                    <ThUsers>Phone</ThUsers>
                    <ThUsers>Website</ThUsers>
                </tr>
            </thead>
            <tbody>
            { users.map( user => (
                <tr key={ user.id } > 
                    <TdUsers>{user.id}</TdUsers> 
                    <TdUsers>{user.name}</TdUsers> 
                    <TdUsers>{user.username}</TdUsers>
                    <TdUsers>{user.email}</TdUsers>
                    <TdUsers>{user.phone}</TdUsers>
                    <TdUsers> <a href={user.website} target="_blank"> {user.website} </a> </TdUsers> 
                </tr>
            ))}
            </tbody>
        </table>
    </>
  )
}

export default Users