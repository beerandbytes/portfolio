/* ----------------- VANTA BACKGROUNDS ----------------- */
window.addEventListener('load', () => {
  try {
    VANTA.BIRDS({
      el: "#vanta-hero",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      backgroundColor: 0x0d0d0f,
      color1: 0x955dc0,
      color2: 0xd720d,
      birdSize: 1.6,
      wingSpan: 26.00,
      alignment: 18.00,
      cohesion: 28.00,
      quantity: 3.00
    });
  } catch (e) { console.warn('Vanta birds failed', e); }

  try {
    VANTA.TRUNK({
      el: "#vanta-story",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x457598,
      backgroundColor: 0x0d0d0f,
      chaos: 6.5
    });
  } catch (e) { console.warn('Vanta trunk failed', e); }
});

/* ----------------- Mobile Menu ----------------- */
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('mobile-menu-enter');
}

/* ----------------- Language Translations ----------------- */
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-story': 'My Story',
    'nav-skills': 'Skills',
    'nav-experience': 'Experience',
    'nav-work': 'Projects',
    'nav-contact': 'Contact',
    'hero-greeting': 'Hey, I’m <span class="text-orange-400">Ousama</span> 👋',
    'hero-desc': 'Currently Junior Web Dev / Ex Sales and Key account Manager / Ex Assembly Computer Technician — I am seeking new opportunities to start in the web development industry ,trying to maintain performance and attention to detail.',
    'see-work': 'See My Work ↓',
    'story-title': 'My Story',
    'story-desc': 'I discovered the web by tinkering with small projects and later combined commercial experience with FullStack training. I focus on bringing product sense, performance and thoughtful UX to projects.',
    'builds-header': 'My Past PC Builds',
    'builds-desc': 'From early custom rigs that sparked my passion for hardware to current setups blending aesthetics and performance—each build tells a chapter in my tech journey.',
    'skills-title': 'What I Do',
    'skills-desc': 'I am a FullStack developer with a background in business management and sales. I combine commercial experience with technical skills to build performant web applications. Currently transitioning fully into development while freelancing on exciting projects.',
    'exp-title': 'Experience',
    'exp-desc': 'Roles and summaries taken from my résumé. Scroll to see each timeline node animate into view.',
    'resume-link': 'View full résumé →',
    'job-title-1': 'Business Development Manager | SLIMBOOK (GRUPO ODIN SOLUCIONES INFORMÁTICAS)',
    'bullet-1-1': 'Managed key accounts, suppliers, and brand collaborations, securing MDF and finance funding to support sales initiatives.',
    'bullet-1-2': 'Successfully closed over 30 orders exceeding €3,000 each after attending key industry events like OpenExpo Madrid and OWN Valencia in 2025.',
    'job-title-2': 'Sales Manager | AMFYTECH SL',
    'bullet-2-1': 'Generated over 400 qualified leads and secured three projects valued at more than €2 million, demonstrating rapid results delivery in a new market.',
    'job-title-3': 'WAREHOUSE ASSOCIATE | AMAZON ONDA VLC1',
    'bullet-3-1': 'Picking of goods, stow, quality check, inventory.',
    'job-title-4': 'IBERIA Country Manager | DEEPCOOL BEIJING CO LTD',
    'bullet-4-1': 'Led sales and import operations for the IBERIA channel, covering Spain, Portugal, and Southern France.',
    'bullet-4-2': 'Improved sales forecasting and quarterly analysis of product performance, directly influencing distribution strategy.',
    'bullet-4-3': 'Customer portfolio management, RMA assistance, feedback collection.',
    'job-title-5': 'PRODUCT MANAGER | COOLMOD INFORMATICA S.L',
    'bullet-5-1': 'Managed hardware product categories, developed sales strategies, and performed regular checks to minimize over-aged stock.',
    'bullet-5-2': 'Planned and executed marketing strategies and promotions.',
    'bullet-5-3': 'Identified KPIs for new product launches, leading to increased profitability and market share.',
    'job-title-6': 'BACKEND INTERN | JMI BRUSSELS',
    'bullet-6-1': 'Database design.',
    'bullet-6-2': 'Developed prototypes for web and mobile projects.',
    'featured-projects': 'Featured Projects',
    'view-project': 'View project →',
    'view-build': 'View build →',
    'contact-title': 'Let’s Build Something Together 🚀',
    'contact-desc': 'I’m open to internships, collaborations, and opportunities where I can grow as a FullStack developer.',
    'say-hello': '✉️ Say Hello',
    'footer': '© 2025 Ousama Merrakchi — Crafted with care & curiosity'
  },
  es: {
    'nav-home': 'Inicio',
    'nav-story': 'Mi Historia',
    'nav-skills': 'Habilidades',
    'nav-experience': 'Experiencia',
    'nav-work': 'Proyectos',
    'nav-contact': 'Contacto',
    'hero-greeting': '¡Hola, soy <span class="text-orange-400">Ousama</span>! 👋',
    'hero-desc': 'Actualmente soy Desarrollador Web Junior / Ex Comercial y Gerente de Cuentas Clave / Ex Técnico de montaje de ordenadores. Busco nuevas oportunidades para comenzar mi carrera en la industria del desarrollo web, con enfoque en el rendimiento y la atención al detalle.',
    'see-work': 'Ver Mi Trabajo ↓',
    'story-title': 'Mi Historia',
    'story-desc': 'Descubrí el desarrollo trasteando con pequeños proyectos y luego apliqué un poco de mi experiencia comercial para ayudarme con mis tareas diarias. Me enfoco en aportar visión de producto, rendimiento y UX pensada a los proyectos.',
    'builds-header': 'Mis Construcciones de PC Pasadas',
    'builds-desc': 'Desde rigs personalizados tempranos que encendieron mi pasión por el hardware hasta configuraciones actuales que combinan estética y rendimiento—cada build cuenta un capítulo en mi viaje tecnológico.',
    'skills-title': 'Qué Hago',
    'skills-desc': 'Soy un desarrollador FullStack con experiencia en gestión empresarial y ventas. Combino experiencia comercial con habilidades técnicas para construir aplicaciones web de alto rendimiento. Actualmente en transición completa hacia el desarrollo mientras freelance en proyectos emocionantes.',
    'exp-title': 'Experiencia',
    'exp-desc': 'Roles y resúmenes tomados de mi currículum. Desplázate para ver cada nodo de la línea de tiempo animarse en vista.',
    'resume-link': 'Ver currículum completo →',
    'job-title-1': 'Gerente de Desarrollo de Negocios | SLIMBOOK (GRUPO ODIN SOLUCIONES INFORMÁTICAS)',
    'bullet-1-1': 'Gestioné cuentas clave, proveedores y colaboraciones de marca, asegurando financiación MDF y financiera para apoyar iniciativas de ventas.',
    'bullet-1-2': 'Cerré exitosamente más de 30 pedidos que excedían los €3.000 cada uno después de asistir a eventos clave de la industria como OpenExpo Madrid y OWN Valencia en 2025.',
    'job-title-2': 'Gerente de Ventas | AMFYTECH SL',
    'bullet-2-1': 'Generé más de 400 leads cualificados y aseguré tres proyectos valorados en más de €2 millones, demostrando entrega rápida de resultados en un nuevo mercado.',
    'job-title-3': 'ASOCIADO DE ALMACÉN | AMAZON ONDA VLC1',
    'bullet-3-1': 'Recogida de mercancías, estiba, control de calidad, inventario.',
    'job-title-4': 'Gerente de País IBERIA | DEEPCOOL BEIJING CO LTD',
    'bullet-4-1': 'Lideré operaciones de ventas e importación para el canal IBERIA, cubriendo España, Portugal y el sur de Francia.',
    'bullet-4-2': 'Mejoré la previsión de ventas y el análisis trimestral del rendimiento de productos, influyendo directamente en la estrategia de distribución.',
    'bullet-4-3': 'Gestión de cartera de clientes, asistencia en RMA, recopilación de feedback.',
    'job-title-5': 'GERENTE DE PRODUCTO | COOLMOD INFORMATICA S.L',
    'bullet-5-1': 'Gestioné categorías de productos de hardware, desarrollé estrategias de ventas y realicé revisiones regulares para minimizar stock envejecido.',
    'bullet-5-2': 'Planifiqué y ejecuté estrategias de marketing y promociones.',
    'bullet-5-3': 'Identifiqué KPIs para lanzamientos de nuevos productos, lo que llevó a un aumento de la rentabilidad y cuota de mercado.',
    'job-title-6': 'PASANTE BACKEND | JMI BRUSSELS',
    'bullet-6-1': 'Diseño de bases de datos.',
    'bullet-6-2': 'Desarrollé prototipos para proyectos web y móviles.',
    'featured-projects': 'Proyectos Destacados',
    'view-project': 'Ver proyecto →',
    'view-build': 'Ver build →',
    'contact-title': 'Construyamos Algo Juntos 🚀',
    'contact-desc': 'Estoy abierto a prácticas, colaboraciones y oportunidades donde pueda crecer como desarrollador FullStack.',
    'say-hello': '✉️ Di Hola',
    'footer': '© 2025 Ousama Merrakchi — Creado con cuidado y curiosidad'
  },
  fr: {
    'nav-home': 'Accueil',
    'nav-story': 'Mon Histoire',
    'nav-skills': 'Compétences',
    'nav-experience': 'Expérience',
    'nav-work': 'Projets',
    'nav-contact': 'Contact',
    'hero-greeting': 'Salut, je suis <span class="text-orange-400">Ousama</span> 👋',
    'hero-desc': 'Actuellement je suis Développeur Web Junior / Ancien Commercial et Responsable Grands Comptes / Ancien Technicien Informatique de montage de pc bureau . Je suis à la recherche de nouvelles opportunités pour démarrer dans le secteur du développement web, en mettant en priorité la performance et le soin aux détails.',
    'see-work': 'Voir Mon Travail ↓',
    'story-title': 'Mon Histoire',
    'story-desc': "J'ai découvert le development web en bidouillant de petits projets et j'ai ensuite combiné mon expérience commerciale avec une formation FullStack. Je me concentre sur l'apport de sens produit, performance et UX réfléchie aux projets.",
    'builds-header': 'Mes Anciennes Configurations PC',
    'builds-desc': 'Des rigs personnalisés précoces qui ont éveillé ma passion pour le hardware aux setups actuels mêlant esthétique et performance—chaque build raconte un chapitre de mon parcours tech.',
    'skills-title': 'Ce Que Je Fais',
    'skills-desc': 'Je suis un développeur FullStack avec un parcours en gestion d\'entreprise et en ventes. J\'associe expérience commerciale et compétences techniques pour créer des applications web performantes. Actuellement en pleine transition vers le développement tout en freelance sur des projets passionnants.',
    'exp-title': 'Expérience',
    'exp-desc': "Rôles et résumés tirés de mon CV. Faites défiler pour voir chaque nœud de la timeline s'animer en vue.",
    'resume-link': 'Voir CV complet →',
    'job-title-1': 'Responsable du Développement Commercial | SLIMBOOK (GRUPO ODIN SOLUCIONES INFORMÁTICAS)',
    'bullet-1-1': 'Géré les comptes clés, fournisseurs et collaborations de marque, obtenant des financements MDF et financiers pour soutenir les initiatives de vente.',
    'bullet-1-2': 'Fermé avec succès plus de 30 commandes dépassant 3 000 € chacune après avoir assisté à des événements clés de l\'industrie comme OpenExpo Madrid et OWN Valencia en 2025.',
    'job-title-2': 'Responsable des Ventes | AMFYTECH SL',
    'bullet-2-1': 'Généré plus de 400 leads qualifiés et sécurisé trois projets valant plus de 2 millions d’euros, démontrant une livraison rapide de résultats sur un nouveau marché.',
    'job-title-3': "ASSOCIÉ D'ENTREPÔT | AMAZON ONDA VLC1",
    'bullet-3-1': 'Ramassage de marchandises, rangement, contrôle qualité, inventaire.',
    'job-title-4': 'Responsable Pays IBERIA | DEEPCOOL BEIJING CO LTD',
    'bullet-4-1': 'Dirigé les opérations de vente et d’importation pour le canal IBERIA, couvrant l’Espagne, le Portugal et le sud de la France.',
    'bullet-4-2': 'Amélioré la prévision des ventes et l’analyse trimestrielle des performances des produits, influençant directement la stratégie de distribution.',
    'bullet-4-3': 'Gestion du portefeuille clients, assistance RMA, collecte de feedback.',
    'job-title-5': 'RESPONSABLE PRODUIT | COOLMOD INFORMATICA S.L',
    'bullet-5-1': 'Géré les catégories de produits hardware, développé des stratégies de vente et effectué des contrôles réguliers pour minimiser le stock obsolète.',
    'bullet-5-2': 'Planifié et exécuté des stratégies marketing et promotions.',
    'bullet-5-3': 'Identifié les KPIs pour les lancements de nouveaux produits, menant à une augmentation de la rentabilité et de la part de marché.',
    'job-title-6': 'STAGIAIRE BACKEND | JMI BRUSSELS',
    'bullet-6-1': 'Conception de base de données.',
    'bullet-6-2': 'Développé des prototypes pour des projets web et mobile.',
    'featured-projects': 'Projets Achevés',
    'view-project': 'Voir le projet →',
    'view-build': 'Voir le build →',
    'contact-title': 'Construisons Quelque Chose Ensemble 🚀',
    'contact-desc': 'Je suis ouvert aux stages, collaborations et opportunités où je peux grandir en tant que développeur FullStack.',
    'say-hello': '✉️ Dis Bonjour',
    'footer': '© 2025 Ousama Merrakchi — Créé avec soin et curiosité'
  }
};

