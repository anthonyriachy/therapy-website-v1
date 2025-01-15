import React from 'react'
import styles from './Welcome.module.css'
import RegisterComponent from './RegisterComponent'
function Welcome() {
  return (
    <section className={styles.container}>
        <div>
            <h1 className={styles.headerText}>Welcome to ...</h1>
            <p className={styles.welcomeText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita earum eveniet repellat quibusdam, quasi distinctio, consequuntur quo dolorum non ipsum a molestias. Obcaecati libero at reprehenderit quam deserunt earum?</p>
            <button type="button">book an appointement</button>
        </div>
        <RegisterComponent/>
    </section>
  )
}

export default Welcome