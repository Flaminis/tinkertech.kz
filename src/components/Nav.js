import React, { Component } from "react"
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import Close from "../images/times.svg"

class Nav extends Component {
  componentDidMount() {
    scrollSpy.update()
  }
  render() {
    const { toggleMenu } = this.props
    return (
      <nav className={"nav"}>
        <Close className={"nav__close"} onClick={toggleMenu} />
        <ul className={"nav__menu"}>
          <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="about"
              className={"nav__menu-link"}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="trustedBy"
              className={"nav__menu-link"}
              onClick={toggleMenu}
            >
              Trusted by
            </Link>
          </li>
          <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="services"
              className={"nav__menu-link"}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          {/* <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="works"
              className={"nav__menu-link"}
              onClick={toggleMenu}
            >
              Works
            </Link>
          </li>
          <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="insights"
              className={"nav__menu-link"}
              onClick={toggleMenu}
            >
              Insights
            </Link>
          </li> */}
          <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="careers"
              className={"nav__menu-link"}
              onClick={toggleMenu}
            >
              Careers
            </Link>
          </li>
          <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="contacts"
              className={"nav__menu-link"}
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
