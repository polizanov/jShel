import styles from '../Header.module.css';
import { Link } from 'react-router-dom';

const UsersFromAuthSection = ({username}) => {
    return (
        <>
            <li className={styles.listItem}>
                <a className={styles.link} href="#">HALLO {username}</a>
            </li>
            <li className={styles.listItem}>
                <a className={styles.link} href="#">LOGOUT</a>
            </li>
        </>
    )
}

export default UsersFromAuthSection;