import styles from './Register.module.css';

const Register = () => {

    return (
        <section className={styles.registerWrapper}>
                <form className={styles.form}>
                    <article>
                        <h1 className={styles.header}>REGISTER</h1>
                    </article>
                    <label for="email">
                        <input className={styles.textPassword} type="text" name="email" placeholder="Email" />
                    </label>
                    <label for="username">
                        <input className={styles.textPassword} type="text" name="username" placeholder="Username" />
                    </label>
                    <label for="password">
                        <input className={styles.textPassword} type="password" name="password" placeholder="Password" />
                    </label>
                    <article>
                        <p className={styles.paragraph}>
                            Already have an account? <a className={styles.link} href="#">Login now!</a>
                        </p>
                    </article>
                    <input className={styles.submit} type="submit" value="REGISTER" />
                </form>
                <article class="icon-wrapper">
                    <i class="far fa-id-card"></i>
                </article>
    
                <article className={styles.error}>
                    <p className={styles.paragraph} >ERROR MESSAGE</p>
                </article>
            </section>
    )
}

export default Register;