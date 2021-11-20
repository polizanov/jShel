import styles from './FormError.module.css'

const FormError = ({errorArr}) => {

    return (
        <article className={styles.error}>
            {errorArr.map(err => (
                <article key={err} className={styles.element}>
                    <p>{err}</p>
                </article>
            ))}
        </article>
    )
}

export default FormError;