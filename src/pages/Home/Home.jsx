import React from "react";
import Nav from "./Nav";
import Bio from "./Bio";
import Publication from "./Publication";
import posts from "../../utils/posts";
import "../Home/home.css";
import View from "./view";
import Footer from "../Footer/Footer";
import coverimg from "../../assets/coverimg.png"

function Home() {
  return (
    <div>
      <Nav />
      <Bio
        bio="Starter - a Minimalist Personal Blog Template."
        heading=" 'Starter' is a, well starter theme designed by nrk9819 for Ghost (CMS), 11ty, enhance, astro and many other site generators."
        img={coverimg}
        alt="one pic like that"
        caption="Minimalism is the key of peaceful life"
      />
      {posts.map((post) => (
        <Publication
          date={post.date}
          tag={post.tag}
          title={post.title}
          imageUrl={post.imageUrl}
        />
      ))}
      <View button="View More"/>
      <Footer />
    </div>
  );
}

export default Home;
