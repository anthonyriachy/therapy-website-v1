import React from 'react'
import styles from "./Home.module.css"
function TherapistCard({specialization,name,image}) {
  return (
        <div class={styles.services__card}>
            <img src={image} alt="female avatar" class={styles.avatar}/>
            <h2>{name}</h2>
            <p>{specialization}</p>
        </div>
  )
}

export default TherapistCard