import React from 'react';
import {AppBar, ThemeProvider, Toolbar, Button} from '@material-ui/core';
import {theme} from './Theme';
import { makeStyles } from '@material-ui/core';

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
                        <Button>Home</Button>
                        <Button>About</Button>
                        <div className= {classes.spacer}></div>
                        <Button >Login</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}

export default Nav;