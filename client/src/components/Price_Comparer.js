import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Counter from './Counter';
import DropdownSearch from './DropdownSearch';

const Price_Comparer = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    
    /*const [name, setName] = useState("");

    function nameSetter(v){
        setName(v.target.value)
    }


    if (isAuthenticated == true){
        return (
            <div id="price-comparer">
                <input type="text" name="name" value={name} onChange={nameSetter}/>
            </div>
        )
    }
*/
    if (isAuthenticated == true){
        return (
            <div id="price-comparer">
                <DropdownSearch/>
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

export default Price_Comparer
