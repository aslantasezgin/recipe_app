import React from "react";
import './RecipeCard.css'


const RecipeCard = ({changePopTrue,img,name}) => {
return(
    <div onClick={changePopTrue} className="recipe-card">
        <img src={img}></img>
        <h2 className="recipe-title">{name}</h2>
       
        </div>

)
}

export default RecipeCard