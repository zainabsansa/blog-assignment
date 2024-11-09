import React from 'react'

function View(props) {
  return (
    <div className='viewmore'>
        <button>{props?.button}</button>
    </div>
  )
}

export default View;