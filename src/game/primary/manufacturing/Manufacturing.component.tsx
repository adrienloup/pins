import { useEffect, useState } from "react";
import { useData } from "../../secondary/useData";
import { CardComponent } from "../../../generic/components/card/Card.component";
import { ButtonComponent } from "../../../generic/components/button/Button.component";
// import { Icon } from "@/generic/components/icon/Icon";

import styles from "./Manufacturing.module.scss";

const ManufacturingComponent = () => {
  const { data, setData } = useData();
  const [pins, setPins] = useState<number>(data.pins);
  const [pinsPerSecond, setPinsPerSecond] = useState<number>(0);
  const [rate, setRate] = useState<number[]>([]);

  const makePins = () => {
    setPins((prev) => prev + 1);
    setData({ ...data, pins: pins + 1 });
  };

  useEffect(() => {
    const now = Date.now();
    setRate((prev) => [...prev, now].filter((time) => now - time <= 1e3));
    setPinsPerSecond(rate.length);
  }, [pins]);

  useEffect(() => {
    const time = setTimeout(() => {
      setPinsPerSecond(0);
      setRate([1]);
    }, 1e3);
    return () => clearTimeout(time);
  }, [rate]);

  return (
    <CardComponent className={styles.manufacturing}>
      <h2 className={styles.title}>Manufacturing</h2>
      Pins per second {pinsPerSecond}
      <ButtonComponent className={styles.button} onClick={makePins}>
        Make pin
      </ButtonComponent>
      1,000 inches
      <div className={styles.line}>
        <ButtonComponent className={styles.button}>Buy wire</ButtonComponent>{" "}
        Cost $&nbsp;0.00
      </div>
      0 machine
      <div className={styles.line}>
        <ButtonComponent className={styles.button} onClick={makePins}>
          Buy unit
        </ButtonComponent>
        Cost $&nbsp;5.00
      </div>
    </CardComponent>
  );
};

export default ManufacturingComponent;
