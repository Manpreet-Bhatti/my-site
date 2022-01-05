import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "./FadeInSection.module.scss";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    observerRefValue = domRef.current;
    return () => observer.unobserve(observerRefValue);
  }, []);
  return (
    <div
      className={classNames(
        isVisible && styles["fade--is-visible"],
        styles.fade,
      )}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
