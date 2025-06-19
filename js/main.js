/**
 * Funcionalidades Gerais - Illinformática
 * Arquivo para funcionalidades do site (menu mobile, AOS, etc.)
 */

/**
 * Menu Mobile Toggle
 * Controla a abertura e fechamento do menu mobile
 */
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileLinks = document.querySelectorAll(".header__mobile-link");

  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add("active");
    }
    if (mobileOverlay) {
      mobileOverlay.classList.add("active");
    }
    // Adiciona classe que previne scroll
    document.body.classList.add("no-scroll");
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
    if (mobileOverlay) {
      mobileOverlay.classList.remove("active");
    }
    // Remove a classe que previne scroll
    document.body.classList.remove("no-scroll");
  }

  // Event listeners
  if (mobileToggle) mobileToggle.addEventListener("click", openMobileMenu);
  if (mobileClose) mobileClose.addEventListener("click", closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

  // Fechar menu mobile ao clicar em um link com delay reduzido
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      console.log(
        `[DEBUG] Menu mobile - clique em link: ${this.getAttribute("href")}`
      );
      // Delay reduzido para melhor responsividade
      setTimeout(() => {
        console.log(`[DEBUG] Menu mobile - fechando menu após delay`);
        closeMobileMenu();
      }, 50);
    });
  });

  console.log(
    `[DEBUG] Menu mobile inicializado com ${mobileLinks.length} links`
  );
}

/**
 * Inicializar AOS (Animate On Scroll)
 * Mantido para compatibilidade com elementos futuros
 */
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }
}

/**
 * Banner de Topo (se existir)
 * Funcionalidade para fechar banner promocional
 */
function initTopBanner() {
  const closeBanner = document.querySelector(".close-banner");
  if (closeBanner) {
    closeBanner.addEventListener("click", function () {
      const topBanner = document.querySelector(".top-banner");
      if (topBanner) {
        topBanner.style.display = "none";
      }
    });
  }
}

/**
 * Smooth Scroll para links internos - VERSÃO AVANÇADA
 * Melhora a experiência de navegação com cálculo preciso de offset
 */
function initSmoothScroll() {
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

  console.log(`[DEBUG] Encontrados ${allAnchorLinks.length} links âncora`);

  allAnchorLinks.forEach((link, index) => {
    const href = link.getAttribute("href");
    console.log(
      `[DEBUG] Link ${index + 1}: ${href} (classe: ${link.className})`
    );

    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      console.log(`[DEBUG] Click detectado em: ${href}`);

      // Verifica se é um link para seção (não apenas #)
      if (href === "#") {
        console.log(`[DEBUG] Link apenas # - ignorando`);
        return;
      }

      const target = document.querySelector(href);
      console.log(`[DEBUG] Target encontrado:`, target);

      if (target) {
        e.preventDefault();
        console.log(`[DEBUG] PreventDefault executado`);

        // Calcula o offset para compensar header fixo com verificação mobile
        const header = document.querySelector(".header");
        let headerHeight = 80; // Default desktop

        if (header) {
          // Verificar se está em mobile baseado na largura da tela
          if (window.innerWidth <= 768) {
            headerHeight = 70; // Altura mobile conforme CSS
            console.log(
              `[DEBUG] Modo mobile detectado - header: ${headerHeight}px`
            );
          } else {
            headerHeight = header.offsetHeight;
            console.log(`[DEBUG] Modo desktop - header: ${headerHeight}px`);
          }
        }

        const targetPosition = target.offsetTop - headerHeight;
        console.log(
          `[DEBUG] Posição calculada: ${targetPosition}px (offset: ${target.offsetTop}px - header: ${headerHeight}px)`
        );

        // Scroll suave
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        console.log(`[DEBUG] Scroll executado para ${href}`);
      } else {
        console.error(`[ERROR] Target não encontrado para: ${href}`);
      }
    });
  });
}

/**
 * Highlight do menu ativo baseado na seção visível
 */
function initActiveMenuTracking() {
  function updateActiveMenu() {
    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll(
      ".header__menu-link, .header__mobile-link"
    );

    let currentSection = "";
    const scrollPosition = window.scrollY + 100; // Offset para ativação antecipada

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Remove active class de todos os links
    menuLinks.forEach((link) => {
      link.classList.remove("active");

      // Adiciona active class ao link correspondente
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  // Throttle function para melhor performance
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Event listener para scroll (com throttle para performance)
  window.addEventListener("scroll", throttle(updateActiveMenu, 100));

  // Event listener para redimensionamento da tela (recalcular offset do header)
  window.addEventListener(
    "resize",
    throttle(() => {
      // Forçar recálculo do offset na próxima navegação
      console.log("Tela redimensionada - offset do header será recalculado");
    }, 250)
  );

  // Executa uma vez no carregamento
  updateActiveMenu();
}

/**
 * Inicialização geral do site
 * Chama todas as funções de inicialização
 * Navegação desabilitada - usando mobile-nav-simple.js
 */
function initSite() {
  // initMobileMenu(); // DESABILITADO - usando mobile-nav-simple.js
  initAOS();
  initTopBanner();
  // initSmoothScroll(); // DESABILITADO - usando mobile-nav-simple.js
  // initActiveMenuTracking(); // DESABILITADO - usando mobile-nav-simple.js

  console.log("Funcionalidades gerais do site inicializadas!");
  console.log("Navegação mobile delegada para mobile-nav-simple.js");
}

/**
 * Inicializar quando o DOM estiver carregado
 */
document.addEventListener("DOMContentLoaded", initSite);
