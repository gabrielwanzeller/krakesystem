import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Gauge,
  Layers3,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const whatsappUrl =
  "https://wa.me/5561984494617?text=Ol%C3%A1%2C%20Gabriel!%20Conheci%20a%20Krake%20Digital%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const benefits = [
  {
    icon: Target,
    title: "Mensagem clara",
    text: "Seu cliente entende o que você oferece e por que deveria escolher sua empresa.",
  },
  {
    icon: Smartphone,
    title: "Experiência em qualquer tela",
    text: "Um site rápido, organizado e fácil de usar no celular ou no computador.",
  },
  {
    icon: MousePointerClick,
    title: "Caminho para o contato",
    text: "Cada seção conduz o visitante até uma conversa com sua empresa.",
  },
];

const process = [
  ["01", "Conversa", "Entendemos sua empresa, seus clientes e o objetivo do projeto."],
  ["02", "Estratégia", "Organizamos a mensagem, o conteúdo e o caminho até o contato."],
  ["03", "Criação", "Desenvolvemos e refinamos o site com sua identidade."],
  ["04", "Publicação", "Colocamos tudo no ar e deixamos a base pronta para evoluir."],
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
        <div className="container-site relative grid min-h-[calc(100svh-80px)] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
              <MapPin aria-hidden="true" size={16} className="text-[#EBF400]" />
              Sites e soluções digitais em Brasília
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Sites profissionais para sua empresa <span className="gradient-text">crescer.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Criamos sites modernos e estratégicos que valorizam sua marca e ajudam a transformar visitantes em clientes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <WhatsAppLink>
                <MessageCircle aria-hidden="true" size={20} />
                Quero conversar sobre meu site
              </WhatsAppLink>
              <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="#servicos">
                Conhecer as soluções
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/45">
              <ShieldCheck aria-hidden="true" size={16} />
              Uma conversa simples, sem compromisso e sem pressão.
            </p>
          </div>

          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-[#005CFF]/20 via-[#A700FF]/20 to-[#EBF400]/10 blur-3xl" />
            <div className="glass relative aspect-square overflow-hidden rounded-[40px] p-10 shadow-2xl shadow-black/30">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Image src="/brand/krake-symbol-yellow.svg" alt="" width={74} height={74} />
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/45">digital com propósito</span>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-20 rounded-full bg-[#EBF400]" />
                  <p className="max-w-xs text-3xl font-semibold leading-tight">Sua empresa merece ser bem apresentada.</p>
                  <div className="grid grid-cols-3 gap-3 pt-5">
                    {[Search, WandSparkles, Gauge].map((Icon, index) => (
                      <div key={index} className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Icon size={28} className="text-white/70" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/10">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Presença digital</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Seu site representa o valor real da sua empresa?</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/60">
              Antes de entrar em contato, muita gente pesquisa sua empresa. Um site confuso, antigo ou inexistente pode diminuir a confiança antes mesmo da primeira conversa.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="glass rounded-3xl p-7">
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-[#005CFF]/15 text-[#69a2ff]">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="section-pad border-b border-white/10">
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

      <section id="processo" className="section-pad border-b border-white/10">
        <div className="container-site">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Como funciona</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Um processo claro do primeiro contato à publicação.</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <article key={number} className="relative border-l border-white/15 pl-6">
                <span className="text-sm font-semibold text-[#EBF400]">{number}</span>
                <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-pad border-b border-white/10">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#13134e] to-[#050526] p-8 sm:p-10">
              <div className="absolute right-0 top-0 size-56 rounded-full bg-[#EBF400]/10 blur-3xl" />
              <span className="relative text-sm font-medium text-white/50">Projeto em destaque</span>
              <div className="relative mt-20 rounded-2xl border border-white/10 bg-[#080824] p-5 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="size-2.5 rounded-full bg-[#ffd93d]" />
                  <span className="size-2.5 rounded-full bg-[#6bcb77]" />
                  <span className="ml-3 text-xs text-white/35">verogusto.com.br</span>
                </div>
                <div className="py-10 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f7b955]">Rodízio de pizza para eventos</p>
                  <p className="mx-auto mt-4 max-w-sm text-3xl font-semibold">Seu evento merece uma experiência inesquecível.</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Portfólio</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Vero Gusto</h2>
              <p className="mt-5 text-xl text-white/75">Site para um serviço de rodízio de pizza artesanal em eventos de Brasília.</p>
              <p className="mt-6 leading-8 text-white/55">Projeto completo com planejamento, estrutura, textos, design e desenvolvimento. A página apresenta a experiência do serviço, responde dúvidas e conduz o visitante ao pedido de orçamento.</p>
              <a className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8")} href="https://www.verogusto.com.br" target="_blank" rel="noreferrer">
                Visitar o projeto <ExternalLink aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-pad border-b border-white/10">
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

      <section id="perguntas" className="section-pad border-b border-white/10">
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

      <section className="section-pad">
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
