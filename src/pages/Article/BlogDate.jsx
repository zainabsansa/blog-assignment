import React from "react";
import "../Article/article.css";
import Bio from "../Home/Bio";
import coverimage2 from "../../assets/coverimage2.png"

function BlogDate() {
  return (
    <div>
      <div className="blogDate">
        <span>February 2, 2024 in #sustainability</span>
        <span>5 min read</span>
      </div>
      <Bio
        bio="Living Light: The Minimalist Lifestyle and its Environmental Impact"
        heading="Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life."
        img={coverimage2}
      />
      
    </div>
  );
}

export default BlogDate;
