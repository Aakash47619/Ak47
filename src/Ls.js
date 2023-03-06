import React from "react"
import './Style.css'
import Opp from './Opp'
import './Nav.css'
export default function Ls(){
    return (
    <div>
        <Opp/>
        <header className="header">Welcome To Aka's Note Hub</header>
        <nav>
  <ul>
    <li><a href="topu.html">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="aka.html">Blogs</a></li>
    <li><a href="rcs.html">Games</a></li>
  </ul>
</nav>

    <img src="./images/toon.jpg" alt=""></img>
    <p className="container">Note</p>
    
    </div>
        
    )
}
