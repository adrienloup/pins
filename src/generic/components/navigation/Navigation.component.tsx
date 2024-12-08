import { ButtonComponent } from "../button/Button.component";

import styles from "./Navigation.module.scss";

export const NavigationComponent = () => {
  return (
    <nav className={styles.navigation} role="navigation">
      <ul>
        <li>
          <ButtonComponent to="/pins">The Pins Game</ButtonComponent>
        </li>
        <li>
          <ButtonComponent to="/pins/indications">
            The Indications
          </ButtonComponent>
        </li>
      </ul>
    </nav>
  );
};
