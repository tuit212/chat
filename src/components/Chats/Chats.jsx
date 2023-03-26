import React from 'react' 
import './Chats.scss'
import {data} from '../../Assets/data/data'

const Chats = () => {
  return (
    <div className='chats'>
      {data.map((item) => (
          <div className="userChat" key={item.id} >
            <img src={item.images} alt="" />
            <div className="userChatInfo">
              <span>{item.name}</span>
              <p>{item.title}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Chats