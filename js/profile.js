const profile = {
  meta: {
    title: 'Portfolio - Léo OMNES | Développeur BTS SIO SLAM',
    description:
      "Portfolio de Léo OMNES, étudiant en BTS SIO SLAM en alternance dans son lycée Robert Schuman, stage de plus d'un mois au même service et baccalauréat général (Maths, Physique-Chimie, option SVT abandonnée) au lycée Sainte Louise.",
    keywords: [
      'Léo Omnes',
      'BTS SIO',
      'SLAM',
      'développeur',
      'alternance lycée',
      'lycée Robert Schuman',
      'stage développement',
      'lycée Sainte Louise'
    ]
  },
  shortName: 'Léo Omnes',
  fullName: 'Léo OMNES',
  tagline:
    'Étudiant BTS SIO SLAM & développeur en alternance dans mon lycée Robert Schuman',
  heroDescription:
    "Étudiant en alternance et ancien stagiaire au lycée Robert Schuman, je conçois des outils numériques pour les équipes pédagogiques, j'automatise les reportings et j'accompagne les utilisateurs de l'établissement.",
  primaryCta: {
    label: 'Voir mes projets',
    url: '#projets'
  },
  secondaryCta: {
    label: 'Me contacter',
    url: '#contact'
  },
  about: {
    title: 'À propos',
    paragraphs: [
      "Alternant en BTS SIO option SLAM directement au lycée Robert Schuman, j'appuie le service numérique dans la modernisation des outils utilisés par les équipes pédagogiques.",
      "Je développe et maintiens des applications internes, mets en place des automatisations pour fiabiliser les reportings et documente chaque procédure pour assurer la continuité des projets.",
      "Après un stage de plus d'un mois au sein du même service, j'ai poursuivi l'aventure en alternance afin de faire évoluer les solutions internes tout en renforçant mes compétences techniques."
    ],
    highlights: [
      { label: 'Localisation', value: 'Paris 20e, France' },
      {
        label: 'Email',
        value: 'leomnes25@gmail.com',
        link: 'mailto:leomnes25@gmail.com'
      },
      { label: 'Anglais', value: 'Niveau courant' },
      {
        label: 'Centres d’intérêt',
        value: 'Programmation, escalade, jeux vidéo'
      },
      {
        label: 'GitHub',
        value: 'github.com/ollo25',
        link: 'https://github.com/ollo25'
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
        title: 'Développeur en alternance (BTS SIO)',
        organization: 'Lycée Robert Schuman — Services numériques',
        description:
          "Développement et maintenance d'outils internes pour le suivi pédagogique, automatisation des indicateurs et accompagnement des utilisateurs."
      },
      {
        period: "2023 (stage de plus d'un mois)",
        title: 'Stagiaire développeur applicatif',
        organization: 'Lycée Robert Schuman — Services numériques',
        description:
          "Stage prolongé au sein du service numérique du lycée avec maintenance du portail interne, automatisation des reportings et formation des équipes administratives."
      },
      {
        period: '2024 — 2026',
        title: 'BTS SIO option SLAM',
        organization: 'Lycée Robert Schuman — Dugny',
        description:
          "Conception d'applications, gestion de bases de données, cybersécurité et gestion de projet en alternance."
      },
      {
        period: '2021 — 2024',
        title: 'Baccalauréat général',
        organization: 'Lycée Sainte Louise — Paris 20e',
        description:
          "Spécialités Mathématiques et Physique-Chimie ; option SVT suivie puis abandonnée en terminale au lycée Sainte Louise (Paris 20e)."
      }
    ]
  },
  projects: {
    title: 'Projets',
    intro:
      'Projets menés au lycée Robert Schuman et durant mon BTS SIO SLAM.',
    filters: [
      { label: 'Projets lycée' },
      { label: 'Développement web' },
      { label: 'Automatisation & data' }
    ],
    items: [
      {
        name: 'Portail de suivi pédagogique',
        description:
          "Application interne du lycée pour centraliser les indicateurs, suivre les ateliers et partager les actions des équipes pédagogiques.",
        technologies: ['Symfony', 'MySQL', 'Bootstrap'],
        links: [{ label: 'Structure du dépôt', url: 'https://github.com/ollo25' }]
      },
      {
        name: 'Automatisation des reportings',
        description:
          "Scripts Python et flux Talend pour générer les bilans mensuels et diffuser automatiquement les reportings aux équipes du lycée.",
        technologies: ['Python', 'Talend Data Integration', 'SQL'],
        links: [{ label: 'Exemples de scripts', url: 'https://github.com/ollo25' }]
      },
      {
        name: 'Portfolio personnel',
        description:
          "Site vitrine responsive présentant mon parcours BTS SIO, mes expériences au lycée et mes compétences techniques.",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        links: [{ label: 'Code source', url: 'https://github.com/ollo25/portfolio' }]
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle:
      "En alternance et après mon stage au lycée Robert Schuman, je suis disponible pour échanger sur vos projets numériques, vos besoins en reporting ou une collaboration.",
    email: 'leomnes25@gmail.com',
    phone: null,
    phoneNote: 'Disponible sur demande',
    socials: [{ label: 'GitHub', url: 'https://github.com/ollo25' }],
    availability:
      "En alternance active — réponse assurée sous 48h ouvrées.",
    cv: {
      label: 'Consulter mon CV',
      url: 'cv/index.html'
    }
  },
  footer: {
    owner: 'Léo OMNES',
    year: new Date().getFullYear()
  }
};

export default profile;
