import styles from './Hotels.module.css';
import Hotel from '../Hotel/Hotel'
import hotelsStyle from '../styles/hotels';

const Hotels = ({type, header}) => {
    return (
        <section className={["wrap", hotelsStyle[type].areaComponent].join(" ")}>
            <article className={styles.headerWrapper}>
                <h1 className={hotelsStyle[type].header}>{header}</h1>
            </article>

            {hotelsStyle[type].icon()}

            <article className={["wrap", styles.hotelsWrapper].join(" ")}>
                <Hotel type={type} />
            </article>
        </section>
    )
}

export default Hotels;