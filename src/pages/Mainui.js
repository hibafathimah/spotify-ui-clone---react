import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Preview from '../components/Preview'
import '../assets/styles.css'
function Mainui() {
  return (
    <>
      
        <Sidebar/>
        <div className="main-container">
        <Topbar/>

        <div className="spotify-playlists">
          
          <div className="show-all">
            <h2>Spotify Playlists</h2>
            <span >
              <a href="showall.html" className="showall-link">Show all</a>
            </span>
          </div>
          
    
          <div className="list">
            <div className="item">
              <img src="./IMAGES/1.billie - lovely.PNG" />
              <div className="play">
                <Link to='/playlist'><span class="fa fa-play" ></span></Link>
              </div>
              <h4>Lovely</h4>
              <p>Billie and Khalid's haunting collaboration</p>
            </div>
    
            <div class="item">
              <img src="./IMAGES/2. billie - happier tha ever.PNG" />
              <div class="play">
                <Link to='/playlisttwo'><span className="fa fa-play"></span></Link>
              </div>
              <h4>Happier Than Ever</h4>
              <p>Emotional journey, hauntingly honest lyrics</p>
            </div>
    
            <div className="item">
              <img src="./IMAGES/3.billie - badguy.PNG" />
              <div className="play">
                <a href="./badguy.html"><span className="fa fa-play"></span></a>
              </div>
              <h4>Bad Guy</h4>
              <p>Hypnotic beats, rebellious charm.</p>
            </div>
    
            <div className="item">
              <img src="./IMAGES/4.billie - notime to die.PNG" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>No Time To Die</h4>
              <p>Dark, cinematic farewell ballad</p>
            </div>
    
            <div className="item">
              <img src="./IMAGES/5.eminem - without me.PNG" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Without Me</h4>
              <p>Emotional breakup anthem</p>
            </div>
    
          </div>
        </div>

        <div className="spotify-playlists">
          <h2>Focus</h2>
          <div className="list">
            <div className="item">
              <img src="./IMAGES/9.katypery - harleys in hawaiii.PNG" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Harleys In Hawaii</h4>
              <p>Tropical romance, Harley dreamscape</p>
            </div>
    
            <div className="item">
              <img src="./IMAGES/10.edsheeran - perfect.PNG" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Perfect</h4>
              <p>Romantic bliss in harmonious melody</p>
            </div>
    
          </div> 
        </div> 
        <div className="footer">
          <div className="ft-container">
            <div className="ft-one">
              <ul>
                <li className="ft-header">Company</li>
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div className="ft-one">
              <ul>
                <li className="ft-header">Communities</li>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
              </ul>
            </div>
            <div className="ft-one">
              <ul>
                <li className="ft-header">Useful links</li>
                <li>Support</li>
                <li>For Moble App</li>
              </ul>
            </div>
          </div>
          <div className="icon-container">
            <span className="fa-brands fa-instagram fa-xl"></span>
            <span className="fa-brands fa-twitter fa-xl"></span>
            <span className="fa-brands fa-facebook fa-xl"></span>
          </div>
        </div>

        <hr/>

        <div className="copy-right">
          <p className="cr-text">@2023 Spotify AB</p>
        </div>
    </div>
        <Preview/>
    </>
  )
}

export default Mainui