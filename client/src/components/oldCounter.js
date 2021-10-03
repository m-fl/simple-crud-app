import React, { Component } from 'react'
import Axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core'

export default class oldCounter extends Component { //next step put clicked info into database with relation to auth0 specific accounts then fetch data from database and provide the individual scores of each auth0 account
    state = {
        count: 0
    }
    loadAuth = () =>{
        const {user} = new useAuth0();
        return user.name
    }
    handleClick = () => {
        this.setState(prevItr => ({ count: prevItr.count + 1}))
    }
    postToScoreData = () => {
        Axios.post("http://localhost:3001/insert", {username: this.loadAuth(), counter: this.state.count});
    }
    render() {
        return (
            <div>
                <Button style= {{margin: "10px", backgroundColor:"#fbb3"}} variant="contained" className = "block" onClick={() =>{
                    this.handleClick();
                    this.postToScoreData();
                    }}>
                    Click Me To Increase Score
                </Button>
                <div style= {{margin: "10px"}} className = "counter">Score: {this.state.count}</div>
            </div>
        )
    }
}




//ReactDOM.render(<Block />, document.getElementById('root'))

