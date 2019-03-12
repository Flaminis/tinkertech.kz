/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import Contacts from "../components/contacts"
import Nav from "./Nav"
import "../sass/app.scss"

class Layout extends Component {
  toggleMenu = () => {
    document.body.classList.toggle("show-menu")
  }
  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              toggleMenu={this.toggleMenu}
            />
            <Nav toggleMenu={this.toggleMenu} />
            <main>{children}</main>
            <Contacts />
            <Footer />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
