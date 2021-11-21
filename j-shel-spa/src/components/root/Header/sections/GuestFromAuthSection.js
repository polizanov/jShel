import styles from '../Header.module.css';
import { Link } from 'react-router-dom';

const GuestFromAuthSection = () => {
    return (
        <>
            <li className={styles.listItem}>
                <Link to="/login" className={styles.link} >LOGIN</Link>
            </li>
            <li className={styles.listItem}>
                <Link to="/register" className={styles.link} >REGISTER</Link>
            </li>
        </>
    )
}

export default GuestFromAuthSection;