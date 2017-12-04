import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'
const ListLink = props => 
  <li style={{display: `inline-block`, marginRight: `1rem`}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


const Header = props => (
  <header style={{ marginBottom: `1.5rem`, marginTop: "1.4rem" }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>Technovangelist</h3>
    </Link>
    <br />
    I'm Matt Williams and I am an Evangelist at <a href="https://datadoghq.com">Datadog</a> and an organizer 
    for <a href="https://www.devopsdays.org/events/2017-boston/">DevOps Days Boston</a>. 
    This site is a place where I write about the 
    stuff that interests me.

    {/* <ul style={{ listStyle: `none`, marginLeft: 0}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/articles/">Articles</ListLink>
            <ListLink to="/twitter/">Twitter</ListLink>
            <ListLink to="/images/">Images</ListLink>
          </ul> */}
  </header>
);


const TemplateWrapper = ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 750, padding: `0 1rem` }}>
    <Helmet
      title="Technovangelist"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <br/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
