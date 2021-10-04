import React from "react";
import AddMovieForm from "./AddMovie";
import DeleteMovieForm from "./DeleteMovie";

export default function ModalContainer() {
    return (
        <div className="modal">
            <AddMovieForm />
            <DeleteMovieForm />
        </div>
    )
}