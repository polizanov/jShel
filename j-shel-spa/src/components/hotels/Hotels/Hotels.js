import styles from './Hotels.module.css';
import Hotel from '../Hotel/Hotel'
import hotelsStyle from '../styles/hotels';

const Hotels = (props) => {
    return (
        <section className={["wrap", hotelsStyle[props.type].areaComponent].join(" ")}>
            <article className={styles.headerWrapper}>
                <h1 className={hotelsStyle[props.type].header}>{props.header}</h1>
            </article>

            {hotelsStyle[props.type].icon()}

            <article className={["wrap", styles.hotelsWrapper].join(" ")}>
                <Hotel type={props.type} />
            </article>
        </section>
    )
}

export default Hotels;