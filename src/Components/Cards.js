import React from "react";
import "../App.css";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

function Cards() {
  return (
    <div>
      <div className="container">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>

      <div className="container">
        <CardThree />
        <CardOne />
        <CardTwo />
      </div>

      <hr className="horizontal"></hr>
    </div>
  );
}

export default Cards;
