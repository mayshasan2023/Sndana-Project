import * as React from 'react';
import Button from "@mui/material/Button";
import "../styles/hero.css";
function Hero() {
  return (
    <div>
    <section className="hero">
      <div className="hero-content">
        <h1> ويه سندانة نباتاتك رح تعيش بسلام </h1>
        <p>.نباتات ظلية ، نباتات شمسية ، نباتات سهلة العناية والمزيد</p>
        <a href="#continer-home">
        <Button variant="contained" color="primary">
            تصفح الآن
          </Button>
        </a>
      </div>
    </section>
  </div>
  );
}

export default Hero;
