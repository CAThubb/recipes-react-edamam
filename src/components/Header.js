import React from 'react';

const Header = () => {
    return (
            <div className="header-component">
                <p className="main-text">Healthy Cooking Recipes</p>
                <input type="text" className="search-bar"/>
                <button className="search-button">Search</button>
            </div>
    );
};

export default Header;