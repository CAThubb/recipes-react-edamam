import React from 'react';
import {useContext} from "react";
import {SearchContext} from "../pages/Home";

const Header = () => {
    const {updateSearch, getSearch, search} = useContext(SearchContext);
    return (
            <div className="header-component">
                <p className="main-text">Healthy Cooking Recipes</p>
                <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
                <button className="search-button" onClick={getSearch}>Search</button>
            </div>
    );
};

export default Header;