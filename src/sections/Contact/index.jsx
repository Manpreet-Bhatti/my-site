import React from "react";
import Section from "../../components/Section";
import Text from "../../components/Text";
import Link from "../../components/Link";
import styles from "./Contact.module.scss";
import { ContactInfo } from "./data";

export default function Contact() {
  return (
    <Section>
      <Text type="heading" as="h2">
        Let's Converse!
      </Text>
      <Text type="body" as="p">
        Let's get in touch to speak about job opportunities and share
        experiences!
      </Text>
      <ul className={styles.items}>
        {ContactInfo.map((contact, key) => (
          <li className={styles.item} key={key}>
            <Text type="body" color="heading" as="h3">
              {contact.title}
            </Text>
            <Link className={styles.link} to={contact.link} mask>
              {contact.content}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
