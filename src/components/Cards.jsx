import React from "react";
import "../styles/cards.css";
import "../styles/button.css";
export const Cards = ({ imgSrc, imgAlt, title }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="cardImg" />
      )}
      {title && <h3 className="card-title">{title}</h3>}
      <div 
      className="buttos">
        <a href="/Details/Details-continer">
        <button className="buttos-btn"> عرض التفاصيل</button>
        </a>
        <button className="buttos-btn"> اضافة منبه</button>
      </div>
    </div>
  );
};
