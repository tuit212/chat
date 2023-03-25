import React from 'react'
import Chat from '../components/Chat/Chat'
import Sidebar from '../components/Sidebar/Sidebar'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <div className="wrapper">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home