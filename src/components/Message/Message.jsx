import React from 'react'
import './Message.scss'

const Message = ({message}) => {
  const {id , title , images } = message;

  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={images} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContact">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Message