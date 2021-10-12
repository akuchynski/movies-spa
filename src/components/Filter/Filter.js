import React from "react";

export const Filter = () => {
    return (
        <div className="filter">
            <div className="genre-filter">
                <ul>
                    <li><a className="active" href="#">ALL</a></li>
                    <li><a href="#">DOCUMENTARY</a></li>
                    <li><a href="#">COMEDY</a></li>
                    <li><a href="#">HORROR</a></li>
                    <li><a href="#">CRIME</a></li>
                </ul>
            </div>
            <div className="date-filter">
                <span className="sort">SORT BY</span>
                <button className="drop-btn">RELEASE DATE</button>
                <div className="dropdown-content">
                    <a href="#">2021</a>
                    <a href="#">2020</a>
                    <a href="#">2019</a>
                </div>
            </div>
        </div>
    )
}