import React from 'react'

import './style.css'

const MyButton = ({ text }) => {
  return (
    <div className='btn'>
      <a href='#'>{text}</a>
    </div>
  )
}

export default MyButton
