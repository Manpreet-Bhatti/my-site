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
        <li>
          <Text className={styles.heading} type="subheading" as="h3">
            <span role="img" aria-label="handshake">
              🤝
            </span>{" "}
            Community Supporter
          </Text>
          <Text type="body">
            Giving back to my community is reveling; I provide development aide
            to my local hackathon,{" "}
            <Link to="https://hackthevalley.io/">Hack The Valley</Link>,
            together with teaching/mentoring endeavoring developers.
          </Text>
        </li>
        <li>
          <Text className={styles.heading} type="subheading" as="h3">
            <span role="img" aria-label="movie camera">
              🎥
            </span>{" "}
            Cinema Admirer
          </Text>
          <Text type="body">
            When I'm not developing, one of my hobbies is to watch movies/tv
            shows. I like to immerse myself in all types of genres for
            exploration and critical analysis purposes. That being said, action,
            mystery, and sci-fi are the go-to.
          </Text>
        </li>
      </ul>
    </Section>
  );
}
