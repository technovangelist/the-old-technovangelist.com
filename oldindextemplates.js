import React from "react";

export default ({ data }) => {
  // const { group, index, first, last } = pathContext;
  
    return (
      <div>
        {/* {first ? ( */}
          <h1>This is an h1 for my homepage</h1>
        {/* ) : (
          <h1>This is an h1 for subsequent pages</h1>
        )} */}
      </div>
    );
  
  

  //   const post = data.markdownRemark;
  //   return (
  //     <div>
  //       <h1>{post.frontmatter.title}</h1>
  //     </div>
  //   );
};
export const pageQuery = graphql`
  query PaginatedIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      
      edges {
        node {
          frontmatter {
            title
          }
          
          fields {
            group
          }
        }
      }
    }
  }
`;
// export const query = graphql`
//   query BlogPostQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
