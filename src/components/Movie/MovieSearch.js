import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { getMoviesByRating, getMoviesByParams } from "../../store/thunks";
import { useFormik } from 'formik';
import { MovieModal } from "../modal/MovieModal";

export const MovieSearch = () => {

    const dispatch = useDispatch();
    const { searchQuery } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [isAddActive, setAddActive] = useState(false);

    const handleAddModal = () => {
        setAddActive(!isAddActive);
    };

    useEffect(() => {
        dispatch(getMoviesByParams(searchQuery, searchParams.get("genre"), searchParams.get("sortBy")));
    }, []);

    const formik = useFormik({
        initialValues: {
            searchQuery: searchQuery
        },
        onSubmit: ({ searchQuery }) => {
            if (searchQuery) {
                dispatch(getMoviesByParams(searchQuery));
                navigate(`/search/${searchQuery}`);
            } else {
                dispatch(getMoviesByRating());
                navigate("/search");
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