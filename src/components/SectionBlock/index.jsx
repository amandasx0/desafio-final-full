import styles from "./style.module.scss";
import Card from "../Card";

const SectionBlock = ({ title, items = [], buttonLabel }) => {
  return (
    <section className={styles.sectionContainer}>
      <h2>{title}</h2>

      <section className={styles.itemsContainer}>
        {items.map((item) => (
          <>
            <Card key={item.title} {...item} labelButton={buttonLabel} />
            <div className={styles.division} />
          </>
        ))}
      </section>
    </section>
  );
};

export default SectionBlock;
