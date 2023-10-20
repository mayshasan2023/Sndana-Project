import React from "react";
import watering from "../assets/watering.png";
import thermometer from "../assets/thermometer.png";
import sun from "../assets/sun.png";
import CustomTabPanel from "../components/CustomTabPanel";
import "../styles/details.css";
import "../styles/button.css";
import heart2 from "../assets/heart2.png";
import sent from "../assets/sent.png";
import Alarm from "../components/Alarm";

const Details = () => {
  return (
    <div id="Details-continer" className="Details-continer">
      <div className="top-text-Details">
        <h2> ورد الفل</h2>
      </div>
      <div className="col-details">
        <div className="row-details">
          <img
            className="img-details"
            src="https://theperfectgift.ae/cdn/shop/products/img_4412.jpg?v=1614350483"
            alt="plantPhoto"
          />
        </div>
        <div className="r-r-details">
          <div className="right-text-details">
            <h3>المنشأ الاصلي : آسيا الاستوائية</h3>
            <h3>نوع العناية : سهلة</h3>
            <h3>موقعة : خارجي</h3>
            <h3>نوعة : شمسي/ شبه ظلي</h3>
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
              <h6 className="tx-class">8-6 ساعة يوميا</h6>
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
              <h6 className="tx-class"> 45-35 درجة مئوية</h6>
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
              <h6 className="tx-class">مرة كل يومين</h6>
            </div>
            <div className="text-side-icons-details"></div>
            <div className="text-under-icons-details"></div>
          </div>

          <div className="buttos-details">
            <button className="buttos-btn">
            <img src={sent} height={25} alt="sent" />
              {" "}
              مشاركة
            </button>
            <button className="buttos-btn">
            <img src={heart2} height={30} alt="heart2" />
              {" "}
              اضافة المفضلة
            </button>
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
