import React from "react";
import "../styles/cards.css";
import "../styles/button.css";
import alarmclock from "../assets/alarmclock.png";
import view from "../assets/view.png";
import heart from "../assets/heart.png";
export const Cards = ({ imgSrc, imgAlt, title }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="cardImg" />
      )}
      <div className="card-container-heart">
        <img src={heart} height={30} alt="heart"/>
      </div>

      {title && <h3 className="card-title">{title}</h3>}

      <div className="buttos">
        <div className="al-btn">
          <div className="view-icon"></div>
          <div className="al-bb">
            <a href="/Details/Details-continer">
              <button className="buttos-btn">
                {" "}
                <img src={view} height={30} alt="view"></img>
                عرض التفاصيل
              </button>
            </a>
          </div>
        </div>

        <div className="al-btn">
          <div className="alarm-icon"></div>
          <div className="al-bb">
            <button className="buttos-btn">
              {" "}
              <img src={alarmclock} height={38} alt="alarmclock"></img>
              اضافة منبه
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
