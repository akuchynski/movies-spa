import React, { useState } from "react";
import { MovieModal } from "./Modal/MovieModal";

export const HeaderMenu = () => {
    const [isAddActive, setAddActive] = useState(false);

    const handleAddModal = () => {
        setAddActive(!isAddActive);
    };

    return (
        <div className="header">
            <div className="logo">movie
                <span>roulette</span>
            </div>
            <button className="add-button" onClick={handleAddModal}>+ ADD MOVIE</button>
            <div className="search">
                <h1>FIND YOUR MOVIE</h1>
                <input type="text" placeholder="What do you want to watch?" />
                <button className="search-button">SEARCH</button>
            </div>
            {isAddActive && <MovieModal handleClose={handleAddModal} title={"ADD MOVIE"} />}
        </div>
    )
}