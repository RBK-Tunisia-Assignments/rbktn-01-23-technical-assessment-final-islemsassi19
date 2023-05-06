import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = ({ one }) => {
  return (
    <div>
      <div className="receipe-content-area">
        <div className="container">
          <div className="header">
          <img width="500" height="60" src={one.Recipe_Image} alt="" />
            <div className="icon">
              <a href="/">
                <i className="fa fa-heart-o" />
              </a>
            </div>
          </div>
          <div className="text">
            <h1 className="food">{one.Recipe_Name}</h1>
            <i className="fa fa-clock-o"> {one.Cook_Time} Mins</i>
            <i className="fa fa-users"> Serves {one.Serves}</i>

            <p className="info">{one.Recipe_Description}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Onerecepie;
