# Portfolio – Reda Lak

Portfolio modulable présentant le parcours et les projets de **Reda Lak**, développeur full-stack en formation BTS SIO option SLAM. L'application est 100&nbsp;% statique (HTML, CSS et JavaScript) et prête à être déployée sur GitHub Pages.

## Aperçu

- Page unique responsive
- Contenus pilotés par un fichier JavaScript (`js/profile.js`) facile à adapter
- Sections : accueil, à propos, compétences, parcours, projets et contact
- Navigation optimisée mobile / bureau avec menu burger

## Prérequis

Aucun outil spécifique n'est requis pour modifier le site. Un simple éditeur de texte suffit.

## Personnalisation rapide

1. Ouvrez le fichier [`js/profile.js`](js/profile.js).
2. Mettez à jour les informations dans l'objet `profile` (textes, liens, projets, réseaux sociaux…).
3. Ajustez les textes présents dans [`index.html`](index.html) si vous souhaitez modifier le contenu affiché sans JavaScript.
4. (Optionnel) Personnalisez les couleurs ou la typographie dans [`css/styles.css`](css/styles.css).
5. Prévisualisez le site en ouvrant `index.html` dans votre navigateur.

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
