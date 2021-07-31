import React from "react";

function Sidecomponent() {
  return (
    <div>
      <div className="side1">
        <div className="mainsidecont">
          <div className="sidecont">
            <img src="../images/Orion_truck.svg"></img>
            <div className="textcont">
              <p className="sidehead">Quick Delivery</p>
              <p className="sidesubtext">
                FedEx courier in most<br></br>
                of the cities
              </p>
            </div>
          </div>

          <div className="sidecont">
            <img src="../images/Orion_archive-box.svg"></img>
            <div className="textcont">
              <p className="sidehead">Free Shipping</p>
              <p className="sidesubtext">
                Across India on order<br></br>
                above Rs 350
              </p>
            </div>
          </div>

          <div className="sidecont">
            <img src="../images/Orion_secure-payment.svg"></img>
            <div className="textcont">
              <p className="sidehead">Secured Payment</p>
              <p className="sidesubtext">
                Taxmann provides<br></br>
                secure service
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="Off">Offers</p>
        <div className="side2">
          <div className="sidecardcont">
            <img className="sidecontimg" src="../images/image2.png"></img>
            <div className="sidecardtxt">
              <p className="sideconthead">Super deal of a lifetime</p>
              <p className="sidecontsub">
                Get 2 modules at a price of 1 module
              </p>
              <p className="sideconttext">Know more</p>
            </div>
          </div>
        </div>

        <div className="side2">
          <div className="sidecardcont">
            <img className="sidecontimg" src="../images/image1.png"></img>
            <div className="sidecardtxt">
              <p className="sideconthead">Books under Rs 599 only</p>
              <p className="sidecontsub">
                5000+ books on Income Tax and Corporate Tax
              </p>
              <p className="sideconttext">Know more</p>
            </div>
          </div>
        </div>

        <div className="side2">
          <div className="sidecardcont">
            <img className="sidecontimg" src="../images/image2.png"></img>
            <div className="sidecardtxt">
              <p className="sideconthead">Super deal of a lifetime</p>
              <p className="sidecontsub">
                Get 2 modules at a price of 1 module
              </p>
              <p className="sideconttext">Know more</p>
            </div>
          </div>
        </div>

        <div className="side2">
          <div className="sidecardcont">
            <img className="sidecontimg" src="../images/image1.png"></img>
            <div className="sidecardtxt">
              <p className="sideconthead">Books under Rs 599 only</p>
              <p className="sidecontsub">
                5000+ books on Income Tax and Corporate Tax
              </p>
              <p className="sideconttext">Know more</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidecomponent;
