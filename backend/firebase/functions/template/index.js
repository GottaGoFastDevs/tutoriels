const admin = require("firebase-admin")

admin.initializeApp()

const firebaseFunctions = require("./lib/functions")
module.exports = {
  ...firebaseFunctions,
}