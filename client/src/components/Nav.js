import React from 'react';
import {AppBar, ThemeProvider, Toolbar, Button, useScrollTrigger, CssBaseline, Zoom, Fab} from '@material-ui/core';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { theme } from './Theme';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const mainTheme = theme;

const useStyles = makeStyles((theme) =>  ({
    root: {
        flexGrow: 1
        
    },
    spacer: {
        flexGrow: 1
    },
}))

function Nav(props){
    const classes = useStyles();

    const linkStyle = {
        textDecoration: "none",
        color: "black"
    };

    var loginName = '';
    const { isAuthenticated } = useAuth0();
    
    if (isAuthenticated == false){
        return (
            <div className = {classes.root}>
                <ThemeProvider theme = {mainTheme}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Link to='/' style={linkStyle}>
                                <Button>Home</Button>
                            </Link>
                            <Link to='/about' style={linkStyle}>
                                <Button>About</Button>
                            </Link>
                            <div className= {classes.spacer}></div>
                            <Link to='Login' style={linkStyle}>
                                <Button>Login</Button>
                                
                            </Link>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
        );
    }
    else if (isAuthenticated == true){
        return (
            <div className = {classes.root}>
                <ThemeProvider theme = {mainTheme}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Link to='/' style={linkStyle}>
                                <Button>Home</Button>
                            </Link>
                            <Link to='/about' style={linkStyle}>
                                <Button>About</Button>
                            </Link>
                            <Link to='/game' style={linkStyle}>
                                <Button>Game</Button>
                            </Link>
                            <Link to='/leaderboard' style={linkStyle}>
                                <Button>Leaderboard</Button>
                            </Link>
                            <div className= {classes.spacer}></div>
                            <Link to='/login' style={linkStyle}>
                                <Button>Profile</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
        );
    }


    /*if (isAuthenticated === false) loginName = 'Login'; //this is laggy probably because it loads the page first then verifies authentication
    else loginName = "Profile";

    return (
        <div className = {classes.root}>
            <ThemeProvider theme = {mainTheme}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Link to='/' style={linkStyle}>
                            <Button>Home</Button>
                        </Link>
                        <Link to='/about' style={linkStyle}>
                            <Button>About</Button>
                        </Link>
                        <div className= {classes.spacer}></div>
                        <Link to='Login' style={linkStyle}>
                            <Button >{loginName}</Button>
                            
                        </Link>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );*/
}

export default Nav;