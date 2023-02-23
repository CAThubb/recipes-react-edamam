import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import RecipeInfo from "../components/RecipeInfo";
import Ingredients from "../components/Ingredients";

const RecipePage = () => {
    const [details, setDetails] = useState([]);

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${params.uri}?type=public&app_id=3fcfa665&app_key=fab698145ee3e2e0bdd196a4c99beac3`)
        const detailData = await data.json();
        setDetails(detailData.recipe);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.uri]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details.label}</h2>
                <img src={details.image} alt=""/>
                <RecipeInfo
                    calories={details.calories}
                    weight={details.totalWeight}
                    cuisine={details.cuisineType}
                    dish={details.dishType}
                    meal={details.mealType}
                />
                <Ingredients
                    length={details?.ingredientLines?.length}
                    ingredients={details?.ingredients}
                />
            </div>
        </DetailWrapper>
    );
};

const DetailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  margin-left: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 5px;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
  h2{
    font-family: 'Tilt Neon', cursive;
  }
`


export default RecipePage;