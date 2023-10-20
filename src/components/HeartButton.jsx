import React from "react";
import heart from "../assets/heart.png";

const HeartButton = () => {
  return (
    <div>
      <div className="card-container-heart">
        <button className="heart-btn-style">
          <img src={heart} height={30} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default HeartButton;
