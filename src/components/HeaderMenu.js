import React, { useState } from "react";
import { AddMovieModal } from "./Modal/AddMovie";

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
            {isAddActive && <AddMovieModal handleClose={handleAddModal} />}
        </div>
    )
}