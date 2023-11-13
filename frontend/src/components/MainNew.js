import React from 'react'
import styles from '../styles/MainNew.module.css'
import CardContainerNew from './CardContainerNew'
import {Switch, Route} from 'react-router-dom'
import Playlist from '../pages/Playlist'
import NavTopbar from './NavTopbar'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import '../api/axiosDefaults'
import { useEffect, useState } from 'react';
import { setClientToken } from '../spotify'

const MainNew = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const hash = window.location.hash;
        window.location.hash = '';
        if (!token && hash){
            const _token = hash.split('&')[0].split('=')[1];
            window.localStorage.setItem('token', _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }
    }, [])

  return (
    <>
        <div className={styles.MainNew}>
            <NavTopbar />
            <Switch>
                <Route path='/' exact component={CardContainerNew}></Route>
                <Route path='/search'>Search</Route>
                <Route path='/library'>Library</Route>
                <Route path='/playlist/:id' component={Playlist}></Route>
                <Route path='/register' exact render={() => <Register />}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route render={() => <p>Page not found</p>} />
            </Switch>
        </div>
    </>
    
  )
}

export default MainNew