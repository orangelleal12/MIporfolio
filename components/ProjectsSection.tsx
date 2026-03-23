"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { ArrowUpRight, Globe, BarChart3, Link2, Code2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Project {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  techs: string[];
  icon: ReactNode;
  color: string;
  gradient: string;
}

function ProjectCard({ project, index, keyWorkLabel }: { project: Project; index: number; keyWorkLabel: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-7 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
      style={{ boxShadow: `0 0 40px ${project.color}0A` }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 relative">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${project.color}1A`, color: project.color }}
          >
            {project.icon}
          </div>
          <span
            className="text-xs font-mono font-bold"
            style={{ color: `${project.color}99` }}
          >
            {project.id}
          </span>
        </div>
        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          style={{ background: `${project.color}1A`, color: project.color }}
          aria-label="View project"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 relative">
        <h3 className="text-lg font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="flex flex-col gap-2 relative">
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: project.color }}>
          {keyWorkLabel}
        </span>
        <ul className="flex flex-col gap-1.5">
          {project.responsibilities.map((r: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 relative">
        {project.techs.map((tech: string, i: number) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              background: `${project.color}12`,
              border: `1px solid ${project.color}30`,
              color: project.color,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const projects = [
    {
      id: "01",
      title: t.projects.items.p1.title,
      description: t.projects.items.p1.desc,
      responsibilities: [
        t.projects.items.p1.res1,
        t.projects.items.p1.res2,
        t.projects.items.p1.res3,
      ],
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: <Globe className="w-5 h-5" />,
      color: "#6366F1",
      gradient: "from-indigo-500/10 to-purple-500/5",
    },
    {
      id: "02",
      title: t.projects.items.p2.title,
      description: t.projects.items.p2.desc,
      responsibilities: [
        t.projects.items.p2.res1,
        t.projects.items.p2.res2,
        t.projects.items.p2.res3,
      ],
      techs: ["JavaScript", "REST APIs", "SQL", "Charts"],
      icon: <BarChart3 className="w-5 h-5" />,
      color: "#22D3EE",
      gradient: "from-cyan-500/10 to-teal-500/5",
    },
    {
      id: "03",
      title: t.projects.items.p3.title,
      description: t.projects.items.p3.desc,
      responsibilities: [
        t.projects.items.p3.res1,
        t.projects.items.p3.res2,
        t.projects.items.p3.res3,
      ],
      techs: ["Node.js", "REST APIs", "OAuth 2.0", "JSON"],
      icon: <Link2 className="w-5 h-5" />,
      color: "#A78BFA",
      gradient: "from-violet-500/10 to-pink-500/5",
    },
    {
      id: "04",
      title: t.projects.items.p4.title,
      description: t.projects.items.p4.desc,
      responsibilities: [
        t.projects.items.p4.res1,
        t.projects.items.p4.res2,
        t.projects.items.p4.res3,
      ],
      techs: ["Python", "Pandas", "Automation", "Data Analysis"],
      icon: <Code2 className="w-5 h-5" />,
      color: "#34D399",
      gradient: "from-emerald-500/10 to-green-500/5",
    },
  ];

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
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
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#a5b4fc",
            }}
          >
            {t.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t.projects.title}
          </h2>
          <p className="max-w-xl text-base" style={{ color: "var(--text-secondary)" }}>
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} keyWorkLabel={t.projects.keyWork} />
          ))}
        </div>
      </div>
    </section>
  );
}
