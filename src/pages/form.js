import React, { Component, Fragment } from "react"
import { Formik, Field, FieldArray, Form } from "formik"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { fields as formFields, schema as formSchema } from "../form/DesignForm"

import FormEnd from "../components/formEnd"
import { sendForm } from "../services"

const initialValues = {
  type: "audit",
  budget: "a-b",
  platforms: ["iPhone"],
  additional: ["UsabilityTesting"],
  name: "",
  company: "",
  position: "",
  website: "",
  phone: "",
  email: "",
  message: "",
  attachedFile: null,
}

class FormPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Hire us" />
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell large-10 large-offset-2">
              <h1>Hire us</h1>
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

export default FormPage
