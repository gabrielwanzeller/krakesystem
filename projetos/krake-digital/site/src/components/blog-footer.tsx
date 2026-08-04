import Image from "next/image";
import Link from "next/link";

export function BlogFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-site flex flex-col gap-7 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <div>
          <Image src="/brand/krake-horizontal-yellow.svg" alt="Krake Digital" width={132} height={33} />
          <p className="mt-3">Sites e soluções digitais em Brasília.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link className="focus-ring rounded hover:text-white" href="/">Início</Link>
          <Link className="focus-ring rounded hover:text-white" href="/blog">Blog</Link>
          <Link className="focus-ring rounded hover:text-white" href="/politica-de-privacidade">Privacidade</Link>
        </div>
        <p>© {new Date().getFullYear()} Krake Digital</p>
      </div>
    </footer>
  );
}

