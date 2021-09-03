import React from "react";
import PropTypes from "prop-types";
import LightOrDark from "../LightOrDark";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Seo from "../Seo";
import "../../scss/index.scss";

export default function Layout({ children, title, lang }) {
  return (
    <LightOrDark>
      <main>
        <Seo title={title} lang={lang} />
        <Navigation />
        {children}
        <Footer />
      </main>
    </LightOrDark>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  ...Seo.propTypes,
};
