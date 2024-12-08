import { useData } from "../../secondary/useData";

import styles from "./Pins.module.scss";

export const PinsComponent = () => {
  const { data } = useData();

  return <div className={styles.pins}>Pins: {data.pins}</div>;
};
