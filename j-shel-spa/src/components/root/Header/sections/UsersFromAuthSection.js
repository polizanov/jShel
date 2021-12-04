import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import useAuthInfo from '../../../../hooks/useAuthInfo';

import styles from '../Header.module.css';

import ErrorPage from '../../../error/ErrorPage/ErrorPage';
import { logout } from "../../../../services/authService"

const UsersFromAuthSection = () => {
    const [errorMessage, setError] = useState(null);
    const { removeUserInfo, user } = useAuthInfo();
    const navigate = useNavigate();

    const onClickLogoutHandler = (e) => {
        e.preventDefault();
        logout(user.sessionToken)
            .then(res => {
                removeUserInfo();
                navigate('/')
            })
            .catch(err => {
                setError([err.message])
            })
    }

    if (errorMessage) {
        return <ErrorPage message={errorMessage} />
    }

    return (
        <>
            <li className={styles.listItem}>
                <Link to="/my-profile" className={styles.link} >HALLO {user.username}</Link>
            </li>
            <li className={styles.listItem}>
                <a onClick={onClickLogoutHandler} className={styles.link}>LOGOUT</a>
            </li>
        </>
    )
}

export default UsersFromAuthSection;