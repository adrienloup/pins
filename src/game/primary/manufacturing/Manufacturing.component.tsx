import { useEffect, useState } from "react";
import { useData } from "../../secondary/useData";
import { CardComponent } from "../../../generic/components/card/Card.component";
import { ButtonComponent } from "../../../generic/components/button/Button.component";
// import { Icon } from "@/generic/components/icon/Icon";

import styles from "./Manufacturing.module.scss";

export const ManufacturingComponent = () => {
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
      {/* <div className={styles.inner}> */}
      {/* <p>Trombones produits : {pins}</p> */}
      <p>Trombones par seconde : {pinsPerSecond}</p>
      <ButtonComponent className={styles.button} onClick={makePins}>
        Produire un trombone
      </ButtonComponent>
      <p>1,749 fils de fer</p>
      <div>
        <ButtonComponent className={styles.button}>
          Acheter du fer
        </ButtonComponent>
        Cost: $
      </div>
      <p>Machine : 0</p>
      <div>
        <ButtonComponent className={styles.button} onClick={makePins}>
          Acheter une machine
        </ButtonComponent>
        Cost: $ 5.00
      </div>
      {/* </div> */}
    </CardComponent>
  );
};
