import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.scss";


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>

);

const ListLinkA = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a href={props.to}>{props.children}</a>
  </li>
);

const Header = props => (
  <header style={{ marginTop: "1.4rem" }}>
    <ul style={{ listStyle: `none`, marginLeft: 0 }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLinkA to="https://twitter.com/technovangelist">Twitter</ListLinkA>
      
      <ListLinkA to="https://instagram.com/technovangelist/">Images</ListLinkA>
    </ul>
    
    <div id="siteheading">
        <h1 style={{ display: `inline` }}>Technovangelist</h1>
      
    </div>
    <br />

  </header>
);

const TemplateWrapper = ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 750, padding: `0 1rem` }}>
    <Helmet
      title="Technovangelist"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <link
      rel="stylesheet"
      id="cocoa-baskerville-css"
      href="//fonts.googleapis.com/css?family=Libre+Baskerville%3A400%2C700%2C400italic%26subset%3Dlatin%2Clatin-ext"
      type="text/css"
      media="all"
    />

    <Header />
    <div>{children()}</div>
    <br />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
