import React from "react";
import DetailPop from "../DetailPop/DetailPop";
import RecipeCard from "../RecipeCard/RecipeCard";
import './CardForRecipes.css'


const CardForRecipes= () => {
    return(
     
        <div className="cardForRecipes">
           <DetailPop></DetailPop>
        <div className="container">
            <input type="text" placeholder="Search..." className="search-input"></input>
        </div>

        
    
        <div className="recipeCards">
        <div className="container-flex">

        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>

        

        </div>
        </div>
      
        </div>

    )
}

export default CardForRecipes