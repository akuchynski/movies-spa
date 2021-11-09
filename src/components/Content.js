import React from "react";
import { MovieList } from "./Movie/MovieList";
import { Filter } from "./Filter/Filter";

export const Content = () => {
    return (
        <div className="content">
            <Filter />
            <MovieList />
        </div>
    );
};