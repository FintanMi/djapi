import React from 'react'
import styles from '../styles/MainNew.module.css'
import Playlists from './Playlists'

const CardContainerNew = () => {
    const cardData = [
        {
            id: 1,
            name: 'Playlists',
        },
        {
            id: 2,
            name: 'Audiobooks',
        },
        {
            id: 3,
            name: 'Podcasts',
        },
    ]

    return (
        <div>
            {cardData.map((category, id) => (
                <div className={styles.CardsWrap} key={id}>
                <h3>{category.name}</h3>
                <Playlists category_id={category.id} />
                    
                </div>
            ))}
        </div>
    )
}

export default CardContainerNew