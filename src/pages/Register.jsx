import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'
import img from '../Assets/img/img chats.png'

const Register = () => {
  return (
    <div className="fromContainer">
        <div className="fromWrapper">
            <span className="logo">Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" name="" id=""  placeholder='Name' />
                <input type="email" name="" id="" placeholder='email' />
                <input type="password" name="" id="" placeholder='password' />
                <input style={{display:"none"}} type="file" name="" id="file"  />
                <label htmlFor="file">
                    <img src={img} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sing up</button>
            </form>
            <p>You Register accept  <Link className='link'  to={'login'}  >Login</Link> </p>
        </div>
    </div>
  )
}

export default Register