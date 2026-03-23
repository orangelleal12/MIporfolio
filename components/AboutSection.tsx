"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Brain, Code2, Database, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: t.about.highlights.fs.title,
      description: t.about.highlights.fs.desc,
      color: "#6366F1",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: t.about.highlights.ai.title,
      description: t.about.highlights.ai.desc,
      color: "#22D3EE",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: t.about.highlights.data.title,
      description: t.about.highlights.data.desc,
      color: "#A78BFA",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t.about.highlights.auto.title,
      description: t.about.highlights.auto.desc,
      color: "#34D399",
    },
  ];

  function HighlightCard({ item, index }: { item: typeof highlights[0]; index: number }) {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={cardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card rounded-xl p-5 flex flex-col gap-3 group hover:scale-105 transition-transform duration-300"
        style={{
          boxShadow: `0 0 20px ${item.color}14`,
        }}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${item.color}1A`, color: item.color }}
        >
          {item.icon}
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
            {item.title}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {item.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
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
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#a5b4fc",
            }}
          >
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t.about.title1}{" "}
            <span className="gradient-text">{t.about.title2}</span>
          </h2>
          <p className="max-w-xl text-base" style={{ color: "var(--text-secondary)" }}>
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div
              className="rounded-2xl p-6 glass-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2" style={{ borderColor: 'rgba(99,102,241,0.5)' }}>
                  <Image
                    src="/imagen-deperfil.jpg"
                    alt="Orangel Leal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 56px, 56px"
                    unoptimized
                    priority
                  />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>Orangel Leal</div>
                  <div className="text-sm" style={{ color: "var(--color-accent)" }}>Full Stack Developer · AI Focus</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <p>
                  {t.about.bio1}{" "}
                  <span style={{ color: "var(--color-accent)" }}>{t.about.bio1span}</span>.
                </p>
                <p>
                  {t.about.bio2}
                </p>
                <p>
                  {t.about.bio3}{" "}
                  <span style={{ color: "var(--color-primary)" }}>{t.about.bio3span}</span>.
                </p>
              </div>
            </div>

            {/* Professional goal */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(34,211,238,0.06))",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <h4 className="text-sm font-semibold mb-2 gradient-text">{t.about.goalTitle}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {t.about.goalText}
              </p>
            </div>
          </motion.div>

          {/* Right — highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <HighlightCard key={i} item={item} index={i} />
            ))}

            {/* Availability card */}
            <div
              className="col-span-2 rounded-xl p-5 flex items-center gap-4"
              style={{
                background: "rgba(34,211,238,0.06)",
                border: "1px solid rgba(34,211,238,0.2)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#22D3EE" }} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#22D3EE" }}>
                  {t.about.openToWork}
                </div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {t.about.openToWorkSub}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
