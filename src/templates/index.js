import React, { Component } from "react";
import Link from "gatsby-link";

const headerjson = {
  name: "Matt Williams",
  roles: [
    {
      title: "Evangelist",
      org: "Datadog"
    },
    { title: "Organizer", org: "Boston DevOps Days" }
  ]
};

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};
const HeaderJSON = props => {
    if (props.index==1) {
        return <pre class="headerpre">{JSON.stringify(headerjson, null, 2)}</pre>;
    } else {
        return <div> </div>;
    }
}

const IndexPage = ({ data, pathContext }) => {
  const { group, index, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const first = index==1;
  const last = index==pageCount;

  return <div>
      {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
      <HeaderJSON index={index} />
      {group.map(({ node }) => <div key={node.id} className="blogListing">
          <div className="date">{node.frontmatter.date}</div>
          <h2 className="blogUrl">
            <Link className="blogUrl" to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <div className="blogContent" dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>)}
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </div>;
};
export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
