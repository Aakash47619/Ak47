import React from "react";
import "./Button.css";
export default function Button(){
    return(
        <form class="form">
        <p class="heading">Login</p>
        <input class="input" placeholder="Username" type="text"/>
        <input class="input" placeholder="Password" type="text"/> 
        <button class="btn">Submit</button>
        </form>
    
)
}