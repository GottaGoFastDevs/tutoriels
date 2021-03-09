# Flutter And You

Toi aussi, tu peux devenir un monstre sur Flutter en lisant ce document.

## Gestion d’état

## Navigation

### Utiliser le Navigateur 2.0

Il faut utiliser le Navigateur 2.0, qui permet de faire du routage déclaratif.
Autrement dit, au niveau du routage le widget `MaterialApp` ne doit utiliser que le paramètre `home`.
Il faut toujours y mettre un `Navigator` et y définir le paramètre `pages`.

```dart
MaterialApp(
  pages: [
    MaterialPage(
      key: ValueKey('HomePage'),
      child: HomeScreen(),
    ),
  ],
  onPopPage: (route, result) => route.didPop(result),
),
```
