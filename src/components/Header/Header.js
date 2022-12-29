import React from "react";
import './Header.css'




const Header = () => {

    const logo = "https://cdn.dribbble.com/users/131733/screenshots/5472304/artboard_copy.png";

    return(
        <nav>
        <img src={logo} className="logo-img"></img>
        </nav>
    )
}

export default Header