import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 600,
};

export const metadata: Metadata = {
  title: "Carteirinha de Estudante - José Carlos de Freitas - FBR",
  description: "Carteirinha de Estudante - José Carlos de Freitas - FBR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-orange-50`}>{children}</body>
    </html>
  );
}
