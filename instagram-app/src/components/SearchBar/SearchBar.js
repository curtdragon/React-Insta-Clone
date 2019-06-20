import React from "react";
import "./SearchBar.css";

function SearchBar () {
    return (
        <span className="searchBar">
            <span className="leftNav">
                <i className="fab fa-instagram fa-2x"></i>
                <h1>Instagram</h1>
            </span>
            <form className="searchBox"/*onSubmit={this.submitHandler}*/>
                <input
                    // value={this.state.listItem}
                    placeholder="🔍 Search"
                    type="text"
                // onChange={this.changeHandler}
                />
            </form>
            <span className="rightNav">
                <i className="far fa-compass fa-lg"></i>
                <i className="far fa-heart fa-lg"></i>
                <i className="far fa-user fa-lg"></i>
            </span>
        </span>
    )
};

export default SearchBar;