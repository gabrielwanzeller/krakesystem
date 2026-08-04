import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5561984494617?text=Ol%C3%A1%2C%20Gabriel!%20Li%20um%20conte%C3%BAdo%20no%20blog%20da%20Krake%20e%20gostaria%20de%20conversar%20sobre%20minha%20empresa.";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02021E]/90 backdrop-blur-xl">
      <div className="container-site flex h-20 items-center justify-between">
        <Link href="/" aria-label="Krake Digital — página inicial" className="focus-ring rounded-md">
          <Image src="/brand/krake-horizontal-yellow.svg" alt="Krake Digital" width={146} height={37} priority />
        </Link>
        <nav aria-label="Navegação do blog" className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <Link className="focus-ring rounded hover:text-white" href="/">Início</Link>
          <Link className="focus-ring rounded text-white" href="/blog">Blog</Link>
          <Link className="focus-ring rounded hover:text-white" href="/#servicos">Serviços</Link>
        </nav>
        <a className={buttonVariants({ variant: "primary" })} href={whatsappUrl} target="_blank" rel="noreferrer" data-conversion="whatsapp_click">
          <MessageCircle aria-hidden="true" size={18} />
          <span className="hidden sm:inline">Conversar no WhatsApp</span>
          <span className="sm:hidden">Conversar</span>
        </a>
      </div>
    </header>
  );
}

