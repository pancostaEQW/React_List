// @ts-nocheck
import React from 'react'
import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext); 
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
      <div>
        <h1>Page of Login</h1>
        <form onSubmit={login} >
            <MyInput type='text' placeholder='enter login'/>
            <MyInput type='password' placeholder='enter pass'/>
            <MyButton>Enter</MyButton>
        </form>
      </div>
    )
  }

export default Login;