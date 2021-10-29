import React from "react";
import Layout from "../components/layout";
import AllBlogs from "../components/All Blogs";
import Seo from "../components/seo";

const Blogs = () => {
  return (
    <Layout>
      <Seo title="Blogs" />
      <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4 mt-7">
        <AllBlogs />
      </main>
    </Layout>
  );
};

export default Blogs;
