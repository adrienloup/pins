import { ButtonComponent } from "../button/Button.component";

import styles from "./Navigation.module.scss";

export const NavigationComponent = () => {
  return (
    <nav className={styles.navigation} role="navigation">
      <ul>
        <li>
          <ButtonComponent to="/pins">Game</ButtonComponent>
        </li>
        <li>
          <ButtonComponent to="/pins/indications">About</ButtonComponent>
        </li>
      </ul>
    </nav>
  );
};
