import React, { useEffect } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, getMovieById, updateMovie } from "../../store/thunks";
import { genres } from '../../utils/genres';
import movieUtils from "../../utils/movieUtils";
import * as Yup from 'yup';

export const MovieModal = ({ movieId, handleClose }) => {

    const isAddMode = !movieId;
    const dispatch = useDispatch();
    const ref = useClickOutside(handleClose);
    const { movieDetails } = useSelector(state => state.movies);

    const initialValues = {
        title: movieDetails ? movieDetails.title : '',
        release_date: movieDetails ? movieDetails.release_date : '',
        poster_path: movieDetails ? movieDetails.poster_path : '',
        vote_average: movieDetails ? movieDetails.vote_average : 0,
        genres: movieDetails ? movieUtils.getOptions(movieDetails.movieGenres) : [],
        runtime: movieDetails ? movieDetails.runtime : 0,
        overview: movieDetails ? movieDetails.overview : ''
    };

    const AddEditSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        release_date: Yup.date()
            .required('Required'),
        poster_path: Yup.string()
            .url()
            .required('Required'),
        vote_average: Yup.number()
            .min(0, 'Value must be greater than 0!')
            .max(10, 'Value must be less than 10.0!')
            .required('Required'),
        runtime: Yup.number()
            .min(0, 'Too Short!')
            .required('Required'),
    });

    useEffect(() => {
        if (!isAddMode)
            dispatch(getMovieById(movieId));
    }, []);

    return (
        <div className="modal">
            <div className="add-movie-modal">
                <span className="close" onClick={handleClose}>&#x2715;</span>
                <h2>{isAddMode ? "ADD MOVIE" : "EDIT MOVIE"}</h2>

                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={AddEditSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        if (isAddMode) {
                            dispatch(addMovie(values));
                        } else {
                            dispatch(updateMovie(movieId, values));
                        }
                        setSubmitting(false);
                        handleClose();
                    }}
                >
                    {({ isSubmitting, setFieldValue, values }) => (
                        <Form>
                            <label className="modal-text">
                                TITLE
                                <Field type="text" name="title" autoComplete="off" />
                                <ErrorMessage name="title" component="div" />
                            </label>
                            <label className="modal-text-short">
                                RELEASE DATE
                                <Field type="text" name="release_date" autoComplete="off" />
                                <ErrorMessage name="release_date" component="div" />
                            </label>
                            <label className="modal-text">
                                POSTER PATH
                                <Field type="text" name="poster_path" autoComplete="off" />
                                <ErrorMessage name="poster_path" component="div" />
                            </label>
                            <label className="modal-text-short">
                                RATING
                                <Field type="number" name="vote_average" autoComplete="off" />
                                <ErrorMessage name="vote_average" component="div" />
                            </label>
                            <label className="modal-text">
                                GENRES
                                <Select
                                    isClearable={false}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    value={values.genres}
                                    onChange={options => setFieldValue("genres", options)}
                                    options={genres}
                                    isMulti={true}
                                />
                                <ErrorMessage name="genres" component="div" />
                            </label>
                            <label className="modal-text-short">
                                RUNTIME
                                <Field type="number" name="runtime" autoComplete="off" />
                                <ErrorMessage name="runtime" component="div" />
                            </label>
                            <label className="modal-textarea">
                                OVERVIEW
                                <Field component="textarea" name="overview" rows="6" cols="100" />
                                <ErrorMessage name="overview" component="div" />
                            </label>

                            <div className="modal-buttons">
                                <button className="submit-button" type="submit" disabled={isSubmitting}>SUBMIT</button>
                                <button className="reset-button" type="reset">RESET</button>
                            </div>

                        </Form>
                    )}
                </Formik>;
            </div>
        </div>
    );
};