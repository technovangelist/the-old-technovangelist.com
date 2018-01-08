const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const createPaginatedPages = require("gatsby-paginate");

// const { GraphQLString } = require("graphql");
// const { replace, pipe, path: keyPath } = require("ramda");

// const getFilename = pipe(
//   keyPath(["fileAbsolutePath"]),
//   path.dirname,
//   path.basename
// );

const dashslash = (str, year, month, day) => {
  return `${year}/${month}/${day}/`;
};
// const getSlug = pipe(
//   getFilename,
//   replace(/^(\d\d\d\d)-(\d\d)-(\d\d)-/, dashslash),
//   replace(/\.md$/, "")
// );

// exports.setFieldsOnGraphQLNodeType = ({ type }) => {
//   if (type.name !== "MarkdownRemark") {
//     return {};
//   }

//   return Promise.resolve({
//     slug: {
//       type: GraphQLString,
//       resolve: getSlug
//     },
//     filename: {
//       type: GraphQLString,
//       resolve: getFilename
//     }
//   });
// };
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    var slug = createFilePath({ node, getNode, basePath: `pages` }).replace(
      /^\/(\d\d\d\d)-(\d\d)-(\d\d)-/,
      dashslash
    );
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve("./src/templates/post.js");
  return new Promise((resolve, reject) => {
    graphql(`{
        posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
              excerpt(pruneLength: 150)
              html
              fields {
                slug
              }
            }
          }
        }
      }`).then(result => {
      createPaginatedPages({
        edges: result.data.posts.edges,
        createPage: createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 3
      });
      result.data.posts.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: postTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
//   const result = ;

//   if (result.errors) {
//     console.log(result.errors);
//     throw new Error("Things broke, see the console for more");
//   }
//   console.log(result.data);
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: `${node.id}`,
//       component: postTemplate,
//       context: {}
//     });
//   });
// };
