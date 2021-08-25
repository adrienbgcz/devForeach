# form

Un client vous demande de construire une pallication vue qui permet de créer des formulaires dynamiques

## fonctionnalités

Cette application doit : 
- aller chercher les données correspondant à un formulaire depuis une api (bdd.json)
- afficher le contenu de ce formulaire avec les bons inputs pour les bonnes questions
- permettre l'envoi du contenu du formulaire vers une adresse quelconque 
- tant que l'application n'a pas récupéré les données, afficher un loader

## Project setup
```
npm install
```

### bdd.json
```
npx json-server --watch bdd.json
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


