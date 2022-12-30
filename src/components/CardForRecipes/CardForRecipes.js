import React, { useEffect, useState } from "react";
import DetailPop from "../DetailPop/DetailPop";
import RecipeCard from "../RecipeCard/RecipeCard";
import './CardForRecipes.css'


const CardForRecipes= () => {

    const[recipeData, setRecipeData] = useState([])
    const [pop, setPop] = useState(false)
    const [recipe, setRecipe] = useState("")
    const [detailData,setDetailData] = useState("")


    const changePopStatus = () => {
        setPop(false)
    }

    const changePopTrue = () => {
        setPop(true)
      
    }

    const getData=(recipe)=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
        .then((response) => response.json())
        .then(results => setRecipeData(results.meals) )
        console.log(recipeData)
    }

    useEffect(() => {
        getData(recipe)
    }, [recipe])


    const getDetailPop=(data)=>{
        setDetailData(data)
        console.log(data)
    }

  
    return(
     
        <div className="cardForRecipes">
        <div className="container">
            <input type="text"  onChange={(e) => {
                setRecipe(e.target.value)
            }} placeholder="Search..." className="search-input"></input>
        </div>

        
    
        <div className="recipeCards">
        <div className="container-flex">

    
        {recipeData.map((item) => {
        return  (
            <>
        <RecipeCard img={item.strMealThumb} name={item.strMeal} item={item} getDetailPop={getDetailPop}  changePopTrue={changePopTrue}> </RecipeCard>
        {pop===true && <DetailPop id={item.idMeal} detailData={detailData}  changePopStatus={changePopStatus} ></DetailPop> }
        </>

        )
        
      })} 

        

        </div>
        </div>
      
        </div>

    )
}

export default CardForRecipes