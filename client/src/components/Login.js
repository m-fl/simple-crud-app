import React from 'react';
import '../App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

function Login(){
    return (
        <div>
            <h1>Login Page</h1>
            <LoginButton/>
            <LogoutButton/>
            <Profile/>
        </div>
    );
}

export default Login;