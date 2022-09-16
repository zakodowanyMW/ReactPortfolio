import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

import Card from '../Card/Card.js'

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a corporis maiores omnis ea adipisci labore rem exercitationem asperiores 
                <br />
                repellat culpa mollitia nihil commodi accusantium libero ex, quae quibusdam quidem.
            </spane>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card 
                 emoji = {HeartEmoji}
                 heading = {"Design"}
                 detail = {"Figma, Sketch, Photoshop, Adobe"}   
                />
            </div>
            <div style={{top: '12rem', left: '-4rem'}}>
                <Card 
                 emoji = {HeartEmoji}
                 heading = {"Developer"}
                 detail = {"Html, Css, JavaScript, React"}   
                />
            </div>
            <div style={{top: '19rem', left: "12rem"}}>
                <Card 
                 emoji = {HeartEmoji}
                 heading = {"UX/UI"}
                 detail = {"Lorem impsum lore ipsu ksim jdskdsf"}   
                />
            </div>
        </div>
    </div>
  )
}

export default Services