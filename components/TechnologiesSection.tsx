"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Tech = {
  name: string;
  icon: string;
};

type Category = {
  title: string;
  color: string;
  techs: Tech[];
};

function TechCard({ cat, index }: { cat: Category; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 group"
      style={{ boxShadow: `0 0 30px ${cat.color}0D` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: cat.color }}
        />
        <h3
          className="text-sm font-semibold"
          style={{ color: cat.color }}
        >
          {cat.title}
        </h3>
      </div>

      {/* Tech items */}
      <div className="flex flex-col gap-2">
        {cat.techs.map((tech: Tech, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.06 + 0.2 }}
            className="flex items-center gap-3 group/item"
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: `${cat.color}1A`,
                color: cat.color,
                fontSize: "10px",
              }}
            >
              {tech.icon}
            </span>
            <span
              className="text-sm transition-colors duration-200 group-hover/item:text-[var(--text-primary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechnologiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const categories = [
    {
      title: t.tech.cats.lang,
      color: "#6366F1",
      techs: [
        { name: "JavaScript (ES6+)", icon: "JS" },
        { name: "Python", icon: "PY" },
        { name: "SQL", icon: "SQL" },
        { name: "TypeScript", icon: "TS" },
      ],
    },
    {
      title: t.tech.cats.front,
      color: "#22D3EE",
      techs: [
        { name: "React", icon: "⚛" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML5 / CSS3", icon: "</>" },
      ],
    },
    {
      title: t.tech.cats.back,
      color: "#A78BFA",
      techs: [
        { name: "Node.js", icon: "⬡" },
        { name: "REST APIs", icon: "⚡" },
        { name: "OAuth / JWT", icon: "🔐" },
        { name: "Authentication", icon: "🔑" },
      ],
    },
    {
      title: t.tech.cats.ai,
      color: "#34D399",
      techs: [
        { name: "Prompt Engineering", icon: "🤖" },
        { name: "LLM Integration", icon: "🧠" },
        { name: "AI Automation", icon: "⚙️" },
        { name: "Data Analysis AI", icon: "📊" },
      ],
    },
    {
      title: t.tech.cats.enterprise,
      color: "#FB923C",
      techs: [
        { name: "Zoho CRM", icon: "📋" },
        { name: "NetSuite", icon: "💼" },
        { name: "Google Sheets API", icon: "📈" },
        { name: "Postman", icon: "🧪" },
      ],
    },
    {
      title: t.tech.cats.tools,
      color: "#F472B6",
      techs: [
        { name: "Git / GitHub", icon: "🔀" },
        { name: "VS Code", icon: "💻" },
        { name: "npm / Node", icon: "📦" },
        { name: "Vercel", icon: "▲" },
      ],
    },
  ];

  return (
    <section id="technologies" className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(34,211,238,0.1)",
              border: "1px solid rgba(34,211,238,0.25)",
              color: "#22D3EE",
            }}
          >
            {t.tech.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t.tech.title}
          </h2>
          <p className="max-w-xl text-base" style={{ color: "var(--text-secondary)" }}>
            {t.tech.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <TechCard key={i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
