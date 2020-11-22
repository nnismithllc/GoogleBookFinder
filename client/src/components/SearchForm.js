import React from "react";

function Find(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control book-input"
          placeholder="Enter a Category or Book Name"
          id="search"
        />

        <button
          onClick={props.handleFormSubmit}
          className="btn btn-info search-btn"
        >
          Find
        </button>
      </div>
    </form>
  );
}

export default Find;
