import React from 'react' 
import './Search.scss'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='search ....' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/6282607/pexels-photo-6282607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search