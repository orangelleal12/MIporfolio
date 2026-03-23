import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orangel Leal — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer specializing in Intelligent Software Solutions. I build modern web applications, API integrations, business dashboards, and AI-powered tools.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "Python",
    "TypeScript",
    "Artificial Intelligence",
    "Web Development",
    "Orangel Leal",
  ],
  authors: [{ name: "Orangel Leal" }],
  creator: "Orangel Leal",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Orangel Leal — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer specializing in Intelligent Software Solutions.",
    siteName: "Orangel Leal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orangel Leal — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer specializing in Intelligent Software Solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-stretch" style={{ color: "var(--text-primary)" }}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
