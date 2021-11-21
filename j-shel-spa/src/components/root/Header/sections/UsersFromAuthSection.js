import styles from '../Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import ErrorPage from '../../../error/ErrorPage/ErrorPage';
import {logout, clearUserData, getAuthUsername} from "../../../../services/authService"

const UsersFromAuthSection = ({
    username,
    setUsername,
}) => {
    const [errorMessage, setError] = useState(null);
    const navigate = useNavigate();

    const onClickLogoutHandler = (e) => {
        e.preventDefault();
        logout()
            .then(res => {
            clearUserData();
            setUsername(getAuthUsername());
            navigate('/')
        })
        .catch(err => {
            setError([err.message])
        })
    }

    if(errorMessage) {
        return <ErrorPage message={errorMessage} />
    }

    return (
        <>
            <li className={styles.listItem}>
                <Link to="/my-profile" className={styles.link} >HALLO {username.toUpperCase()}</Link>
            </li>
            <li className={styles.listItem}>
                <a onClick={onClickLogoutHandler} className={styles.link}>LOGOUT</a>
            </li>
        </>
    )
}

export default UsersFromAuthSection;