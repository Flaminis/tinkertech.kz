import React from "react"
import { Link } from "react-scroll"
import Animation from "../animation"

const HeroSection = () => (
  <section className={"hero"}>
    <Animation />
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
            <Link
              smooth
              activeClass={"is-current"}
              hashSpy
              spy
              to="services"
              className={"button"}
            >
              <strong>Start Your Project</strong>
            </Link>
          </div>
          <div>
            <a
              href="https://forbes.kz/made_in_kz/kak_molodyie_programmistyi_brosayut_vyizov_servisnikam/"
              target="_blank"
              className={"button hollow hero__more"}
              rel="noopener noreferrer"
            >
              <strong>READ more about us</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
