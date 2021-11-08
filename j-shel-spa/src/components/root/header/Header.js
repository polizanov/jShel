import styles from './Header.module.css';

const Header = () => {

    return (
        <header className="wrap">
        <section className={styles.navWrapper}>
            <article className={styles.header}>
                <h4>jShel</h4>
            </article>
        
            <article>
                    <nav>
                        <ul className={styles.center}>
                            {/* All USERS */}
                            {/* FOR AUTHENTICATED AND GUEST ARE WITH DIFFERENT ROUTE AND PAGES */}
                            <li className={styles.listItem}>
                                <a className={styles.link} href="#">HOME</a>
                            </li>
            
                            {/* <!-- AUTHENTICATED USERS --> */}
                            <li className={styles.listItem}>
                                <a className={styles.link} href="#">ADD HOTEL</a>
                            </li>
                            <li className={styles.listItem}>
                                <a className={styles.link} href="#">MY PROFILE</a>
                            </li>
                            <li className={styles.listItem}>
                                <a className={styles.link} href="#">FAVOURITES</a>
                            </li>
                        </ul>
                    </nav>
            </article>
        
            <article className="right-links">
                <nav>
                    <ul className={styles.center}> 
                        {/* <!-- GUEST USERS --> */}
                        <li className={styles.listItem}>
                            <a className={styles.link} href="#">LOGIN</a>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.link} href="#">REGISTER</a>
                        </li>
        
                        {/* <!-- AUTHENTICATED USERS --> */}
                        <li className={styles.listItem}>
                            <a className={styles.link} href="#">HALLO @username</a>
                        </li>
                        <li className={styles.listItem}> 
                            <a className={styles.link} href="#">LOGOUT</a>
                        </li>
                    </ul>
                </nav>
            </article>
        </section>
    </header>
    )
}

export default Header;