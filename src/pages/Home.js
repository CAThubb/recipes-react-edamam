import React, {createContext, useState} from 'react';
import Header from "../components/Header";
import RecipesList from "../components/RecipesList";

export const SearchContext = createContext("");

const Home = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("apple");

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <SearchContext.Provider value={{query, search, updateSearch, getSearch}}>
                <div className="home-page">
                    <Header/>
                    <RecipesList/>
                </div>
        </SearchContext.Provider>
    );
};

export default Home;