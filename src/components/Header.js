import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

    const constOnClickHandle = (e) => {
      e.preventDefault();
      navigate('/');
    };

    return (
        <form action="" onSubmit={submitHandle}>
            <div className="header-component">
                <p className="main-text" onClick={constOnClickHandle}>Healthy Cooking Recipes</p>
                <input type="text" className="search-bar" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className="search-button">Search</button>
            </div>
        </form>
    );
};

export default Header;