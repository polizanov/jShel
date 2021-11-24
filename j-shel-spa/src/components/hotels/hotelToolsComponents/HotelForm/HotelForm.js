import styles from './HotelForm.module.css'
import content from "./formTypes";

import FormError from '../../../error/FormError/FormError';


function HotelForm({ type, data, setData, onSubmitHandler, errorArr }) {

    const onChangeFormValue = (e) => {
        let updatedData;
        if (e.currentTarget.name == "isPublic") {
            updatedData = { ...data, [e.target.name]: e.currentTarget.checked };
            setData(updatedData);
            return;
        }

        if (e.currentTarget.name == "stars") {
            updatedData = { ...data, [e.target.name]: Number(e.currentTarget.value) };
            setData(updatedData);
            return;
        }

        updatedData = { ...data, [e.target.name]: e.currentTarget.value };
        setData(updatedData)
    }

    return (
        <section className={styles.wrapper}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <article className="form-header">
                    <h1 className={styles.header}>{content[type].header}</h1>
                </article>
                <label htmlFor="name">
                    <input
                        className={styles.typeText}
                        type="text"
                        name="name"
                        placeholder="Add name"
                        value={data.name}
                        onChange={onChangeFormValue} />
                </label>
                <label htmlFor="imageUrl">
                    <input
                        className={styles.typeText}
                        type="text" name="imageUrl"
                        placeholder="Paste Image URL"
                        value={data.imageUrl}
                        onChange={onChangeFormValue} />
                </label>
                <label htmlFor="description">
                    <input
                        className={styles.typeText}
                        type="text"
                        name="description"
                        placeholder="Write description"
                        value={data.description}
                        onChange={onChangeFormValue} />
                </label>
                <label htmlFor="town">
                    <input
                        className={styles.typeText}
                        type="text"
                        name="town"
                        placeholder="Add town"
                        value={data.town}
                        onChange={onChangeFormValue} />
                </label>
                <label htmlFor="address">
                    <input
                        className={styles.typeText}
                        type="text"
                        name="address"
                        placeholder="Add address"
                        value={data.address}
                        onChange={onChangeFormValue} />
                </label>
                <select
                    className={styles.typeText}
                    name="stars"
                    id="stars"
                    value={data.stars}
                    onChange={onChangeFormValue}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="public" className={styles.public}>
                    Public
                    <input
                        type="checkbox"
                        name="isPublic"
                        onChange={onChangeFormValue} />
                </label>
                <input className={styles.submit} type="submit" value={content[type].buttonText} />
            </form>
            <article className="icon-wrapper">
                <i className="fas fa-plus"></i>
            </article>

            {errorArr.length > 0 ?
                <FormError errorArr={errorArr} />
                : ""}


        </section>
    );
}

export default HotelForm;