export type NavItem = {
  label: string;
  href: string;
};

export const site = {
  brand: {
    name: "Seu Ateliê",
    // Dica: o site de referência usa Rozha One (título) + Quicksand (corpo)
    // e muito texto em CAIXA ALTA.
    logoText: "A",
  },

  nav: [
    { label: "TRABALHOS", href: "#galeria" },
    { label: "O QUE ESTÁ INCLUSO", href: "#inclui" },
    { label: "DEPOIMENTOS", href: "#depoimentos" },
    { label: "DÚVIDAS", href: "#faq" },
  ] satisfies NavItem[],

  hero: {
    title: "ENXOVAIS E PEÇAS INFANTIS PERSONALIZADAS",
    subtitle:
      "Uma experiência completa: você escolhe o tema, as cores e os detalhes — e eu faço com capricho do começo ao fim.",
    ctaLabel: "CHAMAR NO WHATSAPP",
  },

  media: {
    // Substitua depois por uma foto real (public/hero.jpg)
    heroImageSrc: "/hero.jpg",
    heroImageAlt: "Foto do ateliê / trabalhos (substitua por uma imagem real)",
    // Pode ser um link do YouTube (embed) ou um .mp4 em /public
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  gallery: {
    title: "TRABALHOS",
    subtitle: "Algumas ideias para inspirar (troque pelas fotos reais depois).",
    images: [
      { src: "/portfolio/01.svg", alt: "Trabalho 1", description: "Enxoval completo com bordados personalizados e acabamento artesanal" },
      { src: "/portfolio/02.svg", alt: "Trabalho 2", description: "Kit maternidade com toalhas e fraldas bordadas" },
      { src: "/portfolio/03.svg", alt: "Trabalho 3", description: "Peças decorativas para quarto de bebê com tema safari" },
      { src: "/portfolio/04.svg", alt: "Trabalho 4", description: "Conjunto de lençóis e fronhas com apliques delicados" },
      { src: "/portfolio/05.svg", alt: "Trabalho 5", description: "Mantas e almofadas personalizadas com nome do bebê" },
      { src: "/portfolio/06.svg", alt: "Trabalho 6", description: "Kit higiene completo com detalhes em renda e laços" },
    ],
  },

  includes: {
    title: "O QUE ESTÁ INCLUSO",
    items: [
      "Personalização (tema, cores e bordados)",
      "Materiais premium e acabamento impecável",
      "Acompanhamento pelo WhatsApp",
      "Opções de kits (maternidade / quartinho / presentes)",
      "Entrega/retirada combinada",
    ],
    bonusTitle: "BÔNUS",
    bonusSubtitle: "Ao fechar o pedido, você recebe:",
    bonus: [
      "Checklist de medidas e itens para evitar erros",
      "Sugestões de combinação de cores",
      "Orientações de lavagem e conservação",
    ],
  },

  offer: {
    // Use como “ficha rápida” do pedido (similar ao bloco do Wix)
    details: [
      { k: "Prazo", v: "A combinar conforme agenda" },
      { k: "Entrega", v: "Fortaleza e região (ou envio)" },
      { k: "Vagas", v: "Sob disponibilidade" },
      { k: "Nível", v: "Do básico ao premium" },
    ],
    priceLabelTop: "",
    installments: "",
    cash: "",
    ctaLabel: "PEDIR EXEMPLO",
  },

  about: {
    title: "OLÁ, PRAZER!",
    name: "Seu Nome",
    text:
      "Conte um pouco da história do ateliê: há quanto tempo faz, qual o diferencial, e por que as pessoas podem confiar em você. Deixe humano e simples.",
  },

  testimonials: {
    title: "Depoimentos",
    subtitle:
      "Prova social simples (você pode trocar por prints do WhatsApp/Instagram).",
    items: [
      {
        name: "Cliente 1",
        text: "Chegou perfeito! Tudo muito delicado e com um acabamento lindo.",
      },
      {
        name: "Cliente 2",
        text: "Amei as cores e o cuidado com cada detalhe. Ficou do jeitinho que eu queria!",
      },
      {
        name: "Cliente 3",
        text: "Atendimento rápido e entrega no prazo. Super recomendo!",
      },
    ],
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Vocês fazem por encomenda?",
        a: "Sim! Você escolhe o tema e as cores e nós montamos o seu kit sob medida.",
      },
      {
        q: "Qual o prazo médio?",
        a: "Depende do item e da fila de produção. Pelo WhatsApp você já recebe a estimativa.",
      },
      {
        q: "Entregam em Fortaleza e região?",
        a: "Sim. Podemos combinar entrega/retirada e também opções de envio.",
      },
      {
        q: "Como pedir orçamento?",
        a: "Clique no botão do WhatsApp e mande referências/medidas. Respondemos com opções e valores.",
      },
    ],
  },

  social: {
    instagram: "https://www.instagram.com/seu_atelie",
    youtube: "https://www.youtube.com/@seu_canal",
  },

  whatsapp: {
    // Somente dígitos: DDI + DDD + número
    phone: "5555999999999",
    defaultMessage: "Olá! Vim pelo site e gostaria de fazer um orçamento 😊",
  },

  footer: {
    brandLine: "Ateliê infantil",
    location:
      "Fortaleza - CE (retirada/entrega a combinar)",
    credits: "Feito com carinho.",
  },
} as const;
