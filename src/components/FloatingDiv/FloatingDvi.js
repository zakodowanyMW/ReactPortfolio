import React from 'react'
import './FloatingDiv.css';

function FloatingDvi( { image, txt1, txt2 }) {
  return (
    <div className="floatingdiv">
        <img src={image} alt="" />
        <span>
            {txt1}
            <br/>
            {txt2}
            </span>
    </div>
  )
}

export default FloatingDvi