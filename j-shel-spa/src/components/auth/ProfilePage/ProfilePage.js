import styles from './ProfilePage.module.css'

import NoData from '../../hotels/NoData/NoData';
import Hotels from '../../hotels/Hotels/Hotels';

import profileAvatar from '../../../images/profileAvatar.jpg';

const data = [
    {
        "_id": "6183db2308cd38b8df482e09",
        "name": "Plaza Hotel",
        "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max500/260383552.jpg?k=10dc61c4f781c977c40ff9d88d0eb70ac8a7f8dcae94206a011916589bdcd254&o=&hp=1",
        "description": "Colonial-style rooms and balconies overlooking the French Quarter. Learn more! Save With Exclusive Deals On Your Stay In New Orleans’ French Quarter.",
        "town": "New York",
        "address": "5th Avenue at, Central Park S, New York",
        "stars": 5,
        "public": true,
        "owner_id": "6183da5108cd38b8df482e06",
        "likes": [
            "6183da1d08cd38b8df482dfc",
            "6183da3808cd38b8df482e01"
        ],
        "__v": 0
    },
    {
        "_id": "6183dbed08cd38b8df482e0b",
        "name": "Burj al arab",
        "imageUrl": "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape.jpg?h=1080&w=1620",
        "description": "Colonial-style rooms and balconies overlooking the French Quarter. Learn more! Save With Exclusive Deals On Your Stay In New Orleans’ French Quarter.",
        "town": "Dubai",
        "address": " شارع جميرا، - Umm Suqeim 3",
        "stars": 5,
        "public": true,
        "owner_id": "6183da5108cd38b8df482e06",
        "likes": [
            "6183da1d08cd38b8df482dfc"
        ],
        "__v": 0
    },
    {
        "_id": "6183dd6708cd38b8df482e0f",
        "name": "Sofitel Le Scribe Paris Opera",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/d3/80/8b/exterior.jpg?w=1100&h=-1&s=1",
        "description": "Learn more about how to spend a great day at Atlantis resort in Dubai. From kids activities to shopping and more, Atlantis has everything to make you happy.",
        "town": "Paris",
        "address": "1 rue Scribe, 75009 Paris France",
        "stars": 4,
        "public": true,
        "owner_id": "6183da5108cd38b8df482e06",
        "likes": [
            "6183da1d08cd38b8df482dfc"
        ],
        "__v": 0
    },
    {
        "_id": "6183dcb608cd38b8df482e0d",
        "name": "Atlantis The Palm",
        "imageUrl": "https://www.hoteliermiddleeast.com/2021/06/5uVQcEm5-AtlantisThePalm-Exterior-FrontShotWithRoyalPool-hme.jpg",
        "description": "Learn more about how to spend a great day at Atlantis resort in Dubai. From kids activities to shopping and more, Atlantis has everything to make you happy.",
        "town": "Dubai",
        "address": " Crescent Rd - The Palm Jumeirah - Dubai ",
        "stars": 5,
        "public": true,
        "owner_id": "6183da5108cd38b8df482e06",
        "likes": [
            "6183da1d08cd38b8df482dfc"
        ],
        "__v": 0
    }
]

const ProfilePage = () => {
    return (
        <section className={styles.wrapper}>
            <section>
                <article className={styles.personImageWrap}>
                    <img src={profileAvatar} className={styles.personImage} alt="profile-avatar" />
                </article>
                <article className={styles.personContent}>
                    <h1 className={styles.username}>USERNAME</h1>
                    <p className={styles.email}>email</p>
                    <p className={styles.posts}>10 post</p>
                </article>
            </section>

            <section className={styles.personData}>
                {/* <!--MY AREA COMPONENT --> */}
                <Hotels type="normal" header="My Hotels" data={data}/>
                <NoData header="Looks like you have no hotels yet!" content="Add the first one!" />
            </section>

        </section>
    )
}

export default ProfilePage;