import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <form action="/search">
        <input type="text" name="test" />
        <select name="category">
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
        </select>
        <button>Find</button>
      </form>
    );
  }
}

export { SearchForm };
