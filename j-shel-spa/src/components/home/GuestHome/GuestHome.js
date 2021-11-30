import { Link } from 'react-router-dom';

import useRequest from '../../../hooks/useRequest/useRequest';
import renderHotels from '../../../tools/renderHotels';

import styles from './GuestHome.module.css';

import Hotels from '../../hotels/hotelToolsComponents/Hotels/Hotels';
import NoData from '../../hotels/hotelToolsComponents/NoData/NoData';


const GuestHome = () => {
    let [hotels, errorMessage, isLoading] = useRequest("getGoldenArea", [], []);
    const jsx = <Hotels type="gold" header="Gold Area" data={hotels} />;
    const jsxNoData = <>
        <NoData header="Looks like no one has added a hotel yet!"
            content="Be the first!"
            buttonValue="Add Hotel"
            buttonLink="/create" />
    </>

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
                            <Link to="/login" className={styles.link} >Login</Link>
                        </article>
                        <article className={styles.button}>
                            <Link to="/register" className={styles.link} >Register</Link>
                        </article>
                    </section>
                </section>
            </section>

            {renderHotels(hotels, errorMessage, isLoading, jsx, jsxNoData)};
        </>
    )

}

export default GuestHome;

