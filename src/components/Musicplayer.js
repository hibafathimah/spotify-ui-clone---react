import React from 'react'
import '../assets/styles.css'
function Musicplayer() {
  return (
    <>
    <div className="music-player">
      <div className="mp-set1">
        <div className="mp-image">
          <img src="./IMAGES/1.billie - lovely.PNG" alt="" />
        </div>
        <div className="mp-title">
              <p className="mpt-1">Lovely</p>
              <small className="mpt-2">Billie Eillish</small>
        </div>
        <button className="fa-regular fa-heart"></button>
      </div>

      <div className="mp-set2">
        <ul className="control-buttons">
          <li className="fas fa-random mt-d"></li>
          <li className="fas fa-step-backward mt-d"></li>
          <div className="play-pause"><li className=" fas fa-play"></li></div>
          <li className="fas fa-step-forward mt-d"></li>
          <li className="fas fa-undo-alt mt-d"></li>
        </ul>
        <div className="progress-container">
          <input type="range" name="range" id="myProgressBar"/>
        </div>
      </div>

      <div className="mp-set3">
          <ul className="other-features">
            <li className="fa fa-list"></li>
            <li className="fa fa-computer"></li>
            <li className="fa fa-volume-off"></li>
            <li className="fa fa-tv"></li>
          </ul>
      </div>

    </div>
    </>
    
  )
}

export default Musicplayer