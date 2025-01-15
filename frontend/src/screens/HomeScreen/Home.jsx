import Schedule from '../Appointment/Appointment'
import styles from './Home.module.css'
import TherapistsSection from './TherapistsSection'


function Home() {
  return (
    <>
      <section id="Home">
        <div className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.main__content}>
                    <h1>Matched with Care</h1>
                    <h2>Your Path to Healing</h2>
                    <button className={styles.main__btn}><a href="survey.html">Get Matched</a></button>
                </div>
                <div className={styles.main__imgConatiner}>
                    <img src="undraw_undraw_undraw_undraw_undraw_undraw_calling_mcgf_gyrw_2jtb_-1-_eb38_-1-_fikj_l652.svg" alt="pic" id="main__img"/>
                </div>
            </div>
        </div>
      </section>

     <TherapistsSection/>
     <Schedule/>
    </>
  )
}

export default Home
