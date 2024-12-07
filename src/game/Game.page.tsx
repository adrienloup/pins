import { PageComponent } from "../generic/components/page/Page.component";
import { PinCounter } from "./pincounter/PinCounter.component";

import styles from "./Game.module.scss";

function GamePage() {
  return (
    <PageComponent>
      <h1 className={styles.title}>One pin. Two pins. Three pins...</h1>
      <div className={styles.grid}>
        <PinCounter />
      </div>
      <div style={{ height: "5000px" }}>div</div>
    </PageComponent>
  );
}

export default GamePage;
