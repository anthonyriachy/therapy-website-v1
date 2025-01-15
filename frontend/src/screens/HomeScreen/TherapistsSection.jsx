import React from 'react'
import styles from "./Home.module.css"
import TherapistCard from './TherapistCard'
function TherapistsSection() {
    const therapists=[
        {
            name:"Maha Riachy",
            specialization:"Cognitive Behavioral",
            image:"undraw_female_avatar_efig.svg "
        },{
            image:"undraw_male_avatar_g98d (1).svg",
            name:"Grace Riachy",
            specialization:"Compassionate Guide"
        }
    ]
  return (
    <section id={styles.therapists}>
    <div class={styles.services}>
        <h1>Our Therapists</h1>
        <div class={styles.services__container}>
            {therapists.length>0&& 
                therapists.map(
                    therapist=> <TherapistCard name={therapist.name} specialization={therapist.specialization} image={therapist.image}/>)
            }
        </div>
    </div>
    </section>  
    )
}

export default TherapistsSection