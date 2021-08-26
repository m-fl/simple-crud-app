import React from 'react';
import {AppBar, ThemeProvider, Toolbar, Button, useScrollTrigger, CssBaseline, Zoom, Fab} from '@material-ui/core';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { theme } from './Theme';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const mainTheme = theme;

const useStyles = makeStyles((theme) =>  ({
    root: {
        flexGrow: 1
        
    },
    spacer: {
        flexGrow: 1
    },
    scrollOver: {
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));

function ScrollTop(props){
    const {children} = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const onClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#scroll-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={onClick} role="presentation" className={classes.scrollOver}>
                {children}
            </div>
        </Zoom>
    );
}


function Nav(props){
    const classes = useStyles();

    const linkStyle = {
        textDecoration: "none",
        color: "black"
    };

    return (
        <div className = {classes.root}>
            <CssBaseline />
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
                            <Button >Login</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Toolbar id="#scroll-top-anchor"/>
                <ScrollTop {...props}>
                    <Fab color = "primary" size ="small" aria-label="scroll back to top">
                        <KeyboardArrowUp />
                    </Fab>
                </ScrollTop>
            </ThemeProvider>
        </div>
    );
}

export default Nav;