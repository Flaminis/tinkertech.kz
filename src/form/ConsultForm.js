import { string, email, object } from "yup"
import { errors } from "../strings"

export const schema = object().shape({
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

export const fields = {}
