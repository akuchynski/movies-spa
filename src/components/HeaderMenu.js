import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MovieModal } from "./Modal/MovieModal";
import { MovieDetails } from "./Movie/MovieDetails";

export const HeaderMenu = () => {
    const [isAddActive, setAddActive] = useState(false);

    const handleAddModal = () => {
        setAddActive(!isAddActive);
    };

    const { movieDetails } = useSelector(state => state.movies);

    return (
        <>{movieDetails ? <MovieDetails /> :
            <div className="header">
                <div className="logo">movie
                    <span>roulette</span>
                </div>
                <button className="add-button" onClick={handleAddModal}>+ ADD MOVIE</button>
                <div className="search">
                    <h1>FIND YOUR MOVIE</h1>
                    <form>
                        <input type="text" placeholder="What do you want to watch?" />
                        <button className="search-button">SEARCH</button>
                    </form>
                </div>
                {isAddActive && <MovieModal handleClose={handleAddModal} title={"ADD MOVIE"} />}
            </div>}
        </>
    );
};