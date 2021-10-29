import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <main className="max-w-screen-xl w-11/12 mx-auto absolute top-1/3 text-center mt-10 left-0 right-0">
        <h1 className="text-9xl">404</h1>
        <h1 className="font-serif tracking-widest">
          Sorry, we couldn't find the requested page.
        </h1>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
