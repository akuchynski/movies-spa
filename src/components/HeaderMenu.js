import React from "react";

export default function HeaderMenu() {
    return (
        <div className="header">
            <div className="logo">movie
                <span>roulette</span>
            </div>
            <button className="add-button">+ ADD MOVIE</button>
            <div className="search">
                <h1>FIND YOUR MOVIE</h1>
                <input input type="text" placeholder="What do you want to watch?" />
                <button className="search-button">SEARCH</button>
            </div>
        </div>
    )
}