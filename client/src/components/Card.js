// React Import for Card Function
import React from "react";

// Card Function and Layout
function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

// Card Export Function
export default Card;
