import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core'

const Counter = () => {
    const [count, setCount] = useState(0)
    const {user} = new useAuth0();
    const [scoreList, setScoreList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) =>{
            setScoreList(response.data)
        })
    })

    function handleClick(){
        setCount(count + 1);
    }

    function postToScoreData(){
        Axios.post("http://localhost:3001/insert", {username: user.sub, counter: count + 1});
    }

    return (
        <div>
             <Button style= {{margin: "10px", backgroundColor:"#fbb3"}} variant="contained" className = "block" onClick={() =>{
                handleClick();
                postToScoreData();
                }}>
                    Click Me To Increase Score
                </Button>
                <div style= {{margin: "10px"}} className = "counter"> {user.name}'s Score: {count}</div>
                <h1>Data</h1>
                {scoreList.map((val, key) => {
                    return <div><h1>username: {val.username} scores: {val.counter}</h1> </div>
                })}
        </div>
    )
}

export default Counter
