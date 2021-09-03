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
            </span>
            {/* Change this later */}
            Developer
          </Text>
          <Text type="body">
            I'm currently a junior developer at{" "}
            <Link to="http://www.ivedha.com/">iVedha</Link>, where work towards
            creating an NLP search engine and chatbot to quicken support ticket
            documentation and lookup.
          </Text>
        </li>
        {/* <li>
            <Text className={styles.heading} type='subheading' as='h3'>
                <span></span>
            </Text>
        </li> */}
        {/* Say something about hobbies */}
      </ul>
    </Section>
  );
}
