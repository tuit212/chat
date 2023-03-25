import React from 'react'
import Button from '@mui/material/Button';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John</span>
        <Button variant="contained" className='buttons'>Log out</Button>
      </div>
    </div>
  )
}

export default Navbar