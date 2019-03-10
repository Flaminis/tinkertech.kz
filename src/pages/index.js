import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import TrustedBy from "../components/home/trustedBy"
import Services from "../components/home/services"
import Contacts from "../components/home/contacts"
import Career from "../components/home/career"

const IndexPage = () => (
  <Layout>
    <SEO
      title={"We Build Apps"}
      keywords={[
        `Outsource Software Development`,
        `application`,
        `react`,
        `nodejs`,
        `iOS`,
        `Android`,
      ]}
    />
    <Hero />
    <About />
    <TrustedBy />
    <Services />
    <Career />
    <Contacts />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
