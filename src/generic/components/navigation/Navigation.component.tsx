import { ButtonComponent } from "../button/Button.component";

import styles from "./Navigation.module.scss";

export const NavigationComponent = () => {
  return (
    <nav className={styles.navigation} role="navigation">
      <ul>
        <li>
          <ButtonComponent to="/pins">The Game</ButtonComponent>
        </li>
        <li>
          <ButtonComponent to="/pins/concept">The concept</ButtonComponent>
        </li>
      </ul>
    </nav>
  );
};
