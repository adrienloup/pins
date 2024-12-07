import { classNames } from "../../utils/classNames";
import { Card } from "./Card.type";

import styles from "./Card.module.scss";

export const CardComponent = ({ children, className, title }: Card) => {
  return (
    <div className={classNames([styles.card, className])}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
