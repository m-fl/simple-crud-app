import React from 'react';
import '../App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

function Login(){
    return (
        <div>
            <LoginButton/>
            <Profile/>
            <LogoutButton/>
        </div>
    );
}

export default Login;