import { Link } from 'react-router-dom';

import useRequest from '../../../hooks/useRequest/useRequest';
import RenderHotels from '../../../tools/RenderHotels';

import styles from './GuestHome.module.css';

import Hotels from '../../hotels/hotelToolsComponents/Hotels/Hotels';
import NoData from '../../hotels/hotelToolsComponents/NoData/NoData';
import isGuest from '../../../hoc/isGuest'


const GuestHome = () => {
    let [hotels, errorMessage, isLoading] = useRequest("getGoldenArea", [], []);
    const jsx = <Hotels type="gold" header="Gold Area" data={hotels} />;
    const jsxNoData = <>
        <NoData header="Looks like no one has added a hotel yet!"
            content="Be the first!"
            buttonValue="Login and Add Hotel"
            buttonLink="/login" />
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

            <RenderHotels
                data={hotels}
                error={errorMessage}
                isLoading={isLoading}
                jsx={jsx}
                jsxNoData={jsxNoData}
            />
        </>
    )

}

export default isGuest(GuestHome);

