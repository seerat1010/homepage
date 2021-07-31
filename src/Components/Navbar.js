import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <img className="navlogo" src="../images/logo.svg"></img>
               <div className="search">
                <img src="../images/search.svg"></img>
                <p>Search anything on tax and corporate law in bookstore</p>
               </div>
               <img src="../images/down.svg"></img>
               <button className="navbutton">Bookstore</button>
               <div className="navicon">
                <img src="../images/Reserach.svg"></img>
                <img src="../images/Notification.svg"></img>
                <img src="../images/Profile.svg"></img>
                <img src="../images/Cart.svg"></img>
               </div>

               <div className="circlebutton">
                   <img src="../images/burgermenu.svg"></img>
               </div>
            </div>
        </div>
    )
}

export default  Navbar;