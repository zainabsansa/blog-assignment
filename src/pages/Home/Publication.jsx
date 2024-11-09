import React from "react";

function Publication(props) {
  return (
    <div className="blog-post">
      <div className="date-tag">
        <div>
          <span className="tag-span">
            {props?.date}  .  #{props?.tag}
          </span>
        </div>
        <div className="article">
          <h3>{props?.title}</h3>
          <img src={props.imageUrl} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Publication;
