import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
        <form className="login_form">
        <input type="text" placeholder='Your email' />
        <input type="password" placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login