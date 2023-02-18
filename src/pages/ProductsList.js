import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Recipe from "../components/Recipe";


const ProductsList = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    };

    /*const APP_ID = "3fcfa665";
    const APP_KEY = "fab698145ee3e2e0bdd196a4c99beac3";*/

    useEffect( () => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=3fcfa665&app_key=fab698145ee3e2e0bdd196a4c99beac3`)
          .then((res) => {
              console.log(res.data.hits);
              setRecipes(res.data.hits);
          });
    }, [query]);

    const navigate = useNavigate();
    function goToHome(){
        navigate("/")
    }
    function goToProfile(){
        navigate("/form")
    }
    return (
        <div className="product-list---">
            <form className="search-from" onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button">Search</button>
            </form>
            <button onClick={goToHome}>Go to home</button>
            <button onClick={goToProfile}>Go to profile</button>
            {recipes.map(recipe => (
                <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
                image={recipe.recipe.image} />
            ))};
        </div>
    );
};

export default ProductsList;