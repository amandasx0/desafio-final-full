import Button from "../Button"

import styles from "./style.module.scss"

const Card = ({image, altImage, title, description, clickButton, labelButton}) => {
    return (
        <div className={styles.containerCard}>
            <img src={image} alt={altImage} className={styles.image}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button onClick={clickButton}>{labelButton}</Button>
        </div>
    )
}

export default Card