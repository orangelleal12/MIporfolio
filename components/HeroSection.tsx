"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Terminal, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const floatingBadges = [
  { icon: <Terminal className="w-3 h-3" />, label: "Next.js 16", delay: 0, x: "5%", y: "20%" },
  { icon: <Sparkles className="w-3 h-3" />, label: "AI/LLM", delay: 0.4, x: "85%", y: "15%" },
  { icon: <Zap className="w-3 h-3" />, label: "Python", delay: 0.8, x: "90%", y: "70%" },
];

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating badges (desktop only) */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tech-badge"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: badge.delay + 1, duration: 0.5 },
            scale: { delay: badge.delay + 1, duration: 0.5 },
            y: { delay: badge.delay + 1.5, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {badge.icon}
          {badge.label}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              color: "#22D3EE",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22D3EE" }} />
            {t.hero.status}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          {t.hero.greeting}{" "}
          <span className="gradient-text">Orangel Leal</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.hero.role}
          <br />
          <span style={{ color: "var(--text-primary)" }}>{t.hero.subrole}</span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #6366F1, #22D3EE)",
              boxShadow: "0 0 30px rgba(99,102,241,0.4)",
            }}
          >
            {t.hero.viewProjects}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "var(--text-primary)",
            }}
          >
            <Mail className="w-4 h-4" />
            {t.hero.contactMe}
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          {[
            { value: "Full Stack", label: t.hero.stats.dev },
            { value: "AI", label: t.hero.stats.ai },
            { value: "End-to-End", label: t.hero.stats.solutions },
            { value: "B2B/B2C", label: t.hero.stats.business },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(99,102,241,0.4)" }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: "#6366F1" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
