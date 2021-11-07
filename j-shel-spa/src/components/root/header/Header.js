import styles from './Header.module.css';

const Header = () => {

    return (
        <header className="wrap">
        <section className={styles.navWrapper}>
            <article className={styles.logoWrapH4Header}>
                <h4>jShel</h4>
            </article>
        
            <article>
                    <nav>
                        <ul class={styles.center}>
                            {/* All USERS */}
                            {/* FOR AUTHENTICATED AND GUEST ARE WITH DIFFERENT ROUTE AND PAGES */}
                            <li class={styles.listItem}>
                                <a class={styles.link} href="#">HOME</a>
                            </li>
            
                            {/* <!-- AUTHENTICATED USERS --> */}
                            <li class={styles.listItem}>
                                <a class={styles.link} href="#">ADD HOTEL</a>
                            </li>
                            <li class={styles.listItem}>
                                <a class={styles.link} href="#">MY PROFILE</a>
                            </li>
                            <li class={styles.listItem}>
                                <a class={styles.link} href="#">FAVOURITES</a>
                            </li>
                        </ul>
                    </nav>
            </article>
        
            <article class="right-links">
                <nav>
                    <ul class={styles.center}> 
                        {/* <!-- GUEST USERS --> */}
                        <li class={styles.listItem}>
                            <a class={styles.link} href="#">LOGIN</a>
                        </li>
                        <li class={styles.listItem}>
                            <a class={styles.link} href="#">REGISTER</a>
                        </li>
        
                        {/* <!-- AUTHENTICATED USERS --> */}
                        <li class={styles.listItem}>
                            <a class={styles.link} href="#">HALLO @username</a>
                        </li>
                        <li class={styles.listItem}> 
                            <a class={styles.link} href="#">LOGOUT</a>
                        </li>
                    </ul>
                </nav>
            </article>
        </section>
    </header>
    )
}

export default Header;