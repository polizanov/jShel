import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

import useAuthInfo from "../../../../hooks/useAuthInfo";
import styles from './DetailsButtons.module.css';

import FormError from "../../../error/FormError/FormError";

import { likeHotel } from "../../../../services/hotelService";

const DetailsButtons = ({ hotelObj, updateData }) => {
    const { user } = useAuthInfo();
    const [error, setError] = useState(null);

    console.log(hotelObj)
    const onLikeClick = (e) => {
        e.preventDefault();

        likeHotel(hotelObj._id, user.sessionToken)
            .then(res => {
                updateData(hotelObj);
                return null;
            })
            .catch(err => {
                setError(err.message);
            })
            
    }

    if(error){
        return <FormError errorArr={[error]} />
    }

    if (!user.userId) {
        return <Link to="/login" onClick={onLikeClick} className={[styles.like, styles.buttons].join(" ")} id="like">LOGIN TO LIKE</Link>
    }

    if (user.userId == hotelObj.owner_id) {
        return <>
            <Link to={`/edit/${hotelObj._id}`} className={[styles.edit, styles.buttons].join(" ")} id="edit">EDIT</Link>
            <a className={[styles.delete, styles.buttons].join(" ")} href="#" id="delete">DELETE</a>
        </>
    }

    if(hotelObj.likes?.includes(user.userId)){
        return null;
    }

    return <>
        <a onClick={onLikeClick} className={[styles.like, styles.buttons].join(" ")} id="like">LIKE</a>
    </>
}

export default DetailsButtons;