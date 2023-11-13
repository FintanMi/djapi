import React from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/Playlist.module.css'
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'
import {ReactComponent as HeartIcon} from '../assets/heart.svg'
import { DropdownIcon } from '../components/DropdownIcon'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Playlist = () => {
    const {id} = useParams();
    return (
        <div className={styles.Playlist}>
            <div className={styles.PlaylistPage}>
                <div className={styles.PlaylistInfo}>
                    <div className={styles.PlaylistImage}>
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D" alt="concert crowd" />
                    </div>
                    <div className={styles.PlaylistDescription}>
                        <span>Playlist</span>
                        <h1>Rock Classics</h1>
                        <span>Rock legends & epic songs that continue to inspire generations.</span>
                        <div className={styles.PlaylistDescriptionSub}>
                            <p className={styles.RR}>Record Room</p>
                            <span>&#x25CF;    11,870,221 likes</span>
                            <span>&#x25CF;    200 songs, about 15 hours</span>
                        </div>
                    </div>
                </div>
                <div className={styles.PlaylistInfoSubSection}>
                    <span className={styles.PlayIcon}>
                        <PlayIcon />
                    </span>
                    <div className={styles.PlaylistInfoSubSectionIcons}>
                        <span className={styles.HeartIcon}>
                            <HeartIcon />
                        </span>
                        <span className={styles.ThreeIcons}>
                            <DropdownIcon />
                        </span>
                    </div>
                    
                </div>
                <div className={styles.PlaylistContainer}>
                    <div className={styles.PlaylistContentInner} role="grid" aria-colcount="5">
                        <Container>
                            <Row className={styles.PlaylistTitleRow}>
                                <Col className={styles.PlaylistTitleRowContent}>
                                    <Col xs={1}>#</Col>
                                    <Col xs={5}>Title</Col>
                                    <Col xs={3}>Album</Col>
                                    <Col xs={2}>Date Added</Col>
                                    <Col xs={1}>Duration</Col>
                                </Col>
                            </Row>
                            <hr />
                            <Row className={styles.PlaylistRow}>
                                <Col className={styles.PlaylistRowContent}>
                                    <Col xs={1}>
                                        <span className={styles.TrackNumber}>1</span>
                                        <PlayIcon className={styles.TrackNumberBtn} />
                                    </Col>
                                    <Col xs={5} className={styles.PlaylistRowContentColumn}>
                                        <div>
                                            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D" alt="concert crowd" />
                                        </div>
                                        <div className={styles.PlaylistRowContentColumnDesc}>   
                                            <span>I Wanna Be Sedated</span>
                                            <span className={styles.PlaylistRowContentColumnArtist}>Ramones</span>
                                        </div>
                                    </Col>
                                    <Col xs={3}>Road To Ruin</Col>
                                    <Col xs={2}>2 weeks ago</Col>
                                    <Col xs={1}><span>2:29</span></Col>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist