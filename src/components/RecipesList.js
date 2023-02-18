import React, {useEffect, useState} from 'react';
import axios from "axios";
import Recipe from "./Recipe";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=3fcfa665&app_key=fab698145ee3e2e0bdd196a4c99beac3`)
            .then((res) => {
                console.log(res.data.hits);
                setRecipes(res.data.hits);
            });
    }, []);
    return (
        <div className="product-list">
            {recipes.map(recipe => (
                <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
                        image={recipe.recipe.image} ingredientLines={recipe.recipe.ingredientLines}/>
            ))}
        </div>
    );
};

export default RecipesList;