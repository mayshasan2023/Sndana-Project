import React from "react";
import "../styles/cards.css";
import "../styles/button.css";
import view from "../assets/view.png";
import { Link } from "react-router-dom";
import HeartButton from "./HeartButton";
import Alarm from "./Alarm";
export const Cards = ({ imgSrc, imgAlt, title, id }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="cardImg" />
      )}
      <HeartButton />

      {title && <h3 className="card-title">{title}</h3>}

      <div className="buttos">
        <div className="al-btn">
          <div className="view-icon"></div>
          <div className="al-bb">
            <Link to={`/Details/${id}`}>
              <button className="buttos-btn">
                <img src={view} height={30} alt="view" /> عرض التفاصيل
              </button>
            </Link>
          </div>
        </div>
        <Alarm />
      </div>
    </div>
  );
};
