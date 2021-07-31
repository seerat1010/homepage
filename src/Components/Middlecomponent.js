import React from "react";
import Cards from "./Cards";
import CarouselHome from "./Carousel";

function Middlecomponent() {
  return (
    <div>
  
      <div className="middlecontainer">
 
        <CarouselHome/>

        <div className="contmid">
    
          <div className="middlemain">
            <span className="middlemainleft">
              <p className="recom">Recommended for you</p>
              <img src="../images/Down.svg"></img>
            </span>
            <p className="view">View all</p>
          </div>
          <Cards />

          <div className="middlesub">
            <p className="release">New Releases</p>
            <p className="view">View all</p>
          </div>
          <Cards />
        </div>
       
      </div>
    </div>
  );
}

export default Middlecomponent;