const descs = {
  en: {
    proj1: 'TBA.',
    proj2: 'My first attempt to make an online version of my cv.',
    proj3: 'My first website experiment focused on storytelling and layout.'
  },
  es: {
    proj1: 'TBA.',
    proj2: 'Mi primer inento en realizar una versión de mi curriculum en línea.',
    proj3: 'Mi primer experimento de portfolio enfocado en la narración y el diseño.'
  },
  fr: {
    proj1: 'TBA.',
    proj2: 'Mon premier essai de faire une version en ligne de mon cv.',
    proj3: 'Mon premier essai de portfolio axé sur le storytelling et la mise en page.'
  }
};

// New: Translations for builds (titles for cards/modals, subtitles for cards, desc for modals)
const buildTranslations = {
  en: {
    build1: {
      title: 'Blue and Red Dual PC Build',
      subtitle: 'RGB Harmony',
      desc: 'My early dual-PC setup: a cool blue rig for daily tasks paired with a fiery red beast for gaming and rendering—my first dive into RGB synchronization.',
      image: 'https://i.imgur.com/E7BaYSF.jpeg',
      url: 'https://i.imgur.com/E7BaYSF.jpeg'
    },
    build2: {
      title: 'Dragon White PC Build',
      subtitle: 'Elegant Fury',
      desc: 'A sleek white chassis with dragon accents, featuring liquid cooling and panoramic glass—balancing minimalism with high-performance airflow.',
      image: 'https://i.imgur.com/YCnpIX8.jpeg',
      url: 'https://i.imgur.com/YCnpIX8.jpeg'
    },
    build3: {
      title: 'Rick & Morty Green PC Build',
      subtitle: 'Portal Gun Vibes',
      desc: 'Fun meets function: neon green lighting, custom cable management, and pop culture flair with Rick and Morty figures—optimized for creative workflows.',
      image: 'https://i.imgur.com/FwZdrS5.jpeg',
      url: 'https://i.imgur.com/FwZdrS5.jpeg'
    }
  },
  es: {
    build1: {
      title: 'Construcción Dual de PC Azul y Rojo',
      subtitle: 'Armonía RGB',
      desc: 'Mi configuración dual de PC inicial: un rig azul fresco para tareas diarias emparejado con una bestia roja ardiente para juegos y renderizado—mi primera inmersión en la sincronización RGB.',
      image: 'https://i.imgur.com/E7BaYSF.jpeg',
      url: 'https://i.imgur.com/E7BaYSF.jpeg'
    },
    build2: {
      title: 'Construcción de PC Blanca Dragón',
      subtitle: 'Furia Elegante',
      desc: 'Un chasis blanco elegante con acentos de dragón, con refrigeración líquida y vidrio panorámico—equilibrando minimalismo con flujo de aire de alto rendimiento.',
      image: 'https://i.imgur.com/YCnpIX8.jpeg',
      url: 'https://i.imgur.com/YCnpIX8.jpeg'
    },
    build3: {
      title: 'Construcción de PC Verde Rick & Morty',
      subtitle: 'Vibras de Pistola Portal',
      desc: 'Diversión y función se encuentran: iluminación verde neón, gestión de cables personalizada y estilo pop con figuras de Rick y Morty—optimizado para flujos de trabajo creativos.',
      image: 'https://i.imgur.com/FwZdrS5.jpeg',
      url: 'https://i.imgur.com/FwZdrS5.jpeg'
    }
  },
  fr: {
    build1: {
      title: 'Construction Dual PC Bleu et Rouge',
      subtitle: 'Harmonie RGB',
      desc: "Ma configuration dual-PC initiale : un rig bleu cool pour les tâches quotidiennes associé à une bête rouge ardente pour les jeux et le rendu—ma première plongée dans la synchronisation RGB.",
      image: 'https://i.imgur.com/E7BaYSF.jpeg',
      url: 'https://i.imgur.com/E7BaYSF.jpeg'
    },
    build2: {
      title: 'Construction PC Blanc Dragon',
      subtitle: 'Furie Élégante',
      desc: 'Un châssis blanc élégant avec accents de dragon, doté de refroidissement liquide et de verre panoramique—équilibrant minimalisme et flux d\'air haute performance.',
      image: 'https://i.imgur.com/YCnpIX8.jpeg',
      url: 'https://i.imgur.com/YCnpIX8.jpeg'
    },
    build3: {
      title: 'Construction PC Vert Rick & Morty',
      subtitle: 'Vibes Pistolet Portal',
      desc: 'Le fun rencontre la fonction : éclairage vert néon, gestion de câbles personnalisée et style pop culture avec figurines Rick et Morty—optimisé pour les workflows créatifs.',
      image: 'https://i.imgur.com/FwZdrS5.jpeg',
      url: 'https://i.imgur.com/FwZdrS5.jpeg'
    }
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    } else if (buildTranslations[lang] && key.startsWith('build') && (key.endsWith('-title') || key.endsWith('-subtitle'))) {
      // Handled by buildTranslations for build-specific keys
      const [buildId, type] = key.split('-');
      if (buildTranslations[lang][buildId] && buildTranslations[lang][buildId][type]) {
        el.innerHTML = buildTranslations[lang][buildId][type];
      }
    }
  });
  // Update modal if open
  if (!document.getElementById('projectModal').classList.contains('hidden') && currentKey) {
    updateModal(currentKey);
  }
  if (!document.getElementById('buildModal').classList.contains('hidden') && currentBuildKey) {
    updateBuildModal(currentBuildKey);
  }
}

