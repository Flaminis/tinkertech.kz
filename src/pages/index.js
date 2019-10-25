import React from "react"
// import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import TrustedBy from "../components/home/trustedBy"
import Services from "../components/home/services"
import Career from "../components/home/career"

const IndexPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "home",
      }}
    />
    <SEO title={"We Build Apps"} />
    <Hero />
    <About />
    <TrustedBy />
    <Services />
    <Career />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
