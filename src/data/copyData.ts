/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeadlineOption, FAQItem, ProductItem, NewsItem } from '../types';

export const identityData = {
  name: "Choque Rei Fut",
  concept: "O Coração da Arquibancada no E-commerce",
  positioning: "A Choque Rei Fut é a fusão perfeita entre a resenha apaixonada da arquibancada (notícias quentes, debates raiz, análise tática clubista na medida certa) e uma curadoria premium de vestuário e artigos esportivos. Nosso diferencial é falar a língua do torcedor fanático, transformando o engajamento emocional de cada debate tático em desejo imediato de compra.",
  pillars: [
    {
      title: "Resenha Quente",
      description: "Conteúdo focado nos debates mais acirrados de clássicos paulistas e nacionais, gerando visitas orgânicas e engajamento brutal no pré-jogo."
    },
    {
      title: "Mantos Selecionados",
      description: "Curadoria de alta qualidade, desde réplicas de época até camisas de jogo e acessórios de arquibancada que não se encontram em lojas genéricas."
    },
    {
      title: "Confiança de Arquibancada",
      description: "Processo de compra veloz, suporte humanizado de torcedor para torcedor e total transparência contra medos de fraude."
    }
  ]
};

export const headlines: HeadlineOption[] = [
  {
    id: "passion-focus",
    tag: "OPÇÃO 1: Foco na Paixão e Exclusividade (Foco em Palavras-Chave de Intenção)",
    title: "Choque Rei Fut: Onde a Paixão da Arquibancada se Transforma no Seu Próximo Manto Sagrado!",
    subtitle: "Do debate fervente no apito inicial às camisas oficiais e históricas mais cobiçadas do Brasil. Sinta-se no estádio com frete grátis na primeira compra e até 12x no cartão!",
    cta: "Garantir Meu Manto Sagrado",
    explanation: "Foca na paixão profunda do torcedor de arquibancada. É ideal para anúncios no Google Search voltados para termos emocionais e camisas específicas, pois usa gatilhos de exclusividade, pertencimento e o benefício do Frete Grátis."
  },
  {
    id: "collector-discount",
    tag: "OPÇÃO 2: Foco em Rapidez, Conveniência e Oferta imbatível (Alta Conversão Direct)",
    title: "Não é Só Futebol, É Identidade. Vista a Tradição com a Choque Rei Fut!",
    subtitle: "Encontre mantos exclusivos, coleções clássicas retrô e artigos de torcida com entrega expressa segurada e parcelamento flexível. Compre em até 3x sem juros no PIX com cashback!",
    cta: "Garantir Armadura com Desconto",
    explanation: "Excelente para campanhas de Google Ads de meio/fundo de funil (ex: 'comprar camisa retrô do Palmeiras' ou 'camisa do São Paulo promoção'). Apresenta vantagens financeiras diretas (PIX sem juros, cashback) e quebra a barreira da desconfiança de entrega rápida."
  },
  {
    id: "news-commerce-fusion",
    tag: "OPÇÃO 3: Foco em Conexão de Comunidade (Notícias + Loja - Ideal para Tráfego de Conteúdo)",
    title: "Entre no Debate, Vista a História: A Choque Rei Fut É a Sua Nova Casa!",
    subtitle: "O portal definitivo que conecta a resenha mais quente do futebol brasileiro aos mantos de maior qualidade do mercado. Qualidade impecável, tecidos respiráveis e costuras reforçadas.",
    cta: "Explorar Coleções Oficiais",
    explanation: "Estratégia híbrida fantástica para anúncios de Display, Discovery ou campanhas focadas em entusiastas de futebol. É um convite de comunidade que valida o desejo de debater e de forma paralela leva o usuário a conhecer o catálogo de mantos premium."
  }
];

