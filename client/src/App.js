import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';




const App = () => {
    return (
        <div>
            <Nav />
            <Home />
            <About />
            <Login />
        </div>
    );
}
export default App;