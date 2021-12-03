import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { getMoviesByRating, getMoviesByParams } from "../../store/thunks";
import { MovieModal } from "../modal/MovieModal";

export const MovieSearch = () => {

    const dispatch = useDispatch();
    const { query } = useRouter();
    const { name: [name] = []} = query;

    const [isAddActive, setAddActive] = useState(false);

    const handleAddModal = () => {
        setAddActive(!isAddActive);
    };

    const formik = useFormik({
        initialValues: {
            searchQuery : name,
        },
        onSubmit: ({ searchQuery }) => {
            if (searchQuery) {
                dispatch(getMoviesByParams(searchQuery));
            } else {
                dispatch(getMoviesByRating());
            }
        },
    });
    return (
        <div className="header">
            <div className="logo">movie
                <span>roulette</span>
            </div>
            <button className="add-button" onClick={handleAddModal}>+ ADD MOVIE</button>
            <div className="search">
                <h1>FIND YOUR MOVIE</h1>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="searchQuery"
                        name="searchQuery"
                        type="text"
                        placeholder="What do you want to watch?"
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.searchQuery}
                    />
                    <button className="search-button" type="submit">SEARCH</button>
                </form>
            </div>
            {isAddActive && <MovieModal handleClose={handleAddModal} title={"ADD MOVIE"} />}
        </div>
    );
};