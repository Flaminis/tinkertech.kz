const sendForm = values => {
  return fetch("//tinker-express.localhost/mailer", {
    method: "POST",
    body: {
      ...values,
    },
  })
}
export { sendForm }
