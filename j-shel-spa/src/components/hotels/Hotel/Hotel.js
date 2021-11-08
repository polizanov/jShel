import styles from './Hotel.module.css'
import hotelStyle from '../styles/hotel'

const Hotel = (props) => {
    return (
        <article className={hotelStyle[props.type].hotel}>
            <article className={styles.imgageWrap}>
                <img className={styles.img} src="https://codedesign.org/storage/app/media/uploaded-files/digital-marketing-for-hotels.jpg"
                    alt="hotel" />
            </article>
            <article>
                <p className={styles.center}>Name</p>
                <p className={styles.center}>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </p>
                <article className={styles.seeMoreBtn}>
                    <a className={hotelStyle[props.type].link} href="#">See more</a>
                </article>
            </article>
        </article>
    )
}

export default Hotel;