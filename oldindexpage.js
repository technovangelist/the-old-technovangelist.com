import React from 'react'
import Link from 'gatsby-link'


// const { group, index, first, last } = pathContext
export default ({ data }) => {
  return (
    <div>
      <h1 display={"inline-block"}>
        Amazing Pandas Eating Things
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}{" "}</Link>
            <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`query IndexQuery {
           allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
             totalCount
             edges {
               node {
                 frontmatter {
                   title
                 }
                 fields {
                   slug
                 }
               }
             }
           }
         }`;
