import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Musicplayer from '../components/Musicplayer'
import '../assets/styles.css'

function Playlisttwo() {
  return (
    <>
        <Sidebar/>
        <div className="main-container">
        

        <div className="playlist-container-2">
          <div className="image-container">
            <img src="./IMAGES/2. billie - happier tha ever.PNG" alt=""/>
          </div>
          <div className="image-detail-container">
            <small className="idt-1">Song</small>
            <h1 className="idt-2">Happier than ever</h1>
            <div className="be-container">
              <img src="./IMAGES/billie.PNG" alt=""  class="billie-img"/>
              <p className="b-name">Billie Eillish</p>
              <h4>.</h4>
              <p>Happier tha ever</p>
              <h4>.</h4>
              <p>2021</p>
              <h4>.</h4>
              <p>3:20</p>
              <h4>.</h4>
              <p>2,552,429,348</p>
            </div>
          </div>
        </div>
        <div className="playlist-content-one-2">
          <button className="btn-spotify">
            <div className="play">
              <span className="fa fa-play fa-xl"></span>
            </div>
          </button>
          <div className="like-btn">
            <button className="fa-regular fa-heart"></button>
          </div>
          <div className="opt-btn">
            <button className="fa-solid fa-ellipsis"></button>
          </div>
        </div>
        <div className="playlist-content-two-2">
          <ul className="playlist-header">
            <li>Title</li>
            <li className="alb">Album</li>
            <li>Date added</li>
            <li className="fa fa-clock"></li>
          </ul>
          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="./IMAGES/1.billie - lovely.PNG" alt=""/>
              <span className="pl-text">
                <p className="pl-1">lovely</p>
                <small className="pl-2">Billie Eillish</small>
              </span>
            </li>
            <li>lovely</li>
            <li>2018</li>
            <li className="clock">3.18</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="./IMAGES/3.billie - badguy.PNG" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Bad guy</p>
                <small className="pl-2">Billie Eillish</small>
              </span>
            </li>
            <li>bad guy</li>
            <li>2019</li>
            <li className="clock">3.44</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="./IMAGES/5.eminem - without me.PNG" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Withoutme</p>
                <small className="pl-2">Eminem</small>
              </span>
            </li>
            <li>show</li>
            <li>2002</li>
            <li className="clock">3.21</li>
          </ul>


          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="./IMAGES/10.edsheeran - perfect.PNG" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Perfect</p>
                <small className="pl-2">Edsheeran</small>
              </span>
            </li>
            <li>perfect</li>
            <li>2017</li>
            <li className="clock">3.21</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="./IMAGES/12.justin bieber - sorry.PNG" alt=""/>
              <span className="pl-text">
                <p className="pl-1">sorry</p>
                <small className="pl-2">justinbieber</small>
              </span>
            </li>
            <li>sorry</li>
            <li>2015</li>
            <li className="clock">3.21</li>
          </ul>
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

    </div>
        <Musicplayer/>
    </>
  )
}

export default Playlisttwo