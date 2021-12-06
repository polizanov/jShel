import { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuthInfo from '../../../../hooks/useAuthInfo';
import FormError from '../../../error/FormError/FormError';

import styles from './DeleteHotelDialog.module.css'

import { deleteHotel } from '../../../../services/hotelService';

const DeleteHotelDialog = ({ obj, updateDialog }) => {
    const [error, setError] = useState(null);
    const {user} = useAuthInfo();
    const navigate = useNavigate();

    const onBackClick = () => {
        updateDialog();
    }

    const onDeleteClick = () => {
        deleteHotel(obj._id, user.sessionToken)
            .then(res => {
                navigate("/home");
            })
            .catch(err => {
                setError(err.message);
            })
    }
    
    return (
        <section className={styles.deleteComponent}>
            <article className={styles.headerContent}>
                <article className={styles.header}>
                    <h1>Are you sure you want to delete <span className={styles.hotel}>{obj.name}</span>?</h1>
                </article>
                <article className={styles.imgWrapper}>
                    <img className={styles.img} src={obj.imageUrl} alt="hotel-img" />
                </article>
            </article>

            <article className={styles.buttons}>
                <button onClick={onDeleteClick} className={styles.delete}>YES</button>
                <button onClick={onBackClick} className={styles.back}>NO, GO BACK</button>
            </article>

            {error ? 
            <FormError errorArr={[error]} /> 
            : ""
        }
        </section>
    )
}

export default DeleteHotelDialog;