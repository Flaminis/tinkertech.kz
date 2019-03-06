import React from "react"
import image from "../../images/guys.png"

const About = () => (
  <section className="section has-y-space">
    <div className="grid-x">
      <div className="cell large-10">
        <h3 className="section__title" />
        <p className="section__lead">
          We love taking products from vision to reality.
        </p>
        <p className="section__lead">
          We partner with businesses looking to harness the value of digital,
          helping them to discover, design, develop and scale exceptional
          digital experiences that deliver measurable and profitable results.
        </p>
        <p className="section__lead">
          We are on a mission to become a trusted partner of businesses around
          the world. We’re proficient in helping partners to create their
          products from scratch to millions of users.
        </p>
        <p>
          <img src={image} alt="Our band" />
        </p>
      </div>
    </div>
  </section>
)

export default About
