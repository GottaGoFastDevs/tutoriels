# Gestion de projet

## Introduction

Ce fichier sert à présenter notre méthode de gestion de projet.

- Le mot clé **IL FAUT** signifie qu’il est capital de faire ce qu’il est écrit après.
- Le mot clé **IL NE FAUT PAS** signifie qu’il est capital de ne pas faire ce qu’il est écrit après.
- Le mot clé **À ÉVITER** signifie que dans la plupart des cas, c’est une mauvaise idée de faire ce qu’il est écrit après.

## Communication

### Transparence

**IL FAUT** que le client puisse accéder aux issues.

**IL NE FAUT PAS** cacher au client ce qui va mal.

### Canaux de communication

**IL FAUT** utiliser les issues et les discussions GitHub.

**IL NE FAUT PAS** partager des informations seulement sur Discord.

## Méthode agile

La simplicité est la clé. Nous ne devons pas utiliser trop d’outils. En fait, les issues GitHub sont largement suffisantes.
Le but de cette méthode agile est de pouvoir être expliquée très rapidement.

1. Une issue par user story, avec un tag `story`.
2. Si une story a besoin d’être découpées en sous-tâche : une issue par sous-tâche, liée à l’issue de l’user story.
3. Une issue par bogue, avec un tag `bug`.
4. Un projet GitHub.
5. Une colonne pour le backlog, une colonne par sprint.
6. Les sprints durent une semaine.

**À ÉVITER** modifier un sprint une fois qu’il a commencé.

**IL NE FAUT PAS** vendre une deadline immuable au client.

**IL FAUT** mettre en production après chaque sprint.

**IL FAUT** refactoriser après chaque sprint, si possible avec quelqu’un de plus compétent.

## Les issues

**IL NE FAUT PAS** utiliser d’abbrévations dans le nom des issues.

**IL FAUT** donner du contexte dans le nom de l’issue.

**IL FAUT** rédiger la description de l’issue en supposant que celui qui va la lire rejoint le projet pour la première fois.

## Factorisation du code

Quand on remarque une répétition dans un projet, on souhaite factoriser le code pour supprimer cette répétition. Seulement, il faut le faire bien. Parfois, il ne faut pas le faire : la factorisation peut aller contre l’évolutivité du code.

**IL NE FAUT PAS** factoriser pendant le sprint.

**IL FAUT** factoriser entre les sprints, pendant la refactorisation.

**IL NE FAUT PAS** décider de comment factoriser seul.
