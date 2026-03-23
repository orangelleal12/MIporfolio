"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Workflow, BarChart2, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const aiCapabilities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: t.ai.cards.c1.title,
      description: t.ai.cards.c1.desc,
      color: "#6366F1",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: t.ai.cards.c2.title,
      description: t.ai.cards.c2.desc,
      color: "#22D3EE",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: t.ai.cards.c3.title,
      description: t.ai.cards.c3.desc,
      color: "#A78BFA",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t.ai.cards.c4.title,
      description: t.ai.cards.c4.desc,
      color: "#34D399",
    },
  ];

  return (
    <section id="ai" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.2), transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
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
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#a5b4fc",
            }}
          >
            <Sparkles className="w-3 h-3" />
            {t.ai.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t.ai.title1}{" "}
            <span className="gradient-text">{t.ai.title2}</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t.ai.subtitle}
          </p>
        </motion.div>

        {/* AI capabilities grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
              style={{ boxShadow: `0 0 40px ${cap.color}0A` }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${cap.color}08 0%, transparent 60%)`,
                }}
              />

              <div className="flex items-start gap-4 relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${cap.color}18`, color: cap.color }}
                >
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2 leading-snug" style={{ color: "var(--text-primary)" }}>
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {cap.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key message banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(34,211,238,0.08))",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(99,102,241,0.15)" }}
            >
              <Sparkles className="w-6 h-6" style={{ color: "#6366F1" }} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              {t.ai.mindset.title}
            </h3>
            <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t.ai.mindset.text1}{" "}
              <span style={{ color: "var(--text-primary)" }}>
                {t.ai.mindset.text2}
              </span>{" "}
              {t.ai.mindset.text3}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