export const products: ProductItem[] = [
  {
    id: "manto-tricolor-2026",
    name: "Manto Tricolor Sovereign Edition 2026/27",
    price: 189.90,
    originalPrice: 249.90,
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1541019087413-a4c33b7ba8ef?auto=format&fit=crop&q=80&w=600", // Will fallback/illustrate nicely
    badge: "MAIS VENDIDAS",
    category: "mantos",
    ctaText: "Garantir Manto Sagrado",
    colors: ["#ea580c", "#ffffff", "#000000"]
  },
  {
    id: "manto-alviverde-classic",
    name: "Manto Alviverde Imortais 1993 Retrô",
    price: 199.90,
    originalPrice: 269.90,
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&q=80&w=600",
    badge: "FRETE GRÁTIS",
    category: "retro",
    ctaText: "Garantir Minha Armadura",
    colors: ["#16a34a", "#ffffff"]
  },
  {
    id: "cachecol-derby-lenda",
    name: "Cachecol de Lenda 'Choque Rei' Cetim Duplo",
    price: 69.90,
    originalPrice: 99.90,
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600",
    badge: "LANÇAMENTO",
    category: "arquibancada",
    ctaText: "Garantir Meu Acessório",
    colors: ["#ef4444", "#ffffff", "#16a34a"]
  },
  {
    id: "manto-sagrado-vintage-82",
    name: "Manto Vintage 1982 'Democracia'",
    price: 219.90,
    originalPrice: 299.90,
    rating: 4.9,
    reviews: 114,
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=600",
    badge: "COLECIONADOR",
    category: "retro",
    ctaText: "Reservar Manto Histórico",
    colors: ["#000000", "#ffffff", "#ef4444"]
  },
  {
    id: "chopeira-portatil-bancada",
    name: "Chopeira de Choque Portátil - Ultra Pressão",
    price: 149.90,
    originalPrice: 199.90,
    rating: 4.7,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=600",
    badge: "FUTEBOL EM CASA",
    category: "acessorios",
    ctaText: "Comprar Chopeira",
    colors: ["#374151", "#d1d5db"]
  },
  {
    id: "jaqueta-puffer-bancada",
    name: "Jaqueta Puffer Corta-Vento Templo Sagrado",
    price: 249.90,
    originalPrice: 349.90,
    rating: 4.9,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=600",
    badge: "PREPARAÇÃO FRIO",
    category: "arquibancada",
    ctaText: "Vestir Jaqueta de Torcedor",
    colors: ["#111827", "#9ca3af"]
  }
];

export const newsArticles: NewsItem[] = [
  {
    id: "news-derby-tactics",
    title: "Análise Choque-Rei: Como a variação tática de três zagueiros calou o Morumbi",
    excerpt: "Nossos colunistas debatem os bastidores da última partida. O duelo de tirar o fôlego dividiu corações nas arquibancadas e deixou claro que a tática ganha campeonato. Saiba os detalhes de quem esteve no gramado e na bancada.",
    category: "DEBATE QUENTE",
    time: "Há 2 horas",
    author: "Thiago 'Bancada' Silva",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600",
    comments: 42,
    likes: 189,
    relatedProductIndex: 1 // Link to Retrô Alviverde
  },
  {
    id: "news-reforco-bastidores",
    title: "Bastidores do Morumbi: Reforço europeu aprova termos de contrato e se junta ao CT na segunda",
    excerpt: "Chega o meio-campista que a torcida tricolor implorava no Twitter. Com salário acertado e metas de títulos no papel, ele vem com a camisa 10 para comandar a armação de jogadas. Veja os números dele na Liga Europa.",
    category: "MERCADO DA BOLA",
    time: "Há 4 horas",
    author: "Felipe 'Tricolor' Ramos",
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=600",
    comments: 87,
    likes: 312,
    relatedProductIndex: 0 // Link to Tricolor Sovereign
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-authenticity",
    question: "Os mantos vendidos na Choque Rei Fut são originais de época?",
    answer: "Nós trabalhamos com duas vertentes impecáveis: 1) Mantos licenciados atuais produzidos pelas maiores marcas parceiras; 2) Nossa consagrada Linha 'Lendas do Futebol', que reúne réplicas fiéis autorizadas e releituras históricas produzidas com a mesma gramatura de tecido, bordados e patches idênticos aos originais de época. Garantia de conforto absoluto com cara de arquibancada profissional.",
    objection: "Sanidade da Autenticidade (O torcedor tem pânico de pagar caro em camisa pirata de baixa qualidade)."
  },
  {
    id: "faq-safety",
    question: "É seguro comprar com cartão ou Pix na loja? Como meus dados são protegidos?",
    answer: "Totalmente seguro! Processamos todos os pagamentos através dos gateways líderes do mercado (com criptografia SSL de 256 bits). Além disso, temos o selo Google Safe Browsing e checkout transparente. Nenhuma informação de cartão é salva em nossos servidores, e os pagamentos via PIX possuem aprovação imediata e proteção contra fraudes do Banco Central.",
    objection: "Segurança no Pagamento (Problema clássico em lojas de e-commerce menores anunciadas no Google Ads)."
  },
  {
    id: "faq-delivery",
    question: "Qual é o prazo real de entrega e como posso rastrear meu pedido?",
    answer: "Nossas entregas expressas cobrem todo o país! O frete para as regiões metropolitanas de SP leva em média de 2 a 5 dias úteis. Assim que o pacote for despachado nos Correios ou Transportadora parceira, você receberá o código de rastreamento no WhatsApp e no E-mail para acompanhar cada passo do trajeto minuto a minuto.",
    objection: "Prazo de Entrega (Tráfego de Google Ads atrai muitos clientes ansiosos que querem o manto antes do jogo de domingo)."
  },
  {
    id: "faq-exchange",
    question: "E se a camisa não servir? Qual a política de trocas da Choque Rei Fut?",
    answer: "Sem dor de cabeça! O seu manto precisa ficar perfeito no corpo para a festa da arquibancada. Se você errar o tamanho ou não gostar de como ficou no corpo, você tem até 7 dias corridos após o recebimento para solicitar a troca 100% gratuita. Geramos uma etiqueta de logística reversa e você envia sem pagar nada de frete de devolução.",
    objection: "Medo de Errar no Tamanho (Camisas de times variam muito de modelagem entre marcas)."
  },
  {
    id: "faq-ads-trust",
    question: "Por que comprar na Choque Rei Fut e não em sites de marketplaces internacionais?",
    answer: "Comprar aqui significa ter atendimento humanizado feito de torcedor para torcedor, garantia de troca rápida nacional (sem esperar 60 dias por um pacote vindo da China), nota fiscal nacional, tecidos de padrão premium testados em estádio e a certeza de que seu produto virá impecável, sem taxas surpresa de alfândega na porta de casa.",
    objection: "Resistência de Preço / Concorrência de Importados (Justifica a proposta de valor do e-commerce nacional)."
  }
];

