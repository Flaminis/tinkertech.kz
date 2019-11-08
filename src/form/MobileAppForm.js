import { string, object } from "yup"
import { errors } from "../strings"

export const schema = object().shape({
  type: string().required(errors.required),
  budget: string().required(errors.required),
  platforms: string().required(errors.required),
  additional: string().required(errors.required),
  name: string().required(errors.required),
  company: string().required(errors.required),
  position: string().required(errors.required),
  website: string().required(errors.required),
  phone: string().required(errors.required),
  email: string()
    .email(errors.email)
    .required(errors.required),
  message: string().required(errors.required),
})

export const fields = {
  type: [
    {
      label: "Complex Development",
      value: "complex",
    },
    {
      label: "Outsource and Outrstaff",
      value: "outsource",
    },
  ],
  budget: [
    {
      label: "A-B",
      value: "a-b",
    },
    {
      label: "B-C",
      value: "b-c",
    },
    {
      label: "C-D",
      value: "c-d",
    },
    {
      label: "D-E",
      value: "d-e",
    },
    {
      label: "E-F",
      value: "e-f",
    },
    {
      label: "F-G",
      value: "f-g",
    },
  ],
  platforms: [
    {
      label: "iPhone",
      value: "iPhone",
    },
    {
      label: "iPad",
      value: "iPad",
    },
    {
      label: "Apple Watch",
      value: "AppleWatch",
    },
    {
      label: "Android",
      value: "Android",
    },
    {
      label: "Android Tablet",
      value: "AndroidTablet",
    },
    {
      label: "Smart Watch",
      value: "SmartWatch",
    },
    {
      label: "Linux",
      value: "Linux",
    },
    {
      label: "Windows",
      value: "Windows",
    },
    {
      label: "Web",
      value: "Web",
    },
  ],
  additional: [
    {
      label: "Usability Testing",
      value: "UsabilityTesting",
    },
    {
      label: "Promotion",
      value: "Promotion",
    },
    {
      label: "Support",
      value: "Support",
    },
  ],
}
