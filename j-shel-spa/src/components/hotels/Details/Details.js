import { useParams, Link } from 'react-router-dom';
import styles from './Details.module.css';

import RenderHotels from '../../../tools/RenderHotels';
import rendStars from '../../../tools/rendStarsForHotelsComponent';

import useRequest from '../../../hooks/useRequest/useRequest';

const Details = () => {
    const id = useParams().hotelId;

    let [details, errorMessage, isLoading] = useRequest("getDetails", [id], {});
    const jsx = <>
        <section className={styles.detailsComponent}>
            <article className={styles.hotelImgWrap}>
                <img className={styles.hotelImg} src={details.imageUrl}
                    alt="hotel-image"></img>
            </article>
            <article className={styles.detailsContent}>
                <article className={styles.hotelDetails}>
                    <h1>{details.name}</h1>
                    <p>{details.description}</p>
                    <ul className={styles.addresInfo}>
                        <li className={styles.list}>
                            <i className={['fas', 'fa-city', styles.townIcon].join(" ")}></i>
                            <p>{details.town}</p>
                        </li>
                        <li className={styles.list}>
                            <i className={['fas', 'fa-map-marker-alt', styles.addressIcon].join(" ")}></i>
                            <p>{details.address}</p>
                        </li>
                    </ul>
                    <p>
                        {rendStars(details.stars).map(x => {
                            return <i key={`${details.name}${details.town}${x}`} className={['fas', 'fa-star', styles.stars].join(" ")}></i>
                        })}
                    </p>
                </article>
                <article>
                    <p className={styles.buttonText}>{details.likes?.length} Likes</p>
                    <a className={[styles.like, styles.buttons].join(" ")} href="#" id="like">LIKE</a>
                    <a className={[styles.liked, styles.buttons].join(" ")} href="#" id="liked">LIKED</a>
                    <Link to={`/edit/${details._id}`} className={[styles.edit, styles.buttons].join(" ")} id="edit">EDIT</Link>
                    <a className={[styles.delete, styles.buttons].join(" ")} href="#" id="delete">DELETE</a>
                </article>
            </article>
        </section>
    </>

    return <RenderHotels
        data={details}
        error={errorMessage}
        isLoading={isLoading}
        jsx={jsx}
    />
}


export default Details;