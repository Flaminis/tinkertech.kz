import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Form extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Hire us" />
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell large-10 large-offset-2">
              <h1>Mobile App Development</h1>
              <form>
                <div className="switch-group__row">
                  <h4>Development Type</h4>
                  <div className="switch-group  flex-col-large-down">
                    <div className="switch-group__item">
                      <input type="radio" name="type" value="complex" checked />
                      <label htmlFor="complex">Complex Development</label>
                    </div>
                    <div className="switch-group__item">
                      <input
                        type="radio"
                        name="type"
                        value="out[source|staff]"
                      />
                      <label htmlFor="out[source|staff]">
                        Outsource and Outrstaff
                      </label>
                    </div>
                  </div>
                </div>

                <div className="switch-group__row">
                  <h4>Planned Budget</h4>
                  <div className="switch-group">
                    <div className="switch-group__col">
                      <div className="switch-group__item">
                        <input type="radio" name="budget" value="a-b" checked />
                        <label htmlFor="a-b">A-B</label>
                      </div>
                      <div className="switch-group__item">
                        <input type="radio" name="budget" value="d-e" />
                        <label htmlFor="d-e">D-E</label>
                      </div>
                    </div>
                    <div className="switch-group__col">
                      <div className="switch-group__item">
                        <input type="radio" name="budget" value="b-c" />
                        <label htmlFor="b-c">B-C</label>
                      </div>
                      <div className="switch-group__item">
                        <input type="radio" name="budget" value="e-f" />
                        <label htmlFor="e-f">E-F</label>
                      </div>
                    </div>
                    <div className="switch-group__col">
                      <div className="switch-group__item">
                        <input type="radio" name="budget" value="c-d" />
                        <label htmlFor="c-d">C-D</label>
                      </div>
                      <div className="switch-group__item">
                        <input type="radio" name="budget" value="f-g" />
                        <label htmlFor="f-g">F-G</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="switch-group__row">
                  <h4>Platforms</h4>
                  <div className="switch-group  flex-col-large-down">
                    <div className="switch-group__col">
                      <div className="switch-group__item">
                        <input
                          type="checkbox"
                          name="platform"
                          value="iPhone"
                          checked
                        />
                        <label htmlFor="iPhone">iPhone</label>
                      </div>
                      <div className="switch-group__item">
                        <input
                          type="checkbox"
                          name="platform"
                          value="Android"
                        />
                        <label htmlFor="Android">Android</label>
                      </div>
                      <div className="switch-group__item">
                        <input type="checkbox" name="platform" value="Linux" />
                        <label htmlFor="Linux">Linux</label>
                      </div>
                    </div>
                    <div className="switch-group__col">
                      <div className="switch-group__item">
                        <input type="checkbox" name="platform" value="iPad" />
                        <label htmlFor="iPad">iPad</label>
                      </div>
                      <div className="switch-group__item">
                        <input
                          type="checkbox"
                          name="platform"
                          value="Android Tablet"
                        />
                        <label htmlFor="Android Tablet">Android Tablet</label>
                      </div>
                      <div className="switch-group__item">
                        <input
                          type="checkbox"
                          name="platform"
                          value="Windows"
                        />
                        <label htmlFor="Windows">Windows</label>
                      </div>
                    </div>
                    <div className="switch-group__col">
                      <div className="switch-group__item">
                        <input
                          type="checkbox"
                          name="platform"
                          value="Apple Watch"
                        />
                        <label htmlFor="Apple Watch">Apple Watch</label>
                      </div>
                      <div className="switch-group__item">
                        <input
                          type="checkbox"
                          name="platform"
                          value="Smart Watch"
                        />
                        <label htmlFor="Smart Watch">Smart Watch</label>
                      </div>
                      <div className="switch-group__item">
                        <input type="checkbox" name="platform" value="Web" />
                        <label htmlFor="Web">Web</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="switch-group__row">
                  <h4>Additional Services</h4>
                  <div className="switch-group  flex-col-large-down">
                    <div className="switch-group__item">
                      <input
                        type="checkbox"
                        name="additional"
                        value="Usability Testing"
                        checked
                      />
                      <label htmlFor="Usability Testing">
                        Usability Testing
                      </label>
                    </div>
                    <div className="switch-group__item">
                      <input
                        type="checkbox"
                        name="additional"
                        value="Promotion"
                      />
                      <label htmlFor="Promotion">Promotion</label>
                    </div>
                    <div className="switch-group__item">
                      <input
                        type="checkbox"
                        name="additional"
                        value="Support"
                      />
                      <label htmlFor="Support">Support</label>
                    </div>
                  </div>
                </div>

                <p>
                  <input type="text" name="name" placeholder="Your Name" />
                  <input type="text" name="company" placeholder="Company" />
                  <input type="text" name="position" placeholder="Position" />
                  <input
                    type="text"
                    name="website"
                    placeholder="Company’s Website"
                  />
                  <input type="text" name="phone" placeholder="Phone Number" />
                  <input type="email" name="email" placeholder="Email" />
                </p>

                <p>
                  <textarea
                    name="descr"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Describe your problem or attach file with description"
                  />
                </p>

                <p className="h5">
                  By submitting this application, you agree with our{" "}
                  <a href="#">Personal Data Processing Policy</a>
                </p>
                <div>
                  <button
                    type="submit"
                    className="button hollow expanded large is-angled"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Form
