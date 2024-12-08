import { useLocalisation } from "../../localisation/useLocalisation";
import { NavigationComponent } from "../navigation/Navigation.component";

import styles from "./Header.module.scss";

const HeaderComponent = () => {
  const { language, setLanguage } = useLocalisation();

  const toggleLocal = () => setLanguage(language === "fr" ? "en" : "fr");

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <button onClick={toggleLocal}>{language === "fr" ? "EN" : "FR"}</button>
        <NavigationComponent />
      </div>
    </header>
  );
};

export default HeaderComponent;
