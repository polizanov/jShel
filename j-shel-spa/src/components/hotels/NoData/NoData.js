import { Link } from 'react-router-dom';
import styles from './NoData.module.css';

const NoData = ({header, content, buttonValue, buttonLink}) => {
    return (
        <section className={["wrap", styles.noData].join(" ")}>
            <article className={styles.info}>
                <h1 className={styles.header}>{header}</h1>
                <p className={styles.paragraph}>{content}</p>
                <article>
                    <Link to={buttonLink} className={styles.link} >{buttonValue}</Link>
                </article>
            </article>

            <article className="no-data-wrap-icon">
                <i className="fas fa-database"></i>
            </article>
        </section>
    )
}

export default NoData;