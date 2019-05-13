import React, { Component } from "react"
import { Field, ErrorMessage } from "formik"
import FormError from "../components/formError"

class FormEnd extends Component {
  render() {
    const { setFieldValue, errors, touched, isSubmitting, status } = this.props
    return (
      <div>
        <br />
        <br />

        <div>
          <Field
            name="message"
            component="textarea"
            rows="4"
            placeholder="Describe your problem or attach file with description"
          />
        </div>
        <label htmlFor="attachFile" className="button hollow square">
          <span className="h4">Attach File</span>
        </label>
        <input
          type="file"
          name="attachedFile"
          id="attachFile"
          className="show-for-sr"
          onChange={event => {
            setFieldValue("file", event.currentTarget.files[0])
          }}
        />

        <br />
        <br />
        <div>
          <Field
            type="text"
            name="name"
            placeholder="Your Name"
            // className={errors.name && touched.name && "is-invalid-input"}
          />
          <ErrorMessage name="name" component={FormError} />
          <Field type="text" name="company" placeholder="Company" />
          <Field type="text" name="position" placeholder="Position" />
          <Field type="text" name="website" placeholder="Company’s Website" />
          <Field type="text" name="phone" placeholder="Phone Number" />
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <br />
        <br />
        <p className="h5">
          By submitting this application, you agree with our{" "}
          <a href="#">Personal Data Processing Policy</a>
        </p>
        <br />
        <br />
        {status && status.msg && <div>{status.msg}</div>}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="button hollow expanded large is-angled"
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default FormEnd
