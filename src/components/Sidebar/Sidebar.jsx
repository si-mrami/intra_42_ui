import React from 'react'
import './Sidebar.scss';
import img from "../../images/42-removebg-preview.png"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <img src={img} alt="" />
            </li>
            <li>
                <PersonOutlineOutlinedIcon className='icons'/>
            </li>
            <li>
                <AcUnitOutlinedIcon className='icons'/>
            </li>
            <li>
                <OndemandVideoOutlinedIcon className='icons'/>
            </li>
            <li>
                <ChatBubbleOutlineOutlinedIcon className='icons'/>
            </li>
            <li>
                <AccountBalanceWalletOutlinedIcon className='icons'/>
            </li>
            <li>
                <ExploreOutlinedIcon className='icons'/>
            </li>
            <li>
                <ShoppingCartOutlinedIcon className='icons'/>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar