
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Database,
  FileText,
  KeyRound,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Play,
  Search,
  ShieldCheck,
  Video,
} from "lucide-react";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Video Streaming Platform",
    category: "Media & Full Stack Development",
    description:
      "A full-stack video streaming platform built with Java, Spring Boot and React, featuring authentication, media uploads, streaming, search, profiles and account verification.",
    features: [
      { icon: ShieldCheck, label: "JWT Authentication" },
      { icon: Video, label: "Video Streaming" },
      { icon: Search, label: "Video Search" },
      { icon: Cloud, label: "Cloudinary" },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "MySQL",
      "Cloudinary",
    ],
    demo: "https://video-streaming-frontend-eight.vercel.app/",
    frontend:
      "https://github.com/Sayan876/VideoStreaming-frontend",
    backend:
      "https://github.com/Sayan876/SECOND_BACKENDVideostreaming2",
  },
  {
    title: "Secure Authentication System",
    category: "Security & Authentication",
    description:
      "A secure authentication system designed around Spring Security, JWT and OAuth2, with short-lived access tokens, refresh-token sessions and secure frontend integration.",
    features: [
      { icon: KeyRound, label: "JWT + Refresh Tokens" },
      { icon: ShieldCheck, label: "OAuth2" },
      { icon: LockKeyhole, label: "HTTP-only Cookies" },
      { icon: Database, label: "Secure Backend" },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "OAuth2",
      "JWT",
      "TypeScript",
      "React",
      "Vite",
    ],
    demo: "https://auth-third-end-front-end.vercel.app/",
    frontend:
      "https://github.com/Sayan876/auth-thirdEnd-frontEnd",
    backend:
      "https://github.com/Sayan876/authApp_backend_Spring",
  },
];

const technologies = {
  synapse: [
    "Java",
    "Spring Boot",
    "Spring AI",
    "React",
    "TypeScript",
    "PostgreSQL",
    "pgvector",
    "Gemini",
    "JWT",
  ],
};

