import styles from './Hotel.module.css'
import hotelStyle from '../styles/hotel'
import { Link } from 'react-router-dom'
import rendStars from '../tools/rendStars'

const Hotel = ({ type, data }) => {
    return (
        <article className={hotelStyle[type].hotel}>
            <article className={styles.imgageWrap}>
                <img className={styles.img} src={data.imageUrl}
                    alt="hotel" />
            </article>
            <article>
                <p className={styles.center}>{data.name}</p>
                <p className={styles.center}>
                    {rendStars(data.stars).map(x => {
                        return <i key={`${data.name}${data.town}${x}`} className="fas fa-star"></i>
                    })}
                </p>
                <article className={styles.seeMoreBtn}>
                    <Link to={["/details/", data._id].join("")} className={hotelStyle[type].link}>See more</Link>
                </article>
            </article>
        </article>
    )
}

export default Hotel;