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

  function openMobileMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Event listeners
  if (mobileToggle) mobileToggle.addEventListener("click", openMobileMenu);
  if (mobileClose) mobileClose.addEventListener("click", closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

  // Fechar menu ao clicar em um link
  const mobileLinks = document.querySelectorAll(".header__mobile-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
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
 * Smooth Scroll para links internos
 * Melhora a experiência de navegação
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Verificar se é um link válido (não apenas #)
      if (href && href !== "#") {
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Calcular offset do header fixo
          const headerHeight =
            document.querySelector(".header")?.offsetHeight || 80;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

/**
 * Inicialização geral do site
 * Chama todas as funções de inicialização
 */
function initSite() {
  initMobileMenu();
  initAOS();
  initTopBanner();
  initSmoothScroll();

  console.log("Funcionalidades gerais do site inicializadas!");
}

/**
 * Inicializar quando o DOM estiver carregado
 */
document.addEventListener("DOMContentLoaded", initSite);
