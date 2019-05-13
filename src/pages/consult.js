import React, { Component, Fragment } from "react"
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik"
import FormError from "../components/formError"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { schema as formSchema } from "../form/MobileAppForm"

import FormEnd from "../components/formEnd"
import { sendForm } from "../services"

const initialValues = {
  name: "",
  company: "",
  position: "",
  website: "",
  phone: "",
  email: "",
  message: "",
  attachedFile: null,
}

class MobileAppForm extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Hire us" />
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell large-10 large-offset-2">
              <h1>Audit &amp; consultation</h1>
              <p>
                If you already have a mobile application, we are ready to
                conduct its audit. An audit allows you to identify weaknesses,
                analyze them and get a set of measures that can be taken to
                correct.
              </p>
              <p>
                If you do not have a mobile application, we are ready to tell
                you how mobile solutions can be useful specifically for your
                business.
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={(values, actions) => {
                  sendForm(values).then(
                    success => {
                      actions.setSubmitting(false)
                    },
                    error => {
                      actions.setSubmitting(false)
                      actions.setErrors(console.log(error))
                      actions.setStatus({
                        msg: "Set some arbitrary status or data",
                      })
                    }
                  )
                }}
                render={({
                  errors,
                  status,
                  touched,
                  isSubmitting,
                  initialValues,
                  setFieldValue,
                  values,
                }) => (
                  <Form>
                    <FormEnd
                      setFieldValue={setFieldValue}
                      errors={errors}
                      touched={touched}
                      isSubmitting={isSubmitting}
                      status={status}
                    />
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MobileAppForm
