import { useEffect, useState } from "react";
import { useData } from "@/game/secondary/useData";
import { Card } from "@/generic/components/card/Card";
import { Button } from "@/generic/components/button/Button";
import { Icon } from "@/generic/components/icon/Icon";

import styles from "@/game/primary/components/manufacturing/Manufacturing.module.scss";

export const Manufacturing = () => {
  const { data, setData } = useData();
  const [paperclips, setPaperclips] = useState<number>(data.paperclips);
  const [paperclipsPerSecond, setPaperclipsPerSecond] = useState<number>(0);
  const [rate, setRate] = useState<number[]>([]);

  const makePaperclip = () => {
    setPaperclips((prev) => prev + 1);
    setData({ ...data, paperclips: paperclips + 1 });
  };

  useEffect(() => {
    const now = Date.now();
    setRate((prev) => [...prev, now].filter((time) => now - time <= 1e3));
    setPaperclipsPerSecond(rate.length);
  }, [paperclips]);

  useEffect(() => {
    const time = setTimeout(() => {
      setPaperclipsPerSecond(0);
      setRate([1]);
    }, 1e3);
    return () => clearTimeout(time);
  }, [rate]);

  return (
    <Card className={styles.manufacturing}>
      <h2 className={styles.title}>Manufacturing</h2>
      <div className={styles.inner}>
        {/* <p>Trombones produits : {paperclips}</p> */}
        <p>Trombones par seconde : {paperclipsPerSecond}</p>
        <Button className={styles.button} onClick={makePaperclip}>
          Produire un trombone
        </Button>
        <p>1,749 fils de fer</p>
        <div>
          <Button className={styles.button}>Acheter du fer</Button>
          Cost: $
        </div>
        <p>Machine : 0</p>
        <div>
          <Button className={styles.button} onClick={makePaperclip}>
            Acheter une machine
          </Button>
          Cost: $ 5.00
        </div>
      </div>
      <Button className={styles.info}>
        <Icon icon="add" />
      </Button>
    </Card>
  );
};
