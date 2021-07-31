import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Card, Button } from "@material-ui/core";

function CarouselHome() {
  return (
    <div className="carouselcont">
      <Carousel  navButtonsAlwaysVisible={true}
      indicators={false}
      navButtonsProps={
          {
            style:{
                backgroundColor: ' #FFFFFF',
                border: ' 1px solid #E3EAF2',
                color: '#F88822'
            }
          }
          
      }>
        <Paper className="item1">
          <Card className="item">
            <img className="imagecarousel" src="../images/image3.png"/>

            <div className="carouselcon">

              <p className="carouselhead">subscription 2019</p>
              <p className="carouselsub">Boost your Practice </p>
              <p className="desc">An all encompassing , authentic and <br></br>
              update plateform</p>
              <button className="carouselbutton">Know more</button>

            </div>
           
          </Card>
        </Paper>

        <Paper>
          <Card className="item">
            <img className="imagecarousel" src="../images/img4.jpg"/>

            <div className="carouselcon">

              <p className="carouselhead">subscription 2019</p>
              <p className="carouselsub">Boost your Practice </p>
              <p className="desc">An all encompassing , authentic and <br></br>
              update plateform</p>
              <button className="carouselbutton">Know more</button>

            </div>
           
          </Card>
        </Paper>
       
        <Paper>
          <Card className="item">
            <img className="imagecarousel" src="../images/img5.jpg"/>

            <div className="carouselcon">

              <p className="carouselhead">subscription 2019</p>
              <p className="carouselsub">Boost your Practice </p>
              <p className="desc">An all encompassing , authentic and <br></br>
              update plateform</p>
              <button className="carouselbutton">Know more</button>
              
            </div>
           
          </Card>
        </Paper>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
