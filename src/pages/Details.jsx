import React from "react";
import watering from "../assets/watering.png";
import thermometer from "../assets/thermometer.png";
import sun from "../assets/sun.png";
import CustomTabPanel from "../components/CustomTabPanel";
import "../styles/details.css";
import "../styles/button.css";
import sent from "../assets/sent.png";
import Alarm from "../components/Alarm";
import { useParams } from "react-router-dom";
import plantData from '../components/plantData';
import { RWebShare } from "react-web-share";


const Details = () => {
  const { id } = useParams();
const plant = plantData.filter(
  (plant) => plant.idPlant.toString() === id.toString()
)[0];
if (!plant) {
  console.log(plant, "plant");
}

console.log(plantData ,"data palnt");
  return (
    <div id="Details-continer" className="Details-continer">
      <div className="top-text-Details">
        <h2> {plant.plantName}</h2>
      </div>
      <div className="col-details">
        <div className="row-details">
          <img
            className="img-details"
            src={plant.image}
          />
        </div>
        <div className="r-r-details">
          <div className="right-text-details">
            <h3>المنشأ الاصلي : {plant.contry}</h3>
            <h3>نوع العناية : {plant.types}</h3>
            <h3>موقعة : {plant.locations}</h3>
            <h3>نوعة :{plant.plantTypes}</h3>
          </div>

          <div className="icons-details">
            <div className="continrt-icons-dd">
              <div className="row-gap">
                <img
                  className="icons-gap-details"
                  src={thermometer}
                  height={40}
                  alt="thermometer"
                />
                <h6 className="text-class">الاضاءة</h6>
              </div>
              <h6 className="tx-class">{plant.lighting}</h6>
            </div>

            <div className="continrt-icons-dd">
              <div className="row-gap">
                <img
                  className="icons-gap-details"
                  src={sun}
                  height={40}
                  alt="sun"
                />
                <h6 className="text-class">الحرارة</h6>
              </div>
              <h6 className="tx-class">{plant.temperature}</h6>
            </div>

            <div className="continrt-icons-dd">
              <div className="row-gap">
                <img
                  className="icons-gap-details"
                  src={watering}
                  height={40}
                  alt="watering"
                />
                <h6 className="text-class">الري</h6>
              </div>
              <h6 className="tx-class">{plant.waterring}</h6>
            </div>
            <div className="text-side-icons-details"></div>
            <div className="text-under-icons-details"></div>
          </div>

          <div className="buttos-details">
            
            <RWebShare
                data={{
                    text: "Web Share - GfG",
                    url: "http://localhost:3000",
                    title: "GfG",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button className="buttos-btn">
            <img src={sent} height={25} alt="sent" />
              مشاركة
            </button>
            
            </RWebShare>
            <Alarm/>
          </div>
        </div>
      </div>
      <div>
        <CustomTabPanel />
      </div>
    </div>
  );
};

export default Details;
