import { CardComponent } from "../../generic/components/card/Card.component";

import styles from "./PinCounter.module.scss";

export const PinCounter = () => {
  return (
    <CardComponent className={styles.pincounter} title="Pins stock">
      <div className={styles.number}>1 000 000 000 000</div>
    </CardComponent>
  );
};
