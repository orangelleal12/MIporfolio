"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Layers, Code2, TestTube, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MethodologySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      icon: <Search className="w-5 h-5" />,
      title: t.methodology.steps.s1.title,
      description: t.methodology.steps.s1.desc,
      color: "#6366F1",
    },
    {
      step: "02",
      icon: <Layers className="w-5 h-5" />,
      title: t.methodology.steps.s2.title,
      description: t.methodology.steps.s2.desc,
      color: "#22D3EE",
    },
    {
      step: "03",
      icon: <Code2 className="w-5 h-5" />,
      title: t.methodology.steps.s3.title,
      description: t.methodology.steps.s3.desc,
      color: "#A78BFA",
    },
    {
      step: "04",
      icon: <TestTube className="w-5 h-5" />,
      title: t.methodology.steps.s4.title,
      description: t.methodology.steps.s4.desc,
      color: "#34D399",
    },
    {
      step: "05",
      icon: <TrendingUp className="w-5 h-5" />,
      title: t.methodology.steps.s5.title,
      description: t.methodology.steps.s5.desc,
      color: "#FB923C",
    },
  ];

  return (
    <section id="methodology" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
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
            {t.methodology.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t.methodology.title1}{" "}
            <span className="gradient-text">{t.methodology.title2}</span>
          </h2>
          <p className="max-w-xl text-base" style={{ color: "var(--text-secondary)" }}>
            {t.methodology.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3), transparent)" }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                className="flex gap-6 items-start group"
              >
                {/* Step circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-sm transition-transform duration-200 group-hover:scale-110"
                    style={{
                      background: `${step.color}1A`,
                      border: `1px solid ${step.color}30`,
                      color: step.color,
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="flex-1 glass-card rounded-2xl p-6 group-hover:-translate-y-0.5 transition-transform duration-200"
                  style={{ boxShadow: `0 0 20px ${step.color}08` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono" style={{ color: `${step.color}80` }}>
                      STEP {step.step}
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${step.color}20` }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
