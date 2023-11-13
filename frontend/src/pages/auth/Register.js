import React, {useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from '../../styles/Register.module.css'
import { Link, useHistory } from 'react-router-dom'
import { Alert, Button, Form } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {

    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password1: '',
        password2: ''
    });

    const {email, username, password1, password2} = registerData;
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const handleChange = (e) => {
        setRegisterData({
          ...registerData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("/dj-rest-auth/registration/", registerData);
          history.push("/login");
        } catch (err) {
          setErrors(err.response?.data);
        }
      };

    return (
        <Row className={styles.Register}>
            <Col></Col>
            <Col className="py-2 p-md-2" md={5}>
                <Container className='p-4'>
                    <div className={styles.RegisterHeader}>
                        <h1>Sign up and listen</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email"className={styles.Group}>
                            <Form.Label className="d-none">Email</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {errors.email?.map((message, idx) => (
                            <Alert variant='warning' key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="username"className={styles.Group}>
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
                            <Alert variant='warning' key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password1" className={styles.Group}>
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange} />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant='warning' key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange} />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert variant='warning' key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button type='submit' className={`${styles.RegisterBtn} ${styles.RegisterBtnShape}`}>
                            Register
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant='warning'>
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>
                <Container className={styles.alreadyLogin}>
                    <Link to='/login' style={{textDecoration: 'none'}}>
                        <h6>Already have an account? <span>Sign in</span></h6>
                    </Link>
                </Container>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Register