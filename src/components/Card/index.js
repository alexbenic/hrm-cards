import React from 'react'
import Description from '../Description'
import Avatar from '../Avatar'
import styles from './styles.css'

const Card = ({ Name, ImageUrl, Positions, onDelete }) => {
  return (
    <div className={styles.card}>
      <Avatar name={Name} imageUrl={ImageUrl} />
      <Description name={Name} positions={Positions} />
      <button className={styles.button} onClick={() => onDelete(Name)}> &#10060; </button>
    </div>
  )
}

export default Card
