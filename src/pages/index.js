import React from "react";

import Hello from "../components/Hello";

import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page main">
      <Hello />
    </div>
  </Layout>
);

export default IndexPage;
