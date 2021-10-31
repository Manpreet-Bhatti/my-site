import React from "react";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Link from "../../components/Link";
import styles from "./Skills.module.scss";
import { SkillsData } from "./data";

export default function Skills() {
  return (
    <Section>
      <Text type="heading" as="h2">
        What I know...
      </Text>
      <ul className={styles.items}>
        {SkillsData.map((skill, key) => (
          <li key={key}>
            <Text className={styles.heading} type="subheading" as="h3">
              {skill.title}
            </Text>
            <ul className={styles.skills}>
              {skill.content.map((i, contentKey) => (
                <Text
                  className={styles.skill}
                  type="meta"
                  key={contentKey}
                  as="li"
                  bold
                >
                  {i}
                </Text>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Text as="p" type="body" color="heading" className={styles.more}>
        Want to learn more? Check out{" "}
        <Link to="https://res.manpreetbhatti.com/">my resume</Link>.
      </Text>
    </Section>
  );
}
