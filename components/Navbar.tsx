"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#technologies", label: t.nav.tech },
    { href: "#projects", label: t.nav.projects },
    { href: "#ai", label: t.nav.ai },
    { href: "#methodology", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(11, 15, 25, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(31,41,55,0.6)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #6366F1, #22D3EE)" }}
            >
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
              Orangel<span className="gradient-text">.</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  color: active === link.href ? "var(--color-primary)" : "var(--text-secondary)",
                }}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(99,102,241,0.12)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA & Lang */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-white/5 active:scale-95"
              style={{ color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'en' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                boxShadow: "0 0 20px rgba(99,102,241,0.35)",
              }}
            >
              {t.nav.hireMe}
            </button>
          </div>

          {/* Mobile hamburger & Lang */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-1.5 rounded-lg text-xs font-semibold transition-all hover:bg-white/5"
              style={{ color: "var(--text-secondary)" }}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-4"
            style={{
              background: "rgba(17,24,39,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(31,41,55,0.8)",
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: active === link.href ? "var(--color-primary)" : "var(--text-secondary)",
                    background: active === link.href ? "rgba(99,102,241,0.12)" : "transparent",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #6366F1, #22D3EE)" }}
                >
                  {t.nav.hireMe}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
