import React from "react"
import { Link } from "gatsby"

const Services = () => (
  <section id="services" className="section has-y-space services">
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-10 large-offset-2">
          <h3 className="section__title">Services</h3>
          <div className="services__item">
            <h4 className={"h2"}>Mobile App Development</h4>
            <p className={"section__lead"}>
              We have been on the front line of mobile development for years and
              have seen it transform everything from personal behavior to
              industry trends. We build mobile apps for businesses that embody
              this change.
            </p>
            <p className={"section__lead"}>We work with:</p>
            <ul className={"section__lead no-bullet"}>
              <li>— Series A+ Startups</li>
              <li>— Businesses</li>
              <li>— Digital Agencies</li>
            </ul>
            <p>
              <small>* series A+ startups get 20% discount.</small>
            </p>
            <Link to="/form" className={"button"}>
              Start Your Project
            </Link>
          </div>
          <div className="services__item">
            <h4 className={"h2"}>Interface Design</h4>
            <p className={"section__lead"}>
              Having the best team of interface designers has always been our
              strongpoint. This is why we create interface designs to order
              instead of creating apps using client designs.
            </p>
            <Link to="/form" className={"button"}>
              REQUEST DESIGN
            </Link>
          </div>
          <div className="services__item">
            <h4 className={"h2"}>App Audit and consulting</h4>
            <p className={"section__lead"}>
              An audit allows us to identify and analyze weaknesses and get a
              set of measures that can be taken to correct. It includes the
              following types of checks: Feature, Usability, Capability,
              Quality, Security.
            </p>
            <Link to="/form" className={"button"}>
              REQUEST AUDIT
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