export const googleAdsStrategy = {
  audiences: [
    {
      title: "Público-Alvo Quente",
      targeting: "Torcedores fanáticos de clubes paulistas (São Paulo, Palmeiras, Corinthians, Santos) e entusiastas de futebol brasileiro que consomem resenhas e podcasts esportivos diariamente."
    },
    {
      title: "Palavras-Chave Recomendadas (Google Search)",
      keywords: [
        "comprar camisa de time original",
        "camisa de futebol retrô nacional",
        "manto sagrado tricolor sao paulo",
        "camisa palmeiras antiga bordada",
        "camisetas personalizadas de torcedor",
        "choque rei fut loja especializada"
      ]
    },
    {
      title: "Extensões de Anúncio Fundamentais",
      extensions: [
        "Sitelinks: Apontando direto para 'Coleção Retrô', 'Mantos 2026', 'Acessórios de Bancada' e 'Fale com Torcedor no WhatsApp'.",
        "Frases de Destaque: 'Até 12x Sem Juros', 'Troca Grátis 7 Dias', 'Entrega Expressa SP', 'Tecido Respirável Premium'.",
        "Sitelink de Promoção: '15% de Desconto na 1º Compra Cupom: CHOQUEREI'."
      ]
    }
  ],
  mobilePerformance: {
    title: "Diretrizes de Performance Mobile (Velocidade do Site)",
    reason: "O Google Ads pune páginas que demoram mais de 3 segundos para carregar no celular, cobrando um CPC (Custo por Clique) muito mais caro e reduzindo o Índice de Qualidade do anúncio.",
    guidelines: [
      {
        factor: "Imagens com Formato de Próxima Geração",
        solution: "Converter todas as fotos dos mantos para .WebP ou .AVIF. Nenhuma imagem de produto deve passar de 120KB. Utilizar Lazy Loading nas imagens fora da primeira dobra."
      },
      {
        factor: "Eliminação de JS Bloqueador",
        solution: "Carregar bibliotecas de analytics (Google Analytics, ID do Google Tag, Pixel do Meta) de forma assíncrona (com o atributo async ou defer) para não travar a renderização inicial."
      },
      {
        factor: "CSS Crítico & Tailwind",
        solution: "Ao utilizar Tailwind CSS, o tamanho do arquivo compilado de estilos cai drasticamente por eliminar classes não utilizadas. Nosso site é 100% otimizado via classes utilitárias, pesando menos de 25KB gz."
      },
      {
        factor: "Fontes Locais ou Google Fonts Pré-carregado",
        solution: "Adicionar tags de dns-prefetch e preconnect para os domínios de fontes do Google, evitando o atraso de flash de texto sem estilo (FOUT)."
      }
    ]
  },
  layoutDesign: {
    primaryColor: "Chamber Slate (Cinza grafite profundo base)",
    secondaryPalette: [
      { name: "São Paulo Tricolor", colors: ["#ef4444 (Vermelho Altar)", "#ffffff (Branco Nevado)", "#000000 (Preto Asfalto)"] },
      { name: "Palmeiras Alviverde", colors: ["#16a34a (Verde Esmeralda)", "#ffffff (Branco Líquido)"] },
      { name: "Sotaque de Ouro", colors: ["#eab308 (Amarelo Campeão)", "#ca8a04 (Ouro Rico)"] }
    ],
    explanation: "Usando uma base elegante em cinza escuro/carvão (e não um preto puro que cansa as vistas), conseguimos mesclar de forma harmoniosa as cores dos maiores rivais de São Paulo sem gerar conflitos ou empobrecer o visual do site. O dourado/ouro é o tom de contraste perfeito para botões de CTA de altíssima conversão, simbolizando glória, taça e vitória!"
  }
};
