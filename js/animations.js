/**
 * Animações GSAP - Illinformática
 * Arquivo dedicado para todas as animações do site
 * Mantém a identidade tecnológica com movimentos sutis e sofisticados
 */

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Verificação de dispositivo para performance
const isMobile = window.innerWidth <= 768;

/**
 * Função principal de inicialização das animações
 * Desabilita animações em dispositivos móveis para melhor performance
 */
function initAnimations() {
  if (isMobile) {
    console.log(
      "Animações desabilitadas em dispositivos móveis para melhor performance"
    );
    return;
  }

  // Reset inicial da imagem principal para evitar transformações indesejadas
  gsap.set(".s-hero__main-image", {
    rotation: 0,
    transformOrigin: "center center",
  });

  // === HEADER ANIMATIONS ===
  initHeaderAnimations();

  // === HERO SECTION ANIMATIONS ===
  initHeroAnimations();

  // === BENEFICIOS TEXT ANIMATIONS ===
  initBeneficiosTextAnimations();

  // === SERVICOS SECTION ANIMATIONS ===
  initServicosAnimations();

  // === QUEM SOMOS SECTION ANIMATIONS ===
  initQuemSomosAnimations();

  // === DEPOIMENTOS SECTION ANIMATIONS ===
  initDepoimentosAnimations();

  // === CONTATO SECTION ANIMATIONS ===
  initContatoAnimations();

  // === SCROLL TRIGGER ANIMATIONS ===
  initScrollAnimations();

  // === HOVER ANIMATIONS ===
  initHoverAnimations();

  console.log("Animações GSAP inicializadas com sucesso!");
}

/**
 * Animações do Header
 * Fade-in dos elementos com delays escalonados
 */
function initHeaderAnimations() {
  // Fade-in dos links do menu com delay escalonado
  gsap.fromTo(
    ".header__menu-link",
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.2,
    }
  );

  // Fade-in do botão CTA do header
  gsap.fromTo(
    ".header__cta-btn",
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "expo.out",
      delay: 0.6,
    }
  );
}

/**
 * Animações da Seção Hero
 * Entrada sequencial dos elementos com movimentos sutis
 */
function initHeroAnimations() {
  // Tag de introdução
  gsap.fromTo(
    ".s-hero__tag",
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    }
  );

  // Título principal com movimento vertical
  gsap.fromTo(
    ".s-hero__title",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.5,
    }
  );

  // Subtítulo
  gsap.fromTo(
    ".s-hero__subtitle",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.8,
    }
  );

  // Botão CTA com zoom
  gsap.fromTo(
    ".s-hero__cta-btn",
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "expo.out",
      delay: 1.1,
    }
  );

  // Imagem principal com parallax sutil
  gsap.fromTo(
    ".s-hero__main-image",
    {
      opacity: 0,
      scale: 0.9,
      rotation: 0,
      scaleX: -1,
    },
    {
      opacity: 1,
      scale: 1.4,
      rotation: 0,
      scaleX: -1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.7,
    }
  );

  // Background blur com fade
  gsap.fromTo(
    ".s-hero__bg-blur",
    {
      opacity: 0,
    },
    {
      opacity: 0.8,
      duration: 2,
      ease: "power2.out",
      delay: 0.5,
    }
  );

  // Cards flutuantes com scale animation
  gsap.fromTo(
    ".s-hero__card",
    {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.2,
      delay: 1.3,
    }
  );
}

/**
 * Animações dos Textos da Seção de Benefícios
 * Entrada elegante apenas dos elementos textuais
 */
