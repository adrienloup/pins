import { useData } from "../../secondary/useData";

import styles from "./Pins.module.scss";

export const PinsComponent = () => {
  const { data } = useData();

  const numberWithCommas = (n: number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className={styles.pins}>
      <div className={styles.inner}>
        <span>
          Pins: <span>{numberWithCommas(data.pins)}</span>
        </span>
      </div>
    </div>
  );
};
