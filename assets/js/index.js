// ==========================================
// DICIONÁRIO DE TRADUÇÕES COMPLETO (PT / EN)
// ==========================================
const translations = {
  pt: {
    // Títulos de Página
    "page.title.home": "ZAHAR MACAVE",
    "page.title.about": "SOBRE MIM",
    "page.title.career": "CARREIRA & HABILIDADES",
    "page.title.gallery": "GALERIA DE FOTOS",
    "page.title.contact": "CONTACTO",

    // Navegação e Cabeçalho
    "nav.home": "Home",
    "nav.about": "Sobre",
    "nav.career": "Carreira",
    "nav.gallery": "Galeria",
    "nav.contact": "Contacto",
    "nav.menu": "Menu",
    "nav.close": "Fechar",
    "lang.label": "Idioma",

    // Home
    "home.loader_caption": "Quem anda com sabios, será sabio",
    "home.tagline": "WhiteChoc",
    "home.location": "Maputo, Moçambique",

    // Carrossel 3D de Páginas
    "carousel.welcome": "BEM-VINDO AO MEU",
    "carousel.portfolio": "PORTFÓLIO",
    "carousel.role": "DESENVOLVEDOR DE WEBSITES & SISTEMAS WEB",
    "carousel.card1": "Página Inicial",
    "carousel.card2": "Sobre Mim",
    "carousel.card3": "Carreiras & Habilidades",
    "carousel.card4": "Galeria de Fotos",
    "carousel.card5": "Contacto",
    "carousel.dial_text": "ZAHAR MACAVE · PORTFÓLIO · WEBSITES & SISTEMAS WEB · MAPUTO ·",

    // Sobre Mim (Foco Pessoal e Humano)
    "about.who.chip": "Sobre mim",
    "about.who.title": "DEIXA-ME INTRODUZIR",
    "about.who.name": "Chamo-me Zahar Paulo Macave",
    "about.who.traits": "Curioso. Ambicioso. Criativo.",
    "about.who.desc": "Trabalho com tecnologia de informação, crio páginas web e sistemas de gestão. Gosto de transformar a minha criatividade em algo web.",

    "about.where.title": "DE ONDE SOU?",
    "about.where.location": "MAPUTO, MOÇAMBIQUE",
    "about.where.desc": "Cidade com muita arte e criatividade e por isso tenho inspiração pelo design das coisas que os artistas fazem, incluindo a cultura, arte, música.",

    "about.lang.title": "IDIOMAS QUE ME LIGAM AO MUNDO.",
    "about.lang.desc": "Cada idioma abre uma forma diferente de ver e comunicar com o mundo.",
    "about.lang.pt.name": "Português",
    "about.lang.pt.level": "FLUENTE",
    "about.lang.en.name": "Inglês",
    "about.lang.en.level": "BÁSICO",

    // Carreira & Habilidades (Linux, ERPNext, PHP, MySQL, Sistemas)
    "career.chip": "CARREIRA & HABILIDADES",
    "career.title": "Competências técnicas e projetos",
    "career.lede": "Especializado na administração de sistemas Linux, implementação de ERPNext e desenvolvimento de sistemas de gestão empresariais robustos.",
    "career.carousel_chip": "Stack Tecnológico",
    "career.carousel_title": "Tecnologias & Ferramentas que Utilizo",
    "career.skills_title": "Principais Competências",
    "skills.ubuntu.title": "Ubuntu Linux",
    "skills.ubuntu.tag": "Sistema & Servidores",
    "skills.ubuntu.desc": "Administração de servidores, deploy e automação em Bash.",
    "skills.erpnext.title": "ERPNext & Frappe",
    "skills.erpnext.tag": "Enterprise ERP",
    "skills.erpnext.desc": "Implementação, personalização de fluxos, stock e faturação.",
    "skills.php.title": "PHP (MVC)",
    "skills.php.tag": "Backend & MVC",
    "skills.php.desc": "Desenvolvimento de sistemas robustos, regras de negócio e APIs.",
    "skills.sql.title": "MySQL / MariaDB",
    "skills.sql.tag": "Base de Dados",
    "skills.sql.desc": "Modelação relacional, consultas SQL otimizadas e integridade.",
    "skills.javascript.title": "JavaScript (ES6+)",
    "skills.javascript.tag": "Linguagem Web",
    "skills.javascript.desc": "Interatividade dinâmica, lógica frontend e integração assíncrona.",
    "skills.html5.title": "HTML5",
    "skills.html5.tag": "Frontend",
    "skills.html5.desc": "Estrutura semântica moderna, acessibilidade e boas práticas SEO.",
    "skills.css3.title": "CSS3",
    "skills.css3.tag": "Design & UI",
    "skills.css3.desc": "Design responsivo, Flexbox, Grid e animações fluidas.",
    "skills.owncloud.title": "ownCloud",
    "skills.owncloud.tag": "Cloud & Storage",
    "skills.owncloud.desc": "Infraestrutura de nuvem privada, partilha segura e backups.",
    "skills.vscode.title": "VS Code",
    "skills.vscode.tag": "Ambiente Dev",
    "skills.vscode.desc": "Editor de código principal, extensões e produtividade diária.",
    "skills.wordpress.title": "WordPress",
    "skills.wordpress.tag": "CMS & Web",
    "skills.wordpress.desc": "Criação, manutenção e personalização de websites e portais.",
    "skills.showcase.title": "SKILLS",
    "skills.showcase.subtitle": "Tecnologias e ferramentas que domino",
    "career.projects_chip": "Projetos Desenvolvidos",
    "career.projects_title": "Sistemas & Aplicações em Produção",
    "career.projects_lede": "Soluções empresariais completas, infraestruturas e plataformas digitais desenvolvidas com foco em escalabilidade e desempenho.",
    "career.project1.period": "Projeto Pessoal · Destaque",
    "career.project1.title": "Website Pessoal & Portfólio Interativo",
    "career.project1.text": "Desenvolvimento deste website e portfólio moderno com tema escuro imersivo, renderização de globo 3D interativo via Canvas, faixas de marquee contínuas com aceleração por GPU, sistema de internacionalização dinâmico (PT/EN) e código vanilla de alto desempenho.",
    "career.project2.period": "Sistema Comercial & POS",
    "career.project2.title": "Yana Chonguiça POS — Gestão de Lojas & Retalho",
    "career.project2.text": "Sistema de Ponto de Venda (POS) e gestão comercial centralizada desenvolvido para a boutique Yana Chonguiça (Moda & Estilo), com controle multi-loja, faturação em tempo real, gestão rigorosa de stock e relatórios operacionais.",
    "career.project3.period": "Helpdesk & Gestão de Chamados",
    "career.project3.title": "Helpdesk Pro — Gestão de Suporte & Live Chat",
    "career.project3.text": "Plataforma completa de gestão de tickets e suporte técnico empresarial, integrada com canal de chat ao vivo em tempo real entre o técnico e o solicitante. Permite triagem rápida de incidentes, comunicação direta, histórico centralizado de chamados e acompanhamento transparente do estado das solicitações.",

    // Galeria de Fotos
    "gallery.chip": "GALERIA DE FOTOS",
    "gallery.title": "Momentos, Ambientes & Natureza",
    "gallery.lede": "Um vislumbre visual dos meus ambientes, viagens pela natureza e registos do dia a dia.",
    "gallery.filter.all": "Todas",
    "gallery.filter.nature": "Natureza",
    "gallery.filter.env": "Ambiente",
    "gallery.filter.portrait": "Retratos",


    // Contacto
    "contact.chip": "CONTACTO",
    "contact.title": "Vamos construir algo juntos",
    "contact.lede": "Tens um projeto em mente? Envia os detalhes e respondo o mais rápido possível.",
    "contact.form.name": "Nome",
    "contact.form.name_placeholder": "O teu nome",
    "contact.form.email": "Email",
    "contact.form.email_placeholder": "o-teu-email@exemplo.com",
    "contact.form.msg": "Mensagem",
    "contact.form.msg_placeholder": "Conta-me sobre o teu projeto...",
    "contact.form.submit": "Enviar mensagem →",
    "contact.form.success": "Mensagem enviada ✓",
    "contact.direct.title": "Fala diretamente",
    "contact.direct.desc": "Preferes um contacto mais direto? Usa um dos canais abaixo.",
    "contact.direct.location": "Baseado em Maputo, Moçambique · disponível para projetos remotos"
  },
  en: {
    // Títulos de Página
    "page.title.home": "ZAHAR MACAVE",
    "page.title.about": "ABOUT ME",
    "page.title.career": "CAREER",
    "page.title.gallery": "PHOTO GALLERY",
    "page.title.contact": "CONTACT",

    // Navegação e Cabeçalho
    "nav.home": "Home",
    "nav.about": "About",
    "nav.career": "Career",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Close",
    "lang.label": "Language",

    // Home
    "home.loader_caption": "Walk with the wise and become wise.",
    "home.tagline": "WhiteChoc",
    "home.location": "Maputo, Mozambique",

    // 3D Fan Carousel
    "carousel.welcome": "WELCOME TO MY",
    "carousel.portfolio": "PORTFOLIO",
    "carousel.role": "WEBSITE & WEB SYSTEM DEVELOPER",
    "carousel.card1": "Home Page",
    "carousel.card2": "About Me",
    "carousel.card3": "Careers & Skills",
    "carousel.card4": "Photo Gallery",
    "carousel.card5": "Contact",
    "carousel.dial_text": "ZAHAR MACAVE · PORTFOLIO · WEBSITE & WEB SYSTEM DEVELOPER · MAPUTO ·",

    // Sobre Mim (Personal Focus)
    "about.who.chip": "About Me",
    "about.who.title": "LET ME INTRODUCE",
    "about.who.name": "My name is Zahar Paulo Macave",
    "about.who.traits": "Curious. Ambitious. Creative.",
    "about.who.desc": "I work with information technology, creating websites and management systems. I love turning my creativity into web solutions.",

    "about.where.title": "WHERE I'M FROM?",
    "about.where.location": "MAPUTO, MOZAMBIQUE",
    "about.where.desc": "A city full of art and creativity, inspiring my passion for design through what local artists create, including culture, art, and music.",

    "about.lang.title": "LANGUAGES CONNECTING ME TO THE WORLD.",
    "about.lang.desc": "Each language opens a different way of seeing and communicating with the world.",
    "about.lang.pt.name": "Portuguese",
    "about.lang.pt.level": "FLUENT",
    "about.lang.en.name": "English",
    "about.lang.en.level": "BASIC",

    // Carreira & Habilidades (Linux, ERPNext, PHP, MySQL)
    "career.chip": "CAREER",
    "career.title": "Technical skills & projects",
    "career.lede": "Specialized in Linux systems administration, ERPNext deployment, and building robust enterprise management systems.",
    "career.carousel_chip": "Tech Stack",
    "career.carousel_title": "Technologies & Tools I Use",
    "career.skills_title": "Core Technical Skills",
    "skills.ubuntu.title": "Ubuntu Linux",
    "skills.ubuntu.tag": "OS & Servers",
    "skills.ubuntu.desc": "Server administration, deployment and Bash automation.",
    "skills.erpnext.title": "ERPNext & Frappe",
    "skills.erpnext.tag": "Enterprise ERP",
    "skills.erpnext.desc": "Implementation, workflow customization, inventory & billing.",
    "skills.php.title": "PHP (MVC)",
    "skills.php.tag": "Backend & MVC",
    "skills.php.desc": "Robust system development, business logic and APIs.",
    "skills.sql.title": "MySQL / MariaDB",
    "skills.sql.tag": "Databases",
    "skills.sql.desc": "Relational data modeling, optimized queries and integrity.",
    "skills.javascript.title": "JavaScript (ES6+)",
    "skills.javascript.tag": "Web Language",
    "skills.javascript.desc": "Dynamic interactivity, frontend logic and async integration.",
    "skills.html5.title": "HTML5",
    "skills.html5.tag": "Frontend",
    "skills.html5.desc": "Modern semantic structure, web accessibility and SEO practices.",
    "skills.css3.title": "CSS3",
    "skills.css3.tag": "Design & UI",
    "skills.css3.desc": "Responsive design, Flexbox, Grid and fluid micro-animations.",
    "skills.owncloud.title": "ownCloud",
    "skills.owncloud.tag": "Cloud & Storage",
    "skills.owncloud.desc": "Private cloud infrastructure, secure storage and backups.",
    "skills.vscode.title": "VS Code",
    "skills.vscode.tag": "Dev Environment",
    "skills.vscode.desc": "Primary code editor, extensions and daily dev productivity.",
    "skills.wordpress.title": "WordPress",
    "skills.wordpress.tag": "CMS & Web",
    "skills.wordpress.desc": "Creation, maintenance and customization of content websites.",
    "skills.showcase.title": "SKILLS",
    "skills.showcase.subtitle": "Technologies and tools I master",
    "career.projects_chip": "Developed Projects",
    "career.projects_title": "Systems & Production Applications",
    "career.projects_lede": "Complete enterprise solutions, infrastructures, and digital platforms built with a focus on scalability and high performance.",
    "career.project1.period": "Personal Project · Featured",
    "career.project1.title": "Personal Website & Interactive Portfolio",
    "career.project1.text": "Development of this modern interactive portfolio featuring an immersive dark theme, interactive 3D Canvas globe, continuous GPU-accelerated marquee ribbons, dynamic bilingual system (PT/EN), and high-performance vanilla architecture.",
    "career.project2.period": "Commercial POS System",
    "career.project2.title": "Yana Chonguiça POS — Store & Retail Management",
    "career.project2.text": "Point of Sale (POS) and centralized retail management system developed for Yana Chonguiça Boutique (Fashion & Style), featuring multi-store access, real-time invoicing, inventory tracking, and operational reports.",
    "career.project3.period": "Helpdesk & Support Management",
    "career.project3.title": "Helpdesk Pro — Support Management & Live Chat",
    "career.project3.text": "Comprehensive enterprise ticketing and technical support platform featuring an integrated real-time live chat between technicians and requesters. Enables instant incident triage, direct communication, centralized ticket history, and transparent request status tracking.",

    // Galeria de Fotos
    "gallery.chip": "Photo Gallery",
    "gallery.title": "Moments, Environments & Nature",
    "gallery.lede": "A visual glimpse into my environments, nature journeys, and daily captures.",
    "gallery.filter.all": "All",
    "gallery.filter.nature": "Nature",
    "gallery.filter.env": "Environment",
    "gallery.filter.portrait": "Portraits",


    // Contacto
    "contact.chip": "Contact",
    "contact.title": "Let's build something together",
    "contact.lede": "Have a project in mind? Send over the details and I'll get back to you as soon as possible.",
    "contact.form.name": "Name",
    "contact.form.name_placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email_placeholder": "your-email@example.com",
    "contact.form.msg": "Message",
    "contact.form.msg_placeholder": "Tell me about your project...",
    "contact.form.submit": "Send message →",
    "contact.form.success": "Message sent ✓",
    "contact.direct.title": "Get in touch directly",
    "contact.direct.desc": "Prefer a more direct channel? Reach out via one of the options below.",
    "contact.direct.location": "Based in Maputo, Mozambique · available for remote projects"
  }
};

