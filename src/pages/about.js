import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import BlogList from "../components/Blog List";

const About = ({ data }) => {
  const blogs = data.allContentfulTiedupBlog.nodes;
  return (
    <Layout>
      <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4 mt-7">
        <section className="grid gap-x-8 gap-y-16 pb-12 md:grid-cols-2 items-center md:h-96">
          <article>
            <h2 className="font-serif font-semibold tracking-wider text-4xl">
              I'm baby coloring book poke taxidermy
            </h2>
            <p className="font-sans text-xl mt-4 text-gray-500">
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p className="font-sans text-xl mt-4 text-gray-500 mb-4">
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link
              to="/contact"
              className="py-3 text-lg font-sans font-semibold px-4 cursor-pointer text-white hover:bg-purple-800 bg-purple-700 border-0 rounded-md tracking-wider shadow-lg transition-all ease-in-out duration-300 capitalize hover:shadow-xl"
            >
              contact
            </Link>
          </article>
          <StaticImage
            src="../images/blogImg.jpg"
            alt="Person Pouring Salt in Bowl"
            placeholder="blurred"
            className="rounded-md h-96 md:h-full"
          />
        </section>
        <section>
          <h5 className="font-serif font-semibold tracking-wider text-xl wx-full text-center mb-8">
            Look at this Awesomesouce!
          </h5>
          <BlogList blogs={blogs} />
        </section>
      </main>
    </Layout>
  );
};

export default About;

export const query = graphql`
  {
    allContentfulTiedupBlog(
      sort: { fields: date, order: DESC }
      filter: { isFeatured: { eq: true } }
    ) {
      nodes {
        author
        category
        date(formatString: "MMMM Do, YYYY")
        thumbnail {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        tags
        title
        slug
      }
    }
  }
`;
