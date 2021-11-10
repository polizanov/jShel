import { useEffect, useState } from 'react';
import { getDetails } from '../../../services/hotelService'
import { useLocation } from 'react-router';
import styles from './Details.module.css';
import rendStars from '../tools/rendStars';

const Details = () => {
    const id = useLocation().pathname.split("/").pop()
    
    let [details, setDetails] = useState({});

    useEffect(async () => setDetails(await getDetails(id)), []);

    return (
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
                        {/* <i className={['fas', 'fa-star', styles.stars].join(" ")}></i>
                        <i className={['fas', 'fa-star', styles.stars].join(" ")}></i>
                        <i className={['fas', 'fa-star', styles.stars].join(" ")}></i>
                        <i className={['fas', 'fa-star', styles.stars].join(" ")}></i> */}
                        {rendStars(details.stars).map(x => {
                           return <i className={['fas', 'fa-star', styles.stars].join(" ")}></i>
                        })}
                    </p>
                </article>
                <article>
                    <p className={styles.buttonText}>{details.likes?.length} Likes</p>
                    <a className={[styles.like, styles.buttons].join(" ")} href="#" id="like">LIKE</a>
                    <a className={[styles.liked, styles.buttons].join(" ")} href="#" id="liked">LIKED</a>
                    <a className={[styles.edit, styles.buttons].join(" ")} href="#" id="edit">EDIT</a>
                    <a className={[styles.delete, styles.buttons].join(" ")} href="#" id="delete">DELETE</a>
                </article>
            </article>
        </section>
    )
}

export default Details;