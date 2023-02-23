import React from 'react';
import styled from "styled-components";

const Ingredients = (props) => {
    return (
        <IngridInfo>
            <h3>{props.length} Ingredients</h3>
            <ul>{props?.ingredients?.map((ingredient) => (
                <li>{ingredient.text}</li>
            ))}</ul>
        </IngridInfo>
    );
};

const IngridInfo = styled.div`
  h3{
    font-family: 'Inter', sans-serif;
    margin-bottom: -2rem;
  }
  li{
    font-family: 'Inter', sans-serif;
  }
`

export default Ingredients;