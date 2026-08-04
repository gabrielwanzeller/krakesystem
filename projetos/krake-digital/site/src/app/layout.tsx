import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krakeagencia.com"),
  alternates: {
    canonical: "/",
  },
  title: "Krake Digital | Sites profissionais em Brasília",
  description:
    "Sites modernos e estratégicos para valorizar sua empresa e transformar visitantes em novas conversas.",
  openGraph: {
    title: "Krake Digital | Sites profissionais para sua empresa crescer",
    description:
      "Criação de sites, tráfego pago e sistemas personalizados em Brasília.",
    locale: "pt_BR",
    type: "website",
    url: "https://krakeagencia.com",
  },
  icons: {
    icon: "/brand/krake-symbol-yellow.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