const LANG_KEY = "siteLang";

function getSavedLang() {
  try {
    return localStorage.getItem(LANG_KEY) || "pt";
  } catch (e) {
    return "pt";
  }
}

function applyLang(lang) {
  try {
    const currentLang = translations[lang] ? lang : "pt";
    const dict = translations[currentLang];
    if (!dict) return;

    // 1. Elementos de texto com data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 2. Atributos placeholder com data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // 3. Título do documento com data-i18n-title
    const titleEl = document.querySelector("[data-i18n-title]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n-title");
      if (dict[key] !== undefined) {
        document.title = dict[key];
      }
    }

    // 4. Botões de alternância de idioma
    document.querySelectorAll(".lang-opt").forEach(opt => {
      opt.classList.toggle("active", opt.dataset.lang === currentLang);
    });

    // 5. Atributo lang na tag HTML
    document.documentElement.setAttribute("lang", currentLang === "en" ? "en" : "pt-PT");

    // 6. Guardar no localStorage de forma segura
    try {
      localStorage.setItem(LANG_KEY, currentLang);
    } catch (e) { }
  } catch (err) {
    console.warn("i18n error:", err);
  }
}

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================
function initApp() {
  // Aplicar idioma guardado de imediato
  applyLang(getSavedLang());

  // Configurar cliques nos botões de idioma
  document.querySelectorAll(".lang-opt").forEach(opt => {
    opt.addEventListener("click", () => {
      applyLang(opt.dataset.lang);
    });
  });

  // ---------- LOADING SCREEN & ENTRADA SUAVE ----------
  const fill = document.getElementById('loaderFill');
  const loader = document.getElementById('loader');
  if (fill && loader && !loader.classList.contains('hidden')) {
    let progress = 0;
    const progressTimer = setInterval(() => {
      progress += Math.random() * 8 + 4;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressTimer);
        fill.style.width = "100%";
        setTimeout(finishLoading, 350);
      } else {
        fill.style.width = progress + "%";
      }
    }, 60);

    // Timeout de segurança absoluto: máximo 2.4 segundos
    setTimeout(() => {
      clearInterval(progressTimer);
      if (fill) fill.style.width = "100%";
      setTimeout(finishLoading, 200);
    }, 2400);
  } else {
    finishLoading();
  }

  // Pré-carregamento instantâneo de páginas ao passar o mouse
  initLinkPrefetch();

  // ---------- MENU LATERAL ----------
  const menuLinks = document.querySelectorAll('.menu-panel-links a');
  const menuBtn = document.getElementById('menuBtn');
  const menuPanel = document.getElementById('menuPanel');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const menuCloseBtn = document.getElementById('menuCloseBtn');

  function openMenu() {
    if (menuBtn) menuBtn.classList.add('open');
    if (menuPanel) menuPanel.classList.add('open');
    if (menuBackdrop) menuBackdrop.classList.add('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    if (menuBtn) menuBtn.classList.remove('open');
    if (menuPanel) menuPanel.classList.remove('open');
    if (menuBackdrop) menuBackdrop.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }

  const currentFile = location.pathname.split('/').pop() || 'index.html';
  const isHome = currentFile === '' || currentFile === 'index.html';

  if (menuBtn && menuPanel && menuBackdrop) {
    menuLinks.forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href === currentFile || (isHome && href === 'index.html')) {
          e.preventDefault();
          closeMenu();
        } else {
          closeMenu();
        }
      });
    });
    menuBtn.addEventListener('click', () => {
      menuPanel.classList.contains('open') ? closeMenu() : openMenu();
    });
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
    menuBackdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Controla o estado compacto da assinatura no header ao rolar a página
  const siteHeader = document.querySelector('header.site-header');
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Destaque do link ativo no menu
  menuLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentFile || (isHome && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  // ---------- BARALHO 3D EM LEQUE (FAN ARC 3D CAROUSEL) ----------
  const fanDeckCards = document.getElementById('fanDeckCards');
  const fanPrev = document.getElementById('fanPrev');
  const fanNext = document.getElementById('fanNext');
  const fanDialDisc = document.getElementById('fanDialDisc');

  if (fanDeckCards) {
    const cards = Array.from(fanDeckCards.querySelectorAll('.fan-card'));
    const totalCards = cards.length;
    let activeIndex = 0;
    let autoPlayTimer = null;

    const updateFanPositions = () => {
      cards.forEach((card, idx) => {
        let offset = idx - activeIndex;

        // Normalização modular para posicionamento circular (-2, -1, 0, 1, 2)
        while (offset > Math.floor(totalCards / 2)) offset -= totalCards;
        while (offset < -Math.floor(totalCards / 2)) offset += totalCards;

        card.setAttribute('data-offset', offset);
      });

      // Rotação síncrona do bússola/disco giratório (72 graus por cartão)
      if (fanDialDisc) {
        fanDialDisc.style.transform = `rotate(${activeIndex * -72}deg)`;
      }
    };

    const nextCard = () => {
      activeIndex = (activeIndex + 1) % totalCards;
      updateFanPositions();
    };

    const prevCard = () => {
      activeIndex = (activeIndex - 1 + totalCards) % totalCards;
      updateFanPositions();
    };

    if (fanNext) fanNext.addEventListener('click', nextCard);
    if (fanPrev) fanPrev.addEventListener('click', prevCard);

    // Clique individual nas cartas (apenas roda o carrossel, sem links de página)
    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        activeIndex = idx;
        updateFanPositions();
      });
    });

    // Rotação Automática Suave a cada 3.5 segundos
    const startAutoPlay = () => {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextCard, 3500);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    };

    fanDeckCards.addEventListener('mouseenter', stopAutoPlay);
    fanDeckCards.addEventListener('mouseleave', startAutoPlay);

    // Suporte para arrasto e gestos Touch/Swipe
    let startX = 0;
    let isDragging = false;

    fanDeckCards.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopAutoPlay();
    }, { passive: true });

    fanDeckCards.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      if (Math.abs(diffX) > 35) {
        if (diffX > 0) nextCard();
        else prevCard();
      }
      isDragging = false;
      startAutoPlay();
    }, { passive: true });

    // Inicialização
    updateFanPositions();
    startAutoPlay();
  }

  // ---------- GALERIA: FILTROS INTERATIVOS POR SECÇÃO ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const photoCards = document.querySelectorAll('.gal-photo-card');
  if (filterBtns.length > 0 && photoCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        photoCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // ---------- CONTACT FORM (Demo) ----------
  const form = document.getElementById('contactForm');
  if (form) {
    const sendBtn = document.getElementById('sendBtn');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentLang = getSavedLang();
      const successMsg = translations[currentLang]?.["contact.form.success"] || "Mensagem enviada ✓";
      const defaultMsg = translations[currentLang]?.["contact.form.submit"] || "Enviar mensagem →";

      if (sendBtn) {
        sendBtn.textContent = successMsg;
        sendBtn.style.background = "var(--green)";
        sendBtn.style.color = "#141311";
        setTimeout(() => {
          sendBtn.textContent = defaultMsg;
          sendBtn.style.background = "";
          sendBtn.style.color = "";
          form.reset();
        }, 2600);
      }
    });
  }

  // ---------- ANO NO FOOTER ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- SCROLL REVEAL SUAVE ----------
  const revealEls = document.querySelectorAll('.plain-card, .t-item, .project-card');
  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity .45s ease, transform .45s ease';
      io.observe(el);
    });
  }

  // ---------- CARROSSEL DE HABILIDADES & TECNOLOGIAS ----------
  initSkillsCarousel();

  // ---------- SLIDER DE FOTOS - QUEM SOU ----------
  initWhoSlider();

  // ---------- GLOBO TERRESTRE 3D NO FOOTER ----------
  initFooterGlobe();
}

