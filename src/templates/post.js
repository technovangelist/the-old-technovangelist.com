import React from 'react';

export default({ data }) => {
    const post = data.markdownRemark
    return <div>
        <h1>{post.frontmatter.title}</h1>
        <span style={{}}>Posted on {post.frontmatter.date}</span>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>;
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug}}) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`