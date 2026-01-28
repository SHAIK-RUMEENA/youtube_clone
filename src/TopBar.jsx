import React from 'react'

import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon  from '@mui/icons-material/VideoCall';
import NotificationIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./TopBar.css"
export default function TopBar(){
    return(
        <div className="Topbar">
        <div className="Topbar-Left">
        <MenuIcon className="menu-icon"/>
        <div clasName="logo">
        <YouTubeIcon className="youtube-icon"/>
        <span className="logo-text">YOUTUBE</span>
        </div>
        </div>


        <div className="Topbar-Center">
            <div className='search-bar'>
            <input type="text" placeholder='search' className='search-input'></input>
            <div className="search-button">
        <SearchIcon/>
        </div></div>
        <div clasName="mic-button">
        <MicIcon/>
        </div>
        </div>
       


        <div className="Topbar-Right">
            <VideoCallIcon/>
            <NotificationIcon/>
            <AccountCircleIcon className="icon"/>
        </div>
       </div>
    );
}