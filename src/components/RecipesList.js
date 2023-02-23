import React, { useEffect, useState} from 'react';
import Recipe from "./Recipe";
import {Link} from "react-router-dom";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipe = async () => {
        const check = localStorage.getItem('popular');

        if (check){
            setRecipes(JSON.parse(check))
        }
        else{
            const api = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=3fcfa665&app_key=fab698145ee3e2e0bdd196a4c99beac3&diet=balanced&random=true`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.hits))
            setRecipes(data.hits);
        }
    }

    useEffect( () => {
        getRecipe();
    }, []);
    return (
        <div className="product-list">
            {recipes.map(recipe => (
                <Link to={"/recipe/" + recipe.recipe.uri.slice(51)}>
                <Recipe
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredientLines={recipe.recipe.ingredientLines}/>
                </Link>
            ))}
        </div>
    );
};

export default RecipesList;