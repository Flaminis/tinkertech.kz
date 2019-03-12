import React from "react"

const Contacts = () => (
  <section id={"contacts"} className="section has-top-space contacts">
    <div className={"grid-container"}>
      <div className="grid-x">
        <div className="cell large-10 large-offset-2">
          <h3 className="section__title">Contacts</h3>
        </div>
      </div>

      <div className="grid-x">
        <div className="cell large-2 large-offset-2">
          <div className="contacts__item">
            <p>
              <a target="_blank" href="https://www.facebook.com/tinkertechdev/">
                Facebook
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/18734863/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="cell large-3">
          <div className="contacts__item">
            <p>
              <a href="mailto:dos@tinkertech.kz">dos@tinkertech.kz</a>
            </p>
            <p>
              <a href="https://t.me/tinkertech">t.me/tinkertech</a>
            </p>
            <p>
              <a href="tel:+77478877263">+7 (747) 88 77 263</a>
            </p>
          </div>
        </div>
        <div className="cell large-4">
          <div className="contacts__item">
            {/* <strong>Almaty</strong>
            <p>Luganskaya Street, 99A</p> */}
            <strong>Moscow</strong>
            <p>Alyab'yeva Street, 6</p>
            <p>Let’s have 5 o’clock tea</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts
