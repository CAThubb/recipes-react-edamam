import React, {useState} from 'react';
import Header from "../components/Header";
import RecipesList from "../components/RecipesList";


const Home = () => {
    return (
        <>
            <div className="home-page">
                <Header/>
                <RecipesList/>
            </div>
        </>
    );
};

export default Home;