// ==========================================
// CONTROLADOR DO SLIDER DE FOTOS - QUEM SOU
// ==========================================
function initWhoSlider() {
  const slider = document.getElementById('whoPhotoSlider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.who-slide');
  if (slides.length === 0) return;

  let currentIndex = 0;
  let timer = null;

  function showSlide(idx) {
    currentIndex = (idx + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 3500);
  }

  function stopAutoPlay() {
    if (timer) clearInterval(timer);
  }

  slider.addEventListener('mouseenter', stopAutoPlay);
  slider.addEventListener('mouseleave', startAutoPlay);
  startAutoPlay();
}

// Inicialização segura imediata
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}


// ==========================================
// CARROSSEL DE HABILIDADES & TECNOLOGIAS
// ==========================================
function initSkillsCarousel() {
  const viewport = document.getElementById('skillsCarouselViewport');
  const track = document.getElementById('skillsCarouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (!viewport || !track) return;

  const cards = Array.from(track.querySelectorAll('.skill-card'));
  if (cards.length === 0) return;

  let currentIndex = 0;
  let autoPlayTimer = null;
  let isPaused = false;

  // Criar indicadores (dots)
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToIndex(idx);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function getStep() {
    const firstCard = cards[0];
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 18;
    return firstCard.offsetWidth + gap;
  }

  function getMaxScroll() {
    return Math.max(0, track.scrollWidth - viewport.clientWidth);
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
    });
  }

  function goToIndex(idx, smooth = true) {
    const total = cards.length;
    currentIndex = (idx + total) % total;
    const step = getStep();
    const maxScroll = getMaxScroll();
    let target = currentIndex * step;

    if (target > maxScroll) {
      target = maxScroll;
    }

    track.style.transition = smooth ? 'transform .45s cubic-bezier(0.2, 0.9, 0.3, 1)' : 'none';
    track.style.transform = `translateX(-${target}px)`;
    updateDots();
  }

  function nextSlide() {
    const maxScroll = getMaxScroll();
    const step = getStep();
    const currentTranslate = Math.abs(parseFloat(track.style.transform.replace(/[^\d.-]/g, '')) || 0);

    if (currentTranslate >= maxScroll - 5 || currentIndex >= cards.length - 1) {
      goToIndex(0);
    } else {
      goToIndex(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex <= 0) {
      goToIndex(cards.length - 1);
    } else {
      goToIndex(currentIndex - 1);
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoPlay();
    });
  }

  // Auto-play suave contínuo a cada 3.2 segundos
  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3200);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Pausa ao passar o mouse ou focar
  viewport.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  viewport.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  viewport.addEventListener('focusin', () => {
    isPaused = true;
  });
  viewport.addEventListener('focusout', () => {
    isPaused = false;
  });

  // Suporte a arrasto com Mouse
  let mouseStartX = 0;
  let prevTranslate = 0;
  let isDragging = false;

  function getCurrentTranslateX() {
    const transform = window.getComputedStyle(track).transform;
    if (transform && transform !== 'none') {
      const matrix = new DOMMatrixReadOnly(transform);
      return matrix.m41;
    }
    return 0;
  }

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    isPaused = true;
    mouseStartX = e.pageX;
    prevTranslate = getCurrentTranslateX();
    track.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = e.pageX - mouseStartX;
    const maxScroll = getMaxScroll();
    let newTranslate = prevTranslate + delta;

    // Resistência nas bordas
    if (newTranslate > 0) newTranslate = newTranslate * 0.3;
    if (newTranslate < -maxScroll) newTranslate = -maxScroll + (newTranslate + maxScroll) * 0.3;

    track.style.transform = `translateX(${newTranslate}px)`;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');
    const delta = e.pageX - mouseStartX;

    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        goToIndex(currentIndex + 1);
      } else {
        goToIndex(currentIndex - 1);
      }
    } else {
      goToIndex(currentIndex);
    }

    setTimeout(() => { isPaused = false; }, 1000);
    resetAutoPlay();
  });

  // Suporte a Touch / Swipe em mobile
  let touchStartX = 0;
  let touchPrevTranslate = 0;
  let isTouching = false;

  viewport.addEventListener('touchstart', (e) => {
    isTouching = true;
    isPaused = true;
    touchStartX = e.touches[0].clientX;
    touchPrevTranslate = getCurrentTranslateX();
    track.classList.add('is-dragging');
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
    const delta = e.touches[0].clientX - touchStartX;
    const maxScroll = getMaxScroll();
    let newTranslate = touchPrevTranslate + delta;

    if (newTranslate > 0) newTranslate = newTranslate * 0.3;
    if (newTranslate < -maxScroll) newTranslate = -maxScroll + (newTranslate + maxScroll) * 0.3;

    track.style.transform = `translateX(${newTranslate}px)`;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    if (!isTouching) return;
    isTouching = false;
    track.classList.remove('is-dragging');
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;

    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        goToIndex(currentIndex + 1);
      } else {
        goToIndex(currentIndex - 1);
      }
    } else {
      goToIndex(currentIndex);
    }

    setTimeout(() => { isPaused = false; }, 1500);
    resetAutoPlay();
  }, { passive: true });

  // Recalcular em resize
  window.addEventListener('resize', () => {
    goToIndex(currentIndex, false);
  });

  startAutoPlay();
}

