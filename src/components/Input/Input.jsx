import React from 'react'
import './Input.scss'
import Button from '@mui/material/Button';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='something  ...' />
      <div className="send">
        <input style={{display:"none"}} type="file" name="" id="file"  />
        <label htmlFor="file">
          <i class="fa-solid fa-image"></i>
        </label>
        <Button variant="contained" className='buttons'>Send</Button>
      </div>
    </div>
  )
}

export default Input