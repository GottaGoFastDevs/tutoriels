const admin = require("firebase-admin")

// Needed to use firebase admin
const serviceAccount = require("./serviceAccountKey.json")

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  credential: admin.credential.cert(serviceAccount),
}

admin.initializeApp(firebaseConfig)

const firestore = admin.default.firestore()
const moviesRef = firestore.collection("movies")
