import useRequest from '../../../hooks/useRequest/useRequest'
import renderHotels from '../../../tools/renderHotels';

import styles from './ProfilePage.module.css'

import NoData from '../../hotels/hotelToolsComponents/NoData/NoData';
import Hotels from '../../hotels/hotelToolsComponents/Hotels/Hotels';

import profileAvatar from '../../../images/profileAvatar.jpg';

const Profile = () => {
    const [profileData, errorMessage, isLoading] = useRequest("getMyProfileData", [], {});

    const jsx = <>
        <section className={styles.wrapper}>
            <section>
                <article className={styles.personImageWrap}>
                    <img src={profileAvatar} className={styles.personImage} alt="profile-avatar" />
                </article>
                <article className={styles.personContent}>
                    <h1 className={styles.username}>username: {profileData.profileInfo?.username}</h1>
                    <p className={styles.email}>email: {profileData.profileInfo?.email}</p>
                    <p className={styles.posts}>{profileData.hotels?.length} posts</p>
                </article>
            </section>

            <section className={styles.personData}>
                {
                    profileData.hotels?.length > 0 ? 
                    <>
                    <Hotels type="normal" header="My Hotels" data={profileData.hotels} />
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
    </>

    return renderHotels(profileData, errorMessage, isLoading, jsx, null);

}

export default Profile;