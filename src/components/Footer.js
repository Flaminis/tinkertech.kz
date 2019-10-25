import React from "react"

const Footer = () => (
  <footer className={"footer"}>
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell">
          All rights reserved
          <br />
          by "Tinker Tech" LLP
          <br />
          Kazakhstan, Almaty • {new Date().getFullYear()}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
