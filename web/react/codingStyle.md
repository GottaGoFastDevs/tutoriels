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

#### Component functions
Il y a plusieurs façons d'écrire des composants dans React mais la solution choisi est celle des component functions.
##### Exemple simple
###### Exemple complet
L'objectif est de voir comment on pourrait améliorer la lisibilité du code quand cette dernière n'est pas bien.
```jsx
function MyComponent() {
  // Déclarer une variable dynamique
  const [value, setValue] = useState(0)

  // Déclarer les fonctions qui utilise value
  function incrementValue() {
    setValue(value + 1)
  }

  // Déclarer les fonctions qui handle les événements
  // Toujours utiliser les mots *on" et *handle* pour gérer les événements
  // Le préfixe *handle* sert à être passer à la props *on* d'un composant
  function handleValueClick() {
    incrementeValue()
  }

  return (
    // Balise vide pour composer plusieurs composants sans changer leur style
    <>
      <h1>Vous avez cliqué : {value}<h1/>
      <button onClick={handleValueClick}>Incrémente moi</button>
    </>
  )
}
```
###### Exemple optimisé
L'objectif est de voir l'exemple optimité de l'exemple ci-dessus quand la lisibilité le permet
```jsx
function MyComponent({name, ...props}) {
  const [value, setValue] = useState(0)

  return (
    <>
      <h1>Vous avez cliqué : {value}<h1/>
      <button onClick={() => setValue(value + 1)}>Incrémente moi</button>
    </>
  )
}
```

##### Exemple avec une copie immutable
```jsx
import { useState } from "react"

// Le composant Movie form est juste un boutton qui ajoute le même film à chaque click sur le boutton
function MovieForm({onClick}) {
  // Si la variable n'est pas dynamique, il n'y a pas besoin d'utiliser useState
  const myMovieName = "Pix'art"

  // Alors normalement on rédéfinit les fonctions des événements à chaque fois, mais dès fois on a la flemme
  function handleClick() {
    onClick(myMovieName)
  }

  return (
    <button onClick={handleClick}></button>
  )
}

// La propriéte ...props permet des récupérer toutes les props qui ne sont pas récupérées comme *name*
function MyComponent({name, ...props}) {

  const [movies, setMovies] = useState([])

  function addMovie({name}) {
    // Passer les données de façon immutable (passer une nouvelle référence) pour que React puisse détecter des changements
    // Utiliser le préfixe *new* pour noms de variables des copies
    // La méthode slice permet de faire une copie du tableau
    const newMovies = movies.slice()
    // Travailler avec le nouvel objet 
    newMovies.push({
      name
    })
    // Sauvegarder les changements
    setMovie(newMovies)
  }

  function handleMovieClick(name) {
    addMovie({name})
  }

  return (
    <>
      <h1>{title}<h1/>
      <MovieForm onClick={handleMovieClick}/>
    </>
  )
}

function MyOuterComponent() {
  return (
    <MyComponent title="Louis" isBeautiful={true}>
  )
}
```

##### Exemple avec appel asynchrone
```jsx
function MyOuterComponent() {
  // Déclarer des fonctions asynchrones
  const myAsyncFunction = async () => {
    await myAsyncCall()
  }
  
  return (
    <MyComponent title="Louis" isBeautiful={true}>
  )
}
```

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
En React, il faut réfléchir. Et ça se traduit par une meilleure traduction de qui détient l'état d'un objet. C'est la grande difficulté en React. Quel est le composant qui doit détenir l'état d'un objet.<br>
Dans l'exemple ci-dessous, la page est composé de son corps ainsi que d'un bouton. La bonne pratique est de se demander qui mérite de connaître l'état d'un objet en premier. Ici c'est la page pour de futur 
```jsx
import { useState } from "react"

function IncrementButton({value, onChange}) {
    function handleClick() {
        onChange(value++)
    }

    return (
        <Button onClick={handleClick}>+</Button>
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

### Création d'un formulaire (formik, yup)
Pour faciliter la gestion des erreurs il faut s'aider de 2 librairies ([Formik](), [Yup]()).<br>
Nous allons détailler un exemple de formulaire de connection avec ces 2 librairies.
```jsx
 import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

 export const ValidationSchemaExample = () => (

   <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}

           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}

           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 );
```
Tous les formulaires devront utiliser cette façon de faire. <br>
Si vous avez besoin de créer de nouveaux Fields avec Formik, il faut procéder en 2 étapes.
1. Création du field sans Formik (Il devra gérer les props suivantes *error, helperText, value, onChange*)
```jsx
import { TextField } from "@material-ui/core"

function NewTextField({ InputProps, ...props }) {
  return (
    <TextField
      {...props}
    />
  )
}

export default NewTextField
```
2. Wrapping du field avec Formik
```jsx
import NewTextField from "./NewTextField"
import { useField } from "formik"

function FormikNewTextField({ helperText, ...props }) {
  const [field, { error, touched }] = useField(props)

  const hasError = touched && Boolean(error)

  return (
    <NewTextField
      {...field}
      error={hasError}
      helperText={hasError ? error : helperText}
      {...props}
    />
  )
}

export default FormikNewTextField
```

### Appliquer les règles Eslint/Prettier dans React (Vscode)
1. Installer l'extension *Prettier Now*
2. Mettre l'extension par défaut : `ctrl + shift + p` -> *Format document with* -> *Configure Default formatter* -> *Prettier Now*
3. Installer prettier en tant que formatter par défaut `npm install --save-dev --save-exact prettier`
4. Mettre en place le formattage automatique par sauvegarde `ctrl + shift + p` -> *Preferences : Open settings (JSON)* -> Ajouter le bout de JSON suivant
```json
"editor.codeActionsOnSave": {
    "source.fixAll": true,
},
```
