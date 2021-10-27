import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogList from "../Blog List";
import TagList from "../Tag List";

const response = graphql`
  {
    allContentfulTiedupBlog(sort: { fields: date, order: DESC }) {
      nodes {
        author
        category
        date(formatString: "MMMM Do, YYYY")
        thumbnail {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        tags
        title
        slug
      }
    }
  }
`;
const AllBlogs = () => {
  const data = useStaticQuery(response);
  const blogs = data.allContentfulTiedupBlog.nodes;

  return (
    <div className="grid gap-x-8 gap-y-4 md:grid-cols-3/4 gap-4">
      <TagList blogs={blogs} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default AllBlogs;
