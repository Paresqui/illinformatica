/**
 * Navigation.js - Navegação Suave e Controle do Menu Mobile
 * Responsável por gerenciar a navegação entre seções e o comportamento do menu mobile
 */

document.addEventListener("DOMContentLoaded", function () {
  // Elementos do menu mobile
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileLinks = document.querySelectorAll(".header__mobile-link");

  // Função para fechar o menu mobile
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

  // Função para abrir o menu mobile
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

  // Event listeners para o menu mobile
  if (mobileToggle) {
    mobileToggle.addEventListener("click", openMobileMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMobileMenu);
  }

  // Fechar menu mobile ao clicar em um link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Reduzir delay para melhorar responsividade
      setTimeout(() => {
        closeMobileMenu();
      }, 50);
    });
  });

  // Navegação suave adicional para todos os links âncora
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

  allAnchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Verifica se é um link para seção (não apenas #)
      if (href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // Calcula o offset para compensar header fixo com verificação mobile
        const header = document.querySelector(".header");
        let headerHeight = 80; // Default desktop

        if (header) {
          // Verificar se está em mobile baseado na largura da tela
          if (window.innerWidth <= 768) {
            headerHeight = 70; // Altura mobile conforme CSS
          } else {
            headerHeight = header.offsetHeight;
          }
        }

        const targetPosition = target.offsetTop - headerHeight;

        // Scroll suave
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight do menu ativo baseado na seção visível
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

  console.log("Sistema de navegação inicializado!");
});