// ==========================================
// RENDERIZADOR DO GLOBO TERRESTRE 3D (CANVAS)
// ==========================================
function initFooterGlobe() {
  const canvas = document.getElementById('footerGlobe');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth || 110;
  const height = canvas.clientHeight || 110;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const cx = width / 2;
  const cy = height / 2;
  const R = width * 0.42;

  // Coordenadas geográficas de Moçambique (Maputo)
  const targetLat = -25.96;
  const targetLon = 32.58;

  // Rotação inicial: aponta diretamente para Moçambique e posiciona no centro óptico
  let rotLon = -targetLon;
  let rotLat = 22;
  let pulsePhase = 0;
  let animTime = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let startRotLat = rotLat;

  // Geometria precisa dos Continentes Mundiais
  const continents = [
    // 1. África (Destaque Principal)
    [
      [37.3, 9.8], [36.8, 11.2], [32.3, 24.9], [31.3, 32.3], [27.8, 34.5], [22.0, 37.0],
      [12.0, 43.5], [11.8, 51.3], [5.0, 48.5], [-1.0, 41.5], [-4.7, 39.3], [-10.5, 40.5],
      [-15.0, 40.7], [-19.8, 35.8], [-25.96, 32.58], [-28.5, 32.4], [-33.9, 25.6],
      [-34.8, 20.0], [-33.9, 18.4], [-28.6, 16.5], [-22.5, 14.4], [-16.0, 11.8],
      [-5.8, 12.2], [4.5, 9.0], [6.3, 3.4], [5.3, -4.0], [4.4, -7.5], [11.0, -15.0],
      [14.7, -17.5], [21.0, -17.0], [28.0, -12.5], [35.8, -5.8], [37.3, 9.8]
    ],
    // 2. Madagascar
    [
      [-12.3, 49.3], [-16.0, 49.8], [-25.6, 47.1], [-25.0, 44.2], [-16.5, 44.0], [-12.3, 49.3]
    ],
    // 3. Europa
    [
      [36.0, -5.6], [43.8, -9.0], [43.5, -1.8], [47.5, -3.0], [50.0, 1.5], [54.0, 8.5],
      [58.0, 12.0], [62.0, 5.0], [71.0, 28.0], [68.0, 44.0], [55.0, 38.0], [46.0, 30.0],
      [41.0, 29.0], [38.0, 24.0], [37.0, 15.0], [41.0, 14.0], [44.0, 8.0], [41.0, 1.0],
      [36.5, -2.0], [36.0, -5.6]
    ],
    // 4. Reino Unido & Ilhas Britânicas
    [
      [50.0, -5.0], [58.5, -3.5], [55.0, -1.5], [51.0, 1.5], [50.0, -5.0]
    ],
    // 5. Ásia
    [
      [41.0, 29.0], [31.5, 34.5], [27.5, 34.0], [12.5, 43.5], [15.0, 53.0], [24.0, 57.0],
      [26.0, 56.0], [30.0, 48.0], [25.0, 62.0], [22.0, 69.0], [8.0, 77.5], [13.0, 80.0],
      [22.0, 89.0], [16.0, 96.0], [8.0, 98.0], [1.3, 103.8], [6.0, 102.0], [13.0, 100.5],
      [21.0, 108.0], [22.3, 114.2], [31.2, 121.5], [39.0, 118.0], [40.0, 124.0],
      [35.0, 129.0], [38.0, 128.0], [43.0, 132.0], [60.0, 160.0], [70.0, 178.0],
      [72.0, 140.0], [76.0, 100.0], [70.0, 70.0], [55.0, 60.0], [45.0, 38.0], [41.0, 29.0]
    ],
    // 6. Japão
    [
      [31.0, 130.5], [35.5, 139.7], [43.5, 145.0], [45.0, 142.0], [38.0, 138.0], [34.0, 132.0], [31.0, 130.5]
    ],
    // 7. Oceania (Austrália)
    [
      [-12.0, 131.0], [-11.0, 142.5], [-16.0, 145.5], [-24.0, 153.0], [-33.9, 151.2],
      [-38.0, 147.0], [-38.0, 140.0], [-35.0, 136.0], [-32.0, 128.0], [-35.0, 118.0],
      [-33.0, 115.0], [-22.0, 114.0], [-17.0, 122.0], [-14.0, 126.0], [-12.0, 131.0]
    ],
    // 8. Nova Zelândia
    [
      [-35.0, 174.0], [-41.5, 175.0], [-46.5, 168.0], [-43.0, 171.0], [-38.0, 178.0], [-35.0, 174.0]
    ],
    // 9. América do Sul
    [
      [12.0, -72.0], [10.5, -62.0], [5.0, -52.0], [-2.0, -44.0], [-5.0, -35.0], [-13.0, -38.5],
      [-23.0, -43.0], [-23.5, -46.6], [-30.0, -50.0], [-35.0, -57.0], [-40.0, -62.0],
      [-54.0, -68.0], [-53.0, -73.0], [-40.0, -74.0], [-33.0, -71.5], [-23.0, -70.5],
      [-14.0, -76.0], [-5.0, -81.0], [1.0, -79.0], [8.0, -77.0], [12.0, -72.0]
    ],
    // 10. América do Norte
    [
      [8.0, -77.0], [9.0, -83.0], [16.0, -88.0], [21.5, -87.0], [19.0, -96.0], [26.0, -97.0],
      [29.5, -94.0], [29.0, -89.0], [25.0, -80.5], [32.0, -81.0], [39.0, -74.0], [44.0, -64.0],
      [47.0, -53.0], [55.0, -60.0], [60.0, -65.0], [68.0, -85.0], [70.0, -130.0],
      [71.0, -156.0], [65.0, -168.0], [58.0, -158.0], [54.0, -133.0], [48.5, -124.5],
      [38.0, -123.0], [33.0, -118.0], [23.0, -110.0], [31.5, -114.0], [20.0, -105.0],
      [14.5, -92.0], [8.0, -77.0]
    ]
  ];

  // Malha complementar de pontos terrestres
  const landPoints = [
    [-25.96, 32.58], [-19.83, 34.85], [-15.12, 39.27], [-12.97, 40.52], [-22.0, 35.3],
    [-26.0, 28.0], [-33.9, 18.4], [-29.8, 31.0], [-22.5, 17.0], [-18.0, 26.0],
    [-15.4, 28.3], [-12.5, 13.5], [-8.8, 13.2], [-4.3, 15.3], [-1.3, 36.8],
    [-4.0, 39.6], [0.3, 32.5], [-2.0, 30.0], [-6.8, 39.3], [-14.0, 34.0],
    [4.0, 9.7], [6.5, 3.3], [5.3, -4.0], [9.0, 7.5], [12.0, -1.5], [14.7, -17.4],
    [5.5, -0.2], [12.1, 15.0], [9.0, 38.7], [15.6, 32.5], [30.0, 31.2], [36.8, 10.2],
    [36.7, 3.0], [33.5, -7.6], [31.6, -8.0], [24.0, 17.0], [21.0, 28.0], [27.0, 30.0],
    [-18.9, 47.5], [-12.3, 49.3], [-25.0, 47.0],
    [38.7, -9.1], [40.4, -3.7], [41.4, 2.2], [43.3, -8.4], [48.8, 2.3], [44.8, -0.6],
    [51.5, -0.1], [53.5, -2.2], [55.9, -3.2], [53.3, -6.3], [50.8, 4.3], [52.5, 13.4],
    [48.1, 11.6], [53.5, 10.0], [59.3, 18.0], [59.9, 10.7], [60.2, 24.9], [55.7, 12.6],
    [41.9, 12.5], [45.5, 9.2], [40.8, 14.3], [37.5, 15.1], [38.0, 23.7], [41.0, 28.9],
    [39.9, 32.8], [44.4, 26.1], [50.0, 19.9], [52.2, 21.0], [50.4, 30.5], [55.7, 37.6],
    [24.7, 46.7], [21.5, 39.2], [25.3, 55.3], [24.5, 54.4], [29.4, 48.0], [35.7, 51.4],
    [28.6, 77.2], [19.1, 72.9], [13.0, 80.3], [12.9, 77.6], [22.5, 88.4], [17.4, 78.5],
    [13.7, 100.5], [10.8, 106.6], [21.0, 105.8], [3.1, 101.7], [1.35, 103.8], [-6.2, 106.8],
    [39.9, 116.4], [31.2, 121.5], [23.1, 113.3], [22.3, 114.2], [30.6, 104.1], [34.3, 108.9],
    [35.7, 139.7], [34.7, 135.5], [35.0, 135.8], [43.0, 141.3], [33.6, 130.4],
    [-33.9, 151.2], [-37.8, 144.9], [-27.5, 153.0], [-31.9, 115.8], [-34.9, 138.6],
    [-16.9, 145.8], [-23.7, 133.9], [-12.5, 130.8], [-42.9, 147.3], [-36.8, 174.8],
    [21.3, -157.8], [19.7, -155.5], [7.1, 171.4], [1.4, 173.0], [-9.4, 159.9],
    [40.7, -74.0], [42.3, -71.0], [38.9, -77.0], [33.7, -84.4], [25.8, -80.2],
    [41.8, -87.6], [29.7, -95.4], [32.8, -96.8], [39.7, -104.9], [33.4, -112.0],
    [34.0, -118.2], [37.8, -122.4], [47.6, -122.3], [45.5, -122.7], [36.1, -115.1],
    [43.6, -79.4], [45.5, -73.6], [49.2, -123.1], [51.0, -114.0], [44.6, -63.6],
    [19.4, -99.1], [20.6, -103.3], [25.7, -100.3], [21.1, -86.8], [14.6, -90.5],
    [9.0, -79.5], [10.0, -84.1], [18.5, -69.9], [18.0, -66.8], [23.1, -82.4],
    [-23.5, -46.6], [-22.9, -43.2], [-15.8, -47.9], [-12.9, -38.5], [-3.7, -38.5],
    [-8.0, -34.9], [-30.0, -51.2], [-25.4, -49.3], [-1.4, -48.5], [-3.1, -60.0],
    [-34.6, -58.4], [-31.4, -64.2], [-32.9, -60.6], [-33.4, -70.6], [-23.6, -70.4],
    [-12.0, -77.0], [-16.4, -71.5], [-16.5, -68.1], [-25.3, -57.6], [-34.9, -56.2],
    [4.7, -74.1], [6.2, -75.6], [10.5, -66.9], [-0.2, -78.5]
  ];

  // Conexões e Arcos de Voo / Dados intercontinentais
  const arcs = [
    { from: [-25.96, 32.58], to: [38.7, -9.1], speed: 0.008, offset: 0.0 },
    { from: [-25.96, 32.58], to: [25.3, 55.3], speed: 0.009, offset: 0.25 },
    { from: [-25.96, 32.58], to: [-23.5, -46.6], speed: 0.007, offset: 0.5 },
    { from: [-25.96, 32.58], to: [1.35, 103.8], speed: 0.008, offset: 0.75 },
    { from: [38.7, -9.1], to: [40.7, -74.0], speed: 0.009, offset: 0.15 },
    { from: [40.7, -74.0], to: [37.8, -122.4], speed: 0.010, offset: 0.4 },
    { from: [37.8, -122.4], to: [35.7, 139.7], speed: 0.007, offset: 0.65 },
    { from: [35.7, 139.7], to: [-33.9, 151.2], speed: 0.008, offset: 0.35 },
    { from: [25.3, 55.3], to: [28.6, 77.2], speed: 0.011, offset: 0.8 }
  ];

  function project(lat, lon, alt = 0) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + rotLon) * (Math.PI / 180);
    const rad = R * (1 + alt);

    let x = rad * Math.sin(phi) * Math.sin(theta);
    let y = -rad * Math.cos(phi);
    let z = rad * Math.sin(phi) * Math.cos(theta);

    const tilt = rotLat * (Math.PI / 180);
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);
    const yT = y * cosT - z * sinT;
    const zT = y * sinT + z * cosT;

    return { x: cx + x, y: cy + yT, z: zT, visible: zT > 0 };
  }

  // Desenho de costas e fronteiras esféricas com interpolação suave
  function drawCoastline(points) {
    for (let i = 0; i < points.length; i++) {
      const pA = points[i];
      const pB = points[(i + 1) % points.length];

      const subSteps = 4;
      for (let s = 0; s < subSteps; s++) {
        const t1 = s / subSteps;
        const t2 = (s + 1) / subSteps;
        const lat1 = pA[0] + (pB[0] - pA[0]) * t1;
        const lon1 = pA[1] + (pB[1] - pA[1]) * t1;
        const lat2 = pA[0] + (pB[0] - pA[0]) * t2;
        const lon2 = pA[1] + (pB[1] - pA[1]) * t2;

        const pt1 = project(lat1, lon1);
        const pt2 = project(lat2, lon2);

        if (pt1.visible && pt2.visible) {
          const alpha = Math.min(1, Math.max(0.2, ((pt1.z + pt2.z) / (2 * R)) * 1.1));
          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.strokeStyle = `rgba(255, 225, 105, ${alpha * 0.75})`;
          ctx.lineWidth = 1.35;
          ctx.stroke();
        }
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    animTime += 1;

    // 1. Atmosfera e Fundo Glow
    const atmGrad = ctx.createRadialGradient(cx, cy, R * 0.7, cx, cy, R * 1.22);
    atmGrad.addColorStop(0, 'rgba(255, 208, 40, 0.08)');
    atmGrad.addColorStop(0.65, 'rgba(255, 184, 0, 0.22)');
    atmGrad.addColorStop(1, 'rgba(255, 184, 0, 0)');
    ctx.fillStyle = atmGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 1.22, 0, Math.PI * 2);
    ctx.fill();

    // 2. Base da Esfera (Recorte circular)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    const sphereGrad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
    sphereGrad.addColorStop(0, '#24221e');
    sphereGrad.addColorStop(0.7, '#141311');
    sphereGrad.addColorStop(1, '#080808');
    ctx.fillStyle = sphereGrad;
    ctx.fill();

    // 3. Linhas de Grade 3D (Paralelos e Meridianos com atenuação esférica)
    ctx.strokeStyle = 'rgba(255, 225, 105, 0.08)';
    ctx.lineWidth = 1;

    for (let lat = -60; lat <= 60; lat += 30) {
      ctx.beginPath();
      let started = false;
      for (let lon = -180; lon <= 180; lon += 6) {
        const p = project(lat, lon);
        if (p.visible) {
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else { ctx.lineTo(p.x, p.y); }
        } else {
          started = false;
        }
      }
      ctx.stroke();
    }

    for (let lon = -180; lon < 180; lon += 30) {
      ctx.beginPath();
      let started = false;
      for (let lat = -80; lat <= 80; lat += 5) {
        const p = project(lat, lon);
        if (p.visible) {
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else { ctx.lineTo(p.x, p.y); }
        } else {
          started = false;
        }
      }
      ctx.stroke();
    }

    // 4. Contornos Geográficos dos Continentes (3D Cliped)
    continents.forEach(poly => {
      drawCoastline(poly);
    });

    // 5. Malha de Partículas de Relevo Terrestre
    landPoints.forEach(([lat, lon]) => {
      const p = project(lat, lon);
      if (p.visible) {
        const depthAlpha = Math.max(0.18, (p.z / R) * 0.88);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 225, 105, ${depthAlpha})`;
        ctx.fill();
      }
    });

    // 6. Arcos Curvos de Conexão com Pulsos de Luz
    arcs.forEach(arc => {
      const steps = 18;
      ctx.beginPath();
      let arcStarted = false;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const lat = arc.from[0] + (arc.to[0] - arc.from[0]) * t;
        const lon = arc.from[1] + (arc.to[1] - arc.from[1]) * t;
        const alt = Math.sin(t * Math.PI) * 0.16;
        const p = project(lat, lon, alt);
        if (p.visible) {
          if (!arcStarted) { ctx.moveTo(p.x, p.y); arcStarted = true; }
          else { ctx.lineTo(p.x, p.y); }
        } else {
          arcStarted = false;
        }
      }
      ctx.strokeStyle = 'rgba(255, 208, 40, 0.22)';
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // Pulso viajante ao longo do arco
      const pulseT = ((animTime * arc.speed + arc.offset) % 1 + 1) % 1;
      const pLat = arc.from[0] + (arc.to[0] - arc.from[0]) * pulseT;
      const pLon = arc.from[1] + (arc.to[1] - arc.from[1]) * pulseT;
      const pAlt = Math.sin(pulseT * Math.PI) * 0.16;
      const pulsePt = project(pLat, pLon, pAlt);
      if (pulsePt.visible) {
        ctx.beginPath();
        ctx.arc(pulsePt.x, pulsePt.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE169';
        ctx.shadowColor = '#FFD028';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });

    // 7. Atualizar fase do radar de Moçambique continuamente
    pulsePhase = (pulsePhase + 0.055) % (Math.PI * 2);

    // 8. Ponto Central de Destaque: Moçambique (Maputo)
    const moz = project(targetLat, targetLon);
    if (moz.visible) {
      // Ondas de Radar Radiantes
      [0, 1.8].forEach(offset => {
        const currentPhase = (pulsePhase + offset) % (Math.PI * 2);
        const ringR = 3 + (currentPhase / (Math.PI * 2)) * 14;
        const ringAlpha = Math.max(0, 1 - (ringR / 17));

        ctx.beginPath();
        ctx.arc(moz.x, moz.y, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 208, 40, ${ringAlpha * 0.95})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Ponto Central Ouro Brilhante
      ctx.beginPath();
      ctx.arc(moz.x, moz.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#FFD028';
      ctx.shadowColor = '#FFD028';
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    ctx.restore();

    // 9. Anel Orbital Tecnológico Externo com Satélite Circulando
    const satAngle = animTime * 0.02;
    const satX = cx + Math.cos(satAngle) * (R * 1.15);
    const satY = cy + Math.sin(satAngle) * (R * 0.45);
    ctx.beginPath();
    ctx.arc(satX, satY, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE169';
    ctx.shadowColor = '#FFD028';
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Rotação Perpétua Ininterrupta: NUNCA PARA
    rotLon = (rotLon - 0.55) % 360;

    requestAnimationFrame(render);
  }

  // Interatividade suave (arraste sem pausar a rotação)
  const onDragStart = (clientX, clientY) => {
    isDragging = true;
    startX = clientX;
    startY = clientY;
    startRotLat = rotLat;
  };

  const onDragMove = (clientX, clientY) => {
    if (!isDragging) return;
    const dx = clientX - startX;
    const dy = clientY - startY;
    rotLon = (rotLon + dx * 0.05) % 360;
    rotLat = Math.max(-45, Math.min(45, startRotLat - dy * 0.35));
  };

  const onDragEnd = () => {
    isDragging = false;
  };

  canvas.addEventListener('mousedown', (e) => onDragStart(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => onDragMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', onDragEnd);

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) onDragStart(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) onDragMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  window.addEventListener('touchend', onDragEnd);
  window.addEventListener('touchcancel', onDragEnd);

  // Iniciar loop perpétuo imediatamente
  render();
}

function finishLoading() {
  const loader = document.getElementById('loader');
  const site = document.getElementById('site');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
    setTimeout(() => {
      if (loader) loader.style.display = 'none';
    }, 750);
  }
  if (site) {
    site.classList.add('visible');
    site.style.opacity = '1';
  }

  // Disparar animação GSAP do nome da Home e partículas
  try { initNameGSAP(); } catch (e) { }
  try { initSpaceParticles(); } catch (e) { }
}

// ==========================================
// PREFETCH INTELIGENTE PARA NAVEGAÇÃO INSTANTÂNEA
// ==========================================
function initLinkPrefetch() {
  if (location.protocol === 'file:') return; // Evitar erros de CORS/prefetch em protocolo local file://
  const prefetched = new Set();
  const prefetch = (href) => {
    if (!href || href.startsWith('http') || href.startsWith('#') || prefetched.has(href)) return;
    prefetched.add(href);
    try {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    } catch (e) { }
  };

  document.querySelectorAll('a[href$=".html"]').forEach(a => {
    const href = a.getAttribute('href');
    a.addEventListener('mouseenter', () => prefetch(href), { passive: true });
    a.addEventListener('touchstart', () => prefetch(href), { passive: true });
  });
}

// ==========================================
// ANIMAÇÃO GSAP DE ENTRADA POR PARTE DO NOME (ZAHAR -> PAULO -> MACAVE)
// ==========================================
let gsapNameRan = false;
function initNameGSAP() {
  if (gsapNameRan) return;
  const nameLines = document.querySelectorAll('.home-name-line');
  if (nameLines.length === 0 || typeof gsap === 'undefined') return;

  gsapNameRan = true;

  try {
    const tl = gsap.timeline({ delay: 0.15 });

    // 1. Entrada sequencial e elegante de cada parte do nome
    tl.fromTo(nameLines,
      {
        y: '125%',
        opacity: 0,
        skewY: 6,
        rotateX: -20
      },
      {
        y: '0%',
        opacity: 1,
        skewY: 0,
        rotateX: 0,
        duration: 1.1,
        stagger: 0.16,
        ease: 'power4.out'
      }
    );

    // 2. Entrada das tags de identificação
    const tagPills = document.querySelectorAll('.home-tag .tag-pill');
    if (tagPills.length > 0) {
      tl.fromTo(tagPills,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out'
        },
        '-=0.55'
      );
    }
  } catch (err) {
    console.warn('GSAP animation error:', err);
  }
}

// ==========================================
// SPACE PARTICLES (ESTRELAS, ASTEROIDES & METEOROS)
// ==========================================
function initSpaceParticles() {
  const canvas = document.getElementById('spaceParticles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let width = 0, height = 0;
  let stars = [];
  let asteroids = [];
  let meteor = null;
  const starCount = 38;
  const asteroidCount = 4;
  let animId = null;
  let isVisible = true;

  function resize() {
    width = canvas.width = (canvas.parentElement && canvas.parentElement.offsetWidth) || window.innerWidth || 300;
    height = canvas.height = (canvas.parentElement && canvas.parentElement.offsetHeight) || window.innerHeight || 400;
  }
  resize();
  window.addEventListener('resize', resize);

  // 1. Estrelas Cintilantes
  class Star {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 1.8 + 0.6;
      this.speed = Math.random() * 0.25 + 0.08;
      this.baseAlpha = Math.random() * 0.45 + 0.3;
      this.alpha = this.baseAlpha;
      this.twinkle = Math.random() * Math.PI * 2;
      this.twinkleSpeed = Math.random() * 0.025 + 0.01;
      this.isGold = Math.random() > 0.45;
    }
    update() {
      this.y -= this.speed;
      this.twinkle += this.twinkleSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.twinkle) * 0.2;
      if (this.y < -10) this.reset();
    }
    draw() {
      const a = Math.max(0, Math.min(1, this.alpha));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.isGold
        ? `rgba(255, 225, 105, ${a})`
        : `rgba(255, 255, 255, ${a})`;
      ctx.fill();
    }
  }

  // 2. Asteroides Flutuantes Irregulares
  class Asteroid {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = initial ? Math.random() * width : Math.random() * width * 0.5 - 50;
      this.y = initial ? Math.random() * height : -30;
      this.radius = Math.random() * 3.5 + 2.5;
      this.vx = Math.random() * 0.3 + 0.1;
      this.vy = Math.random() * 0.25 + 0.1;
      this.angle = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.015;
      this.opacity = Math.random() * 0.4 + 0.35;

      // Gera vértices irregulares de rocha espacial
      this.vertices = [];
      const numPts = 6;
      for (let i = 0; i < numPts; i++) {
        const a = (i / numPts) * Math.PI * 2;
        const r = this.radius * (0.75 + Math.random() * 0.5);
        this.vertices.push({ x: Math.cos(a) * r, y: Math.sin(a) * r });
      }
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.angle += this.rotSpeed;
      if (this.x > width + 40 || this.y > height + 40) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.beginPath();
      this.vertices.forEach((v, i) => {
        if (i === 0) ctx.moveTo(v.x, v.y);
        else ctx.lineTo(v.x, v.y);
      });
      ctx.closePath();
      ctx.fillStyle = `rgba(180, 175, 160, ${this.opacity})`;
      ctx.strokeStyle = `rgba(255, 225, 105, ${this.opacity * 0.4})`;
      ctx.lineWidth = 0.8;
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }

  // 3. Meteoro / Estrela Cadente
  class Meteor {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width * 0.7 + width * 0.15;
      this.y = Math.random() * height * 0.35;
      this.len = Math.random() * 80 + 40;
      this.speed = Math.random() * 8 + 6;
      this.angle = Math.PI / 4 + (Math.random() * 0.15 - 0.07);
      this.opacity = 1;
      this.active = false;
    }
    spawn() {
      this.reset();
      this.active = true;
    }
    update() {
      if (!this.active) return;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.opacity -= 0.02;
      if (this.opacity <= 0) this.active = false;
    }
    draw() {
      if (!this.active || this.opacity <= 0) return;
      const tailX = this.x - Math.cos(this.angle) * this.len;
      const tailY = this.y - Math.sin(this.angle) * this.len;
      const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
      grad.addColorStop(0, 'rgba(255, 208, 40, 0)');
      grad.addColorStop(0.7, `rgba(255, 225, 105, ${this.opacity * 0.7})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${this.opacity})`);
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }

  for (let i = 0; i < starCount; i++) stars.push(new Star());
  for (let i = 0; i < asteroidCount; i++) asteroids.push(new Asteroid());
  meteor = new Meteor();

  setInterval(() => {
    if (isVisible && !meteor.active && Math.random() > 0.3) {
      meteor.spawn();
    }
  }, 4500);

  function loop() {
    if (!isVisible) return;
    ctx.clearRect(0, 0, width, height);
    stars.forEach(s => { s.update(); s.draw(); });
    asteroids.forEach(a => { a.update(); a.draw(); });
    if (meteor.active) { meteor.update(); meteor.draw(); }
    animId = requestAnimationFrame(loop);
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries[0] && entries[0].isIntersecting;
    if (visible && !isVisible) {
      isVisible = true;
      cancelAnimationFrame(animId);
      loop();
    } else if (!visible) {
      isVisible = false;
      cancelAnimationFrame(animId);
    }
  }, { threshold: 0.05 });
  observer.observe(canvas);

  loop();
}

// ==========================================
// SLIDER DA SEÇÃO "QUEM SOU EU?" (WHO AM I?)
// ==========================================
function initWhoAmISlider() {
  const container = document.getElementById('whoAmISlider');
  if (!container) return;

  const slides = [
    {
      eyebrowKey: "about.slide1.eyebrow",
      titleKey: "about.slide1.title",
      taglineKey: "about.slide1.tagline",
      textKey: "about.slide1.text",
      imgSrc: "assets/imgs/pessoais/0121.jpeg"
    },
    {
      eyebrowKey: "about.slide2.eyebrow",
      titleKey: "about.slide2.title",
      taglineKey: "about.slide2.tagline",
      textKey: "about.slide2.text",
      imgSrc: "assets/imgs/pessoais/0116.jpeg"
    },
    {
      eyebrowKey: "about.slide3.eyebrow",
      titleKey: "about.slide3.title",
      taglineKey: "about.slide3.tagline",
      textKey: "about.slide3.text",
      imgSrc: "assets/imgs/pessoais/flic-7.jpeg"
    }
  ];

  let currentIdx = 0;
  const photoDots = container.querySelectorAll('.photo-dot');
  const vertDots = container.querySelectorAll('.vert-dot');
  const eyebrowEl = container.querySelector('[data-i18n-slide="eyebrow"]');
  const titleEl = container.querySelector('[data-i18n-slide="title"]');
  const taglineEl = container.querySelector('[data-i18n-slide="tagline"]');
  const textEl = container.querySelector('[data-i18n-slide="text"]');
  const imgEl = container.querySelector('.who-slide-img');

  function updateSlide(idx) {
    currentIdx = idx;
    const slide = slides[idx];
    const currentLang = getSavedLang();
    const dict = translations[currentLang] || translations.pt;

    if (eyebrowEl) {
      eyebrowEl.setAttribute('data-i18n', slide.eyebrowKey);
      eyebrowEl.textContent = dict[slide.eyebrowKey] || "";
    }
    if (titleEl) {
      titleEl.setAttribute('data-i18n', slide.titleKey);
      titleEl.textContent = dict[slide.titleKey] || "";
    }
    if (taglineEl) {
      taglineEl.setAttribute('data-i18n', slide.taglineKey);
      taglineEl.textContent = dict[slide.taglineKey] || "";
    }
    if (textEl) {
      textEl.setAttribute('data-i18n', slide.textKey);
      textEl.textContent = dict[slide.textKey] || "";
    }
    if (imgEl) {
      imgEl.style.opacity = '0.3';
      setTimeout(() => {
        imgEl.src = slide.imgSrc;
        imgEl.style.opacity = '1';
      }, 150);
    }

    photoDots.forEach((d, i) => d.classList.toggle('active', i === idx));
    vertDots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  photoDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => updateSlide(idx));
  });

  vertDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => updateSlide(idx));
  });

  // Auto-play a cada 6 segundos
  let autoTimer = setInterval(() => {
    updateSlide((currentIdx + 1) % slides.length);
  }, 6000);

  container.addEventListener('mouseenter', () => clearInterval(autoTimer));
  container.addEventListener('mouseleave', () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      updateSlide((currentIdx + 1) % slides.length);
    }, 6000);
  });
}