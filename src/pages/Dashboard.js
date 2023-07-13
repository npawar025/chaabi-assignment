import React from "react";
import cardOne from "../assets/images/cardT1.svg";
import cardTwo from "../assets/images/cardT2.svg";
import cardThree from "../assets/images/cardT3.svg";
import cardFour from "../assets/images/cardT4.svg";
import statOne from "../assets/images/cardM1.svg";
import statTwo from "../assets/images/cardM2.svg";
import intOne from "../assets/images/cardL1.svg";
import intTwo from "../assets/images/cardL2.svg";
import intThree from "../assets/images/cardL31.svg";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <div className="dashboard-cards">
          <div className="single-card">
            <div className="card-content">
              <img src={cardOne} alt="chaabi stat" className="card1" />
            </div>
          </div>
          <div className="single-card">
            <div className="card-content">
              <img src={cardTwo} alt="chaabi stat" className="card2" />
            </div>
          </div>
          <div className="single-card">
            <div className="card-content">
              <img src={cardThree} alt="chaabi stat" className="card3" />
            </div>
          </div>
          <div className="single-card">
            <div className="card-content">
              <img src={cardFour} alt="chaabi stat" className="card4" />
            </div>
          </div>
        </div>
        <div className="statics">
          <div className="stats">
            <img src={statOne} alt="chaabi chart" className="stat1" />
          </div>
          <div className="stats">
            <img src={statTwo} alt="chaabi chart" className="stat2" />
          </div>
        </div>
        <div className="interaction">
          <div className="int-stats">
            <img
              src={intOne}
              alt="chaabi user interaction"
              className="interaction1"
            />
          </div>
          <div className="int-stats">
            <img
              src={intTwo}
              alt="chaabi user interaction"
              className="interaction2"
            />
          </div>
          <div className="int-stats">
            <img
              src={intThree}
              alt="chaabi user interaction"
              className="interaction3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
