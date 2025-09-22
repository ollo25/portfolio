const profile = {
  meta: {
    title: 'Portfolio - Étudiant BTS SIO SLAM',
    description:
      'Portfolio modulable pour un étudiant en BTS SIO SLAM : compétences, projets, parcours et contact.',
    keywords: [
      'portfolio',
      'BTS SIO',
      'SLAM',
      'développeur',
      'alternance',
      'informatique'
    ]
  },
  shortName: 'Votre Nom',
  fullName: 'Votre Nom Complet',
  tagline: 'Étudiant BTS SIO SLAM',
  heroDescription:
    "Étudiant passionné par le développement d'applications web et mobiles, je conçois des solutions fiables en adoptant de bonnes pratiques de code et une méthodologie rigoureuse.",
  primaryCta: {
    label: 'Voir mes projets',
    url: '#projets'
  },
  secondaryCta: {
    label: 'Télécharger mon CV',
    url: '#contact'
  },
  about: {
    title: 'À propos',
    paragraphs: [
      "Actuellement en deuxième année de BTS Services Informatiques aux Organisations option SLAM, je me spécialise dans la conception et le développement de solutions applicatives.",
      "Curieux et autonome, j'aime relever des défis techniques, apprendre de nouvelles technologies et collaborer pour livrer des expériences utilisateurs de qualité.",
      "Je recherche une alternance ou un stage pour mettre en pratique mes compétences et participer à des projets concrets." 
    ],
    highlights: [
      { label: 'Localisation', value: 'Votre ville, France' },
      { label: 'Âge', value: '20 ans' },
      { label: 'Email', value: 'prenom.nom@email.com', link: 'mailto:prenom.nom@email.com' },
      { label: 'Téléphone', value: '+33 6 00 00 00 00', link: 'tel:+33600000000' }
    ]
  },
  skills: {
    title: 'Compétences',
    intro:
      "Compétences techniques et méthodologiques acquises lors de ma formation et de mes projets personnels.",
    categories: [
      {
        name: 'Langages',
        items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'SQL']
      },
      {
        name: 'Frameworks',
        items: ['Node.js', 'Express', 'Laravel', 'React', 'Vue.js']
      },
      {
        name: 'Base de données',
        items: ['MySQL', 'PostgreSQL', 'MongoDB']
      },
      {
        name: 'Outils & Méthodes',
        items: ['Git / GitHub', 'Docker', 'Méthodes agiles', 'Tests unitaires']
      }
    ]
  },
  timeline: {
    title: 'Parcours',
    items: [
      {
        period: '2023 — 2025',
        title: 'BTS SIO option SLAM',
        organization: 'Lycée / CFA',
        description:
          'Analyse des besoins, développement d’applications, gestion de base de données et sécurisation des systèmes.'
      },
      {
        period: 'Été 2024',
        title: 'Stage Développeur web',
        organization: 'Entreprise d’accueil',
        description:
          "Participation au développement d'un portail client : intégration front-end, création d'API REST et rédaction de documentation."
      },
      {
        period: '2022 — 2023',
        title: 'Baccalauréat STI2D',
        organization: 'Lycée général et technologique',
        description: 'Spécialité Systèmes d’Information et Numérique.'
      }
    ]
  },
  projects: {
    title: 'Projets',
    intro: 'Sélection de projets académiques et personnels illustrant mes compétences.',
    filters: [
      { label: 'Développement web' },
      { label: 'Applications métier' },
      { label: 'Full-stack' }
    ],
    items: [
      {
        name: 'Plateforme de gestion d’interventions',
        description:
          "Application web full-stack permettant de suivre les tickets et interventions pour une ESN locale, avec authentification et rôles.",
        technologies: ['Laravel', 'MySQL', 'TailwindCSS'],
        links: [
          { label: 'Code', url: 'https://github.com/votre-profil/gestion-interventions' },
          { label: 'Documentation', url: 'https://votre-site/gestion-interventions' }
        ]
      },
      {
        name: 'Dashboard de suivi BTS SIO',
        description:
          "Tableau de bord pour visualiser ses compétences, projets PPE et documentation, avec import/export des données en JSON.",
        technologies: ['React', 'Node.js', 'Chart.js'],
        links: [{ label: 'Code', url: 'https://github.com/votre-profil/dashboard-bts-sio' }]
      },
      {
        name: 'API REST de gestion de bibliothèque',
        description:
          "API RESTful permettant de gérer les emprunts et les catalogues, livrée avec une suite de tests Postman et la documentation OpenAPI.",
        technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
        links: [
          { label: 'Code', url: 'https://github.com/votre-profil/api-bibliotheque' },
          { label: 'Rapport', url: 'https://votre-site/api-bibliotheque' }
        ]
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle:
      'Disponible pour un stage ou une alternance en développement applicatif. Discutons de vos besoins !',
    email: 'prenom.nom@email.com',
    phone: '+33 6 00 00 00 00',
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/votre-profil' },
      { label: 'GitHub', url: 'https://github.com/votre-profil' }
    ],
    availability:
      'Ouvert aux opportunités en alternance dès septembre 2024. Réponse sous 48h.',
    cv: {
      label: 'Télécharger mon CV',
      url: 'documents/CV.pdf'
    }
  },
  footer: {
    owner: 'Votre Nom',
    year: new Date().getFullYear()
  }
};

export default profile;
