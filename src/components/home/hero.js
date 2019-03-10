import React from "react"

const HeroSection = () => (
  <section className={"hero"}>
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-8 large-offset-2">
          <h1 className={"hero__title"}>
            We build apps <br /> that users Love
          </h1>
        </div>
        <div className="cell large-7 large-offset-2">
          <p className={"hero__lead"}>
            We are a global digital product development company that designs &
            builds software for the world's best businesses.
          </p>
          <div>
            <a href="#" className={"button"}>
              <strong>Start Your Project</strong>
            </a>
          </div>
          <div>
            <a href="#" className={"button hollow hero__more"}>
              <strong>READ more about us</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
