const functions = require("firebase-functions")
const { HttpsError } = functions.https

exports.validateSchemaAndGetValue = function (schema, data) {
  const validationResult = schema.validate(data)

  if (validationResult.error) {
    throw new HttpsError("invalid-argument", validationResult.error)
  }

  return validationResult.value
}
