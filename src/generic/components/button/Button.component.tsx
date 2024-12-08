import { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";

import styles from "./Button.module.scss";

type AttributesType<E> = ButtonHTMLAttributes<E> & LinkHTMLAttributes<E>;

interface ButtonProps<T> extends AttributesType<T> {
  href?: string;
  to?: string;
  onClick?: () => void;
}

export const ButtonComponent = ({
  children,
  href,
  to,
  className,
  onClick,
  ...props
}: ButtonProps<HTMLButtonElement & HTMLAnchorElement>) => {
  const link = (
    <Link
      to={to!}
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </Link>
  );

  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </a>
  );

  const button = (
    <button
      type="button"
      onClick={onClick}
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </button>
  );

  return href ? a : to ? link : button;
};
