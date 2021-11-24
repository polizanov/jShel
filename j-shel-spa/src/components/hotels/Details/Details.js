import { useEffect, useState } from 'react';
import { getDetails } from '../../../services/hotelService'
import { useParams } from 'react-router';
import styles from './Details.module.css';
import rendStars from '../../../tools/rendStarsForHotelsComponent';

const Details = () => {
    const id = useParams().hotelId;

    let [details, setDetails] = useState({});

    useEffect(() => {
        getDetails(id)
            .then(data => {
                setDetails(data);
            })
    }, [id]);


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
                        {rendStars(details.stars).map(x => {
                            return <i key={`${details.name}${details.town}${x}`} className={['fas', 'fa-star', styles.stars].join(" ")}></i>
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