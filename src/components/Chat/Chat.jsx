import React from 'react'
import './Chat.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <i class="fa fa-video"></i>
          <i class="fa-solid fa-user-plus"></i>
          <MoreHorizIcon/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat