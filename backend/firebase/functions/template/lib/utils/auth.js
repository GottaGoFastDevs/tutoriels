const functions = require("firebase-functions")
const { HttpsError } = functions.https

exports.checkThatAnUserIsAuthenticated = function (context) {
  if (!context.auth) {
    throw new HttpsError(
      "permission-denied",
      "You must be authenticated to perform this action."
    )
  }
}
