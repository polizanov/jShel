import styles from './Hotels.module.css';
import Hotel from '../../hotelToolsComponents/Hotel/Hotel'
import hotelsStyle from '../styles/hotels';

const Hotels = ({type, header, data}) => {
    return (
        <section className={["wrap", hotelsStyle[type].areaComponent].join(" ")}>
            <article className={styles.headerWrapper}>
                <h1 className={hotelsStyle[type].header}>{header}</h1>
            </article>

            {hotelsStyle[type].icon()}

            <article className={["wrap", styles.hotelsWrapper].join(" ")}>
                {
                    data.map(x => <Hotel key={x._id} type={type} data={x} />)
                }
            </article>
        </section>
    )
}

export default Hotels;