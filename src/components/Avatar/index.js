import React from 'react';
import styles from './styles.css';

const Avatar = ({ name, imageUrl }) => {
  const BASE_API = 'http://api-hrm.htec.rs'
  const ADORABLE_AVATARS = 'https://api.adorable.io/avatars/285'
  const url = !!imageUrl ? `${BASE_API}/${imageUrl}` : `${ADORABLE_AVATARS}/${name}`

  return (
    <img src={url} className={styles.avatar}/>
  )
}

export default Avatar
