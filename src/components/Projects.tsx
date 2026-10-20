
import {
  BrainCircuit,
  Cloud,
  
  Database,
  FileSearch,
  
  Globe,
  KeyRound,
  Layers3,
  LockKeyhole,
  Search,
  Server,
  ShieldCheck,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  
  SiTypescript,
  SiPostgresql,
  
  SiSwagger,
  SiPostman,
  SiAxios,
  SiCloudinary,
} from "react-icons/si";

const Skills = () => {
  const coreSkills = [
    {
      name: "Java",
      description: "Core Java, OOP and backend application development",
      icon: FaJava,
      iconClass: "text-[#E76F00]",
      featured: false,
    },
    {
      name: "Spring Boot",
      description: "REST APIs, service layers and backend architecture",
      icon: SiSpringboot,
      iconClass: "text-[#6DB33F]",
      featured: false,
    },
    {
      name: "Spring AI",
      description: "Integrating LLMs and building AI-powered applications",
      icon: BrainCircuit,
      iconClass: "text-blue-600 dark:text-blue-400",
      featured: false,
    },
    {
      name: "React",
      description: "Component-based UIs, hooks and frontend state management",
      icon: FaReact,
      iconClass: "text-[#61DAFB]",
      featured: true,
    },
    {
      name: "TypeScript",
      description: "Type-safe frontend development and API integration",
      icon: SiTypescript,
      iconClass: "text-[#3178C6]",
      featured: false,
    },
    {
      name: "JavaScript",
      description: "Modern JavaScript and asynchronous programming",
      icon: FaJs,
      iconClass: "text-[#F7DF1E]",
      featured: false,
    },
  ];

  const backendSkills = [
    {
      name: "REST API Development",
      description: "Building and integrating HTTP APIs with Spring Boot",
      icon: Globe,
      iconClass: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "RAG Pipelines",
      description: "Retrieving document context to ground LLM responses",
      icon: Workflow,
      iconClass: "text-[#8B5CF6]",
    },
    {
      name: "Embeddings & Vector Search",
      description: "Semantic retrieval using vector representations",
      icon: Search,
      iconClass: "text-[#0D9488]",
    },
    {
      name: "PostgreSQL & pgvector",
      description: "Relational data and vector similarity search",
      icon: SiPostgresql,
      iconClass: "text-[#4169E1]",
    },
    {
      name: "Gemini API Integration",
      description: "Connecting Google Gemini to AI-powered workflows",
      icon: BrainCircuit,
      iconClass: "text-[#4285F4]",
    },
    {
      name: "Streaming Responses",
      description: "Delivering incremental AI responses to the frontend",
      icon: Zap,
      iconClass: "text-[#EAB308]",
    },
    {
      name: "Spring Security & JWT",
      description: "Authentication, authorization and protected endpoints",
      icon: ShieldCheck,
      iconClass: "text-[#6DB33F]",
    },
    {
      name: "JPA / Hibernate",
      description: "ORM, entity relationships and database persistence",
      icon: Database,
      iconClass: "text-[#59666C]",
    },
    {
      name: "OAuth2",
      description: "Understanding and implementing delegated authentication",
      icon: KeyRound,
      iconClass: "text-[#3B82F6]",
    },
    {
      name: "Document Processing",
      description: "Building document ingestion and retrieval workflows",
      icon: FileSearch,
      iconClass: "text-[#D97706]",
    },
    {
      name: "MySQL",
      description: "Relational database design, queries and SQL",
      icon: Database,
      iconClass: "text-[#4479A1]",
    },
    {
      name: "API Security",
      description: "JWT-protected requests, access control and CORS",
      icon: LockKeyhole,
      iconClass: "text-[#8B5CF6]",
    },
  ];

  const tools = [
    {
      name: "Docker",
      icon: FaDocker,
      iconClass: "text-[#2496ED]",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      iconClass: "text-[#F05032]",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      iconClass: "text-foreground",
    },
    {
      name: "Maven",
      icon: Wrench,
      iconClass: "text-[#C71A36]",
    },
    {
      name: "Swagger / OpenAPI",
      icon: SiSwagger,
      iconClass: "text-[#85EA2D]",
    },
    {
      name: "Postman",
      icon: SiPostman,
      iconClass: "text-[#FF6C37]",
    },
    {
      name: "Axios",
      icon: SiAxios,
      iconClass: "text-[#5A29E4]",
    },
    {
      name: "Cloudinary",
      icon: SiCloudinary,
      iconClass: "text-[#3448C5]",
    },
    {
      name: "Vercel & Render",
      icon: Cloud,
      iconClass: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />

        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technologies I use to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              build and ship.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A backend-focused full-stack skill set spanning Java,
            Spring Boot, secure APIs, modern frontend development
            and AI-powered applications using retrieval-augmented
            generation and vector search.
          </p>
        </motion.div>

        {/* Core Skills */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className={`group relative overflow-hidden rounded-2xl border bg-background/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  skill.featured
                    ? "border-blue-600/40 shadow-lg shadow-blue-600/5 dark:border-blue-400/40"
                    : "border-border hover:border-blue-600/30 dark:hover:border-blue-400/30"
                }`}
              >
                {/* React glow */}
                {skill.featured && (
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
                )}

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      skill.featured
                        ? "bg-blue-600/10 dark:bg-blue-400/10"
                        : "bg-muted"
                    }`}
                  >
                    <Icon
                      size={skill.featured ? 30 : 25}
                      className={`${skill.iconClass} ${
                        skill.featured
                          ? "animate-[spin_8s_linear_infinite]"
                          : ""
                      } transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {skill.featured && (
                    <span className="rounded-full border border-blue-600/20 bg-blue-600/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/5 dark:text-blue-400">
                      Frontend
                    </span>
                  )}
                </div>

                <h3 className="relative mt-5 text-lg font-semibold">
                  {skill.name}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Backend, AI & Security */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <Server size={18} />
            </div>

            <div>
              <h3 className="font-semibold">
                Backend, AI & Security
              </h3>

              <p className="text-sm text-muted-foreground">
                APIs, retrieval pipelines, databases and secure architecture
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {backendSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-background/50 p-5 transition-all duration-300 hover:border-blue-600/30 hover:bg-blue-600/[0.02] dark:hover:border-blue-400/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-blue-600/10 dark:group-hover:bg-blue-400/10">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className={`${skill.iconClass} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">
                      {skill.name}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Development Tools */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <Wrench size={18} />
            </div>

            <div>
              <h3 className="font-semibold">
                Development & Deployment Tools
              </h3>

              <p className="text-sm text-muted-foreground">
                Tools used for development, API testing and deployment
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {tools.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center gap-2.5 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:border-blue-600/30 hover:text-foreground dark:hover:border-blue-400/30"
                >
                  <Icon
                    size={17}
                    className={`${tool.iconClass} transition-transform duration-200 group-hover:scale-110`}
                  />

                  <span>{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 flex items-center gap-3 border-t border-border pt-8 text-sm text-muted-foreground"
        >
          <Layers3 size={17} />

          <span>
            Focused on building maintainable backend systems,
            secure APIs and practical AI-powered applications.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
