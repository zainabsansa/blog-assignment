import React from "react";

function Publication(props) {
  return (
    <div className="blog-post">
      <div className="date-tag">
        <div>
          <span>{props?.date}</span>
          <span>{props?.tag}</span>
        </div>
        <div>
          <h3>{props?.title}</h3>
          <img src={props.imageUrl} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Publication;
