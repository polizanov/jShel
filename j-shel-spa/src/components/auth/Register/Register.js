import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuthInfo from '../../../hooks/useAuthInfo';

import styles from './Register.module.css';

import FormError from '../../error/FormError/FormError';

import { validateRegister } from '../../../services/validate/AuthValidateService';
import { register } from '../../../services/authService';


const Register = () => {
    const [errorArr, setErrorArr] = useState([]);
    const { addUserInfo } = useAuthInfo();
    const navigate = useNavigate();

    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let username = e.target.username.value;
        let password = e.target.password.value;
        let rePassword = e.target.rePassword.value;

        try {
            validateRegister({ email, username, password, rePassword });

            register({ email, username, password, rePassword })
                .then(res => {
                    addUserInfo(res);
                    navigate('/home');
                })
                .catch(err => {
                    setErrorArr([err.message]);
                })

        } catch (err) {
            setErrorArr(err.messages);
            e.target.email.value = err.email;
            e.target.username.value = err.username;
            e.target.password.value = "";
            e.target.rePassword.value = "";
        }
        
    }

    return (
        <section className={styles.registerWrapper}>
            <form onSubmit={onSubmitRegisterHandler} className={styles.form}>
                <article>
                    <h1 className={styles.header}>REGISTER</h1>
                </article>
                <label htmlFor="email">
                    <input className={styles.textPassword} type="text" name="email" placeholder="Email" />
                </label>
                <label htmlFor="username">
                    <input className={styles.textPassword} type="text" name="username" placeholder="Username" />
                </label>
                <label htmlFor="password">
                    <input className={styles.textPassword} type="password" name="password" placeholder="Password" />
                </label>
                <label htmlFor="rePassword">
                    <input className={styles.textPassword} type="password" name="rePassword" placeholder="Repeat password" />
                </label>
                <article>
                    <p className={styles.paragraph}>
                        Already have an account? <Link to="/login" className={styles.link}>Login now!</Link>
                    </p>
                </article>
                <input className={styles.submit} type="submit" value="REGISTER" />
            </form>
            <article className="icon-wrapper">
                <i className="far fa-id-card"></i>
            </article>

            {errorArr.length > 0 ?
                <FormError errorArr={errorArr} />
                : ""}
        </section>
    )
}

export default Register;