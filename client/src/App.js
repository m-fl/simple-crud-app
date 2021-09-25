import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Game from './components/Game';
import Login from './components/Login';
import Scroll from './components/BackToTop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Leaderboard from './components/Leaderboard';



const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/leaderboard" component={Leaderboard}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;