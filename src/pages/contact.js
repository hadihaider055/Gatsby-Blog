import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlogList from "../components/Blog List";
import Seo from "../components/seo";

const Contact = ({ data }) => {
  const blogs = data.allContentfulTiedupBlog.nodes;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Seo title="Contact" />
      <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4 mt-7">
        <section className="grid gap-x-36 gap-y-12 md:grid-cols-2 items-center justify-between">
          <article>
            <h3 className="font-serif font-medium tracking-wider text-4xl">
              Want To Get In Touch?
            </h3>
            <p className="font-sans text-xl mt-4 text-gray-500">
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p className="font-sans text-xl mt-4 text-gray-500">
              Cardigan prism bicycle rights put a bird on it deep v.
            </p>
            <p className="font-sans text-xl mt-4 text-gray-500">
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form
              className="max-w-lg w-full bg-white rounded-md shadow-lg py-8 px-10"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-md mb-2 capitalize font-serif text-gray-700"
                >
                  your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full py-1 px-3 rounded-md bg-gray-100 border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-md mb-2 capitalize font-serif text-gray-700"
                >
                  your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-1 px-3 rounded-md bg-gray-100 border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-md mb-2 capitalize font-serif text-gray-700"
                >
                  your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-28 py-1 px-3 rounded-md bg-gray-100 border border-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 font-serif cursor-pointer text-white hover:bg-purple-800 bg-purple-700 border-0 rounded-md tracking-wider shadow-lg transition-all ease-in-out duration-300 capitalize hover:shadow-xl"
              >
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="mt-20">
          <h5 className="font-serif font-semibold tracking-wider text-xl wx-full text-center mb-8">
            Look at this Awesomesouce!
          </h5>
          <BlogList blogs={blogs} />
        </section>
      </main>
    </Layout>
  );
};

export default Contact;

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