const TechStack = ({ items }: { items: string[] }) => (
  <div className="mt-7 flex flex-wrap gap-2">
    {items.map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({
  demo,
  frontend,
  backend,
}: {
  demo: string;
  frontend: string;
  backend: string;
}) => (
  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
    >
      Live Demo
      <ArrowUpRight
        size={15}
        className="transition-transform duration-200 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
      />
    </a>

    <a
      href={frontend}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
    >
      <FaGithub size={16} />
      Frontend
    </a>

    <a
      href={backend}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
    >
      <FaGithub size={16} />
      Backend
    </a>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Projects
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Things I've{" "}
            <span className="text-blue-600 dark:text-blue-400">
              built.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Full-stack applications showcasing backend engineering,
            secure authentication, REST APIs, AI integration and
            modern frontend development.
          </p>
        </motion.div>

        {/* =====================================================
            FEATURED PROJECT — SYNAPSE
        ===================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative mt-14 overflow-hidden rounded-3xl border border-border bg-background/60 backdrop-blur-sm transition-all duration-500 hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10" />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Synapse product preview */}
            <div className="relative min-h-[360px] overflow-hidden border-b border-border bg-gradient-to-br from-blue-600/[0.08] via-transparent to-violet-500/[0.06] dark:from-blue-400/[0.08] lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-9">
                <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Mock browser header */}
                  <div className="flex h-11 items-center gap-1.5 border-b border-border bg-muted/40 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <div className="ml-3 flex-1 rounded-md bg-background/70 px-3 py-1 text-center text-[10px] text-muted-foreground">
                      Synapse · AI Document Assistant
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
                        <BrainCircuit size={23} />
                      </div>

                      <div>
                        <p className="text-sm font-bold">Synapse</p>
                        <p className="text-xs text-muted-foreground">
                          Your documents, connected
                        </p>
                      </div>

                      <span className="ml-auto rounded-full border border-green-600/20 bg-green-600/5 px-2.5 py-1 text-[10px] font-semibold text-green-600 dark:text-green-400">
                        AI READY
                      </span>
                    </div>

                    {/* Document card */}
                    <div className="mt-6 rounded-xl border border-border bg-muted/20 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                          <FileText size={20} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold">
                            Knowledge Base.pdf
                          </p>
                          <p className="mt-1 text-[10px] text-muted-foreground">
                            Document context available
                          </p>
                        </div>

                        <ShieldCheck
                          size={17}
                          className="shrink-0 text-blue-600 dark:text-blue-400"
                        />
                      </div>
                    </div>

                    {/* Chat mockup */}
                    <div className="mt-4 space-y-3">
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-blue-600 px-4 py-3 text-xs leading-5 text-white">
                        Summarize the key points in my document.
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                          <BrainCircuit size={15} />
                        </div>

                        <div className="flex-1 rounded-2xl rounded-bl-sm border border-border bg-muted/30 px-4 py-3">
                          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                            <MessageSquareText size={13} />
                            AI RESPONSE
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-full rounded bg-foreground/10" />
                            <div className="h-2 w-[90%] rounded bg-foreground/10" />
                            <div className="h-2 w-[65%] rounded bg-foreground/10" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Search indicator */}
                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-[10px] text-muted-foreground">
                      <Search size={13} className="text-blue-600 dark:text-blue-400" />
                      Retrieval-augmented generation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Synapse information */}
            <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <BrainCircuit size={18} />
                  Featured Project
                </div>

                <span className="rounded-full border border-green-600/20 bg-green-600/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-600 dark:border-green-400/20 dark:bg-green-400/5 dark:text-green-400">
                  Live
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Synapse
              </h3>

              <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                AI-Powered Document Assistant
              </p>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                A full-stack AI application that lets users upload
                documents and ask questions about their content.
                Built with Spring Boot, React and Spring AI, it uses
                retrieval-augmented generation (RAG), vector search
                and Google Gemini to provide context-aware answers.
              </p>

              {/* Features */}
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4">
                {[
                  { icon: ShieldCheck, label: "JWT Authentication" },
                  { icon: FileText, label: "Document Processing" },
                  { icon: Search, label: "Semantic Search" },
                  { icon: BrainCircuit, label: "RAG + Gemini AI" },
                  { icon: Database, label: "PostgreSQL + pgvector" },
                  { icon: MessageSquareText, label: "Streaming Chat" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <Icon
                      size={16}
                      className="shrink-0 text-blue-600 dark:text-blue-400"
                    />
                    {label}
                  </div>
                ))}
              </div>

              <TechStack items={technologies.synapse} />

              <ProjectLinks
                demo="https://synapse-frontend-psi-six.vercel.app/"
                frontend="https://github.com/Sayan876/synapse_frontend"
                backend="https://github.com/Sayan876/synapse_backend"
              />
            </div>
          </div>
        </motion.article>

        {/* =====================================================
            EXISTING PROJECTS
        ===================================================== */}
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="group relative mt-6 overflow-hidden rounded-3xl border border-border bg-background/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30 sm:p-9"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {index === 0 ? (
                    <Video size={17} />
                  ) : (
                    <LockKeyhole size={17} />
                  )}
                  {project.category}
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {project.features.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <Icon
                        size={15}
                        className="shrink-0 text-blue-600 dark:text-blue-400"
                      />
                      {label}
                    </div>
                  ))}
                </div>

                <TechStack items={project.technologies} />
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[180px]">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
                >
                  Live Demo
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </a>

                <a
                  href={project.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <FaGithub size={16} />
                  Frontend
                </a>

                <a
                  href={project.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <FaGithub size={16} />
                  Backend
                </a>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <Layers3 size={17} className="shrink-0" />
          <span>
            Built with a focus on backend architecture, security,
            AI integration and real-world application development.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
