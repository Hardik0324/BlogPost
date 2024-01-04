import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BlogPost</div>
      <div className={styles.text}>BlogPost creative thoughts @ All rights reserved.</div>
    </div>
  )
}

export default Footer