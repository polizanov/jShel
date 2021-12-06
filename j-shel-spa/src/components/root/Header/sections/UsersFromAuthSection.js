import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import useAuthInfo from '../../../../hooks/useAuthInfo';

import styles from '../Header.module.css';

import NoData from '../../../hotels/hotelToolsComponents/NoData/NoData';
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
        return <NoData 
        header="Sorry, but your request could not be processed!"
        content={errorMessage}
        buttonValue="Click to refresh"
        buttonLink="/" 
        isNeedLink={false}
        />
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