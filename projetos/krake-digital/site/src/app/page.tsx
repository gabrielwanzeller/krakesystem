import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheckBig,
  CircleX,
  Code2,
  Compass,
  ExternalLink,
  Layers3,
  MapPin,
  MessageCircle,
  MonitorUp,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ProjectShowcase } from "@/components/project-showcase";
import { cn } from "@/lib/utils";

const whatsappUrl =
  "https://wa.me/5561984494617?text=Ol%C3%A1%2C%20Gabriel!%20Conheci%20a%20Krake%20Digital%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const journeyWithoutSite = [
  ["Surge uma necessidade", "O cliente percebe que precisa de um produto ou serviço."],
  ["Ele pesquisa no Google", "Antes de conversar, procura empresas e compara alternativas."],
  ["Encontra poucas informações", "Não consegue entender claramente seus serviços ou diferenciais."],
  ["A confiança diminui", "Sem respostas suficientes, fica inseguro para iniciar o contato."],
  ["Continua procurando", "Mesmo que seu trabalho seja excelente, ele ainda não conseguiu perceber isso."],
  ["Outra empresa recebe o contato", "Um concorrente mais bem apresentado pode se tornar a escolha mais fácil."],
];

const journeyWithSite = [
  ["Surge uma necessidade", "O cliente começa a procurar uma empresa que possa ajudá-lo."],
  ["Encontra sua empresa", "Sua presença digital facilita a descoberta e a avaliação."],
  ["Conhece melhor o negócio", "O site apresenta serviços, diferenciais e sua forma de trabalhar."],
  ["Encontra respostas", "Informações claras diminuem as dúvidas antes do primeiro contato."],
  ["Sente mais confiança", "Uma apresentação profissional reforça o valor percebido da empresa."],
  ["Conversa com você", "O cliente encontra um caminho simples para chamar sua empresa no WhatsApp."],
];

const process = [
  {
    number: "01",
    title: "Conversa",
    text: "Entendemos sua empresa, seus clientes, seus serviços e o objetivo do projeto.",
    delivery: "Briefing organizado",
    icon: MessageCircle,
    iconClass: "border-[#69a2ff]/30 bg-[#005CFF]/15 text-[#69a2ff]",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Definimos a mensagem, as seções e o caminho que levará o visitante até o contato.",
    delivery: "Estrutura e conteúdo",
    icon: Compass,
    iconClass: "border-[#c16bff]/30 bg-[#A700FF]/15 text-[#c16bff]",
  },
  {
    number: "03",
    title: "Criação",
    text: "Criamos o visual e desenvolvemos o site. Você recebe uma prévia para acompanhar e solicitar ajustes.",
    delivery: "Site para aprovação",
    icon: MonitorUp,
    iconClass: "border-[#EBF400]/30 bg-[#EBF400]/10 text-[#EBF400]",
  },
  {
    number: "04",
    title: "Publicação",
    text: "Depois da aprovação, colocamos o site no ar e verificamos seu funcionamento em diferentes telas.",
    delivery: "Site publicado",
    icon: Rocket,
    iconClass: "border-[#70e6a1]/30 bg-[#24c76f]/10 text-[#70e6a1]",
  },
];

const faqs = [
  {
    question: "Quanto custa criar um site?",
    answer:
      "O valor depende do objetivo, da quantidade de conteúdo e das funcionalidades necessárias. Primeiro entendemos o projeto e depois apresentamos uma proposta clara, sem pacote genérico.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "O prazo varia conforme o escopo e a velocidade das aprovações. Depois da conversa inicial, você recebe uma previsão realista junto com a proposta.",
  },
  {
    question: "Preciso entregar todos os textos prontos?",
    answer:
      "Não. A Krake ajuda a organizar a mensagem e pode preparar os textos com base nas informações da sua empresa. Você revisa e aprova antes da publicação.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Sim. O projeto é pensado desde o início para funcionar bem em celulares, tablets e computadores.",
  },
  {
    question: "Vocês também cuidam dos anúncios?",
    answer:
      "Sim. Podemos estruturar campanhas no Google Ads e Meta Ads para levar pessoas com mais intenção até sua oferta. Esse serviço é planejado conforme o momento de cada empresa.",
  },
];

