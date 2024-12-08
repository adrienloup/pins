import { useTranslation } from "react-i18next";
import { PageComponent } from "../../generic/components/page/Page.component";

function IndicationsPage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <h1>{t("page.indications.title")}</h1>
    </PageComponent>
  );
}

export default IndicationsPage;
