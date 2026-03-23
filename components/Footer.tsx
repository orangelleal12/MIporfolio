"use client";

import { Code2, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #6366F1, #22D3EE)" }}
            >
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
              Orangel<span className="gradient-text">.</span>
            </span>
          </button>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { href: "#about", label: t.nav.about },
              { href: "#projects", label: t.nav.projects },
              { href: "#ai", label: t.nav.ai },
              { href: "#contact", label: t.nav.contact },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>© {year} Orangel Leal · {t.footer.built}</span>
            <Heart className="w-3 h-3" style={{ color: "#6366F1" }} />
            <span>& Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
