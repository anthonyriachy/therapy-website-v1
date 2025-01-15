import React from 'react'
import styles from "./NavBar.module.css"
function NavBar() {
  return (
        <nav className={styles.navbar}> 
            <div className={styles.navbar__container}>
                <a href="/" id={styles.navbar__logo}>Therapify</a>
                <div className={styles.navbar__toggle} id={styles.mobile_menu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
                <ul className={styles.navbar__menu}>
                    <li className={styles.navbar__item}>
                        <a href="/" className={styles.navbar__links}>
                            Home
                        </a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a href="/#therapists" className={styles.navbar__links}>
                            Therapists
                        </a>
                    </li>
                    <li className={styles.navbar__btn}>
                        <a href="/register" className={styles.button}>
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>  
    )
}

export default NavBar