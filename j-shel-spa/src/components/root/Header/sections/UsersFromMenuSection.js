import styles from '../Header.module.css';
import { Link } from 'react-router-dom';

const usersFromMenuSection = () => {
    return (
        <>
            <li className={styles.listItem}>
                <Link to="/home" className={styles.link}>HOME</Link>
            </li>

            <li className={styles.listItem}>
                <Link to="/create" className={styles.link}>ADD HOTEL</Link>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="#">FAVOURITES</a>
            </li>
        </>
    )
}

export default usersFromMenuSection;

