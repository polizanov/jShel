import styles from '../Hotels/Hotels.module.css'

const hotelsStyle = {
    gold: {
        areaComponent: styles.goldenAreaComponent,
        header: styles.goldenHeader,
        icon: () => (
            <article className="medal-icon">
                <i className="fas fa-medal"></i>
            </article>
        )
    },
    normal: {
        areaComponent: styles.areaComponent,
        header: styles.header,
        icon: () => (
            <article className="hotel-icon">
                <i className="fas fa-hotel"></i>
            </article>
        )
    }
}

export default hotelsStyle;