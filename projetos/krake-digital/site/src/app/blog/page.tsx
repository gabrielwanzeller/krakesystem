import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import { BlogFooter } from "@/components/blog-footer";
import { BlogHeader } from "@/components/blog-header";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog sobre sites e presença digital | Krake Digital",
  description: "Conteúdos simples sobre criação de sites, Google, divulgação e presença digital para empresas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog da Krake Digital",
    description: "Orientações práticas para melhorar a presença digital da sua empresa.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="page-shell min-h-screen">
      <BlogHeader />
      <section className="relative border-b border-white/10 py-20 sm:py-28">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="container-site relative">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]"><BookOpen size={17} /> Blog da Krake</span>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl">Informação para transformar presença digital em <span className="gradient-text">oportunidade.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">Conteúdos diretos para ajudar empresas a entender sites, Google, divulgação e as decisões que aproximam novos clientes.</p>
          </div>
        </div>
      </section>

      <section className="section-pad section-gradient-blue">
        <div className="container-site">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">Conteúdos recentes</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">Comece pela dúvida mais próxima do seu momento.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass focus-ring group flex min-h-[390px] flex-col rounded-[30px] p-7 transition hover:-translate-y-1 hover:border-[#EBF400]/30 hover:bg-[#0e0e45]/80 sm:p-8"
                aria-label={`Ler artigo: ${post.title}`}
              >
                <div className="flex items-center justify-between gap-4 text-xs text-white/45">
                  <span className="font-semibold uppercase tracking-[0.14em] text-[#EBF400]">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="mt-10 text-6xl font-semibold tracking-[-0.06em] text-white/[0.08]">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-semibold leading-9 tracking-[-0.025em]">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/55">{post.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 self-start pt-7 font-semibold text-[#EBF400]">
                  Ler artigo <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[34px] bg-[#EBF400] px-7 py-12 text-[#02021E] sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">Precisa de orientação para sua empresa?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Converse diretamente com quem vai cuidar do seu projeto.</h2>
            </div>
            <a className="focus-ring mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#02021E] px-7 text-base font-semibold text-white shadow-[0_12px_36px_rgba(2,2,30,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0E0E45] lg:mt-0" href="https://wa.me/5561984494617?text=Ol%C3%A1%2C%20Gabriel!%20Conheci%20a%20Krake%20pelo%20blog%20e%20gostaria%20de%20conversar." target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
}
