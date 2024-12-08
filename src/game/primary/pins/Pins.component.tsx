import { numberWithCommas } from "../../../generic/utils/numberWithCommas";
import { useData } from "../../secondary/useData";

import styles from "./Pins.module.scss";

const PinsComponent = () => {
  const { data } = useData();

  return (
    <div className={styles.pins}>
      <div className={styles.inner}>
        <span>
          Pins <span>{numberWithCommas(data.pins)}</span>
        </span>
      </div>
    </div>
  );
};

export default PinsComponent;
