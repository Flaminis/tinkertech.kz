import React, { Component, Fragment } from "react"
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik"
import FormError from "../components/formError"

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

class MobileAppForm extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Hire us" />
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell large-10 large-offset-2">
              <h1>Interface Design</h1>
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
                    <div className="switch-group__row">
                      <h4>Design Type</h4>
                      <div className="switch-group flex-col-large-down">
                        {formFields.type.map(item => (
                          <div className="switch-group__item" key={item.value}>
                            <Field
                              type="radio"
                              name="type"
                              value={item.value}
                              id={item.value}
                              checked={values.type === item.value}
                            />
                            <label htmlFor={item.value}>{item.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="switch-group__row">
                      <h4>Planned Budget</h4>
                      <div className="switch-group">
                        {formFields.budget.map(item => (
                          <div className="switch-group__item" key={item.value}>
                            <Field
                              type="radio"
                              name="budget"
                              value={item.value}
                              id={item.value}
                              checked={values.budget === item.value}
                            />
                            <label htmlFor={item.value}>{item.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="switch-group__row">
                      <h4>Platforms</h4>
                      <div className="switch-group flex-col-large-down">
                        <FieldArray
                          name="platforms"
                          render={arrayHelpers => (
                            <Fragment>
                              {formFields.platforms.map(item => (
                                <div
                                  className="switch-group__item"
                                  key={item.value}
                                >
                                  <Field
                                    type="checkbox"
                                    name="platforms"
                                    value={item.value}
                                    id={item.value}
                                    checked={values.platforms.includes(
                                      item.value
                                    )}
                                    onChange={e => {
                                      if (e.target.checked) {
                                        arrayHelpers.push(item.value)
                                      } else {
                                        const idx = values.platforms.indexOf(
                                          item.value
                                        )
                                        arrayHelpers.remove(idx)
                                      }
                                    }}
                                  />
                                  <label htmlFor={item.value}>
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </Fragment>
                          )}
                        />
                      </div>
                    </div>

                    <div className="switch-group__row">
                      <h4>Additional Services</h4>
                      <div className="switch-group  flex-col-large-down">
                        <FieldArray
                          name={"additional"}
                          render={arrayHelpers => (
                            <Fragment>
                              {formFields.additional.map(item => (
                                <div
                                  key={item.value}
                                  className="switch-group__item"
                                >
                                  <Field
                                    type="checkbox"
                                    name="additional"
                                    value={item.value}
                                    id={item.value}
                                    checked={values.additional.includes(
                                      item.value
                                    )}
                                    onChange={e => {
                                      if (e.target.checked) {
                                        arrayHelpers.push(item.value)
                                      } else {
                                        const idx = values.additional.indexOf(
                                          item.value
                                        )
                                        arrayHelpers.remove(idx)
                                      }
                                    }}
                                  />
                                  <label htmlFor={item.value}>
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </Fragment>
                          )}
                        />
                      </div>
                    </div>
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
