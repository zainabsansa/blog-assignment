import React from "react";
import img from "../../assets/image.png";

function Bio(props) {
  return (
    <div className="bio">
      <div className="biotext">
        <h2>{props?.bio}</h2>
        <h5>{props?.heading}</h5>
      </div>

      <div className="img">
        <img src={img} alt={props?.alt} />
        <figcaption>{props?.caption}</figcaption>
      </div>
    </div>
  );
}

export default Bio;
