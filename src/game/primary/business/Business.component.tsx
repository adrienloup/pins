import { CardComponent } from "../../../generic/components/card/Card.component";
import { ButtonComponent } from "../../../generic/components/button/Button.component";

import styles from "./Business.module.scss";

const BusinessComponent = () => {
  return (
    <CardComponent className={styles.business}>
      <h2 className={styles.title}>Business</h2>
      <p>Public demand 88%</p>
      <p>Available Funds</p>
      <p>$&nbsp;0</p>
      <p>Unsold Inventory</p>
      <p>0</p>
      <div className={styles.line}>
        <ButtonComponent className={styles.button}>Increase</ButtonComponent>
        <ButtonComponent className={styles.button}>Decrease</ButtonComponent>
      </div>
      <p>Price per pin $&nbsp;0.09</p>
    </CardComponent>
  );
};

export default BusinessComponent;
