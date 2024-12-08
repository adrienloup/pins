import { CardComponent } from "../../../generic/components/card/Card.component";
import { ButtonComponent } from "../../../generic/components/button/Button.component";

import styles from "./Marketing.module.scss";

const MarketingComponent = () => {
  return (
    <CardComponent className={styles.marketing}>
      <h2 className={styles.title}>Marketing</h2>
      <p>Level 1</p>
      <ButtonComponent
        className={styles.button}
        onClick={() => console.log("ok")}
      >
        Buy level
      </ButtonComponent>
      Cost $&nbsp;100.00
    </CardComponent>
  );
};

export default MarketingComponent;
