import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GRPVNE - Workflow Orchestration for Creators",
  description: "The Zapier for creator tools. Automate your creative workflows across AI services and social platforms.",
  keywords: ["creator tools", "workflow automation", "AI", "content creation", "social media"],
  authors: [{ name: "GRPVNE Team" }],
  openGraph: {
    title: "GRPVNE - Workflow Orchestration for Creators",
    description: "The Zapier for creator tools. Automate your creative workflows across AI services and social platforms.",
    type: "website",
    url: "https://grpvne.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRPVNE - Workflow Orchestration for Creators",
    description: "The Zapier for creator tools. Automate your creative workflows across AI services and social platforms.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}