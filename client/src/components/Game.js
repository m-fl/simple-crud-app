import { Button } from '@material-ui/core'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Counter from './Counter';

const Game = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isAuthenticated == true){
        return (
            <Counter />
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
