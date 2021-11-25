import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './ProfilePage.module.css'

import NoData from '../../hotels/hotelToolsComponents/NoData/NoData';
import Hotels from '../../hotels/hotelToolsComponents/Hotels/Hotels';
import ErrorPage from '../../error/ErrorPage/ErrorPage';

import { getMyProfileData } from '../../../services/authService'
import { isAuthenticatedGuard } from '../../../guards/auth';

import profileAvatar from '../../../images/profileAvatar.jpg';

const Profile = () => {
    let [profileInfo, setProfileInfo] = useState({});
    let [hotels, setHotels] = useState([]);
    let [errorMessage, setErrorMessage] = useState({});
    let navigate = useNavigate();


    useEffect(() => {
        try {
            isAuthenticatedGuard()
        } catch {
            navigate("/");
            return;
        }

        getMyProfileData()
            .then(data => {
                setProfileInfo(data.profileInfo);
                setHotels(data.hotels)
            })
            .catch(err => {
                setErrorMessage(err.message);
            })
    }, [])

    if(errorMessage) {
        <ErrorPage message={errorMessage} />
    }

    return (
        <section className={styles.wrapper}>
            <section>
                <article className={styles.personImageWrap}>
                    <img src={profileAvatar} className={styles.personImage} alt="profile-avatar" />
                </article>
                <article className={styles.personContent}>
                    <h1 className={styles.username}>username: {profileInfo.username}</h1>
                    <p className={styles.email}>email: {profileInfo.email}</p>
                    <p className={styles.posts}>{hotels.length} posts</p>
                </article>
            </section>

            <section className={styles.personData}>
                {
                    hotels.length > 0 ? 
                    <>
                    <Hotels type="normal" header="My Hotels" data={hotels} />
                    </>
                     :
                    <NoData 
                    header="Looks like you have no hotels yet!" 
                    content="Add the first one!" 
                    buttonValue="Add Hotel"
                    buttonLink="/create"
                    />
                }
            </section>

        </section>
    )
}

export default Profile;