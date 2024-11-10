import React from 'react'

function BlogContent(props) {
  return (
    <div className='blog-content'>
        <h4>{props?.heading}</h4>
        <p>{props?.content}</p>
    </div>
  )
}

export default BlogContent