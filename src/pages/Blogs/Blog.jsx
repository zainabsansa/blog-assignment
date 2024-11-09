import React from 'react'
import Nav from '../Home/Nav'
import Bio from '../Home/Bio'
import View from '../Home/view'
import Footer from '../Footer/Footer'

function Blog() {
  return (
    <div>
      <Nav/>
      <Bio bio="Living Light: The Minimalist Lifestyle and its Environmental Impact"
      heading="Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life."
      alt="one pic like that"
      caption="Minimalism is the key of peaceful life"
      />
      <View button="Load More"/>
      <Footer/>
    </div>
  )
}

export default Blog