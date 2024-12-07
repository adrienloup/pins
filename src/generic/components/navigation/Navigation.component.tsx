import { Button } from "../button/Button.component";

import styles from "./Navigation.module.scss";

export const NavigationComponent = () => {
  return (
    <nav className={styles.navigation} role="navigation">
      <ul>
        <li>
          <Button to="/pins">The Pins Game</Button>
        </li>
        <li>
          <Button to="/pins/indications">Indications</Button>
        </li>
      </ul>
    </nav>
  );
};
