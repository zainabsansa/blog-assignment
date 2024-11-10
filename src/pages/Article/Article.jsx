import React from "react";
import Nav from "../Home/Nav";
import BlogDate from "./BlogDate";
import BlogContent from "./BlogContent";
import BlogHashtag from "./BlogHashtag";
import Footer from "../Footer/Footer";


function Article() {
  return (
    <div className="blog_article">
      <Nav />
      <BlogDate />


      <BlogContent
        content={
          <>
            In a world drowning in excess, the minimalist lifestyle emerges as a
            beacon of simplicity. Minimalists consciously pare down possessions,
            focusing on what truly adds value to life.
          </>
        }
      />
      <BlogContent
        heading="Reducing Consumption"
        content={
          <>
            Minimalism's emphasis on essentialism naturally leads to reduced
            consumption. By resisting the urge to accumulate unnecessary items,
            minimalists contribute to a decrease in demand for goods,
            alleviating the environmental strain caused by overproduction.
          </>
        }
      />
      <BlogContent
        heading="Sustainable Practices"
        content={
          <>
            Minimalists often gravitate towards sustainable practices, favoring
            quality over quantity. From eco-friendly products to renewable
            energy sources, their choices promote a healthier planet and a more
            mindful existence.
          </>
        }
      />
      <BlogContent
        heading="Positive Environmental Footprint"
        content={
          <>
            By adopting a minimalist lifestyle, individuals not only declutter
            their physical spaces but also lighten their ecological impact. This
            intentional approach to living resonates far beyond personal spaces,
            inspiring a collective shift towards a more sustainable and
            environmentally conscious world.
          </>
        }
      />
      
      <BlogHashtag />
      <Footer />
    </div>
  );
}

export default Article;
