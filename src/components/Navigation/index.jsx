import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../LightOrDark";
// import Logo from "../../images/logo.svg";
import Moon from "../../images/DarkMode.svg";
import Sun from "../../images/LightMode.svg";
import Container from "../Container";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [display, setDisplay] = useContext(ThemeContext);
  return (
    <Container contentClassName={styles.container} as="nav">
      <div className={styles.logo}>
        {/* <Logo className={styles.svg} /> */}
      </div>
      <button
        aria-label="Toggle dark mode"
        onClick={() => setDisplay(!display)}
        className={styles.button}
      >
        <Sun
          className={classNames(
            display && styles["icon--show"],
            styles["icon--abs"],
            styles.icon,
          )}
        />
        <Moon
          className={classNames(display || styles["icon--show"], styles.icon)}
        />
      </button>
    </Container>
  );
}
