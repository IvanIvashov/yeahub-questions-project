import styles from "./style.module.css";
import type { ItemsProps } from "../model/types";
import { useState } from "react";

function ItemsList({ title, data = [], filtered, setFiltered }: ItemsProps) {
  const [showAll, setShowAll] = useState(false);
  const handleFilter = (itemId) => {
    if (filtered === itemId) {
      setFiltered(null);
    } else {
      setFiltered(itemId);
    }
  };
  const visibleItems = showAll ? data : data.slice(0, 5);
  return (
    <div className={styles.itemsSideBar}>
      <p className={styles.title}>{title}</p>
      <div className={styles.navList}>
        <ul className={styles.navItem}>
          {visibleItems.map((el) => (
            <li key={el.id}>
              <button
                className={`${styles.item} ${filtered === el.id ? styles.active : ""}`}
                onClick={() => handleFilter(el.id)}
              >
                {el.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {data.length > 5 && (
        <button className={styles.linkBtn} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Свернуть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
}

export default ItemsList;
