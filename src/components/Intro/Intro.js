import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Marcin Winiarski</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the Quality word.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            i am right side
        </div>
    </div>
  )
}

export default Intro