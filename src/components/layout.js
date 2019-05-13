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
import Footer from "./footer"
import Contacts from "../components/contacts"
import Nav from "./nav"
import "../sass/app.scss"

class Layout extends Component {
  closeMenu = () => {
    document.body.classList.remove("show-menu")
  }
  showMenu = () => {
    document.body.classList.add("show-menu")
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                width: 0,
                height: 0,
              }}
            >
              <defs>
                <clipPath id="clipping">
                  <path d="M137 242.5C33.681 303.248.5 417.5.5 536.5L192 682c29-40.5 149-85.5 239.5-45 113.672 50.87 224 159 382.5 124V0H305c-15 86.5-60 179-168 242.5z" />
                </clipPath>

                <clipPath id="clipping-mobile">
                  <path d="M56.0712 318.583C13.9207 343.385 0.383789 390.032 0.383789 438.618L78.5093 498.023C90.3404 481.487 139.296 463.115 176.217 479.65C222.592 500.419 267.602 544.567 332.264 530.277V219.575V0C332.264 44.1305 282.539 108.183 230.55 114.957C163.372 123.711 130.729 184.258 124.61 219.575C118.49 254.891 100.132 292.657 56.0712 318.583Z" />
                </clipPath>
              </defs>
            </svg>

            <Header
              siteTitle={data.site.siteMetadata.title}
              showMenu={this.showMenu}
              closeMenu={this.closeMenu}
            />
            <Nav showMenu={this.showMenu} closeMenu={this.closeMenu} />
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
