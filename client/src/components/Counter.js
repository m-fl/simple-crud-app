import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class Counter extends Component { //next step put clicked info into database with relation to auth0 specific accounts then fetch data from database and provide the individual scores of each auth0 account
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState(prevItr => ({ count: prevItr.count + 1}))
    }
    render() {
        return (
            <div>
                <Button style= {{margin: "10px", backgroundColor:"#fbb3"}} variant="contained" className = "block" onClick={this.handleClick}>
                    Click Me To Increase Score
                </Button>
                <div style= {{margin: "10px"}} className = "counter">Score: {this.state.count}</div>
            </div>
        )
    }
}




//ReactDOM.render(<Block />, document.getElementById('root'))

