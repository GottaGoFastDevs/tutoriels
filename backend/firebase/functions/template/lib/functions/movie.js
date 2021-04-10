const functions = require("firebase-functions")
const { HttpsError } = functions.https

const admin = require("firebase-admin")
const firestore = admin.firestore()
const Joi = require("joi")

const { auth, schema } = require("../utils")

// Schema
const movieSchema = Joi.object({
  name: Joi.string().required(),
})

// Check
function movieCanBeChecked(data, context) {
    auth.checkThatAnUserIsAuthenticated(context)
    // Write your check before executing the rest of your function
    if (true) {
        throw new HttpsError("invalid-argument", "This movie doesn't exist.")
    }
}

// Export function
module.exports = functions
  .region("europe-west3")
  .https.onCall(async (data, context) => {
    // Initial check
    movieCanBeChecked(data, context)

    // Get value
    const { name } = schema.validateSchemaAndGetValue(movieSchema, data)

    // All firestore ref
    // Collections
    const moviesRef = firestore.collection("movies")
    const movies = []
    (await moviesRef.get()).forEach((movie) => movies.push({
        id: movie.id,
        ...movie.data()
    }))
    // Document
    const movieRef = moviesRef.doc(name)
    const movie = (await movieRef.get()).data()

    // Start your code
    /*
        INSERT YOUR CODE HERE
    */

    // Update firestore with batch, it commits all data if all batches succeed
    const batch = firestore.batch()

    /*
        INSERT YOUR FIRESTORE ACTION HERE
    */

    await batch.commit()
    return {}
  })