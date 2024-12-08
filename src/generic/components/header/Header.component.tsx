import { NavigationComponent } from "../navigation/Navigation.component";

import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  return (
    <header className={styles.header} role="banner">
      <NavigationComponent />
    </header>
  );
};
