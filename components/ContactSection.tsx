"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "lealorangel85@gmail.com",
      href: "mailto:[lealorangel85@gmail.com]",
      description: t.contact.cards.email,
      color: "#6366F1",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "https://github.com/orangelleal12",
      href: "https://github.com/orangelleal12",
      description: t.contact.cards.github,
      color: "#22D3EE",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/orangelleal",
      href: "https://linkedin.com/in/orangelleal",
      description: t.contact.cards.linkedin,
      color: "#A78BFA",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#a5b4fc",
            }}
          >
            <MessageSquare className="w-3 h-3" />
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t.contact.title1}{" "}
            <span className="gradient-text">{t.contact.title2}</span>
          </h2>
          <p className="max-w-lg text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ boxShadow: `0 0 30px ${link.color}0A` }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${link.color}18`, color: link.color }}
                >
                  {link.icon}
                </div>
                <ArrowUpRight
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 translate-x-1 group-hover:translate-x-0 group-hover:translate-y-0"
                  style={{ color: link.color }}
                />
              </div>
              <div>
                <div className="text-xs font-semibold mb-1" style={{ color: link.color }}>
                  {link.label}
                </div>
                <div className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                  {link.value}
                </div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {link.description}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(34,211,238,0.1))",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              {t.contact.ready}
            </h3>
            <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
              {t.contact.readySub}
            </p>
            <a
              href="mailto:orangel.leal@email.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #6366F1, #22D3EE)",
                boxShadow: "0 0 30px rgba(99,102,241,0.4)",
              }}
            >
              <Mail className="w-4 h-4" />
              {t.contact.btn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
