import React from "react";
import { Cards } from "../components/Cards";
import "../styles/favorites.css";
const Favorites = () => {
  return (
    <div className="Favorites-continer">
      <div className="text-Favorites">
        <h3>نباتاتي المفضلة</h3>
      </div>
      <div className="Fav-continer">
    
          <Cards
            id={1}
            imgSrc="https://www.terraceoutdoorliving.com.au/cdn/shop/products/Monstera-Deliciosa-Cheese-Plant-terrace-outdoor-living-0.jpg?v=1685052614"
            imgAlt="plantPhoto1"
            title="العمود الفقري"
          />
      </div>
    </div>
  );
};

export default Favorites;
