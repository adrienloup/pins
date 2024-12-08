import { classNames } from "../../utils/classNames";
import { Loader } from "./Loader.type";

import styles from "./Loader.module.scss";

export const LoaderComponent = ({ size = "medium", className }: Loader) => {
  return (
    <div className={classNames([styles.loader, styles[size], className])}></div>
  );
};
