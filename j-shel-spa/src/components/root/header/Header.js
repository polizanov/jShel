import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import GuestFromAuthSection from './sections/GuestFromAuthSection';
import GuestFromMenuSection from './sections/GuestFromMenuSection';
import UsersFromAuthSection from './sections/UsersFromAuthSection';
import UsersFromMenuSection from './sections/UsersFromMenuSection';

const Header = ({
    username,
    setUsername,
}) => {

    return (
        <header className="wrap">
            <section className={styles.navWrapper}>
                <article className={styles.header}>
                    <h4 className={styles.headerContenr}>jShel</h4>
                </article>

                <article>
                    <nav>
                        <ul className={styles.center}>
                            {username ? <UsersFromMenuSection /> : <GuestFromMenuSection />}
                        </ul>
                    </nav>
                </article>

                <article className="right-links">
                    <nav>
                        <ul className={styles.center}>
                            {username ? <UsersFromAuthSection username={username} setUsername={setUsername} /> : <GuestFromAuthSection />}
                        </ul>
                    </nav>
                </article>
            </section>
        </header>
    )
}

export default Header;