import React from "react"
import image1 from "../../images/about/1.png"
import image2 from "../../images/about/2.jpg"
import image3 from "../../images/about/3.jpg"
import image4 from "../../images/about/4.png"
import image5 from "../../images/about/5.jpg"
import image6 from "../../images/about/6.jpg"
import image7 from "../../images/about/7.jpg"
import image8 from "../../images/about/8.jpg"
import image9 from "../../images/about/9.jpg"
import Story from "../../components/Story"

const slides = [
  <div key={`slide-1`} className={"story__slide"}>
    <img src={image1} alt="Our band" />
  </div>,
  <div key={`slide-2`} className={"story__slide"}>
    <img src={image2} alt="Our band" />
  </div>,
  <div key={`slide-3`} className={"story__slide"}>
    <img src={image3} alt="Our band" />
  </div>,
  <div key={`slide-4`} className={"story__slide"}>
    <img src={image4} alt="Our band" />
  </div>,
  <div key={`slide-5`} className={"story__slide"}>
    <img src={image5} alt="Our band" />
  </div>,
  <div key={`slide-6`} className={"story__slide"}>
    <img src={image6} alt="Our band" />
  </div>,
  <div key={`slide-7`} className={"story__slide"}>
    <img src={image7} alt="Our band" />
  </div>,
  <div key={`slide-8`} className={"story__slide"}>
    <img src={image8} alt="Our band" />
  </div>,
  <div key={`slide-9`} className={"story__slide"}>
    <img src={image9} alt="Our band" />
  </div>,
]

const About = () => (
  <section id="about" className="section has-y-space">
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-10 large-offset-2">
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
          <p />
        </div>
      </div>
      <div className="grid-x large-offset-2">
        <div className="cell">
          <Story slides={slides} delay={5000} />
        </div>
      </div>
    </div>
  </section>
)

export default About
