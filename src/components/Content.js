import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import MovieList from "./MovieList";

export default function Content() {
    return (
        <div className="content">
            <ErrorBoundary>
                <MovieList />
            </ErrorBoundary>
        </div>
    )
}