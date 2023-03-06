import React from 'react'
import './Topbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <div className="search">
          <SearchOutlinedIcon className='icon'/>
          <input type='text' placeholder='Search...'/>
        </div>
      </div>
      <div className="right">
        <div className="notif">
          <NotificationsNoneOutlinedIcon className='icon'/>
          <span>0</span>
          </div>
          <span>JStone</span>
          <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
        </div>      
    </div>
  )
}

export default Topbar