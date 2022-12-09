import React from 'react'

import styles from './Button.module.css'

const MyButton = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.btn}>
        <a href='#'>{text}</a>
      </div>
    </div>
  )
}

export default MyButton
