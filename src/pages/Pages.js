import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import Searched from "./Searched";
import RecipePage from "./RecipePage";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NoPage/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/recipe/:uri" element={<RecipePage/>}/>
        </Routes>
    );
};

export default Pages;