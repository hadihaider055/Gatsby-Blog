import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import slugify from "slugify";
import { INLINES } from "@contentful/rich-text-types";
import { HiOutlineMail } from "react-icons/hi";

const BlogTemplate = ({ data }) => {
  const blogs = data.allContentfulTiedupBlog.nodes;
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {node.content[0].value}
          </a>
        );
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4 mt-7 mb-20">
        <section className="bg-white p-10 shadow-xl rounded-lg">
          {blogs.map((red) => {
            const { title, mainImage, slug, blog, tags, author, date } = red;
            const pathToImage = getImage(mainImage);
            return (
              <div key={slug}>
                <div className="mx-auto w-full text-center">
                  {tags.map((tag) => {
                    return (
                      <Link to={`/tags/${slugify(tag, { lower: true })}`}>
                        <span className="py-2 px-4 cursor-pointer font-serif text-white hover:bg-purple-800 bg-purple-700 border-0 rounded-md tracking-wider shadow-lg transition-all ease-in-out duration-300 capitalize hover:shadow-xl m-2">
                          {tag}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <h2 className="text-3xl font-bold my-10 mb-5 text-center font-serif tracking-wider">
                  {title}
                </h2>
                <div className="w-full mx-auto flex items-center justify-center">
                  <p className="font-serif text-sm text-gray-500">{author}</p>
                  <span className="bg-gray-500 w-2 h-2 rounded-lg mx-3">.</span>
                  <p className="font-serif text-sm text-gray-500">{date}</p>
                </div>
                <div className="mx-auto w-full text-center">
                  <GatsbyImage
                    image={pathToImage}
                    alt={title}
                    className="my-10 rounded-md"
                  />
                </div>
                <div className="mt-3 font-lato text-gray-900 leading-7">
                  {renderRichText(blog, options)}
                </div>
              </div>
            );
          })}
        </section>
        <section className="mt-28 max-w-5xl w-full mx-auto bg-purple-400 rounded-md p-5 md:flex items-center justify-between">
          <div className="max-w-2xl w-full mx-auto text-center my-2">
            <h2 className="text-white font-serif font-semibold text-3xl tracking-wider ">
              Subscribe
            </h2>
            <p className="text-gray-700 font-lato">
              Subscribe Now To Get Daily Updates
            </p>
          </div>
          <div className="max-w-3xl w-full my-2">
            <form
              className="flex items-center justify-center"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-72 p-3 bg-white rounded-md text-gray-700 font-lato shadow-md"
              />
              <button
                type="submit"
                className="w-28 p-3 bg-gray-700 text-white font-lato shadow-md rounded-md "
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
  query GetBlogBySlug($slug: String) {
    allContentfulTiedupBlog(filter: { slug: { eq: $slug } }) {
      nodes {
        author
        category
        date(formatString: "MMMM Do, YYYY")
        tags
        title
        slug
        blog {
          raw
        }
        mainImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
