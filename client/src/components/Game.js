import { Button } from '@material-ui/core'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Counter from './Counter';

const Game = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isAuthenticated == true){
        return (
            <div id="game-component">
                <Counter />
                <p style={{padding: "20px 600px 20px 600px"}}>This is my basic idea of how this website would work. Have a web based game that has been compiled in html5 displayed in this component while the api sends data to the database such as leaderboard information which can then be viewed in the Leaderboard tab by all users.</p> 
            </div>
        )
    }

    else if (isLoading == true){
        return(
            <h1>Loading..</h1>
        )
    }

   else return (
       <h1> ERROR NOT AUTHENTICATED </h1>
   )
}

export default Game
