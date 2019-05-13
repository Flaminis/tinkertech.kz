import React, { Component } from "react"
import Typed from "typed.js"
import Guy from "../images/guy.inline.svg"

import sourceCode from "../sourceCode"

class Animation extends Component {
  state = {
    typed: null,
  }
  componentDidMount() {
    this.setState({
      typed: new Typed(this.refs.code, {
        strings: [sourceCode],
        typeSpeed: 30,
        loop: true,
      }),
    })
  }
  componentWillUnmount() {
    if (this.state.typed) {
      this.state.typed.destroy()
    }
  }
  render() {
    return (
      <div className="hero-animation">
        <div className="hero-animation__code">
          <div ref="code" />
        </div>
        <Guy className={"hero-animation__guy"} />
      </div>
    )
  }
}

export default Animation
