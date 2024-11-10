import React from "react";
import cover from "../../assets/coverimage.png";

function Hero(props) {
  return (
    <div className="hero">
      <h2>{props?.heading}</h2>
      <img src={cover} alt={props?.alt} />
      <p>{props?.p}</p>
      <p>{props?.p2}</p>
      <p>{props?.p3}</p>
    </div>
  );
}

export default Hero;
