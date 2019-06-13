import React from 'react';

function SearchBar () {
    return (
        <div>
            <form /*onSubmit={this.submitHandler}*/>
                <input
                    // value={this.state.listItem}
                    placeholder="Search"
                    type="text"
                // onChange={this.changeHandler}
                />
            </form>
        </div>
    )
};

export default SearchBar;