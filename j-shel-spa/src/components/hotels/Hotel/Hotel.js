import styles from './Hotel.module.css'
import hotelStyle from '../styles/hotel'

const Hotel = ({ type, data }) => {

    function rendStar(){
        return <i className="fas fa-star"></i>
    }

    console.log(data)

    return (
        <article className={hotelStyle[type].hotel}>
            <article className={styles.imgageWrap}>
                <img className={styles.img} src={data.imageUrl}
                    alt="hotel" />
            </article>
            <article>
                <p className={styles.center}>{data.name}</p>
                <p className={styles.center}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </p>
                <article className={styles.seeMoreBtn}>
                    <a className={hotelStyle[type].link} href="#">See more</a>
                </article>
            </article>
        </article>
    )
}

export default Hotel;