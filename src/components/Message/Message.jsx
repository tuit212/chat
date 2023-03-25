import React from 'react'
import './Message.scss'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContact">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Message