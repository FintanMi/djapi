import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from '../../styles/Login.module.css'
import { useHistory } from 'react-router-dom'
import { Alert, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";
import { loginEndpoint } from '../../spotify'

function Login() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect('loggedIn');
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })
    const {username, password} = loginData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        setLoginData({
          ...loginData,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", loginData);
            setCurrentUser(data.user);
            setTokenTimestamp(data);
            history.push('/');
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleClick = () => {
        const clientId = '6a7c109f628741509125cdb88d35c366';
        const redirectUri = 'https://3000-fintanmi-recordroom-uq3moihsq0.us2.codeanyapp.com/';
        const authEndpoint = 'https://accounts.spotify.com/authorize';
        const scopes = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-playing',
            'user-read-playback-position',
            'user-library-read',
            'playlist-read-private',
            'user-read-top',
        ];
        window.location.href
    }

    return (
        <Row className={styles.Login}>
            <Col></Col>
            <Col md={5}>
                <Container className='p-4'>
                    <div className={styles.LoginHeader}>
                        <h1>Log in to the Record Room</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username" className={styles.Group}>
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleChange} />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant='warning' key={idx}>{message}</Alert>
                        ))}

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange} />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert variant='warning' key={idx}>{message}</Alert>
                        ))}

                        <Button type='submit' className={`${styles.LoginBtn} ${styles.LoginBtnShape}`}>
                            Login
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant='warning'>console.log({message})</Alert>
                        ))}
                    </Form>
                </Container>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Login