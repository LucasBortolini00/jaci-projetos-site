import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JACI Projetos e Construções",
  description: "JACI Projetos e Construções: Maximizando Seu Investimento em Galpões e Empreendimentos Imobiliários.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
