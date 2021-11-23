import { Component } from 'react'
import styles from './GuestHome.module.css';

import Hotels from '../../hotels/Hotels/Hotels';
import NoData from '../../hotels/NoData/NoData';

import { goldenAreaService } from '../../../services/hotelService';

class GuestHome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        let data = await goldenAreaService();
        this.setState({ data });
    }

    renderHotels() {
        if (!this.state.data) {
            return <NoData header="Looks like no one has added a hotel yet!"
                content="Be the first!"
                buttonValue="Add Hotel"
                buttonLink="/create" />
        }

        return <Hotels type="gold" header="Gold Area" data={this.state.data} />
    }

    render() {
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

                {this.renderHotels()}
            </>
        )
    }
}

export default GuestHome;

