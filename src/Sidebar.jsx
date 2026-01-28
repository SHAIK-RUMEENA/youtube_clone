import HomeIcon from "@mui/icons-material/Home"
import Thunderstorm from "@mui/icons-material/Thunderstorm"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import HistoryIcon from "@mui/icons-material/History"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import LiveTvIcon from "@mui/icons-material/LiveTv"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"
import ArticleIcon from "@mui/icons-material/Article"
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"
import SchoolIcon from "@mui/icons-material/School"
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural"
import PodcastsIcon from "@mui/icons-material/Podcasts"
import MovieIcon from "@mui/icons-material/Movie"
import YouTubeIcon from "@mui/icons-material/YouTube"
import MusicVideoIcon from "@mui/icons-material/MusicVideo"
import ChildCareIcon from "@mui/icons-material/ChildCare"
import SettingsIcon from "@mui/icons-material/Settings"
import FlagIcon from "@mui/icons-material/Flag"
import { Button } from "@mui/material";

import './Sidebar.css'

export default function Sidebar(){
return(
    <div className="sidebar">
        <div className="sidebar-section">
            <SidebarItem icon = {<HomeIcon/>} label="Home" active/>
            <SidebarItem icon={<Thunderstorm/>} label="Shorts"/>
            <SidebarItem icon={<SubscriptionsIcon/>} label={"Subscription"}/></div>
         <div className="sidebar-section">
            <SidebarItem icon = {<AccountCircleIcon className="Account"/>} label={"You"}/>
            <SidebarItem icon = {<HistoryIcon/>} label={"History"}/>
         </div>
         <div className="sidebar-section">
            <p>Sign in to like videos,comments, and subscribe.</p>
            <div className="signin">
            <Button 
            variant="contained"
            endIcon={<AccountCircleIcon className="Account"/>}
            size="small"
            className="button"
            >Sign in</Button>
            </div>
         </div>
        
          <div className="sidebar-section">
            <h4>Explore</h4>
            <SidebarItem icon = {<ShoppingBagIcon/>} label={"Shopping"}/>
            <SidebarItem icon = {<MusicNoteIcon/>} label={"Music"}/>
            <SidebarItem icon = {<MovieIcon/>} label={"Movies"}/>
            <SidebarItem icon = {<LiveTvIcon/>} label={"Live"}/>
            <SidebarItem icon = {<SportsEsportsIcon/>} label={"Gaming"}/>
            <SidebarItem icon = {<ArticleIcon/>} label={"News"}/>
            <SidebarItem icon = {<SportsSoccerIcon/>} label={"Sports"}/>
            <SidebarItem icon = {<SchoolIcon/>} label={"Courses"}/>
            <SidebarItem icon = {<FaceRetouchingNaturalIcon/>} label={"Fashion & Beauty"}/>
            <SidebarItem icon = {<PodcastsIcon/>} label={"Podcasts"}/>
          </div>
           <div className="sidebar-section">
            <h4>More From YouTube</h4>
            <SidebarItem icon = {<YouTubeIcon className="youtube-icon"/> } label={"YouTube Premium"} active/>
             <SidebarItem icon = {<MusicVideoIcon className="youtube-icon"/>} label={"YouTube Music"}/>
             <SidebarItem icon = {<ChildCareIcon className="youtube-icon"/>} label={"YouTube Kids"}/>


           </div>
            <div className="sidebar-section">
                <SidebarItem icon ={<SettingsIcon/>} label={"Settings"}/>
                  <SidebarItem icon ={<FlagIcon/>} label={"Report History"}/>
            </div>
    </div>
);
}








function SidebarItem({icon, label,active}){
    return(
       <div className={`Sidebar-item ${active?'active':""}`}>
{icon}
<span>{label}</span>
       </div>
    )
}