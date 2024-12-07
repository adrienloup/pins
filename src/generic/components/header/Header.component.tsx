import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  return (
    <header className={styles.header} role="banner">
      <div>
        <Link to="/pins">Home</Link>
        <br />
        <Link to="/pins/indications">Indications</Link>
      </div>
    </header>
  );
};
