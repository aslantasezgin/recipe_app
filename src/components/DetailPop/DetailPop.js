import React, { useState } from "react";
import './DetailPop.css'

const DetailPop = ({changePopStatus,detailData}) => {
 
  let ingredientNumber = 0;
        
    return(
        <div className="pop-wrap">
         <div className="detailPop">
       <span onClick={changePopStatus}><i className="fa-solid fa-xmark"></i></span>
        
        
        <div className="pop-header">  <img className="detail-img" src={detailData.strMealThumb}></img>
         <h2>{detailData.strMeal} - <b> {detailData.strArea} Food </b> </h2> </div>
           <p><b> How Make This? </b></p>
           <p> {detailData.strInstructions}</p>
          
           <p style={{paddingTop:"10px"}}><b> Materials</b></p>

           <ul>

           <li> {detailData.strMeasure1 + " " + detailData.strIngredient1 } </li>
           <li> {detailData.strMeasure2 + " " + detailData.strIngredient2 } </li>
           <li> {detailData.strMeasure3 + " " + detailData.strIngredient3 } </li>
           <li> {detailData.strMeasure4 + " " + detailData.strIngredient4 } </li>
           <li> {detailData.strMeasure5 + " " + detailData.strIngredient5 } </li>
           <li> {detailData.strMeasure6 + " " + detailData.strIngredient6 } </li>
           <li> {detailData.strMeasure7 + " " + detailData.strIngredient7 } </li>
           <li> {detailData.strMeasure8 + " " + detailData.strIngredient8 } </li>
           <li> {detailData.strMeasure9 + " " + detailData.strIngredient9 } </li>
           <li> {detailData.strMeasure10 + " " + detailData.strIngredient10 } </li>
           <li> {detailData.strMeasure11+ " " + detailData.strIngredient11 } </li>
           <li> {detailData.strMeasure12 + " " + detailData.strIngredient12 } </li>
           <li> {detailData.strMeasure13 + " " + detailData.strIngredient13} </li>
           <li> {detailData.strMeasure14 + " " + detailData.strIngredient14 } </li>
           <li> {detailData.strMeasure15 + " " + detailData.strIngredient15 } </li>
           <li> {detailData.strMeasure16 + " " + detailData.strIngredient16 } </li>
           <li> {detailData.strMeasure17 + " " + detailData.strIngredient17 } </li>
           <li> {detailData.strMeasure18 + " " + detailData.strIngredient18 } </li>
           <li> {detailData.strMeasure19 + " " + detailData.strIngredient19 } </li>
           <li> {detailData.strMeasure20 + " " + detailData.strIngredient20 } </li>

   
           
           </ul>
        </div>
        </div>
   
    )
}


export default DetailPop