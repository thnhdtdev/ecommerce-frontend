import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login Function Executed", formData)

    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => { responseData = data })

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors)
    }
  }

  const singup = async () => {
    console.log("SignUp Function Executed", formData)

    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => { responseData = data })

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/backend");
    } else {
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginSignup-fields">
          {state === 'Sign Up' ? <input name='username' type="text" value={formData.username} onChange={changeHandler} placeholder='Your Name' /> : <></>}
          <input name='email' type="email" value={formData.email} onChange={changeHandler} placeholder='Email Address' />
          <input name='password' type="password" value={formData.password} onChange={changeHandler} placeholder='Password' />
        </div>
        <button onClick={() => { state === 'Login' ? login() : singup() }}>Continue</button>
        {state === 'Sign Up'
          ? <p className='loginSignup-login'>Already have an account? <span onClick={() => { setState('Login') }}>Login here!</span></p>
          : <p className='loginSignup-login'>Create an account? <span onClick={() => { setState('Sign Up') }}>Click here!</span></p>}
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
