/**
 * Navegação Mobile Simples - Illinformática
 * Versão focada e robusta para resolver problemas de ancoragem
 */

// Aguardar carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log("[MOBILE-NAV] Inicializando navegação mobile simples...");

  // Elementos do menu mobile
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileLinks = document.querySelectorAll(".header__mobile-link");

  // Verificar se os elementos existem
  console.log("[MOBILE-NAV] Elementos encontrados:", {
    toggle: !!mobileToggle,
    menu: !!mobileMenu,
    close: !!mobileClose,
    overlay: !!mobileOverlay,
    links: mobileLinks.length,
  });

  // Funções do menu
  function openMenu() {
    console.log("[MOBILE-NAV] Abrindo menu");
    if (mobileMenu) mobileMenu.classList.add("active");
    if (mobileOverlay) mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    console.log("[MOBILE-NAV] Fechando menu");
    if (mobileMenu) mobileMenu.classList.remove("active");
    if (mobileOverlay) mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Event listeners do menu
  if (mobileToggle) {
    mobileToggle.addEventListener("click", openMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMenu);
  }

  // Função de scroll personalizada mais robusta
  function smoothScrollTo(targetPosition, duration = 800) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Navegação com scroll suave
  function navigateToSection(targetId) {
    console.log("[MOBILE-NAV] Navegando para:", targetId);

    const target = document.querySelector(targetId);
    if (!target) {
      console.error("[MOBILE-NAV] Seção não encontrada:", targetId);
      return;
    }

    // Calcular offset do header
    const isMobile = window.innerWidth <= 768;
    const headerHeight = isMobile ? 70 : 80;
    const targetPosition = target.offsetTop - headerHeight;

    console.log("[MOBILE-NAV] Scroll para:", {
      section: targetId,
      isMobile,
      headerHeight,
      targetOffset: target.offsetTop,
      finalPosition: targetPosition,
    });

    // Fechar menu primeiro
    closeMenu();

    // Aguardar um pouco para o menu fechar e então fazer scroll
    setTimeout(() => {
      // Usar scroll customizado para garantir funcionamento
      smoothScrollTo(targetPosition, 800);
      console.log("[MOBILE-NAV] Scroll executado");
    }, 150);
  }

  // Event listeners dos links mobile
  mobileLinks.forEach((link, index) => {
    const href = link.getAttribute("href");
    console.log(`[MOBILE-NAV] Configurando link ${index + 1}: ${href}`);

    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("[MOBILE-NAV] Clique no link:", href);

      if (href && href !== "#") {
        navigateToSection(href);
      }
    });
  });

  // Também configurar links desktop para consistência
  const desktopLinks = document.querySelectorAll(".header__menu-link");
  desktopLinks.forEach((link, index) => {
    const href = link.getAttribute("href");
    console.log(`[MOBILE-NAV] Configurando link desktop ${index + 1}: ${href}`);

    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("[MOBILE-NAV] Clique no link desktop:", href);

      if (href && href !== "#") {
        navigateToSection(href);
      }
    });
  });

  console.log("[MOBILE-NAV] Navegação mobile configurada com sucesso!");
});
