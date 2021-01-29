Ce dépôt a pour but de vous faire sentir capable de réaliser une appli même si vous ne comprenez pas tous les principes qui sont autour (ça viendra avec le temps).<br />
Si vous voulez quand même savoir où vous mettez les pieds, consultez les liens suivant :
- [Web Architecture 101](https://engineering.videoblocks.com/web-architecture-101-a3224e126947)
- [The System Design Primer](https://github.com/donnemartin/system-design-primer)

## Objectif : Réaliser des applications grâce à un framework (React ou Vue)

### HTML
Le HTML nous servira à construire le squelette de notre application.<br />
A retenir :
- [la base](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- La balise `<div>` pour les blocs
- La balise `<span>` pour le texte

Pour approfondir : 
- https://developer.mozilla.org/en-US/docs/Web/HTML

Exemples :
- [html sandbox](https://codesandbox.io/s/ywx8834xrj)

### CSS
Le CSS nous servira à personnaliser notre squelette html.<br />
A retenir :
- Tout est personnalisable comme on le veut, l'important est de savoir googler (background color in css)
- [Le système de flexbox qui permet de réaliser tout ce qui est position](https://flexboxfroggy.com/#fr)
- [Charte material design](https://material.io/components)
- [Le principe des 12 colonnes pour un design responsive](https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins)

Pour approfondir :
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics
- https://www.w3.org/Style/Examples/011/firstcss.fr.html

Exemples :
- [w3schools.com - Example Website](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_example_website)
- [Asperion HTML5](https://codepen.io/alexdevero/pen/GCirD)

### JS
Le javascript va nous permettre de donner vie à notre squelette.<br />
A retenir :
- Les méthodes des arrays (map, reduce, forEach, filter)
- La déstructuration pour éviter de se casser le cul avec la position des arguments (a(b, c) vs a({b, c}))
- shorthand properties - var a = 1; {a} <=> {a: a}
- Syntaxe de décomposition - ({...tonObjet})
- [Javascript guidelines from MDN](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript)
- [Coding style airbnb](https://github.com/airbnb/javascript#types) - Réglé automatiquement avec un linter et un formatter (Eslint + Prettier)

Pour approfondir : 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript (Ne pas perdre du temps dans la catégorie Built-in objects, juste regarder Array, JSON, map)

Examples :
- [w3schools.com - JavaScript Examples](https://www.w3schools.com/js/js_examples.asp)


### Exercice intermédiaire n°1
Réaliser une page web statique (index.html) qui devra lire un fichier json (posts.json).<br /> 
Le fichier posts.json sera une liste de post avec les attributs (title, content, createdAt, author).<br />
La page web devra faire une liste de ces posts sous forme de `card` (https://material.io/components/cards) de façon responsive. 
C'est à dire qu'en petit écran (xs) les cards seront afficher en ligne et devront faire 12 colonnes, en sm 4, et en md 3.<br />
Ajouter un système de favoris sur les cards (juste visuel).

Ressources :
- Breakpoints : https://material-ui.com/customization/breakpoints/
- Comment utiliser les breakpoints en css : https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp
- Utiliser des données JSON : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON
- Faire une card en CSS : https://www.w3schools.com/howto/howto_css_cards.asp | Rechercher sur internet

### VueJs
Coming soon...
### React
Coming soon...