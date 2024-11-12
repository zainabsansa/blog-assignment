import React from "react";
import Nav from "../Home/Nav";
import Bio from "../Bio/Bio"
import View from "../Home/view";
import Footer from "../Footer/Footer";
import coverimage2 from "../../assets/coverimage2.png"

function Blog() {
  return (
    <div className="blog-hero">
      <Nav />
      <Bio
        bio="Living Light: The Minimalist Lifestyle and its Environmental Impact"
        heading="Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life."
        img={coverimage2} alt='pic'
      />
      {/* </div> */}
      <View button="Load More" />
      <Footer />
    </div>
  );
}

export default Blog;
