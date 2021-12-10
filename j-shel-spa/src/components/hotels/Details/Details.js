import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRequest from '../../../hooks/useRequest/useRequest';
import useAuthInfo from '../../../hooks/useAuthInfo';

import styles from './Details.module.css';

import DetailsButtons from './DetailsButtons/DetailsButtons';
import DeleteHotelDialog from './DeleteHotelDialog/DeleteHotelDialog';

import RenderHotels from '../../../tools/RenderHotels';
import rendStars from '../../../tools/rendStarsForHotelsComponent';


const Details = () => {
    const id = useParams().hotelId;
    const [details, errorMessage, isLoading, setData] = useRequest("getDetails", [id], {});
    const { user } = useAuthInfo();
    const [deleteDialog, setDeleteDialog] = useState(false);

    const updateDetailsDataInLikeClicked = (obj) => {
        setData({ ...obj, likes: [...obj.likes, user.userId] });
    };

    const updateDeleteDialog = () => {
        setDeleteDialog(!deleteDialog);
    }


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
                    <DetailsButtons
                        hotelObj={details}
                        updateData={updateDetailsDataInLikeClicked}
                        updateDeleteDialog={updateDeleteDialog}
                    />
                </article>
            </article>
            {deleteDialog ?
                <DeleteHotelDialog
                    obj={details}
                    updateDialog={updateDeleteDialog}
                />
                : ""}
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