import React, { useContext } from "react";
import classNames from "classnames";
import { modeContext } from "../../pages";
import Logo from "../../images/logo.svg";
import Moon from "../../images/DarkMode.svg";
import Sun from "../../images/LightMode.svg";
import Container from "../Container";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const context = useContext(modeContext);

  return (
    <Container contentClassName={styles.container} as="nav">
      <div className={styles.logo}>
        <Logo className={styles.svg} />
      </div>
      <button
        aria-label="Toggle dark mode"
        onClick={() => context.set(!context.get)}
        className={styles.button}
      >
        <Sun
          className={classNames(
            context.get && styles["icon--show"],
            styles["icon--abs"],
            styles.icon,
          )}
        />
        <Moon
          className={classNames(
            context.get || styles["icon--show"],
            styles.icon,
          )}
        />
      </button>
    </Container>
  );
}
