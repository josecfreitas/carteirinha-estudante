import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carteirinha de Estudante - José Carlos de Freitas - FBR',
  description: 'Carteirinha de Estudante - José Carlos de Freitas - FBR',
  viewport: 'width=600',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-orange-50`}>{children}</body>
    </html>
  )
}
