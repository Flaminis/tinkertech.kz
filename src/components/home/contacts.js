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
              <a href="#">Instagram</a>
            </p>
            <p>
              <a href="#">Facebook</a>
            </p>
            <p>
              <a href="#">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="cell large-3">
          <div className="contacts__item">
            <p>
              <a href="mailto:hello@tinkertech.kz">hello@tinkertech.kz</a>
            </p>
            <p>
              <a href="https://t.me/tinkertech">t.me/tinkertech</a>
            </p>
            <p>
              <a href="tel:+7708731 65 89">+7 (708) 731 65 89</a>
            </p>
          </div>
        </div>
        <div className="cell large-4">
          <div className="contacts__item">
            <strong>Almaty</strong>
            <p>Luganskaya Street, 99A</p>
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
