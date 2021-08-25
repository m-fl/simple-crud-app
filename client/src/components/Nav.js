import React from 'react';
import {AppBar, ThemeProvider, Toolbar, Button} from '@material-ui/core';
import {theme} from './Theme';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const mainTheme = theme;

const useStyles = makeStyles((theme) =>  ({
    root: {
        flexGrow: 1
    },
    spacer: {
        flexGrow: 1
    }
}));



function Nav(){
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <ThemeProvider theme = {mainTheme}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Link to='/'>
                            <Button>Home</Button>
                        </Link>
                        <Link to='/about'>
                            <Button>About</Button>
                        </Link>
                        <div className= {classes.spacer}></div>
                        <Link to='Login'>
                            <Button >Login</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}

export default Nav;