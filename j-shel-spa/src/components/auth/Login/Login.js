import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuthInfo from '../../../hooks/useAuthInfo';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

import FormError from '../../error/FormError/FormError';
import isGuest from '../../../hoc/isGuest'

import { validateLogin } from '../../../services/validate/AuthValidateService';
import { login } from '../../../services/authService';

const Login = () => {
    const [errorArr, setErrorArr] = useState([]);
    const { addUserInfo } = useAuthInfo();
    const navigate = useNavigate();

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        try {
            validateLogin({ username, password })

            login({ username, password })
                .then(res => {
                    addUserInfo(res);
                    navigate('/home');
                })
                .catch(err => {
                    setErrorArr([err.message])
                })

        } catch (err) {
            setErrorArr(err.messages);
            e.target.username.value = err.username;
            e.target.password.value = "";
        }

    }

    return (
        <section className={styles.loginWrapper}>
            <form onSubmit={onLoginSubmitHandler} className={styles.form}>
                <article>
                    <h1 className={styles.header}>LOGIN</h1>
                </article>
                <label htmlFor="username">
                    <input className={styles.textPassword} type="text" name="username" placeholder="Username" />
                </label>
                <label htmlFor="password">
                    <input className={styles.textPassword} type="password" name="password" placeholder="Password" />
                </label>
                <article className={styles.paragraph}>
                    <p>
                        Don't have an account? <Link to="/register" className={styles.link} >Register now!</Link>
                    </p>
                </article>
                <input className={styles.submit} type="submit" value="LOGIN" />
            </form>
            <article className="icon-wrapper">
                <i className="fas fa-user-lock"></i>
            </article>


            {errorArr.length > 0 ?
                <FormError errorArr={errorArr} />
                : ""}
        </section>
    )
}

export default isGuest(Login);