import React from 'react'
import styles from '../styles/MainLoginContent.module.css'
import CardContainer from './CardContainer'

const MainLoginContent = () => {
    
    return (
        <div className={styles.MainLoginContent}>
            <h2>Audiobooks</h2>
            <div className={styles.MainLoginContentRow}>
                <CardContainer />
            </div>
        </div>
    )
}

export default MainLoginContent