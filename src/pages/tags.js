import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulTiedupBlog.nodes);

  return (
    <Layout>
      <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4 mt-7">
        <section className="grid gap-8 pb-12 sm:grid-cols-2 md:grid-cols-3">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });

            return (
              <Link
                to={`/tags/${slug}`}
                key={index}
                className="bg-gray-500 rounded-md text-center text-white transition-all duration-500 ease-in-out py-8 hover:bg-purple-700"
              >
                <h5 className="mb-0 font-serif tracking-wider text-2xl font-medium">
                  {text}
                </h5>
                <p className="mb-0 font-lato text-lg tracking-wider">
                  {value} {value > 1 ? "blogs" : "blog"}
                </p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Tags;

export const query = graphql`
  {
    allContentfulTiedupBlog {
      nodes {
        tags
      }
    }
  }
`;
