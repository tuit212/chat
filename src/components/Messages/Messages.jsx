import React from 'react' 
import './Messages.scss'
import {data} from '../../Assets/data/data'
import Message from '../Message/Message'

const Messages = () => {
  return (
    <div className='messages'>
      {data.map((message) => (
        <Message key={message.id}  message={message} />
      ))}
    </div>
  )
}

export default Messages