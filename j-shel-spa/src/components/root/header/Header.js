import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="wrap">
        <section className={styles.navWrapper}>
            <article className={styles.header}>
                <h4 className={styles.headerContenr}>jShel</h4>
            </article>
        
            <article>
                    <nav>
                        <ul className={styles.center}>
                            {/* All USERS */}
                            {/* FOR AUTHENTICATED AND GUEST ARE WITH DIFFERENT ROUTE AND PAGES */}
                            <li className={styles.listItem}>
                                <Link to="/" className={styles.link}>HOME</Link>
                            </li>
            
                            {/* <!-- AUTHENTICATED USERS --> */}
                            <li className={styles.listItem}>
                                <Link to="/create" className={styles.link}>ADD HOTEL</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link to="/my-profile" className={styles.link}>MY PROFILE</Link>
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
                            <Link to="/login" className={styles.link} >LOGIN</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to="/register" className={styles.link} >REGISTER</Link>
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