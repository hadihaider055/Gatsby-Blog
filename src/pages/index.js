import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import AllBlogs from "../components/All Blogs";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4">
        <header className="relative mb-8 h-3/5">
          <StaticImage
            src="../images/banner.jpg"
            alt="Banner"
            className="h-full rounded-lg"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg bg-black bg-opacity-50">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-6xl font-lato mb-4 tracking-wider">
                Tiedup Blogs
              </h1>
              <h4 className="text-xl font-serif tracking-wider">
                Be updated, Be knowned
              </h4>
            </div>
          </div>
        </header>
        <AllBlogs />
      </main>
    </Layout>
  );
};

export default IndexPage;
