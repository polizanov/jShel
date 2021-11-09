import styles from './Login.module.css';

const Login = () => {
    return (
        <section className={styles.loginWrapper}>
                <form className={styles.form}>
                    <article>
                        <h1 className={styles.header}>LOGIN</h1>
                    </article>
                    <label for="username">
                        <input className={styles.textPassword} type="text" name="username" placeholder="Username" />
                    </label>
                    <label for="password">
                        <input className={styles.textPassword} type="password" name="password" placeholder="Password" />
                    </label>
                    <article className={styles.paragraph}>
                        <p>
                            Don't have an account? <a className={styles.link} href="#">Register now!</a>
                        </p>
                    </article>
                    <input className={styles.submit} type="submit" value="LOGIN" />
                </form>
                <article className="icon-wrapper">
                    <i className="fas fa-user-lock"></i>
                </article>
    
                <article className={styles.error}> 
                    <p>ERROR MESSAGE</p>
                </article>
            </section>
    )
}

export default Login;