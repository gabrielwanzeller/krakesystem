"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Eye, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Project = {
  name: string;
  category: string;
  description: string;
  domain: string;
  previewUrl: string;
  image: string;
  imageAlt: string;
  accent: string;
};

const projects: Project[] = [
  {
    name: "Vero Gusto",
    category: "Site institucional e comercial",
    description:
      "Uma experiência digital para apresentar o rodízio de pizza artesanal, responder dúvidas e conduzir o visitante até o orçamento.",
    domain: "verogusto.com.br",
    previewUrl: "https://www.verogusto.com.br/",
    image: "/images/projeto-vero-gusto.jpg",
    imageAlt: "Página inicial do site Vero Gusto",
    accent: "from-[#d6382f]/35 via-[#ff6845]/10 to-transparent",
  },
  {
    name: "Super Limpo Brasil",
    category: "Landing page de produto",
    description:
      "Página de vendas focada em explicar o produto, destacar rendimento e benefícios e conduzir o público até a compra.",
    domain: "superlimpobrasil.com",
    previewUrl: "https://superlimpobrasil.com/",
    image: "/images/projeto-super-limpo.jpg",
    imageAlt: "Página inicial do site Super Limpo Brasil",
    accent: "from-[#9ee53d]/25 via-[#173b28]/15 to-transparent",
  },
  {
    name: "Mentoria Concursos",
    category: "Landing page de campanha",
    description:
      "Página para uma oferta de mentoria direcionada ao concurso do TCE-MA, com mensagem objetiva, prova e contato direto.",
    domain: "mentoriaconcursos.app.br/tce-ma",
    previewUrl: "https://mentoriaconcursos.app.br/tce-ma",
    image: "/images/projeto-mentoria-tce-ma.jpg",
    imageAlt: "Página inicial da campanha de Mentoria Concursos para o TCE-MA",
    accent: "from-[#ff652b]/25 via-[#3b3ba2]/20 to-transparent",
  },
];

function BrowserPreview({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080824] shadow-2xl shadow-black/30">
      <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-[#0b0b2d] px-4">
        <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
        <span className="size-2.5 rounded-full bg-[#ffd93d]" />
        <span className="size-2.5 rounded-full bg-[#6bcb77]" />
        <span className="ml-2 min-w-0 truncate rounded-full bg-white/[0.05] px-3 py-1 text-[11px] text-white/40">
          {project.domain}
        </span>
      </div>
      <div className="relative aspect-[16/9] overflow-hidden bg-[#05051f]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          className="object-cover object-top transition duration-500 group-hover:scale-[1.015]"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={cn(
              "group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#08082b] p-5 sm:p-7",
              index === 0 && "lg:col-span-2 lg:grid lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-10",
            )}
          >
            <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70", project.accent)} />
            <div className="relative">
              <BrowserPreview project={project} priority={index === 0} />
            </div>
            <div className="relative px-2 pb-2 pt-7 sm:px-3 lg:py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EBF400]">{project.category}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{project.name}</h3>
              <p className="mt-4 max-w-xl leading-7 text-white/60">{project.description}</p>
              <button
                type="button"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-7")}
                onClick={() => setActiveProject(project)}
                aria-label={`Visualizar o projeto ${project.name}`}
              >
                <Eye aria-hidden="true" size={19} />
                Visualizar projeto
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02021E]/90 p-3 backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <div className="relative flex h-[92svh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/15 bg-[#070727] shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-4 sm:px-7">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#EBF400]">Prévia do projeto</p>
                <h2 id="project-modal-title" className="mt-1 truncate text-lg font-semibold sm:text-2xl">
                  {activeProject.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="focus-ring flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:bg-white/10"
                aria-label="Fechar visualização"
                autoFocus
              >
                <X aria-hidden="true" size={21} />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-white">
              <iframe
                src={activeProject.previewUrl}
                title={`Demonstração interativa do projeto ${activeProject.name}`}
                className="absolute inset-0 size-full border-0 bg-white"
                sandbox="allow-forms allow-same-origin allow-scripts"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
