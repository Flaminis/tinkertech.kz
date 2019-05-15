const sendForm = values => {
  const path =
    process.env.NODE_ENV === "production"
      ? "/mail-handler"
      : "//tinker-mailer.localhost/mail-handler"
  return fetch(path, {
    method: "POST",
    body: JSON.stringify(values),
  })
}
export { sendForm }
