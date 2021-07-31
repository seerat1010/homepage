import React from "react";
import "../App.css";

function CardOne() {
  return (
    <div>
      <div className="cardgroup">
        <div className="subcard">
          <img className="bestseller" src="../images/bestseller.svg"></img>
          <img className="cardimg" src="../images/cardimg.png"></img>
        </div>
        <p className="cardtext">
          Income Tax Rules with Master<br></br>
          Guide To Income Tax Rules
        </p>
        <p className="boldtext">Aditya Gadge, Biharilal Deora</p>
       
        <div className="pricediv"> 
            <p>Rs.345</p>
            <div>
            <img src="../images/Star.svg"></img>
            <img src="../images/Star.svg"></img>
            <img src="../images/Star.svg"></img>
            <img src="../images/Star.svg"></img>
            <img src="../images/Star-not-marked.svg"></img>
            </div>
     
        </div>
        <div className="buttondiv">
          <button className="button">Add to cart</button>
          <button className="button">Buy now</button>
        </div>
      </div>

     
    </div>
  );
  
}

export default CardOne;
