export type BlogSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
  socialIdeas: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "quanto-custa-criar-site-profissional",
    title: "Quanto custa criar um site profissional para uma empresa?",
    description:
      "Entenda o que influencia o preço de um site profissional e como comparar propostas sem escolher apenas pelo menor valor.",
    category: "Criação de sites",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingTime: "6 min de leitura",
    intro:
      "O preço de um site depende do objetivo da empresa, da quantidade de conteúdo e das funções necessárias. Antes de comparar valores, é importante entender o que realmente está incluído no projeto.",
    sections: [
      {
        title: "Por que não existe um preço único?",
        paragraphs: [
          "Um site institucional simples e uma plataforma com área restrita resolvem problemas diferentes. Por isso, o orçamento precisa considerar o tamanho do projeto, a estratégia, o conteúdo, o design e o desenvolvimento.",
          "Um valor muito baixo pode contemplar apenas a montagem de um modelo pronto. Uma proposta mais completa pode incluir planejamento, organização da mensagem, adaptação para celulares, configuração técnica e acompanhamento até a publicação.",
        ],
      },
      {
        title: "O que costuma influenciar o investimento",
        paragraphs: [
          "Os principais fatores são o número de páginas, a complexidade visual, a produção dos textos, as integrações e as funcionalidades específicas do negócio.",
        ],
        items: [
          "Quantidade de páginas e seções",
          "Criação ou organização dos textos",
          "Design personalizado para a marca",
          "Formulários, WhatsApp e outras integrações",
          "Blog, catálogo, agendamento ou área restrita",
          "Suporte, manutenção e evolução do projeto",
        ],
      },
      {
        title: "Como comparar propostas",
        paragraphs: [
          "Pergunte o que será entregue, quem organizará o conteúdo, como acontecerão as revisões e o que ocorre depois da publicação. Uma boa proposta deixa o processo claro e relaciona cada entrega ao objetivo da empresa.",
          "O melhor site não é necessariamente o mais caro. É aquele que apresenta bem seu negócio, funciona em diferentes telas e facilita o próximo passo do cliente.",
        ],
      },
      {
        title: "Quando vale a pena investir",
        paragraphs: [
          "Se seus clientes pesquisam antes de entrar em contato, se sua empresa depende apenas das redes sociais ou se você perde tempo explicando sempre as mesmas informações, um site pode se tornar uma peça importante do atendimento e da divulgação.",
        ],
      },
    ],
    socialIdeas: [
      "Vídeo: 5 fatores que mudam o preço de um site",
      "Carrossel: o que conferir antes de contratar um site",
      "Vídeo curto: site barato e site profissional resolvem o mesmo problema?",
    ],
  },
  {
    slug: "empresa-precisa-site-mesmo-com-instagram",
    title: "Minha empresa precisa de um site mesmo tendo Instagram?",
    description:
      "Veja as diferenças entre site e redes sociais e como usar os dois canais juntos para gerar mais confiança e contatos.",
    category: "Presença digital",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingTime: "5 min de leitura",
    intro:
      "Instagram e site não precisam competir. A rede social ajuda sua empresa a manter contato e mostrar novidades; o site organiza as informações e oferece um espaço próprio para o cliente conhecer o negócio.",
    sections: [
      {
        title: "O Instagram é importante, mas não substitui tudo",
        paragraphs: [
          "Nas redes sociais, o conteúdo aparece em ordem de publicação e disputa atenção com muitas outras mensagens. Informações essenciais podem ficar espalhadas entre destaques, legendas e publicações antigas.",
          "No site, você controla a organização. O visitante encontra serviços, diferenciais, projetos e formas de contato no caminho que foi pensado para ele.",
        ],
      },
      {
        title: "O que um site acrescenta",
        paragraphs: [
          "Um endereço próprio fortalece a apresentação da empresa e pode aparecer quando alguém pesquisa no Google. Ele também permite criar páginas específicas para serviços, cidades ou dúvidas frequentes.",
        ],
        items: [
          "Informações organizadas e fáceis de encontrar",
          "Mais espaço para explicar serviços e diferenciais",
          "Presença em pesquisas relacionadas ao negócio",
          "Caminho direto para orçamento ou WhatsApp",
          "Um canal que não depende do formato de uma rede social",
        ],
      },
      {
        title: "Como usar site e Instagram juntos",
        paragraphs: [
          "O Instagram pode despertar interesse. O site aprofunda a informação e ajuda na decisão. Uma publicação pode levar para um artigo, uma página de serviço ou um projeto; o site, por sua vez, pode conduzir para o WhatsApp ou para a rede social.",
          "Quando os canais trabalham juntos, a empresa oferece mais caminhos para ser encontrada sem repetir exatamente o mesmo conteúdo em todos eles.",
        ],
      },
    ],
    socialIdeas: [
      "Vídeo: Instagram substitui um site?",
      "Carrossel: 5 coisas que ficam mais claras em um site",
      "Vídeo curto: o risco de depender de apenas uma rede social",
    ],
  },
  {
    slug: "como-aparecer-google-brasilia",
    title: "Como fazer sua empresa aparecer no Google em Brasília",
    description:
      "Conheça os primeiros passos para aumentar a presença da sua empresa nas pesquisas locais do Google em Brasília.",
    category: "Google e divulgação",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingTime: "7 min de leitura",
    intro:
      "Aparecer no Google não depende de uma única ação. O resultado costuma vir da combinação entre um perfil comercial completo, um site claro, conteúdo útil e consistência nas informações da empresa.",
    sections: [
      {
        title: "Comece pelo Perfil da Empresa no Google",
        paragraphs: [
          "Cadastre corretamente nome, categoria, endereço ou área de atendimento, telefone, horários e fotos. Mantenha as informações atualizadas e responda às avaliações recebidas.",
          "Para empresas locais, esse perfil ajuda o Google a entender onde o negócio atua e quais serviços oferece.",
        ],
      },
      {
        title: "Tenha páginas que expliquem o que você faz",
        paragraphs: [
          "Seu site precisa usar a linguagem que o cliente utiliza ao pesquisar. Uma página genérica dificilmente responde tão bem quanto uma página que explica um serviço, para quem ele serve e como solicitar atendimento.",
        ],
        items: [
          "Explique cada serviço com clareza",
          "Informe sua região de atendimento sem repetir o nome da cidade artificialmente",
          "Mostre projetos, exemplos ou formas de trabalho",
          "Responda às dúvidas comuns dos clientes",
          "Facilite o contato pelo celular",
        ],
      },
      {
        title: "Publique conteúdo que responda a pesquisas reais",
        paragraphs: [
          "Artigos como este podem responder dúvidas que surgem antes da contratação. Em vez de publicar apenas sobre sua empresa, produza conteúdos sobre problemas, escolhas, preços, prazos e cuidados relacionados ao seu serviço.",
          "Cada artigo pode ser transformado em vídeos curtos, carrosséis e respostas para redes sociais, ampliando o aproveitamento do tema.",
        ],
      },
      {
        title: "SEO e anúncios cumprem papéis diferentes",
        paragraphs: [
          "O conteúdo e a estrutura do site constroem presença ao longo do tempo. Os anúncios podem gerar visibilidade mais rápida para páginas e ofertas específicas. Dependendo do momento da empresa, as duas estratégias podem trabalhar juntas.",
        ],
      },
    ],
    socialIdeas: [
      "Vídeo: 3 primeiros passos para aparecer no Google",
      "Carrossel: checklist do Perfil da Empresa no Google",
      "Vídeo curto: qual a diferença entre SEO e Google Ads?",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

