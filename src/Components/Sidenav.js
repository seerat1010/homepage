import React from "react";

function Sidenav() {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      function hideprof() {
        document.getElementById("prof1").style.display = "none";
        document.getElementById("prof").style.display = "flex";
      }
      function showprof() {
        document.getElementById("prof1").style.display = "block";
        document.getElementById("prof").style.display = "none";
      }
  return (
    <div className="sidenavmain">
      <div className="sidenavobutton" onClick={openNav}>
        <div className="ovalbutton">
          <img src="../images/right.svg"></img>
        </div>
        <p>Show</p>
      </div>

      <div id="mySidenav" className="sidenav">
        <div className="sidenavbutton" onClick={closeNav}>
          <p>Hide</p>
          <div className="ovalbutton">
            <img src="../images/left.svg"></img>
          </div>
        </div>
        <div className="sidecon" style={{ backgroundColor: "#FEE6D6" }}>
          &nbsp; &nbsp;
          <p>Bookstore Home</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon" id="prof" onClick={showprof} style={{cursor : "pointer"}}>
          <img src="../images/plus.svg"></img>
          <p>Professional Books</p>
        </div>

        <div id="prof1" onClick={hideprof} style={{cursor : "pointer"}}>
          <div className="sidecon">
            <img src="../images/minus.svg"></img>
            <p>Professional Books</p>
          </div>
          <hr className="sidehr"></hr>
          <div className="profside">
            <p>Direct Tax Laws</p>
            <p> International Taxation</p>
            <p>Indirecr Tax Laws</p>
            <p>
              Insolvency and<br></br>
              Bankruptcy Code
            </p>
            <p>GST</p>
            <p>Accounts and Audit</p>
            <p>Banking & Insurance</p>
            <p>Bare Acts</p>
          </div>
        </div>

        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>NISM/IIBF</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>Journals</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>Tax Compliance on DVD</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>Taxmann online on DVD</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>Taxmann online on Web</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>E-Services</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>E-Journals</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>E-Books</p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>
            Advanced diploma in <br></br>international taxation
          </p>
        </div>
        <hr className="sidehr"></hr>
        <div className="sidecon">
        &nbsp; &nbsp;
          <p style={{color: "#8A8A8A"}}>
            Quick Links
          </p>
        </div>
        <div className="sidecon">
        &nbsp; &nbsp;
          <p>
            Bookmann India
          </p>
        </div>
        <div className="sidecon">
        &nbsp; &nbsp;
          <p>
              Authors
          </p>
        </div>
        <div className="sidecon">
          <img src="../images/plus.svg"></img>
          <p>
            Catelogue
          </p>
        </div>
        
        <div className="sidecon">
        &nbsp; &nbsp;
          <p>
            Dealers
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Sidenav;
