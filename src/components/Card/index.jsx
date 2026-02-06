import Button from "../Button"

import styles from "./style.module.scss"

const Card = ({image, altImage, title, description, clickButton, labelButton}) => {
    return (
        <article className={styles.containerCard}>
            <img src={image} alt={altImage} className={styles.image}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button onClick={clickButton}>{labelButton}</Button>
        </article>
    )
}

export default Card