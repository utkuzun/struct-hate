import React from 'react'

import styles from './Button.module.css'

const MyButton = ({ text, color }) => {
  return (
    <div className={`${styles.btn} ${styles[color]}`}>
      <a href='#'>{text}</a>
    </div>
  )
}

export default MyButton
