import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './GuestHome.module.css';

import Hotels from '../../hotels/hotelToolsComponents/Hotels/Hotels';
import NoData from '../../hotels/hotelToolsComponents/NoData/NoData';

import { goldenAreaService } from '../../../services/hotelService';
import { isGuestGuard } from '../../../guards/auth'

const GuestHome = () => {
    let [data, setData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        try {
            isGuestGuard();
        } catch {
            navigate("/home");
            return;
        }

        goldenAreaService()
            .then(data => {
                setData(data);
            })
    }, [])

    const renderHotels = () => {
        if (!data) {
            return <NoData header="Looks like no one has added a hotel yet!"
                content="Be the first!"
                buttonValue="Add Hotel"
                buttonLink="/create" />
        }

        return <Hotels type="gold" header="Gold Area" data={data} />
    }


    return (
        <>
            <section className="wrap">
                <section className={styles.elements}>
                    <article className={styles.textWrap}>
                        <h1 className={styles.header}>Wellcome to jShel</h1>
                        <p className={styles.paragraph}>Share your favourite hotels.</p>
                        <p className={styles.paragraph}>See the best one, and <span className={styles.loginSpan}>Log in</span> for more.</p>
                    </article>
                    <section className={styles.buttons}>
                        <article className={styles.button}>
                            <a className={styles.link} href="#">Login</a>
                        </article>
                        <article className={styles.button}>
                            <a className={styles.link} href="register">Register</a>
                        </article>
                    </section>
                </section>
            </section>

            {renderHotels()}
        </>
    )

}

export default GuestHome;

