import React, { useEffect } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, getMovieById, updateMovie } from "../../store/thunks";
import { genres } from '../../utils/genres';

export const MovieModal = ({ movieId, handleClose }) => {

    const isAddMode = !movieId;

    const dispatch = useDispatch();

    const ref = useClickOutside(handleClose);

    useEffect(() => {
        if (!isAddMode)
            dispatch(getMovieById(movieId));
    }, []);

    const { movieDetails } = useSelector(state => state.movies);

    return (
        <div className="modal">
            <div className="add-movie-modal">
                <span className="close" onClick={handleClose}>&#x2715;</span>
                <h2>{isAddMode ? "ADD MOVIE" : "EDIT MOVIE"}</h2>

                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        title: movieDetails ? movieDetails.title : '',
                        release_date: movieDetails ? movieDetails.release_date : '',
                        poster_path: movieDetails ? movieDetails.poster_path : '',
                        vote_average: movieDetails ? movieDetails.vote_average : 0,
                        genres: movieDetails ? movieDetails.genres.map(item => ({ value: item, label: item })) : [],
                        runtime: movieDetails ? movieDetails.runtime : 0,
                        overview: movieDetails ? movieDetails.overview : ''
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.title) {
                            errors.title = 'Required';
                        } else if (values.title.length <= 2) {
                            errors.title = 'Must be 3 characters or more';
                        }

                        if (!values.release_date) {
                            errors.release_date = 'Required';
                        }

                        if (!values.poster_path) {
                            errors.poster_path = 'Required';
                        }

                        if (!values.vote_average) {
                            errors.vote_average = 'Required';
                        } else if (values.vote_average < 0 || values.vote_average > 10) {
                            errors.vote_average = 'Value must be between 0 and 10.0';
                        }

                        return errors;
                    }}
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
                                <Field type="text" name="title" />
                                <ErrorMessage name="title" component="div" />
                            </label>
                            <label className="modal-text-short">
                                RELEASE DATE
                                <Field type="text" name="release_date" />
                                <ErrorMessage name="release_date" component="div" />
                            </label>
                            <label className="modal-text">
                                POSTER PATH
                                <Field type="text" name="poster_path" />
                                <ErrorMessage name="poster_path" component="div" />
                            </label>
                            <label className="modal-text-short">
                                RATING
                                <Field type="number" name="vote_average" />
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
                                <Field type="number" name="runtime" />
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