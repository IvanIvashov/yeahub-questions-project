import styles from "./style.module.css";
import type { ItemsProps } from "../model/types";

function ItemsList({ title, items }: ItemsProps) {
  return (
    <div className={styles.specialization}>
      <p className={styles.title}>{title}</p>
      <div className={styles.specializationList}>
        <ul className={styles.specializationNav}>
          {items.map((el) => (
            <li key={el.id} className={styles.specializationItem}>
              {el.title}
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.linkBtn}>Посмотреть все</button>
    </div>
  );
}

export default ItemsList;
