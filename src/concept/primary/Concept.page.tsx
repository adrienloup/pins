import { useTranslation } from "react-i18next";
import { PageComponent } from "../../generic/components/page/Page.component";

function ConceptPage() {
  const { t } = useTranslation();

  return (
    <PageComponent>
      <h1>{t("page.concept.title")}</h1>
    </PageComponent>
  );
}

export default ConceptPage;
