import React from "react";

export const MovieMessages = ({ isLoading, errorMessage }) => {
    return (
        <>
            {isLoading && <h3>Loading movies...</h3>}
            {errorMessage && <h3>{errorMessage}</h3>}
        </>
    );
};