import styles from './Loading.module.css'
import loadingGif from '../../../images/loading.gif'

const Loading = () => {
    return (
        <section className={styles.loadingWrap}>
        <article className={styles.animationWrap}>
            <img className={styles.gif} src={loadingGif} alt="loading-gif" />
        </article>
        <article className={styles.headerWrap}>
            <h3 className={styles.header}>Loading...</h3>
        </article>
    </section>
    )
}

export default Loading