import { useTranslation } from "react-i18next";
import { PageComponent } from "../../generic/components/page/Page.component";
import { PinsComponent } from "./pins/Pins.component";

import styles from "./Game.module.scss";
import { Manufacturing } from "./manufacturing/Manufacturing";

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <h1 className={styles.title}>{t("page.game.title")}</h1>
      <div className={styles.grid}></div>
      <Manufacturing />
      <div style={{ height: "5000px" }}>div</div>
      <PinsComponent />
    </PageComponent>
  );
}

export default GamePage;
