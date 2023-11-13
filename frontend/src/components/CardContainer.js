import React from 'react'
import styles from '../styles/CardContainer.module.css'
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'

const CardContainer = () => {
    const CardCategories = [
        {
            id: 1,
            name: "Category 1",
        },
        {
            id: 2,
            name: "Category 2",
        },
        {
            id: 3,
            name: "Category 3",
        },
        {
            id: 4,
            name: "Category 4",
        },
    ]

    return (
        <div>
            {CardCategories.map((category) => (
                <>
                <h4>{category.name}</h4>
                <div className={styles.CardContainer}>
                    <div className={styles.CardImage}>
                        <img src="https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png" alt='profile' />
                    </div>
                    <div className={styles.CardContent}>
                        <h5>liked songs</h5>
                    </div>
                    <span className={styles.PlayIcon}>
                        <PlayIcon />
                    </span>
                </div>
                <div className={styles.CardContainer}>
                    <div className={styles.CardImage}>
                        <img src="https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png" alt='profile' />
                    </div>
                    <div className={styles.CardContent}>
                        <h5>liked songs</h5>
                    </div>
                    <span className={styles.PlayIcon}>
                        <PlayIcon />
                    </span>
                </div>
                <div className={styles.CardContainer}>
                    <div className={styles.CardImage}>
                        <img src="https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png" alt='profile' />
                    </div>
                    <div className={styles.CardContent}>
                        <h5>liked songs</h5>
                    </div>
                    <span className={styles.PlayIcon}>
                        <PlayIcon />
                    </span>
                </div>
                <div className={styles.CardContainer}>
                    <div className={styles.CardImage}>
                        <img src="https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png" alt='profile' />
                    </div>
                    <div className={styles.CardContent}>
                        <h5>liked songs</h5>
                    </div>
                    <span className={styles.PlayIcon}>
                        <PlayIcon />
                    </span>
                </div>
                </>
            ))}
        </div>
    )
}

export default CardContainer