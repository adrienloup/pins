import { useLocalisation } from "../../localisation/useLocalisation";

import styles from "./Aside.module.scss";

export const AsideComponent = () => {
  const { language, setLanguage } = useLocalisation();

  const toggleLocal = () => setLanguage(language === "fr" ? "en" : "fr");

  return (
    <aside role="complementary" className={styles.aside}>
      <div className={styles.inner}>
        <button onClick={toggleLocal}>{language === "fr" ? "EN" : "FR"}</button>
        aside
      </div>
    </aside>
  );
};
