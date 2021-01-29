# tutoriels

## Objectif : Réaliser des applications grâce à un framework (React ou Vue)

### HTML
Le HTML nous servira à construire le squelette de notre application.
A retenir :
- La balise <div> pour les blocs
- La balise <span> pour le texte

Pour approfondir : 
- https://developer.mozilla.org/en-US/docs/Web/HTML

### CSS
Le CSS nous servira à personnaliser notre squelette html.
A retenir :
- Tout est personnalisable comme on le veut, l'important est de savoir googler (background color in css)
- Le système de flexbox qui permet de réaliser tout ce qui est position - (https://flexboxfroggy.com/#fr)
- Essayer de respecter la charte material design - (https://material.io/components)
- Comprendre comment réaliser un design responsive en respectant le principe des 12 colonnes - (https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins)

Pour approfondir :
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics

### JS
Le javascript va nous permettre de donner vie à notre squelette.
A retenir :
- Les méthodes des arrays (map, reduce, forEach, filter)
- La déstructuration pour éviter de se casser le cul avec la position des arguments (a(b, c) vs a({b, c}))
- Comprendre pourquoi var a = 1; {a} est équivalent à {a: a} (Je sais plus comment ça s'appelle)

Pour approfondir : 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript (Ne pas perdre du temps dans la catégorie Built-in objects, juste regarder Array, JSON, map)

#### Exercice intermédiaire
Réaliser une page web statique (index.html) qui devra lire un fichier json (posts.json). 
Le fichier posts.json sera une liste de post avec les attributs (title, content, createdAt, author).
La page web devra faire une liste de ces posts sous forme de card de façon responsive. 
C'est à dire qu'en petit écran (xs) les cards seront afficher en ligne et devront faire 12 colonnes, en sm 4, et en md 3.
Ajouter un système de favoris sur les cards (juste visuel)

Ressources :
- Breakpoints : https://material-ui.com/customization/breakpoints/
- Comment utiliser les breakpoints en css : https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp
- Utiliser des données JSON : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON
- Faire une card en CSS : https://www.w3schools.com/howto/howto_css_cards.asp | Rechercher sur internet
