import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Recipe from "../components/Recipe";

const Searched = () => {
    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=3fcfa665&app_key=fab698145ee3e2e0bdd196a4c99beac3`);
        const recipes = await data.json();
        setSearched(recipes.hits);
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    return (
        <div className="product-list">
            {searched.map(recipe => (
                <Link to={"/recipe/" + recipe.recipe.uri.slice(51)}>
                    <Recipe
                        key={recipe.recipe.calories * 1.001}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredientLines={recipe.recipe.ingredientLines}/>
                </Link>
            ))}
        </div>
    );
};

export default Searched;