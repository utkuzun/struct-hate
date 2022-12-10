import React from 'react'

import styles from './Button.module.css'

const MyButton = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.btn} ${styles.color1}`}>
        <a href='#'>{text}</a>
      </div>
    </div>
  )
}

export default MyButton
