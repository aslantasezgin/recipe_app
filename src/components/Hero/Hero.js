import React from "react";
import './Hero.css'

const Hero = () => {

    const heroImg = "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

    return(
        <div className="hero">
        <img src={heroImg}></img>

        <div className="hero-text">
            <h2>DELICIOUS RECIPES</h2>  
            <span>Easy and Practical Recipes</span>
        </div>

        </div>
    )
}


export default Hero