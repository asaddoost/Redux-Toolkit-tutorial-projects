import React from 'react';

import { login, logout } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
  return (
    <>
            <button
                onClick={()=> {
                dispatch(login({
                name: "Asad",
                age: 0,
                email: "asad.doost@gmail.com"
            }))
        }}
        >Login</button>
            <button
                onClick={()=> {
                dispatch(logout())
        }}
        >logout</button>
    </>
  
    

    
  )
}

export default Login