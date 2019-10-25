import React from "react"

const TrustedBy = () => (
  <section id="trustedBy" className="section has-y-space trusted-by">
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-10 large-offset-2">
          <h3 className="section__title">Trusted By</h3>
          <div className={"logos"}>
            <div className={"logos__item"}>
              <img src={"/logos/image2.png"} alt="delimobil logo" />
            </div>
            <div className={"logos__item"}>
              <img src={"/logos/image3.png"} alt="anytime logo" />
            </div>
            <div className={"logos__item"}>
              <img src={"/logos/image5.png"} alt="AIFC logo" />
            </div>
            <div className={"logos__item"}>
              <img src={"/logos/image6.png"} alt="anytime prime logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrustedBy
