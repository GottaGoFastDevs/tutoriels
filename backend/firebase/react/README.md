# React avec firebase

## [Initialiser un projet](https://firebase.google.com/docs/web/setup?hl=fr)

## Utilisation des hooks
Les hooks vont nous permettre de faire toutes les requêtes avec firebase. Cette manière de faire nous permet d'être relié en temps réel à firebase.

On les écrit dans le dossier `hooks` prévu à cet effet. Pour être le plus propre possible, il faut respecter l'architecture des hooks mise en place dans le [dossier d'exemple](temmplates).

Exemple d'utilisation
```jsx
import { useMovies } from "hooks"
function Movies() {
    const movies = useMovies()

    return (
        {
            movies.map((movie) => (
                <li key={movie.id}>{movie.name}<li/>
            ))
        }
    )
}
```