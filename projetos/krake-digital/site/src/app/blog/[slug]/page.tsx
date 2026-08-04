import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Lightbulb, MessageCircle } from "lucide-react";
import { BlogFooter } from "@/components/blog-footer";
import { BlogHeader } from "@/components/blog-header";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Krake Digital`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Gabriel Wanzeller"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Person", name: "Gabriel Wanzeller" },
    publisher: { "@type": "Organization", name: "Krake Digital", url: "https://krakeagencia.com" },
    mainEntityOfPage: `https://krakeagencia.com/blog/${post.slug}`,
  };

  return (
    <main className="page-shell min-h-screen">
      <BlogHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <article>
        <header className="relative border-b border-white/10 py-16 sm:py-24">
          <div className="grid-lines absolute inset-0" aria-hidden="true" />
          <div className="container-site relative max-w-4xl">
            <Link className="focus-ring inline-flex items-center gap-2 rounded text-sm text-white/55 hover:text-white" href="/blog"><ArrowLeft size={16} /> Voltar para o blog</Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-[#EBF400]">{post.category}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-6xl">{post.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/45">
              <span>Por Gabriel Wanzeller</span><span aria-hidden="true">•</span><span>{post.readingTime}</span><span aria-hidden="true">•</span><time dateTime={post.publishedAt}>4 de agosto de 2026</time>
            </div>
          </div>
        </header>

        <div className="section-gradient-blue">
          <div className="container-site grid gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="max-w-3xl">
              <p className="border-l-2 border-[#EBF400] pl-6 text-xl leading-9 text-white/80">{post.intro}</p>
              {post.sections.map((section) => (
                <section key={section.title} className="mt-14">
                  <h2 className="text-3xl font-semibold tracking-[-0.035em]">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-[17px] leading-8 text-white/65">{paragraph}</p>)}
                  {section.items && (
                    <ul className="mt-7 space-y-4">
                      {section.items.map((item) => <li key={item} className="flex gap-3 leading-7 text-white/70"><span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EBF400] text-[#02021E]"><Check size={13} strokeWidth={3} /></span>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))}

              <div className="mt-16 rounded-[30px] border border-[#EBF400]/20 bg-[#0e0e45]/80 p-7 sm:p-9">
                <h2 className="text-3xl font-semibold tracking-[-0.035em]">Quer aplicar isso na sua empresa?</h2>
                <p className="mt-4 leading-7 text-white/60">Converse com Gabriel para entender qual presença digital faz sentido para seu momento.</p>
                <a className={buttonVariants({ variant: "primary", size: "lg", className: "mt-7" })} href="https://wa.me/5561984494617?text=Ol%C3%A1%2C%20Gabriel!%20Li%20um%20artigo%20no%20blog%20da%20Krake%20e%20gostaria%20de%20conversar." target="_blank" rel="noreferrer"><MessageCircle size={20} /> Conversar no WhatsApp</a>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
                <Lightbulb className="text-[#EBF400]" size={26} />
                <h2 className="mt-5 text-xl font-semibold">Ideias para redes sociais</h2>
                <p className="mt-3 text-sm leading-6 text-white/50">Este artigo também pode virar:</p>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-white/70">
                  {post.socialIdeas.map((idea) => <li key={idea} className="border-t border-white/10 pt-4 first:border-0 first:pt-0">{idea}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="border-t border-white/10 py-14">
        <div className="container-site">
          <Link className="group flex items-center justify-between gap-6 rounded-[28px] border border-white/10 p-6 transition hover:border-[#EBF400]/30 sm:p-8" href={`/blog/${nextPost.slug}`}>
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EBF400]">Leia também</p><p className="mt-3 text-xl font-semibold sm:text-2xl">{nextPost.title}</p></div>
            <ArrowRight className="shrink-0 text-[#EBF400] transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
}

