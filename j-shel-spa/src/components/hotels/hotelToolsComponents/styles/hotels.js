import styles from './Hotels.module.css'

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
    },
    favourite: {
        areaComponent: styles.favouriteArea,
        header: styles.goldenHeader,
        icon: () => (
            <article className="heart-icon">
                <i className="far fa-heart"></i>
            </article>
        )
    },
}

export default hotelsStyle;