import React from "react";
import alarmclock from "../assets/alarmclock.png";
import "../styles/button.css";

const Alarm = () => {
  return (
    <div>
      <div className="al-btn">
        <div className="alarm-icon"></div>
        <div className="al-bb">
          <a href="https://calendar.google.com/calendar/u/0/r?pli=1">
            <button className="buttos-btn">
              <img src={alarmclock} height={25} alt="alarmclock" /> اضافة منبه
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Alarm;
