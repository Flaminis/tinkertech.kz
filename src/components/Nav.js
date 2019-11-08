import React, { Component } from "react"
import { Link, scrollSpy, Events } from "react-scroll"

import Close from "../images/times.inline.svg"

class Nav extends Component {
  componentDidMount() {
    const { closeMenu } = this.props
    scrollSpy.update()

    Events.scrollEvent.register("begin", function(to, element) {
      closeMenu()
    })
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("end")
  }
  render() {
    const { closeMenu } = this.props
    return (
      <nav className={"nav"}>
        <Close className={"nav__close"} onClick={closeMenu} />
        <ul className={"nav__menu"}>
          <li className={"nav__menu-item"}>
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="about"
              className={"nav__menu-link"}
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
