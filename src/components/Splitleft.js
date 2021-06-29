import React from 'react'
import '../css/left.css'
import proglogo from '../images/programmer.png'

export default function Splitleft() {
    return (
        <div>

            <div className="bor-sl">


            <div className="s-l">
            
        <h3 className="hello">HELLO</h3>
        
        <svg height="10">
  <line x1="0" y1="0" x2="500" y2="0"   />
</svg>

<h1>I AM KUMARESH</h1>

<h4>SOFTWARE DEVELOPER</h4>

<button className="ping">PING ME</button>

<button className="info">GET CV</button>
<img src={proglogo} alt="programmer" />

<div id="about"></div>
        </div>
            </div>

            </div>
            


    )
}
