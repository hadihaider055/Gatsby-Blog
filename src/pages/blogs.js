import React from "react";
import Layout from "../components/layout";
import AllBlogs from "../components/All Blogs";

const Blogs = () => {
  return (
    <Layout>
      <main className="max-w-screen-xl w-11/12 mx-auto min-h-3/4 mt-7">
        <AllBlogs />
      </main>
    </Layout>
  );
};

export default Blogs;
