import React from "react"
import Container from 'react-bootstrap/Container'
import styles from '../styles/Content.module.css';

function Content() {
    return (
        <Container className={styles.Content}>
            <p>content</p>
        </Container>
    )
}

export default Content;