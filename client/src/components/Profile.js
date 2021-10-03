import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const {user,isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <div style={{padding: "100px"}}>
                <img src={user.picture} alt = {user.name}/>
                <h2>Welcome, {user.name}</h2>
                <h3>Email: {user.email}</h3>
                <h3>Id: {user.sub /*this is so weird, nothing in the docs says to call user.user_id like this except when you stringify the whole user json the object labels user_id as sub???
                you can probably parse the google-oauth2 part but kinda unnecessary rn so whatever*/}</h3>
                {/*JSON.stringify(user, null, 2)*/}
            </div>
        )
    )
}

export default Profile
