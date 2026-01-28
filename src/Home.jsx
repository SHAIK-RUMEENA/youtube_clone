import {Link} from 'react-router-dom'
import "./Home.css"
export default function Home(){
    return(
        <div className="home-container">
            <h1 className="home-title">fav Youtube Music</h1>
            <div className="video">
                <div className="videocard">
                    <img src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg" alt="Thumbnail">
                        
                            
                        
                    </img>
                    <h3>video-1</h3>
                    <Link to ="/video/1" className="Play">Play</Link>
                  

                </div>
                 <div className="videocard">
                    <img src="https://images.pexels.com/photos/29252875/pexels-photo-29252875.jpeg" alt="Thumbnail"></img>
                    <h3>video-2</h3>
                    <Link to ="/video/2" className="Play">Play</Link>
                   
                </div>
                <div className="videocard">
                    <img src="https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg" alt="Thumbnail"></img>
                    <h3>video-3</h3>
                    <Link to ="/video/3" className="Play">Play</Link>
                    
                </div> 
                 <div className="videocard">
                    <img src='https://images.pexels.com/photos/9149282/pexels-photo-9149282.jpeg' alt="Thumbnail"></img>
                    <h3>video-4</h3>
                    <Link to ="/video/4" className="Play">Play</Link>
                    
                </div>
                 <div className="videocard">
                    <img src='https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg' alt="Thumbnail"></img>
                    <h3>video-5</h3>
                    <Link to ="/video/5" className="Play">Play</Link>
                    
                </div>
                 <div className="videocard">
                    <img src='https://images.pexels.com/photos/10852344/pexels-photo-10852344.jpeg' alt="Thumbnail"></img>
                    <h3>video-6</h3>
                    <Link to ="/video/6" className="Play">Play</Link>
                    
                </div>
            </div>
        




        </div>
        
    )
}
