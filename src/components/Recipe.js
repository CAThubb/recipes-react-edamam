import React from 'react';

const Recipe = ({title, calories, image, ingredientLines}) => {

    return (
        <div className="recipe-box">
            <div className="object">
                <img src={image} className="image-recipe"/>
                <span className="recipe-title">{title}</span>
            </div>
            <div className="data-object">
                <hr className="line-1"/>
                <span className="recipe-cl">
                    <span className="recipe-calories">{Math.round(calories)} calories </span>
                </span>
                <span className="recipe-in">
                    <span className="recipe-ingredients">{ingredientLines.length} ingredients</span>
                </span>
            </div>
        </div>
    );
};

export default Recipe;