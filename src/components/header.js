import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Logo from "../images/logo.inline.svg"
import Burger from "../images/burger.inline.svg"

const Header = ({ showMenu }) => (
  <header className={"header"}>
    <div className={"grid-container"}>
      <div className="grid-x">
        <div className="cell">
          <div className="header__wrap">
            <Burger className={"header__burger"} onClick={showMenu} />
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <Logo style={{ display: "block" }} className={"header__logo"} />
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
