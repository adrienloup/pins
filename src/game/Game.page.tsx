import { useTranslation } from "react-i18next";
import { PageComponent } from "../generic/components/page/Page.component";
import { PinStock } from "./pinstock/PinStock.component";

import styles from "./Game.module.scss";

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <h1 className={styles.title}>{t("page.game.title")}</h1>
      <div className={styles.grid}></div>
      <div style={{ height: "5000px" }}>div</div>
      <PinStock />
    </PageComponent>
  );
}

export default GamePage;
