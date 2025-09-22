import profile from './profile.js';

const setText = (field, value) => {
  if (!value) return;
  document.querySelectorAll(`[data-field="${field}"]`).forEach((el) => {
    el.textContent = value;
  });
};

const setLink = (field, data) => {
  if (!data) return;
  const { label, url } =
    typeof data === 'string' ? { label: data, url: data } : data;

  document.querySelectorAll(`[data-link="${field}"]`).forEach((el) => {
    if (label) {
      el.textContent = label;
    }
    if (url) {
      el.setAttribute('href', url);
    }
  });
};

const renderAbout = (about) => {
  if (!about) return;
  const paragraphContainer = document.querySelector(
    '[data-section="about.paragraphs"]'
  );
  if (paragraphContainer) {
    paragraphContainer.innerHTML = '';
    about.paragraphs?.forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      paragraphContainer.appendChild(p);
    });
  }

  const highlightsList = document.querySelector(
    '[data-section="about.highlights"]'
  );
  if (highlightsList) {
    highlightsList.innerHTML = '';
    about.highlights?.forEach((highlight) => {
      const li = document.createElement('li');
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = highlight.label;
      const valueElement = highlight.link
        ? Object.assign(document.createElement('a'), {
            href: highlight.link,
            className: 'value'
          })
        : Object.assign(document.createElement('span'), {
            className: 'value'
          });
      valueElement.textContent = highlight.value;
      li.append(label, valueElement);
      highlightsList.appendChild(li);
    });
  }
};

const renderSkills = (skills) => {
  if (!skills) return;
  const grid = document.querySelector('[data-section="skills.categories"]');
  if (!grid) return;
  grid.innerHTML = '';
  skills.categories?.forEach((category) => {
    const card = document.createElement('article');
    card.className = 'skill-card';

    const title = document.createElement('h3');
    title.className = 'skill-title';
    title.textContent = category.name;

    const list = document.createElement('ul');
    category.items?.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });

    card.append(title, list);
    grid.appendChild(card);
  });
};

const renderTimeline = (timeline) => {
  const container = document.querySelector('[data-section="timeline.items"]');
  if (!container || !timeline) return;
  container.innerHTML = '';

  timeline.items?.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'timeline-item';

    const marker = document.createElement('div');
    marker.className = 'timeline-marker';
    marker.setAttribute('aria-hidden', 'true');

    const content = document.createElement('div');
    content.className = 'timeline-content';

    const header = document.createElement('header');

    const period = document.createElement('p');
    period.className = 'timeline-period';
    period.textContent = item.period;

    const title = document.createElement('h3');
    title.className = 'timeline-title';
    title.textContent = item.title;

    const organization = document.createElement('p');
    organization.className = 'timeline-organization';
    organization.textContent = item.organization;

    const description = document.createElement('p');
    description.textContent = item.description;

    header.append(period, title, organization);
    content.append(header, description);
    article.append(marker, content);
    container.appendChild(article);
  });
};

const renderProjects = (projects) => {
  const grid = document.querySelector('[data-section="projects.items"]');
  if (!grid || !projects) return;
  grid.innerHTML = '';

  projects.items?.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    if (project.name) {
      const title = document.createElement('h3');
      title.textContent = project.name;
      card.appendChild(title);
    }

    if (project.description) {
      const description = document.createElement('p');
      description.textContent = project.description;
      card.appendChild(description);
    }

    if (project.technologies?.length) {
      const tech = document.createElement('p');
      tech.className = 'project-tech';
      tech.textContent = project.technologies.join(' · ');
      card.appendChild(tech);
    }

    if (project.links?.length) {
      const linksContainer = document.createElement('div');
      linksContainer.className = 'project-links';

      project.links.forEach((link) => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.label;
        if (link.url?.startsWith('http')) {
          anchor.target = '_blank';
          anchor.rel = 'noopener noreferrer';
        }
        linksContainer.appendChild(anchor);
      });

      card.appendChild(linksContainer);
    }

    grid.appendChild(card);
  });
};

const renderProjectFilters = (filters) => {
  const container = document.querySelector('[data-section="projects.filters"]');
  if (!container || !filters) return;
  container.innerHTML = '';

  filters.forEach((filter) => {
    const chip = document.createElement('span');
    chip.className = 'filter-chip';
    chip.textContent = filter.label;
    container.appendChild(chip);
  });
};

const renderContact = (contact) => {
  if (!contact) return;

  setLink('contact.email', {
    label: contact.email,
    url: `mailto:${contact.email}`
  });

  setLink('contact.phone', {
    label: contact.phone,
    url: `tel:${contact.phone.replace(/\s+/g, '')}`
  });

  setLink('contact.cv', contact.cv);
  setText('contact.availability', contact.availability);
  setText('contact.subtitle', contact.subtitle);

  const socialsItem = document.querySelector('[data-section="contact.socials"]');
  if (socialsItem) {
    const wrapper = socialsItem.querySelector('.social-links');
    if (wrapper) {
      wrapper.innerHTML = '';
      contact.socials?.forEach((social) => {
        const anchor = document.createElement('a');
        anchor.href = social.url;
        anchor.textContent = social.label;
        anchor.target = social.url.startsWith('http') ? '_blank' : '_self';
        anchor.rel = 'noopener noreferrer';
        wrapper.appendChild(anchor);
      });
    }
  }
};

const renderFooter = (footer) => {
  if (!footer) return;
  setText('footer.owner', footer.owner);
  setText('footer.year', footer.year);
};

const updateMeta = (meta) => {
  if (!meta) return;
  if (meta.title) {
    document.title = meta.title;
  }
  if (meta.description) {
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }
  }
  if (meta.keywords?.length) {
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', meta.keywords.join(', '));
  }
};

const initNavigation = () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('is-open');
  });

  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('is-open');
    }
  });
};

const populate = () => {
  updateMeta(profile.meta);
  setText('shortName', profile.shortName);
  setText('fullName', profile.fullName);
  setText('tagline', profile.tagline);
  setText('heroDescription', profile.heroDescription);
  setLink('primaryCta', profile.primaryCta);
  setLink('secondaryCta', profile.secondaryCta);

  setText('skills.title', profile.skills?.title);
  setText('skills.intro', profile.skills?.intro);
  setText('about.title', profile.about?.title);
  setText('timeline.title', profile.timeline?.title);
  setText('projects.title', profile.projects?.title);
  setText('projects.intro', profile.projects?.intro);
  setText('contact.title', profile.contact?.title);

  renderAbout(profile.about);
  renderSkills(profile.skills);
  renderTimeline(profile.timeline);
  renderProjects(profile.projects);
  renderProjectFilters(profile.projects?.filters || []);
  renderContact(profile.contact);
  renderFooter(profile.footer);
};

document.addEventListener('DOMContentLoaded', () => {
  populate();
  initNavigation();
});
