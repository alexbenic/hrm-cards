import React from 'react'
import styles from './styles.css'

const Description = ({ name, positions }) => {
  return (
    <div className={styles.description}>
      {name}
      <br/>
      <div className={styles.job}>
        {positions ? positions[0].Name : 'Software Dev'}
      </div>
    </div>
  )
}

export default Description
