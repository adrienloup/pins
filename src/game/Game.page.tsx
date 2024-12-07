import { PageComponent } from "../generic/components/page/Page.component";

import styles from "./Game.module.scss";

function GamePage() {
  return (
    <PageComponent>
      <h1 className={styles.title}>One pin. Two pins. Three pins...</h1>
    </PageComponent>
  );
}

export default GamePage;
