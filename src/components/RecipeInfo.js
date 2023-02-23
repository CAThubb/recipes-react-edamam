import React from 'react';
import styled from "styled-components";

const RecipeInfo = (props) => {
    return (
        <InfoWrapper>
            <h3>Calories - {Math.round(props.calories)}</h3>
            <h3>Weight - {Math.round(props.weight)}g</h3>
            <h3>Cuisine - {props.cuisine}</h3>
            <h3>Meal Type - {props.meal}</h3>
            <h3>Dish Type - {props.dish}</h3>
        </InfoWrapper>
    );
};

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  
  background: #f8ebe4;
  width: 60%;
  height: 30%;
  border-radius: 10px;
  
  h3{
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: 'Tilt Neon', cursive;
    font-weight: lighter;
    font-size: medium;
  }
`

export default RecipeInfo;