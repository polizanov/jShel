import styles from './Register.module.css';

const Register = () => {

    return (
        <section className={styles.registerWrapper}>
                <form  className={styles.form}>
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
                    <article>
                        <p className={styles.paragraph}>
                            Already have an account? <a className={styles.link} href="#">Login now!</a>
                        </p>
                    </article>
                    <input className={styles.submit} type="submit" value="REGISTER" />
                </form>
                <article className="icon-wrapper">
                    <i className="far fa-id-card"></i>
                </article>
    
                <article className={styles.error}>
                    <p className={styles.paragraph} >ERROR MESSAGE</p>
                </article>
            </section>
    )
}

export default Register;