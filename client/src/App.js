import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;