function WhatsAppLink({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  return (
    <a
      className={cn(buttonVariants({ variant, size: "lg" }), className)}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      data-conversion="whatsapp_click"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02021E]/80 backdrop-blur-xl">
        <div className="container-site flex h-20 items-center justify-between">
          <Link href="#inicio" aria-label="Krake Digital — início" className="focus-ring rounded-md">
            <Image
              src="/brand/krake-horizontal-yellow.svg"
              alt="Krake Digital"
              width={156}
              height={39}
              className="h-auto"
              priority
            />
          </Link>
          <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <Link className="focus-ring rounded hover:text-white" href="#servicos">Serviços</Link>
            <Link className="focus-ring rounded hover:text-white" href="#processo">Como funciona</Link>
            <Link className="focus-ring rounded hover:text-white" href="#portfolio">Projeto</Link>
            <Link className="focus-ring rounded hover:text-white" href="#sobre">Sobre</Link>
          </nav>
          <a
            className={buttonVariants({ variant: "primary" })}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-conversion="whatsapp_click"
          >
            <MessageCircle aria-hidden="true" size={18} />
            <span className="hidden sm:inline">Conversar no WhatsApp</span>
            <span className="sm:hidden">Conversar</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[calc(100svh-80px)] border-b border-white/10">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="container-site relative flex min-h-[calc(100svh-80px)] items-center justify-center py-20 text-center">
          <div className="flex w-full max-w-5xl flex-col items-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
              <MapPin aria-hidden="true" size={16} className="text-[#EBF400]" />
              Sites e soluções digitais em Brasília
            </div>
            <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Sites profissionais para sua empresa <span className="gradient-text">crescer.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Criamos sites modernos e estratégicos que valorizam sua marca e ajudam a transformar visitantes em clientes.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <WhatsAppLink>
                <MessageCircle aria-hidden="true" size={20} />
                Quero conversar sobre meu site
              </WhatsAppLink>
              <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="#servicos">
                Conhecer as soluções
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/45">
              <ShieldCheck aria-hidden="true" size={16} />
              Uma conversa simples, sem compromisso e sem pressão.
            </p>
          </div>
          </div>
      </section>

      <section id="dados" className="section-pad section-gradient-blue border-b border-white/10">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Presença digital em números</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Seu cliente já está no digital. Sua empresa também precisa estar.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">
              As pessoas pesquisam, comparam e chegam mais informadas ao primeiro contato. Ainda assim, muitas pequenas empresas não possuem um espaço digital próprio para apresentar seu valor.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <article className="glass rounded-3xl p-7 sm:p-8">
              <p className="text-5xl font-semibold tracking-[-0.05em] text-[#EBF400]">89%</p>
              <h3 className="mt-5 text-xl font-semibold">do Brasil está conectado</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">Parcela da população com 10 anos ou mais que utilizava a internet em 2024, pelo indicador ampliado.</p>
              <a className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/40 transition hover:text-white/70" href="https://cetic.br/media/docs/publicacoes/2/pt-br/20251027170648/tic_domicilios_2024_livro_eletronico.pdf" target="_blank" rel="noreferrer">
                Fonte: Cetic.br <ExternalLink aria-hidden="true" size={13} />
              </a>
            </article>

            <article className="glass rounded-3xl p-7 sm:p-8">
              <p className="text-5xl font-semibold tracking-[-0.05em] text-[#69a2ff]">56%</p>
              <h3 className="mt-5 text-xl font-semibold">pesquisam produtos e serviços</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">Dos usuários brasileiros de internet buscaram informações sobre produtos ou serviços em 2024.</p>
              <a className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/40 transition hover:text-white/70" href="https://cetic.br/media/docs/publicacoes/2/pt-br/20251027170648/tic_domicilios_2024_livro_eletronico.pdf" target="_blank" rel="noreferrer">
                Fonte: Cetic.br <ExternalLink aria-hidden="true" size={13} />
              </a>
            </article>

            <article className="glass rounded-3xl p-7 sm:p-8">
              <p className="text-5xl font-semibold tracking-[-0.05em] text-[#c16bff]">94%</p>
              <h3 className="mt-5 text-xl font-semibold">chegam informados ao contato</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">Dos clientes B2B pesquisados pelo Google estavam parcial ou totalmente informados antes de falar com uma empresa.</p>
              <a className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/40 transition hover:text-white/70" href="https://business.google.com/br/think/consumer-insights/b2b-jornada-pesquisa/" target="_blank" rel="noreferrer">
                Fonte: Think with Google <ExternalLink aria-hidden="true" size={13} />
              </a>
            </article>
          </div>

          <div className="mt-6 grid overflow-hidden rounded-[32px] border border-white/10 bg-[#08082b] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Empresas com site próprio</span>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">A presença de um site cresce junto com o porte da empresa.</h3>
              <p className="mt-5 leading-7 text-white/55">
                Entre as pequenas empresas brasileiras conectadas, menos da metade possuía um site próprio em 2024.
              </p>
              <div className="mt-8 flex gap-4 rounded-2xl border border-[#EBF400]/15 bg-[#EBF400]/[0.05] p-5">
                <Smartphone aria-hidden="true" className="mt-0.5 shrink-0 text-[#EBF400]" size={24} />
                <p className="text-sm leading-6 text-white/65"><strong className="text-white">30% dos usuários</strong> acessavam a internet apenas pelo celular. Por isso, um site precisa funcionar bem em telas menores.</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="space-y-8" role="img" aria-label="Gráfico: 49% das pequenas empresas, 76% das médias e 81% das grandes possuíam site próprio em 2024">
                {[
                  ["Pequenas empresas", 49],
                  ["Médias empresas", 76],
                  ["Grandes empresas", 81],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-3 flex items-end justify-between gap-4">
                      <span className="text-sm font-medium text-white/70">{label}</span>
                      <span className="text-2xl font-semibold text-white">{value}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#005CFF] via-[#5d58ff] to-[#EBF400]" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a className="mt-9 inline-flex items-center gap-2 self-start text-xs font-medium text-white/40 transition hover:text-white/70" href="https://cetic.br/media/docs/publicacoes/2/20250512122204/tic_empresas_2024_livro_eletronico.pdf" target="_blank" rel="noreferrer">
                Fonte: TIC Empresas 2024, Cetic.br <ExternalLink aria-hidden="true" size={13} />
              </a>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[32px] border border-[#EBF400]/20 bg-gradient-to-r from-[#0e0e45] via-[#101051] to-[#091536] px-7 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="pointer-events-none absolute -right-16 -top-28 size-72 rounded-full bg-[#EBF400]/10 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Sua empresa também pode avançar</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Apresente seu negócio com clareza quando o cliente estiver pesquisando.</h3>
              <p className="mt-4 leading-7 text-white/60">Vamos conversar sobre o momento da sua empresa e entender qual site faz sentido para ela.</p>
            </div>
            <WhatsAppLink className="relative mt-7 shrink-0 lg:mt-0">
              <MessageCircle aria-hidden="true" size={20} />
              Quero um site profissional
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section id="jornada" className="section-pad section-gradient-purple border-b border-white/10">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">A jornada até o contato</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">O caminho do seu cliente começa antes da conversa.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">
              Antes de mandar uma mensagem, muitas pessoas pesquisam sua empresa. O que elas encontram pode aumentar a confiança ou fazer com que continuem procurando.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[32px] border border-[#ff7d7d]/20 bg-[#150a22]/80 p-7 sm:p-9">
              <div className="flex items-center gap-4 border-b border-white/10 pb-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff5e68]/10 text-[#ff8d94]">
                  <CircleX aria-hidden="true" size={25} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff8d94]">Sem um bom site</p>
                  <h3 className="mt-1 text-2xl font-semibold">A oportunidade pode se perder</h3>
                </div>
              </div>

              <ol className="mt-8">
                {journeyWithoutSite.map(([title, text], index) => (
                  <li key={title} className="relative grid grid-cols-[40px_1fr] gap-4 pb-8 last:pb-0">
                    {index < journeyWithoutSite.length - 1 && (
                      <span className="absolute left-[19px] top-10 h-[calc(100%-24px)] w-px bg-gradient-to-b from-[#ff7d7d]/45 to-[#ff7d7d]/5" aria-hidden="true" />
                    )}
                    <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-[#ff7d7d]/30 bg-[#150a22] text-sm font-semibold text-[#ff9da3]">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <h4 className="font-semibold text-white/90">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="relative overflow-hidden rounded-[32px] border border-[#EBF400]/25 bg-[#08112b]/90 p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#005CFF]/15 blur-3xl" aria-hidden="true" />
              <div className="relative flex items-center gap-4 border-b border-white/10 pb-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#EBF400]/10 text-[#EBF400]">
                  <CircleCheckBig aria-hidden="true" size={25} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EBF400]">Com um site profissional</p>
                  <h3 className="mt-1 text-2xl font-semibold">O próximo passo fica mais claro</h3>
                </div>
              </div>

              <ol className="relative mt-8">
                {journeyWithSite.map(([title, text], index) => (
                  <li key={title} className="relative grid grid-cols-[40px_1fr] gap-4 pb-8 last:pb-0">
                    {index < journeyWithSite.length - 1 && (
                      <span className="absolute left-[19px] top-10 h-[calc(100%-24px)] w-px bg-gradient-to-b from-[#EBF400]/55 to-[#005CFF]/15" aria-hidden="true" />
                    )}
                    <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-[#EBF400]/35 bg-[#08112b] text-sm font-semibold text-[#EBF400]">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <h4 className="font-semibold text-white">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-3xl text-xl font-medium leading-8 text-white/85">
              Seu site não precisa apenas existir. Ele precisa ajudar o cliente a entender, confiar e dar o próximo passo.
            </p>
            <WhatsAppLink className="mt-7">
              <MessageCircle aria-hidden="true" size={20} />
              Quero melhorar minha presença digital
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section id="servicos" className="section-pad section-gradient-brand border-b border-white/10">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Soluções</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">A estrutura digital para sua empresa avançar.</h2>
            <p className="mt-5 text-lg leading-8 text-white/60">Começamos pelo que sua empresa realmente precisa e construímos uma solução clara, útil e preparada para evoluir.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[32px] border border-[#EBF400]/30 bg-[#EBF400] p-8 text-[#02021E] sm:p-10 lg:row-span-2">
              <div className="absolute -right-12 -top-12 size-56 rounded-full border-[32px] border-[#02021E]/5" />
              <Layers3 aria-hidden="true" size={36} />
              <p className="mt-12 text-sm font-semibold uppercase tracking-[0.16em]">Serviço principal</p>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Criação de sites</h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#02021E]/70">Sites pensados para apresentar sua empresa com profissionalismo, facilitar o contato e apoiar seu crescimento.</p>
              <ul className="mt-9 space-y-4">
                {["Estratégia e organização do conteúdo", "Design alinhado à sua marca", "Experiência rápida e responsiva", "Estrutura preparada para divulgação"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <span className="flex size-6 items-center justify-center rounded-full bg-[#02021E] text-[#EBF400]"><Check size={15} /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppLink className="mt-10 bg-[#02021E] text-white shadow-none hover:bg-[#0E0E45]">Quero criar meu site <ArrowRight size={18} /></WhatsAppLink>
            </article>

            <article className="glass rounded-[32px] p-8 sm:p-10">
              <BarChart3 aria-hidden="true" size={32} className="text-[#69a2ff]" />
              <h3 className="mt-8 text-3xl font-semibold">Tráfego pago</h3>
              <p className="mt-4 leading-7 text-white/60">Campanhas no Google Ads e Meta Ads para aproximar sua empresa de pessoas que procuram o que você oferece.</p>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-white/80"><ChevronRight size={16} className="text-[#EBF400]" /> Estratégia conectada ao seu objetivo</p>
            </article>

            <article className="glass rounded-[32px] p-8 sm:p-10">
              <Code2 aria-hidden="true" size={32} className="text-[#c16bff]" />
              <h3 className="mt-8 text-3xl font-semibold">Sistemas personalizados</h3>
              <p className="mt-4 leading-7 text-white/60">Ferramentas digitais criadas para organizar informações, simplificar processos e apoiar a operação da sua empresa.</p>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-white/80"><ChevronRight size={16} className="text-[#EBF400]" /> Soluções pensadas para sua rotina</p>
            </article>
          </div>
        </div>
      </section>

      <section id="processo" className="section-pad section-gradient-mixed border-b border-white/10">
        <div className="container-site">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Como funciona</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Do primeiro contato ao site no ar.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">Você acompanha cada etapa, entende o que está sendo feito e participa das decisões importantes.</p>
          </div>

          <div className="relative mt-16">
            <div className="absolute bottom-8 left-8 top-8 w-px bg-gradient-to-b from-[#005CFF]/60 via-[#A700FF]/50 to-[#70e6a1]/30 lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-12 lg:h-px lg:w-auto lg:bg-gradient-to-r" aria-hidden="true" />
            <div className="relative grid gap-6 lg:grid-cols-4">
              {process.map(({ number, title, text, delivery, icon: Icon, iconClass }) => (
                <article key={number} className="relative grid grid-cols-[64px_1fr] gap-4 lg:block">
                  <div className={cn("relative z-10 flex size-16 items-center justify-center rounded-2xl border shadow-xl shadow-black/20 lg:mx-auto lg:size-24 lg:rounded-3xl", iconClass)}>
                    <Icon aria-hidden="true" size={28} className="lg:size-9" />
                    <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full border border-white/15 bg-[#02021E] text-[10px] font-semibold text-white/65 lg:size-8 lg:text-xs">{number}</span>
                  </div>
                  <div className="glass min-h-full rounded-3xl p-6 lg:mt-7 lg:min-h-[290px] lg:p-7">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/75">
                      <Check aria-hidden="true" size={14} className="text-[#EBF400]" />
                      {delivery}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-white/10 bg-white/[0.035] px-7 py-8 text-center lg:flex-row lg:px-10 lg:text-left">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold">Você sempre sabe em qual etapa o projeto está.</h3>
              <p className="mt-2 leading-7 text-white/55">Cada fase é apresentada, explicada e aprovada antes de avançarmos.</p>
            </div>
            <WhatsAppLink className="shrink-0">
              <MessageCircle aria-hidden="true" size={20} />
              Quero conversar sobre meu projeto
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-pad section-gradient-blue border-b border-white/10">
        <div className="container-site">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Portfólio</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Projeto em destaque</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
              Conheça diferentes páginas criadas para apresentar ofertas com clareza e conduzir cada público até a ação certa.
            </p>
          </div>
          <ProjectShowcase />
        </div>
      </section>

      <section id="sobre" className="section-pad section-gradient-purple border-b border-white/10">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-[#080829]">
            <Image
              src="/images/gabriel-wanzeller.jpg"
              alt="Gabriel Wanzeller, fundador da Krake Digital"
              width={1365}
              height={2048}
              className="aspect-[4/5] w-full object-cover object-[50%_25%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#02021E] via-[#02021E]/60 to-transparent p-7 pt-24">
              <p className="font-semibold">Gabriel Wanzeller</p>
              <p className="mt-1 text-sm text-white/60">Fundador da Krake Digital</p>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Quem está por trás</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Tecnologia explicada de um jeito simples.</h2>
            <p className="mt-7 text-lg leading-8 text-white/65">Eu sou Gabriel, fundador da Krake Digital. Cuido pessoalmente de cada etapa do projeto — da conversa inicial à publicação — para entender sua empresa e construir uma solução que faça sentido para o seu momento.</p>
            <p className="mt-5 text-lg leading-8 text-white/65">Você não precisa dominar termos técnicos. Meu papel é tornar o processo claro, orientar as decisões e entregar uma presença digital que represente bem o seu negócio.</p>
            <WhatsAppLink className="mt-9"><MessageCircle size={20} /> Falar diretamente com Gabriel</WhatsAppLink>
          </div>
        </div>
      </section>

      <section id="perguntas" className="section-pad section-gradient-mixed border-b border-white/10">
        <div className="container-site grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Perguntas frequentes</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Antes de começar, é normal ter dúvidas.</h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-6">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 rounded text-lg font-medium">
                  {question}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#EBF400] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-4 leading-7 text-white/55">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-gradient-brand">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[36px] bg-[#EBF400] px-7 py-16 text-center text-[#02021E] sm:px-12 sm:py-20">
            <Sparkles className="mx-auto" aria-hidden="true" size={32} />
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Vamos transformar a presença digital da sua empresa?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#02021E]/65">Conte um pouco sobre seu negócio. Vamos conversar com clareza e entender qual solução faz sentido para você.</p>
            <WhatsAppLink className="mt-9 bg-[#02021E] text-white shadow-none hover:bg-[#0E0E45]"><MessageCircle size={20} /> Conversar no WhatsApp</WhatsAppLink>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="container-site flex flex-col gap-7 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>
            <Image src="/brand/krake-horizontal-yellow.svg" alt="Krake Digital" width={132} height={33} className="h-auto" />
            <p className="mt-3">Sites e soluções digitais em Brasília.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link className="focus-ring rounded hover:text-white" href="#servicos">Serviços</Link>
            <Link className="focus-ring rounded hover:text-white" href="#portfolio">Portfólio</Link>
            <Link className="focus-ring rounded hover:text-white" href="/politica-de-privacidade">Privacidade</Link>
          </div>
          <p>© {new Date().getFullYear()} Krake Digital · CNPJ 55.461.568/0001-00</p>
        </div>
      </footer>
    </main>
  );
}
