// React Import for Find Function
import React from "react";

// Find Function Layout
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
        {/* OnClick Find Button */}
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

// Export for Find Function
export default Find;
