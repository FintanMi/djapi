import React from 'react'
import styles from '../App.module.css'
import {ReactComponent as LibraryIcon} from '../assets/library.svg'
import {ReactComponent as HomeIcon} from '../assets/home.svg'
import {ReactComponent as SearchIcon} from '../assets/search.svg'

function NavBar() {
  return (
    <div className={styles.NavBar}>
        <div className={styles.logo}>
            Record Room
        </div>
        <ul>
            <li><HomeIcon />Home</li>
            <li><SearchIcon />Search</li>
            <li><LibraryIcon />Your Library</li>
        </ul>
        <div className={styles.copyright}>
            <span>copyright</span>
        </div>
    </div>
  )
}

export default NavBar