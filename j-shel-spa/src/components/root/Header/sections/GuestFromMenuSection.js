import styles from '../Header.module.css';
import { Link } from 'react-router-dom';

const GuestFromMenuSection = () => {
    return (
        <li className={styles.listItem}>
            <Link to="/" className={styles.link}>HOME</Link>
        </li>
    )
}

export default GuestFromMenuSection;