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
// layouts/Default.js

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


### Views
Les views sont des composants qui seront utilisés dans le fichier App.js pour décrire la navigation de l'application grâce *react-router-dom*.<br>
Il faut essayer de mettre le plus de petits composants dans le même fichier sans à avoir à créer des composants annexes. Cependant, si le composant est très grand en terme de logique ou de ligne alors il ne faut pas hésiter à créer un composant annexe. <br>
```jsx
import BigComponent from "../components/view1/bigComponent"
function ShortComponent1() {
    return (
        <div> I am the component 1</div>
    )
}
function View1() {
    return (
        <div>Je suis la vue View1</div>
        <ShortComponent1 />
        <BigComponent />
    )
}
export default View1
```

#### Attention
L'arborescence de votre dossier *views* doit respecter l'architecture de vos routes de navigation.

Une navigation du style
```
'\'
'\posts' 
'\posts\:postId'

```
Donnera une arborescence comme ça
```
views
|   index.js
|___posts
    |   index.js
    |   _postId.js
```
[Cliquez ici pour plus de détails](https://fr.nuxtjs.org/docs/2.x/features/file-system-routing)


### Components
Il faut ranger les composants par catégories (par vue, fields, button...).

## Autres
### Import des composants de Material UI
```jsx
import {
  Grid,
  Button,
  TextField,
  Rating,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
  FormGroup,
  FormControlLabel,
  IconButton,
} from "@material-ui/core"
```

### Import du makeStyle de MaterialUI
```jsx
import { makeStyles } from "@material-ui/core/styles"
```

### Manipulation de l'état dans React
```jsx
import { useState } from "react"

function IncrementButton({value, onChange}) {
    function handleChange(newValue) {
        onChange(newValue)
    }
    function incrementValue() {
        handleChange(value++)
    }

    return (
        <Button onClick={incrementValue}>+</Button>
    )
}

function MyPage() {
    // Always provide a value
    const [counter, setCounter] = useState(0)
    return (
        <IncrementButton value={counter} onChange={setCounter}>
    )
}
```
