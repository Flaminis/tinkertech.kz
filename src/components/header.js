import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header className={'header'}>
    <div
      className={'grid-container'}
    >
      <div className="grid-x">
        <div className="cell">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <Logo style={{ display: 'block' }}/>
            </Link>
          </h1>
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
