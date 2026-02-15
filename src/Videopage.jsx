import {Link,useParams} from "react-router-dom"
import { useState } from "react";
import Subscribe from "./Subscribe"

import "./Videopage.css"

export default function Videopage(){
    const [subscribed, setSubscribed] = useState(false);
    const [like,setlike]=useState(false);
    const {id}=useParams();
    const videopage ={
        1:{url:"https://www.youtube.com/embed/z6FukwueP1o?si=XfaN70wDiNnHoj3N"},
        2:{url:"https://www.youtube.com/embed/yIzCBU0_LyY?si=4bqe6yJT7hWgPr7O"},
        3:{url:"https://www.youtube.com/embed/Q_cq8__k--M?si=wBjLAswJnw9WBRwe"},
        4:{url:"https://www.youtube.com/embed/M8ichCVyxhQ?si=YZaW5xz8dkxYIumd"},
    }
    const name={
        1:"Kisi Ki Muskurahaton Pe (HD) - Anari | Mukesh Karaoke Songs | Raj Kapoor | Evergreen ‪@filmigaane‬",
        2:"Mere Mehboob Qayamat Hogi (Original) - Mr. X In Bombay - Kishore Kumar's Greatest Hits - Old Songs",
        3:"Barsaat Ke Mausam Mein | Naajayaz | Naseeruddin Shah | Kumar Sanu | Roop Kumar Rathod",
        4:"Baharon Phool Barsao - Hindi Lyrics | बहारों फूल बरसाओ | Suraj | Rajendra Kapoor | Mohammed"
    }
    const x = videopage[id];
   
    
    const y = name[id];
    if(!x && !y){
      return(
        <div style={{textAlign:"center", padding:"40px",height:"20px", fontFamily:"Arial",fontSize:"30px" }}>
        <h2>❗Video Not found</h2>
        <Link to ="/" style={{display:"inline-block", Padding:"10px 20px", backgroundColor:"indigo",color:"white",borderRadius:"5px",textDecoration:"none"}}>🏠Go Back Home</Link>
        </div>
      )
    }
    
    return(
        <div class="body">
        <div className="frame">
        <iframe 
        
        src={x.url}
         width="600" 
         height="400" 
         title={`Video - ${y}`}
         allowFullScreen>
        </iframe>
        <div><h1>{y}</h1></div>
        
        
        
         <div class= "ele">
        <div className="subscribe-container">

     <div> <button
        onClick={() => {
          setSubscribed(!subscribed);
        }}
      >
        {subscribed ? "UnSubscribe" : "Subscribe"}
      </button>
      </div>
      <h2>
        {subscribed ? "You have subscribed" : "you have not subscribed"}
      </h2>
      </div>
     

       
        <div className="like-container">

     <div> <button
        onClick={() => {
          setlike(!like);
        }}
      >
        {like ? "Unlike" : "like"}
      </button>
      </div>
      <h2>
        {like ? "You have liked" : "you have not liked"}
      </h2>
      </div>
      </div>
    
    </div>
    <Subscribe />
    </div>
    );
}