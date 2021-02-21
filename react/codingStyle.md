# Le coding style de React
Cette page a pour but d'exposer tous les automatismes à prendre lors du developpement d'une application en React. Ce sont des règles qui sont ajoutés en plus du framework même pour coder mieux en équipe et faciliter le pair reviewing.

## L'architecture des fichiers
La racine de votre projet React doit ou peut contenir les fichiers/dossiers suivants :

### Index.js
Ce fichier sert à initialiser le projet React et d'y importer les dépendances globales(firebase...) ainsi que le corps de votre application.
```jsx
// React
import React from "react"
import ReactDOM from "react-dom"

// Dépendances générales
import { FirebaseAppProvider } from "reactfire"
import firebaseConfig from "./firebaseConfig"

// Corps de l'application
import App from "./App"

ReactDOM.unstable_createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
)

```

### App.js
Ce fichier va servir à détailler le corps de votre application et ainsi que le routage de votre application grâce à *react-router-dom*. Les layouts utilisés viendront du dossier *layouts* et les pages viendront du dossier *views*.

```jsx
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import DefaultLayout from "./layouts/default"
import View1 from "./views/view1"
import View2 from "./views/view2"
function App() {
    return (
        <Router>
            <DefaultLayout>
                <Route exact path='/1' component={View1} />
                <Route exact path='/2' component={View2} />
            </DefaultLayout>
        </Router>
    )
}

export default App
```

### Layouts
Les layouts sont des composants qui englobe d'autres composants d'un point de vue visuel. Généralement on y retrouve des fichiers regroupants des barres de navigation et pied de page.

```jsx
function Default() {
    return (
        <>
            <AppBar />
            <Container component="main" maxWidth="md">
                <div>{children}</div>
            </Container>
        <>
    )
}

export default Default
```
Dans cet exemple, tous les composants qui seront mis à l'intérieur de ce layout auront le composant AppBar au dessus d'eux.