function initBeneficiosTextAnimations() {
  // Tag "Nosso diferencial" com deslizamento horizontal
  gsap.fromTo(
    ".s-beneficios__tag-text",
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".s-beneficios",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Título principal com fade-in vertical
  gsap.fromTo(
    ".s-beneficios__title",
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".s-beneficios__title",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Títulos dos itens com entrada escalonada
  gsap.fromTo(
    ".s-beneficios__item-title",
    {
      opacity: 0,
      x: -25,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".s-beneficios__list",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Descrições dos itens com fade-in sequencial
  gsap.fromTo(
    ".s-beneficios__item-description",
    {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".s-beneficios__list",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Subtítulo da imagem com entrada elegante
  gsap.fromTo(
    ".s-beneficios__image-subtitle",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".s-beneficios__image-subtitle",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Animações da Seção de Serviços
 * Entrada elegante dos elementos com movimentos tecnológicos
 */
function initServicosAnimations() {
  // Badge "Serviços" com fade-in e escala
  gsap.fromTo(
    ".s-servicos__badge-text",
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".s-servicos",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Título principal com entrada vertical
  gsap.fromTo(
    ".s-servicos__title",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".s-servicos__title",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Subtítulo com fade suave
  gsap.fromTo(
    ".s-servicos__subtitle",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".s-servicos__subtitle",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Cards com entrada escalonada
  gsap.fromTo(
    ".s-servicos__card",
    {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".s-servicos__grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Ícones dos cards com rotação e escala
  gsap.fromTo(
    ".s-servicos__card-icon",
    {
      opacity: 0,
      scale: 0.5,
      rotation: -20,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".s-servicos__grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Títulos dos cards
  gsap.fromTo(
    ".s-servicos__card-title",
    {
      opacity: 0,
      x: -20,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".s-servicos__grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Descrições dos cards
  gsap.fromTo(
    ".s-servicos__card-description",
    {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.7,
      scrollTrigger: {
        trigger: ".s-servicos__grid",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Elemento flutuante "e muito +" com entrada dramática
  gsap.fromTo(
    ".s-servicos__floating-icon",
    {
      opacity: 0,
      scale: 0,
      rotation: 180,
    },
    {
      opacity: 0.9,
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "expo.out",
      delay: 1,
      scrollTrigger: {
        trigger: ".s-servicos__floating-text",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Background blur com fade gradual
  gsap.fromTo(
    ".s-servicos__blur-image",
    {
      opacity: 0,
      scale: 1.2,
    },
    {
      opacity: 0.8,
      scale: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".s-servicos",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Parallax sutil no background blur
  gsap.to(".s-servicos__blur-image", {
    y: -30,
    rotation: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".s-servicos",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}

/**
 * Animações da Seção Quem Somos
 * Entrada sequencial dos elementos com movimentos sutis
 */
function initQuemSomosAnimations() {
  // Timeline principal da seção
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s-quemsomos",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });

  // Badge de introdução
  tl.fromTo(
    ".s-quemsomos__tag",
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
    }
  );

  // Título principal
  tl.fromTo(
    ".s-quemsomos__title",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

  // Subtítulo
  tl.fromTo(
    ".s-quemsomos__subtitle",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.6"
  );

  // Botão CTA
  tl.fromTo(
    ".s-quemsomos__cta-btn",
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.4"
  );

  // Cards com stagger
  tl.fromTo(
    ".s-quemsomos__card",
    {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    },
    "-=0.6"
  );

  // Ícones dos cards com rotação
  tl.fromTo(
    ".s-quemsomos__card-icon",
    {
      rotation: -180,
      scale: 0.5,
    },
    {
      rotation: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2,
    },
    "-=1.2"
  );

  // Imagem lateral
  tl.fromTo(
    ".s-quemsomos__image",
    {
      opacity: 0,
      scale: 0.8,
      x: 50,
    },
    {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1.2,
      ease: "power2.out",
    },
    "-=1.8"
  );

  // Animação de parallax sutil na imagem
  gsap.to(".s-quemsomos__image", {
    y: -30,
    scrollTrigger: {
      trigger: ".s-quemsomos",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  // Hover animations para os cards
  gsap.utils.toArray(".s-quemsomos__card").forEach((card) => {
    const icon = card.querySelector(".s-quemsomos__card-icon");

    card.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        rotation: 10,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        rotation: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  console.log("Animações da seção Quem Somos inicializadas!");
}

/**
 * Animações da Seção de Depoimentos
 * Entrada elegante dos elementos com ScrollTrigger
 */
function initDepoimentosAnimations() {
  // Timeline principal para a seção de depoimentos
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s-depoimentos",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Badge "Depoimentos" com deslizamento
  tl.fromTo(
    ".s-depoimentos__badge-text",
    {
      opacity: 0,
      y: -20,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    }
  );

  // Título principal
  tl.fromTo(
    ".s-depoimentos__title",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.4"
  );

  // Subtítulo
  tl.fromTo(
    ".s-depoimentos__subtitle",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.6"
  );

  // Cards dos depoimentos com entrada escalonada
  tl.fromTo(
    ".s-depoimentos__card",
    {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    },
    "-=0.4"
  );

  // Hover animations para os cards de depoimento
  gsap.utils.toArray(".s-depoimentos__card").forEach((card) => {
    const avatar = card.querySelector(".s-depoimentos__client-avatar");

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(avatar, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(avatar, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  console.log("Animações da seção Depoimentos inicializadas!");
}

/**
 * Animações da Seção de Contato/Painel
 * Entrada elegante dos elementos com ScrollTrigger
 */
function initContatoAnimations() {
  // Timeline principal para a seção de contato
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s-contato",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Badge "Painel" com deslizamento de cima
  tl.fromTo(
    ".s-contato__badge-text",
    {
      opacity: 0,
      y: -30,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    }
  );

  // Título principal com efeito de escala
  tl.fromTo(
    ".s-contato__title",
    {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.4"
  );

  // Descrição principal
  tl.fromTo(
    ".s-contato__description",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  );

  // Mensagem de alerta/orientação
  tl.fromTo(
    ".s-contato__alert",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.2"
  );

  // Botão WhatsApp com efeito especial
  tl.fromTo(
    ".s-contato__whatsapp-btn",
    {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.2"
  );

  // Cards aparecem em sequência com stagger
  tl.fromTo(
    ".s-contato__card",
    {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    },
    "-=0.3"
  );

  // Animações de hover para os cards (independentes do ScrollTrigger)
  const cards = document.querySelectorAll(".s-contato__card");
  cards.forEach((card) => {
    const icon = card.querySelector(".s-contato__card-icon");

    card.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Animação do botão WhatsApp (pulsação sutil)
  gsap.to(".s-contato__whatsapp-btn", {
    scale: 1.02,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
  });

  console.log("Animações da seção Contato inicializadas!");
}

/**
 * Animações baseadas em Scroll
 * Parallax e animações que respondem ao scroll da página
 */
function initScrollAnimations() {
  // Parallax sutil na imagem principal
  gsap.to(".s-hero__main-image", {
    y: -50,
    rotation: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".s-hero",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  // Barra inferior com deslizamento horizontal
  gsap.fromTo(
    ".s-hero__bottom-nav",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".s-hero__bottom-nav",
        start: "top 90%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animação das keywords da barra inferior
  gsap.fromTo(
    ".s-hero__keyword",
    {
      opacity: 0,
      x: -20,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".s-hero__keywords",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Ícone do mouse com bounce sutil
  gsap.fromTo(
    ".s-hero__mouse-icon",
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".s-hero__mouse-icon",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Animações de Hover
 * Interações sutis nos elementos
 */
function initHoverAnimations() {
  // Hover animations para cards
  document.querySelectorAll(".s-hero__card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

/**
 * Inicializar animações quando o DOM estiver carregado
 */
document.addEventListener("DOMContentLoaded", initAnimations);

/**
 * Reinicializar animações em caso de redimensionamento da janela
 * (Opcional - para casos específicos)
 */
window.addEventListener("resize", () => {
  // Verificar se mudou de mobile para desktop ou vice-versa
  const newIsMobile = window.innerWidth <= 768;
  if (newIsMobile !== isMobile) {
    location.reload(); // Recarregar página para aplicar configurações corretas
  }
});
