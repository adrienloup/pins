import { useLocalisation } from "../../localisation/useLocalisation";

import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  const { language, setLanguage } = useLocalisation();
  const toggleLocal = () => setLanguage(language === "fr" ? "en" : "fr");

  return (
    <header className={styles.header} role="banner">
      header
      <button onClick={toggleLocal}>{language === "fr" ? "EN" : "FR"}</button>
    </header>
  );
};
