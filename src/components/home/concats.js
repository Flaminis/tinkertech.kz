import React from "react"

const Contacts = () => (
  <section className="section has-top-space contacts">
    <div className="grid-x">
      <div className="cell">
        <h3 className="section__title">Contacts</h3>
      </div>
    </div>
    <div className="grid-x">
      <div className="cell small-4">
        <strong>Almaty</strong>
        <p>Luganskaya Street, 99A</p>
        <strong>Moscow</strong>
        <p>Alyab'yeva Street, 6</p>
        <p>Let’s have 5 o’clock tea</p>
      </div>
      <div className="cell small-4">
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
      <div className="cell small-2">
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
  </section>
)

export default Contacts
