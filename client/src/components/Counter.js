import React, {useState, useEffect, useCallback} from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import CounterUpdate from './CounterUpdate';

const Counter = () => {
    const [count, setCount] = useState(0);
    const {user} = new useAuth0();
    const [scoreList, setScoreList] = useState([]);
    const newEntry = false;
    var globalScoreList = 0;
    //if mapped scorelist val.username == user.sub 
    //then -> setCount(val.counter)
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

    const updateScore = () => {
        Axios.put("http://localhost:3001/update", {id: "615be54f078c8823389a967f", updateCount: count})
    }

    function mapScoreList(){
       scoreList.map((val, key) => {
           
        })
    }
    
    function getThisCounter(){
        scoreList.map((val, key) => {
            if (val.username == user.sub){
                globalScoreList = val.counter
            }
        })
    }

  /* const currentScore = useCallback(() =>{
       scoreList.map((val, key) => {
            if (val.username == user.sub){
                setCount(val.counter + 1)
            }
        })
    }, [counter])
*/

    return (
        <div id ="button">
            
            
            <Button style= {{margin: "10px", backgroundColor:"#fbb3"}} variant="contained" className = "block" onClick={() =>{
                handleClick();
                if(newEntry){
                    postToScoreData();
                }
                else if (!newEntry){
                    getThisCounter();
                    console.log(globalScoreList)
                    updateScore();
                }
            }}>
                Click Me To Increase Score
            </Button>
                <div id ="button" className = "counter"> {user.name}'s Score: {count}</div>
                <h1>Data from db</h1>

                {scoreList.map((val, key) => {
                    return <div key = {key}>
                        <h1>{val.username}+{val.counter}</h1> </div>
                })}

                {/*TODO:This function can be used to set up the leaderboard as it already renders the information to the app, all that needs to happen now is to only add a new entry to the database if its a user's first time updating score, otherwise don't create a new entry just update the previous entry associated with the id and useEffect to update on the frontend counter*/}
                
        </div>
    )
}

export default Counter
