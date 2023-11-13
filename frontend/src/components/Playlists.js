import React from 'react'
import styles from '../styles/MainNew.module.css'
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'
import {Link} from 'react-router-dom'

const Playlists = (props) => {
    const playlistData = [
        {
            id: 101,
            category_id: 3,
            name: 'Podcasts 1',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 102,
            category_id: 3,
            name: 'Podcasts 2',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 103,
            category_id: 3,
            name: 'Podcasts 3',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 104,
            category_id: 1,
            name: 'Playlist 1',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 105,
            category_id: 1,
            name: 'Playlist 2',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 106,
            category_id: 2,
            name: 'Audiobook 1',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 107,
            category_id: 3,
            name: 'Audiobook 4',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 8,
            category_id: 3,
            name: 'Audiobook 4',
            img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]

    const filteredPlaylist = playlistData.filter(playlist => playlist.category_id === props.category_id)

    return (
        <>
        <div className={styles.CardsWrapInner}>
            {filteredPlaylist.map((playlist, id) => (
                <Link to={`/playlist/` + playlist.id} key={id} style={{textDecoration: 'none'}}>
                    <div className={styles.Card} key={id}>
                    <div className={styles.CardImage}>
                        <img src='https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png' alt='profile' />
                    </div>
                    <div className={styles.CardContent}>
                        <h5>{playlist.name}</h5>
                        <span>your favourite music</span>
                    </div>
                    <span className={styles.PlayIcon}>
                        <PlayIcon />
                    </span>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default Playlists