/* ----------------- Project Modal / Work data ----------------- */
const projects = {
  proj1: {
    title: "TBA",
    image: "https://placehold.co/600x400/000000/FFF?text=TBA",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg"
    ],
    url: "https://github.com/yourusername/tba"  // Replace with actual URL
  },
  proj2: {
    title: "Portfolio",
    image: "https://i.imgur.com/eUYSOvd.jpeg",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    ],
    url: "https://beerandbytes.github.io/"
  },
  proj3: {
    title: "WebCorp",
    image: "https://i.imgur.com/QY1MgBy.jpeg",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    ],
    url: "https://beerandbytes.github.io/trabajo_js/"
  }
};

/* Modal elements */
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");
const modalVisitBtn = document.getElementById("modalVisitBtn");
let currentKey = null;

function updateModal(key) {
  const p = projects[key];
  const desc = descs[currentLang][key];
  modalImage.src = p.image;
  modalTitle.textContent = p.title;
  modalDesc.textContent = desc;
  modalTech.innerHTML = p.tech.map(src => `<img src="${src}" class="h-6 w-6" alt="tech">`).join("");
  if (modalVisitBtn) {
    modalVisitBtn.href = p.url;
    modalVisitBtn.classList.remove("hidden");
  }
}

function openModal(key) {
  currentKey = key;
  updateModal(key);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

/* ----------------- Build Modal ----------------- */
/* Build Modal elements */
const buildModal = document.getElementById("buildModal");
const buildModalImage = document.getElementById("buildModalImage");
const buildModalTitle = document.getElementById("buildModalTitle");
const buildModalDesc = document.getElementById("buildModalDesc");
const buildModalVisitBtn = document.getElementById("buildModalVisitBtn");
let currentBuildKey = null;

function updateBuildModal(key) {
  const b = buildTranslations[currentLang][key];
  buildModalImage.src = b.image;
  buildModalTitle.textContent = b.title;
  buildModalDesc.textContent = b.desc;
  if (buildModalVisitBtn) {
    buildModalVisitBtn.href = b.url;
    buildModalVisitBtn.classList.remove("hidden");
  }
}

function openBuildModal(key) {
  currentBuildKey = key;
  updateBuildModal(key);
  buildModal.classList.remove("hidden");
  buildModal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeBuildModal() {
  buildModal.classList.add("hidden");
  buildModal.classList.remove("flex");
  document.body.style.overflow = "";
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu (FIXED: Use explicit if/else for consistent animation handling)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) {
        // Open: Remove hidden, add animation
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('mobile-menu-enter');
      } else {
        // Close: Add hidden, remove animation
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('mobile-menu-enter');
      }
    });
  }

  // Close mobile menu on language change
  const langSwitch = document.getElementById('lang-switch');
  if (langSwitch) {
    langSwitch.addEventListener('change', (e) => {
      setLanguage(e.target.value);
      closeMobileMenu();
    });
  }

  // Close mobile menu on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMobileMenu();
    }
  });

  // Project modal events
  document.getElementById("closeBtn").addEventListener("click", closeModal);
  document.getElementById("nextBtn").addEventListener("click", () => {
    const keys = Object.keys(projects);
    currentKey = keys[(keys.indexOf(currentKey) + 1) % keys.length];
    updateModal(currentKey);
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    const keys = Object.keys(projects);
    currentKey = keys[(keys.indexOf(currentKey) - 1 + keys.length) % keys.length];
    updateModal(currentKey);
  });

  // Build modal events
  document.getElementById("closeBuildBtn").addEventListener("click", closeBuildModal);
  document.getElementById("nextBuildBtn").addEventListener("click", () => {
    const keys = Object.keys(buildTranslations[currentLang]);
    currentBuildKey = keys[(keys.indexOf(currentBuildKey) + 1) % keys.length];
    updateBuildModal(currentBuildKey);
  });
  document.getElementById("prevBuildBtn").addEventListener("click", () => {
    const keys = Object.keys(buildTranslations[currentLang]);
    currentBuildKey = keys[(keys.indexOf(currentBuildKey) - 1 + keys.length) % keys.length];
    updateBuildModal(currentBuildKey);
  });

  // Timeline reveal animation
  const nodeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.timeline-node').forEach(n => nodeObserver.observe(n));

  // Section fade in
  const sections = document.querySelectorAll('section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('opacity-100','transition','duration-700');
      else entry.target.classList.remove('opacity-100');
    });
  }, { threshold: 0.12 });
  sections.forEach(s => {
    s.classList.add('opacity-0');
    sectionObserver.observe(s);
  });

  // Initialize language
  setLanguage('en');
});

/* ----------------- Keyboard Navigation (shared for both modals) ----------------- */
document.addEventListener("keydown", e => {
  // Project modal
  if (!modal.classList.contains("hidden")) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
    if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
  }
  // Build modal
  if (!buildModal.classList.contains("hidden")) {
    if (e.key === "Escape") closeBuildModal();
    if (e.key === "ArrowRight") document.getElementById("nextBuildBtn").click();
    if (e.key === "ArrowLeft") document.getElementById("prevBuildBtn").click();
  }
});

modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
buildModal.addEventListener("click", e => { if (e.target === buildModal) closeBuildModal(); });