import React from 'react';
import { Cards } from "../components/Cards";
import '../styles/favorites.css';
const Favorites = () => {
  return (
    <div className='Favorites-continer'>
      <div className="text-Favorites" >
      <h3>نباتاتي المفضلة</h3>
      </div>
    <div className='Fav-continer'>    
    <Cards
            imgSrc="https://www.terraceoutdoorliving.com.au/cdn/shop/products/Monstera-Deliciosa-Cheese-Plant-terrace-outdoor-living-0.jpg?v=1685052614"
            imgAlt="plantPhoto1"
            title="ورد الجوري"
          />
          <Cards
            imgSrc="https://cb.scene7.com/is/image/Crate/NolMedPlanterArrngmntCHS21/$web_pdp_main_carousel_low$/210121164236/nol-large-planter-with-potted-zz-plant.jpg"
            imgAlt="plantPhoto1"
            title="اكاسيا"
          />
          <Cards
            imgSrc="https://ecotreeau.com.au/cdn/shop/products/tb_image_share_1617966626393_mh1663589926524_1024x.jpg?v=1663589959"
            imgAlt="plantPhoto1"
            title="ورد الفل"
          />
          <Cards
            imgSrc="https://lorashen.ua/static/media/uploads/product/garden/.thumbnails/20200409_132907sq-6.jpg/20200409_132907sq-6-0x600.jpg"
            imgAlt="plantPhoto1"
            title="عين القط"
          />
          <Cards
            imgSrc="https://cb.scene7.com/is/image/Crate/NolMedPlanterArrngmntCHS21/$web_pdp_main_carousel_low$/210121164236/nol-large-planter-with-potted-zz-plant.jpg"
            imgAlt="plantPhoto1"
            title="اكاسيا"
          />
            <Cards
            imgSrc="https://www.terraceoutdoorliving.com.au/cdn/shop/products/Monstera-Deliciosa-Cheese-Plant-terrace-outdoor-living-0.jpg?v=1685052614"
            imgAlt="plantPhoto1"
            title="عين القط"
          />
          <Cards
            imgSrc="https://cb.scene7.com/is/image/Crate/NolMedPlanterArrngmntCHS21/$web_pdp_main_carousel_low$/210121164236/nol-large-planter-with-potted-zz-plant.jpg"
            imgAlt="plantPhoto1"
            title="اكاسيا"
          />

    </div>
    </div>
  );
}

export default Favorites;
