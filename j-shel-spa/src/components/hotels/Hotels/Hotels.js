import styles from './Hotels.module.css';

const Hotels = (props) => {
    const styleObj = {
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
                <article class="hotel-icon">
                    <i class="fas fa-hotel"></i>
                </article>
            )
        },
    }

    return (
        <section className={["wrap", styleObj[props.type].areaComponent].join(" ")}>
            <article className={styles.headerWrapper}>
                <h1 className={styleObj[props.type].header}>{props.header}</h1>
            </article>

            {styleObj[props.type].icon()}

            <article className={["wrap", styles.hotelsWrapper].join(" ")}>
                {/* cur-hotel */}
            </article>
        </section>
    )
}

export default Hotels;