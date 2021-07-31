import React from "react";
import "../App.css";

function CardThree() {
  return (
    <div>
     <div className="cardgroup">
        <div className="subcard">
        <img className="bestseller" src="../images/limitededition.svg"></img>
          <img className="cardimg" src="../images/book1.png"></img>
        </div>
        <p className="cardtext">
          Central Exercise Manual (Vol 2)<br></br>
          (Set of 3 books)
        </p>
        <p className="boldtext">By S.N. Bidani, P.K. Mitra</p>
       
        <div className="pricediv"> 
            <p>Rs.1799</p>
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

export default CardThree;
