import styles from "./EditHotel.module.css";

const EditHotel = () => {
    return (
        <section className={styles.wrapper}>
            <form className={styles.form}>
                <article className="form-header">
                    <h1 className={styles.header}>EDIT HOTEL</h1>
                </article>
                <label htmlFor="name">
                    <input className={styles.typeText} type="text" name="name" placeholder="Add name" />
                </label>
                <label htmlFor="imageUrl">
                    <input className={styles.typeText} type="text" name="imageUrl" placeholder="Paste Image URL" />
                </label>
                <label htmlFor="description">
                    <input className={styles.typeText} type="text" name="description" placeholder="Write description" />
                </label>
                <label htmlFor="town">
                    <input className={styles.typeText} type="text" name="town" placeholder="Add town" />
                </label>
                <label htmlFor="address">
                    <input className={styles.typeText} type="text" name="address" placeholder="Add address" />
                </label>
                <select className={styles.typeText} name="stars" id="stars" aria-placeholder="Select stars">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="public" className={styles.public}>
                    Public
                    <input type="checkbox" />
                </label>
                <input className={styles.submit} type="submit" value="EDIT" />
            </form>
            <article className="icon-wrapper">
                <i className="fas fa-pencil-alt"></i>
            </article>

            <article className={styles.error}>
                <p>ERROR MESSAGE</p>
            </article>
        </section>
    )
}

export default EditHotel;