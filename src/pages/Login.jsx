import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'

const Login = () => {
  return (
    <div className="fromContainer">
        <div className="fromWrapper">
            <span className="logo">Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" name="" id="" placeholder='email' />
                <input type="password" name="" id="" placeholder='password' />
                <button>Sing in</button>
            </form>
            <p>You Don't  accound  <Link className='link'  to={'login'}  >Register</Link> </p>
        </div>
    </div>
  )
}

export default Login