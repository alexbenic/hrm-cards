import React from 'react'
import Description from '../Description'
import Avatar from '../Avatar'
import styles from './styles.css'

const Card = ({ Name, ImageUrl, Positions }) => {
  return (
    <div className={styles.card}>
      <Avatar name={Name} imageUrl={ImageUrl} />
      <Description name={Name} positions={Positions} />
    </div>
  )
}

export default Card
