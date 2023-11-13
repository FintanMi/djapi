import React from 'react';
import styles from '../styles/Playbar.module.css';
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'
import {ReactComponent as PreviousIcon} from '../assets/previous.svg'
import {ReactComponent as NextIcon} from '../assets/next.svg'
import {ReactComponent as VolumeIcon} from '../assets/volume.svg'

const PlayBar = () => {
  return (
    <div className={styles.PlayBar}>
        <div className={styles.PlaybarLeftSide}>
            <div className={styles.PlaybarLeftSideInfo}>
                <span>I Wanna Be Sedated</span>
                <span className={styles.PlaybarArtist}>Ramones</span>
            </div>
            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D" alt="concert crowd" />
        </div>
        <div className={styles.playbarIconsContainer}>
            <div className={styles.playbarIcons}>
                <PreviousIcon className='prev' />
                <PlayIcon />
                <NextIcon />
            </div>
            <div>duration line</div>
        </div>
        <div className={styles.PlaybarRightSide}>
            <div className={styles.PlaybarRightSideVol}>
                <VolumeIcon />
            </div>
            volume line
        </div>
    </div>
  )
}

export default PlayBar