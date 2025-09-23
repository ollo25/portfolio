const profile = {
  meta: {
    title: 'Portfolio – Reda Lak',
    description:
      'Portfolio professionnel de Reda Lak, développeur full-stack en formation BTS SIO SLAM.',
    keywords: [
      'Reda Lak',
      'Redalak',
      'portfolio',
      'BTS SIO',
      'développeur full-stack',
      'alternance développement'
    ]
  },
  shortName: 'Reda Lak',
  fullName: 'Reda Lak',
  tagline: 'Développeur full-stack & étudiant BTS SIO SLAM',
  heroDescription:
    "Je conçois des applications web robustes et accessibles en combinant un regard produit, une veille technologique permanente et un code maintenable.",
  primaryCta: {
    label: 'Explorer mes projets',
    url: '#projets'
  },
  secondaryCta: {
    label: 'Télécharger mon CV',
    url: '#contact'
  },
  about: {
    title: 'À propos',
    paragraphs: [
      "Je m'appelle Reda Lak et je poursuis un BTS Services Informatiques aux Organisations option SLAM. Je me spécialise dans la conception d'applications web modernes avec une approche orientée qualité et expérience utilisateur.",
      "Curieux de nature, j'aime comprendre le besoin métier pour proposer des solutions utiles et performantes. Je consacre une partie de mon temps libre à expérimenter de nouvelles technologies front et back-end.",
      "Je suis à la recherche d'une alternance pour continuer à progresser au contact d'une équipe tech et contribuer à des projets concrets dès la rentrée 2024."
    ],
    highlights: [
      { label: 'Localisation', value: 'France' },
      {
        label: 'Email',
        value: 'contact@redalak.dev',
        link: 'mailto:contact@redalak.dev'
      },
      {
        label: 'GitHub',
        value: 'github.com/redalak',
        link: 'https://github.com/redalak'
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/redalak',
        link: 'https://www.linkedin.com/in/redalak'
      }
    ]
  },
  skills: {
    title: 'Compétences',
    intro:
      "Un socle polyvalent pour développer des solutions complètes : du maquettage à la mise en production.",
    categories: [
      {
        name: 'Langages',
        items: ['TypeScript', 'JavaScript', 'PHP', 'Java', 'SQL']
      },
      {
        name: 'Frameworks & librairies',
        items: ['Node.js', 'Express', 'React', 'Vue.js', 'Laravel']
      },
      {
        name: 'Base de données',
        items: ['MySQL', 'PostgreSQL', 'MongoDB']
      },
      {
        name: 'Outils & pratiques',
        items: ['Git & GitHub', 'Docker', 'CI/CD GitHub Actions', 'Tests unitaires', 'Scrum']
      }
    ]
  },
  timeline: {
    title: 'Parcours',
    items: [
      {
        period: '2023 — 2025',
        title: 'BTS SIO option SLAM',
        organization: 'Programme en alternance',
        description:
          "Analyse des besoins, développement d'applications web, mise en place de bases de données et bonnes pratiques de sécurité."
      },
      {
        period: '2022 — présent',
        title: 'Projets personnels & freelance',
        organization: 'redalak.dev',
        description:
          "Création d'applications sur-mesure pour des associations et TPE : conception technique, intégration responsive et automatisation de workflows."
      },
      {
        period: '2022',
        title: 'Baccalauréat technologique STI2D',
        organization: 'Spécialité Systèmes d’Information et Numérique',
        description:
          'Découverte des fondamentaux de la programmation, de la gestion de projet et de la cybersécurité.'
      }
    ]
  },
  projects: {
    title: 'Projets',
    intro:
      'Quelques réalisations qui illustrent ma manière de concevoir et livrer des solutions utiles.',
    filters: [
      { label: 'Full-stack' },
      { label: 'Front-end' },
      { label: 'Back-end' }
    ],
    items: [
      {
        name: 'Suivi d’interventions pour ESN',
        description:
          "Plateforme web permettant de suivre les demandes clients, planifier les interventions techniciens et générer des rapports PDF.",
        technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
        links: [
          { label: 'Code', url: 'https://github.com/redalak/suivi-interventions' }
        ]
      },
      {
        name: 'Dashboard BTS SIO',
        description:
          "Tableau de bord React pour centraliser compétences, livrables et suivi d’évaluations avec export JSON/CSV.",
        technologies: ['React', 'Node.js', 'Chart.js'],
        links: [
          { label: 'Code', url: 'https://github.com/redalak/dashboard-bts-sio' }
        ]
      },
      {
        name: 'API de gestion de bibliothèque',
        description:
          "API REST documentée OpenAPI pour gérer catalogues, prêts et retours avec authentification JWT.",
        technologies: ['Spring Boot', 'PostgreSQL', 'Docker'],
        links: [
          { label: 'Code', url: 'https://github.com/redalak/api-bibliotheque' },
          { label: 'Documentation', url: 'https://github.com/redalak/api-bibliotheque/wiki' }
        ]
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle:
      'Un projet, une alternance ou une mission freelance ? Écrivez-moi et échangeons sur vos besoins.',
    email: 'contact@redalak.dev',
    phone: '+33 6 12 34 56 78',
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/redalak' },
      { label: 'GitHub', url: 'https://github.com/redalak' },
      { label: 'Twitter', url: 'https://twitter.com/redalak' }
    ],
    availability:
      'Disponible pour une alternance à partir de septembre 2024. Réponse rapide assurée.',
    cv: {
      label: 'Télécharger mon CV',
      url: 'mailto:contact@redalak.dev?subject=Demande%20de%20CV'
    }
  },
  footer: {
    owner: 'Reda Lak',
    year: new Date().getFullYear()
  }
};

export default profile;
