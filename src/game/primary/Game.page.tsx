import { useTranslation } from "react-i18next";
import { PageComponent } from "../../generic/components/page/Page.component";
import { PinsComponent } from "./pins/Pins.component";
import { ManufacturingComponent } from "./manufacturing/Manufacturing.component";

import styles from "./Game.module.scss";

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <h1 className={styles.title}>{t("page.game.title")}</h1>
      {/* <div className={styles.columns}>
        <div>
          <span>tutu</span>
          <p>Whereas a common understanding of these rights and freedoms is</p>
        </div>
        <div>
          <span>tutu</span>
          <p>
            No one shall be held in slavery or servitude; slavery and the slave
            trade shall be prohibited in all their forms.
          </p>
        </div>
      </div> */}
      <PinsComponent />
      <div className={styles.grid}>
        <ManufacturingComponent />
        <ManufacturingComponent />
      </div>
      <div style={{ height: "5000px" }}>div</div>
    </PageComponent>
  );
}

export default GamePage;
