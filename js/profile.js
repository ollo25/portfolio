const profile = {
  meta: {
    title: 'Portfolio - Léo OMNES | Développeur BTS SIO SLAM',
    description:
      "Portfolio de Léo OMNES, étudiant en BTS SIO SLAM et assistant de suivi projets informatiques : compétences, réalisations et parcours.",
    keywords: [
      'Léo Omnes',
      'BTS SIO',
      'SLAM',
      'développeur',
      'alternance',
      'SFR Business',
      'portfolio développeur'
    ]
  },
  shortName: 'Léo Omnes',
  fullName: 'Léo OMNES',
  tagline: 'Étudiant BTS SIO SLAM & assistant projets informatiques',
  heroDescription:
    "Étudiant en alternance chez SFR Business, je développe des solutions fiables en mettant l'accent sur l'automatisation, le suivi d'indicateurs et l'expérience utilisateur.",
  primaryCta: {
    label: 'Voir mes projets',
    url: '#projets'
  },
  secondaryCta: {
    label: 'Me contacter',
    url: 'mailto:leoomnes25@gmail.com'
  },
  about: {
    title: 'À propos',
    paragraphs: [
      "Actuellement en deuxième année de BTS Services Informatiques aux Organisations option SLAM au lycée Robert Schuman, j'alterne au sein de SFR Business sur des missions de suivi et d'optimisation des projets informatiques.",
      "Je conçois des tableaux de bord, j'automatise l'envoi de rapports et j'assure un support opérationnel en adoptant des pratiques de développement rigoureuses et documentées.",
      "Passionné par la programmation, l'escalade et les jeux vidéo, je reste en veille sur les nouvelles technologies pour proposer des expériences numériques utiles et engageantes."
    ],
    highlights: [
      { label: 'Localisation', value: 'Paris 20e, France' },
      {
        label: 'Email',
        value: 'leoomnes25@gmail.com',
        link: 'mailto:leoomnes25@gmail.com'
      },
      { label: 'Anglais', value: 'Niveau courant' },
      {
        label: 'Centres d’intérêt',
        value: 'Programmation, escalade, jeux vidéo'
      },
      {
        label: 'GitHub',
        value: 'github.com/oiie25',
        link: 'https://github.com/oiie25'
      }
    ]
  },
  skills: {
    title: 'Compétences',
    intro:
      "Compétences techniques et métiers développées en alternance et au cours de mes projets académiques.",
    categories: [
      {
        name: 'Langages',
        items: ['PHP', 'Java', 'HTML / CSS', 'JavaScript', 'Python', 'VB.NET', 'C#', 'SQL']
      },
      {
        name: 'Frameworks & bibliothèques',
        items: ['Symfony', 'React', 'Bootstrap']
      },
      {
        name: 'Bases de données & ETL',
        items: ['MySQL', 'Talend Data Integration']
      },
      {
        name: 'Outils & environnements',
        items: ['Git & GitHub', 'Visual Studio', 'Visual Studio Code']
      },
      {
        name: 'Gestion & qualité',
        items: [
          'Supervision d’indicateurs',
          'Tableaux de bord',
          'Documentation technique',
          'Support utilisateur'
        ]
      }
    ]
  },
  timeline: {
    title: 'Parcours',
    items: [
      {
        period: '2024 — Aujourd’hui',
        title: 'Assistant de suivi projets informatiques (alternance)',
        organization: 'SFR Business',
        description:
          "Supervision quotidienne des indicateurs de production, automatisation de l'envoi des rapports, administration de supports et coordination avec l'équipe data pour les tableaux de bord."
      },
      {
        period: '2023',
        title: 'Développeur web (stage)',
        organization: 'GIC Informatique',
        description:
          "Maintenance d'applications métier, correction de bugs, conception d'interfaces de navigation, déploiement d'une solution d'accès à distance et support technique de niveau 1."
      },
      {
        period: '2024 — 2026',
        title: 'BTS SIO option SLAM',
        organization: 'Lycée Robert Schuman — Dugny',
        description:
          "Conception d'applications, gestion de bases de données, cybersécurité et gestion de projet en alternance."
      },
      {
        period: '2022 — 2024',
        title: 'Baccalauréat STI2D',
        organization: 'Lycée Montaleau',
        description:
          'Spécialités Mathématiques, Numérique et Sciences de l’Ingénieur — mention bien.'
      }
    ]
  },
  projects: {
    title: 'Projets',
    intro: 'Sélection de projets académiques et personnels illustrant mon approche terrain.',
    filters: [
      { label: 'Alternance' },
      { label: 'Développement web' },
      { label: 'Data & reporting' }
    ],
    items: [
      {
        name: 'Application de concours national',
        description:
          "Plateforme responsive pour gérer les inscriptions et votes d'un concours national avec synchronisation temps réel et tableaux de bord dédiés au comité d'organisation.",
        technologies: ['Symfony', 'Bootstrap', 'JavaScript'],
        links: [{ label: 'Aperçu GitHub', url: 'https://github.com/oiie25' }]
      },
      {
        name: 'Gestion de base de données MySQL',
        description:
          "Modélisation, création de scripts SQL (requêtes, triggers) et génération de rapports analytiques pour piloter une base de données métier.",
        technologies: ['MySQL', 'SQL', 'Talend'],
        links: [{ label: 'Documentation', url: 'https://github.com/oiie25' }]
      },
      {
        name: 'Portfolio personnel',
        description:
          "Site vitrine développé en HTML, CSS et JavaScript avec animations légères et formulaire de contact pour valoriser mon parcours.",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        links: [{ label: 'Code source', url: 'https://github.com/oiie25/portfolio' }]
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle:
      "En alternance chez SFR Business, je reste disponible pour échanger sur vos projets et opportunités de collaboration.",
    email: 'leoomnes25@gmail.com',
    phone: null,
    phoneNote: 'Disponible sur demande',
    socials: [{ label: 'GitHub', url: 'https://github.com/oiie25' }],
    availability:
      "En alternance active — réponse assurée sous 48h ouvrées.",
    cv: {
      label: 'Demander mon CV',
      url: 'mailto:leoomnes25@gmail.com?subject=Demande%20de%20CV'
    }
  },
  footer: {
    owner: 'Léo OMNES',
    year: new Date().getFullYear()
  }
};

export default profile;
