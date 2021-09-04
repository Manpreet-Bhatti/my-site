import React from "react";
import Section from "../../components/Section";
import Link from "../../components/Link";
import Text from "../../components/Text";
import styles from "./About.module.scss";

export default function About() {
  return (
    <Section>
      <Text type="heading" as="h2">
        Who is "
        <Text type="heading" color="primary">
          Manpreet Bhatti
        </Text>
        "?
      </Text>
      <ul className={styles.items}>
        <li>
          <Text className={styles.heading} type="subheading" as="h3">
            <span role="img" aria-label="man technologist">
              👨🏽‍💻
            </span>{" "}
            Developer
          </Text>
          <Text type="body">
            I'm currently a developer at{" "}
            <Link to="http://www.ivedha.com/">iVedha</Link>, where I work
            towards creating a NLP search engine and chatbot to quicken support
            ticket documentation and lookup.
          </Text>
        </li>
        {/* Talk about helping the community and doing development */}
        {/* Talk about hobby */}
      </ul>
    </Section>
  );
}
