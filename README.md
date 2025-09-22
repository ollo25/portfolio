# Portfolio BTS SIO SLAM

Portfolio moderne et modulable pour un étudiant en BTS SIO option SLAM. Le site est 100 % statique (HTML, CSS et JavaScript) et prêt à être déployé sur GitHub Pages.

## Aperçu

- Page unique responsive
- Contenus pilotés par un fichier JavaScript (`js/profile.js`) facile à personnaliser
- Sections : accueil, présentation, compétences, parcours, projets et contact
- Navigation optimisée mobile / bureau

## Prérequis

Aucun outil spécifique n'est requis pour modifier le site. Un simple éditeur de texte suffit.

## Personnalisation rapide

1. Ouvrez le fichier [`js/profile.js`](js/profile.js).
2. Modifiez les informations dans l'objet `profile` :
   - `shortName`, `fullName`, `tagline` et `heroDescription`
   - Sections `about`, `skills`, `timeline`, `projects` et `contact`
   - Liens vers vos réseaux, votre CV, vos dépôts GitHub, etc.
3. (Optionnel) Ajustez les couleurs ou la typographie dans [`css/styles.css`](css/styles.css).
4. Prévisualisez le site en ouvrant `index.html` dans votre navigateur.

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub et poussez ce projet.
2. Dans les paramètres du dépôt, activez **GitHub Pages** en sélectionnant la branche `main` et le dossier `/ (root)`.
3. Attendez quelques minutes : votre portfolio est en ligne à l'URL indiquée par GitHub.

## Structure du projet

```
.
├── index.html        # Structure HTML principale
├── css/
│   └── styles.css    # Styles du site
├── js/
│   ├── app.js        # Génération dynamique des contenus
│   └── profile.js    # Données à personnaliser
└── README.md
```

## Licence

Ce projet est librement réutilisable pour créer votre propre portfolio. N'hésitez pas à l'adapter à vos besoins.
