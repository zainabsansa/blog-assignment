import React from "react";


function Bio(props) {
  return (
    <div className="bio">
      <div className="biotext">
        <h2>{props?.bio}</h2>
        <h5>{props?.heading}</h5>
      </div>

      <div className={`img ${props.caption ? 'with-caption' : ''}`}>
        <img src={props.img} alt={props?.alt} />
        {props.caption && <figcaption>{props.caption}</figcaption>}
      </div>
    </div>
  );
}


export default Bio;
