import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { delayFallback } from "../../generic/utils/delayFallback";
import { PageComponent } from "../../generic/components/page/Page.component";
import { LoaderComponent } from "../../generic/components/loader/Loader.component";

import styles from "./Game.module.scss";

const PinsComponent = lazy(() =>
  delayFallback(import("./pins/Pins.component"), 4e2)
);

const ManufacturingComponent = lazy(() =>
  delayFallback(import("./manufacturing/Manufacturing.component"), 9e2)
);

const BusinessComponent = lazy(() =>
  delayFallback(import("./business/Business.component"), 6e2)
);

const MarketingComponent = lazy(() =>
  delayFallback(import("./marketing/Marketing.component"), 8e2)
);

function GamePage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <h1 className={styles.title}>{t("page.game.title")}</h1>
      <Suspense fallback={<LoaderComponent />}>
        <PinsComponent />
      </Suspense>
      <div className={styles.grid}>
        <Suspense fallback={<LoaderComponent />}>
          <ManufacturingComponent />
        </Suspense>
        <Suspense fallback={<LoaderComponent />}>
          <BusinessComponent />
        </Suspense>
        <Suspense fallback={<LoaderComponent />}>
          <MarketingComponent />
        </Suspense>
      </div>
      <div style={{ height: "5000px" }}>div</div>
    </PageComponent>
  );
}

export default GamePage;
