import React from 'react'
import styles from '../styles/MainLogin.module.css'
import MainLoginContent from './MainLoginContent'

const MainLogin = () => {
    return (
        <div className={styles.MainLogin}>
            <div className={styles.NavTop}>
                navtop
            </div>
            <div>
                <MainLoginContent />
            </div>
        </div>
    )
}

export default MainLogin