# Firebase functions
Les fonctions firebase permettent d'exécuter du code en réponse à une simple requête http. Pour en savoir plus consultez la documentation officielle.

## Architecture typique

```
root
|   index.js # Firebase entry point
|___lib
    |___functions
        |   index.js # Export all yout functions
        |   myFunction.js # One of your function
```

## Corps d'une fonction firebase
```js
const functions = require("firebase-functions")

const admin = require("firebase-admin")
const firestore = admin.firestore()
const Joi = require("joi")

const { auth, schema } = require("../utils")

// Schema
const movieSchema = Joi.object({
  name: Joi.string().required(),
})

// Export function
module.exports = functions
  .region("europe-west3")
  .https.onCall(async (data, context) => {

    // Check schema and get data
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
```

## Méthodologie
- Ajouter une fonction firebase
   1. Ajouter votre fichier .js dans `lib/functions`
   2. Exporter ce fichier dans `lib/functions/index.js`
   3. S'inspirer du fichier `lib/functions/movie.js` pour l'architecture typique d'une fonction firebase
## Librairies
- Joi (schéma)