import React from "react";
import Section from "../../components/Section";
import Text from "../../components/Text";
import styles from "./Landing.module.scss";

export default function Landing() {
  return (
    <Section>
      <Text className={styles.heading} type="splash" as="h1">
        Manpreet Bhatti
      </Text>
      <Text type="subheading" color="primary">
        Junior Developer
      </Text>
    </Section>
  );
}
