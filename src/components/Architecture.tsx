import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

import {
  FaReact,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiSpringsecurity,
  SiJsonwebtokens,
  SiHibernate,
  SiMysql,
  SiTypescript,
  SiSwagger,
  SiPostman,
  SiAxios,
  SiCloudinary,
} from "react-icons/si";

import {
  ShieldCheck,
  Database,
  Server,
  LockKeyhole,
  Globe,
  Boxes,
  Workflow,
  Code2,
} from "lucide-react";

type TechNode = {
  name: string;
  description: string;
  icon: ElementType;
  color: string;
};

/* ========================================================= */
/* Main Component */
/* ========================================================= */

const Architecture = () => {
  const frontend: TechNode[] = [
    {
      name: "React",
      description: "Component-based frontend applications",
      icon: FaReact,
      color: "text-cyan-400",
    },
    {
      name: "TypeScript",
      description: "Type-safe frontend development",
      icon: SiTypescript,
      color: "text-blue-500",
    },
    {
      name: "Axios",
      description: "HTTP communication with REST APIs",
      icon: SiAxios,
      color: "text-purple-500",
    },
  ];

  const backend: TechNode[] = [
    {
      name: "Java",
      description: "Core backend programming language",
      icon: FaJava,
      color: "text-red-500",
    },
    {
      name: "Spring Boot",
      description: "REST APIs and backend application layer",
      icon: SiSpringboot,
      color: "text-green-500",
    },
    {
      name: "Spring Security",
      description: "Authentication and authorization",
      icon: SiSpringsecurity,
      color: "text-green-600",
    },
  ];

  const security: TechNode[] = [
    {
      name: "JWT",
      description: "Stateless access-token authentication",
      icon: SiJsonwebtokens,
      color: "text-pink-500",
    },
    {
      name: "OAuth2",
      description: "Google and GitHub authentication flows",
      icon: Globe,
      color: "text-orange-500",
    },
    {
      name: "BCrypt",
      description: "Secure password hashing",
      icon: LockKeyhole,
      color: "text-yellow-500",
    },
  ];

  const data: TechNode[] = [
    {
      name: "JPA / Hibernate",
      description: "ORM and persistent data management",
      icon: SiHibernate,
      color: "text-indigo-500",
    },
    {
      name: "MySQL",
      description: "Relational database and SQL",
      icon: SiMysql,
      color: "text-blue-500",
    },
  ];

  const tools: TechNode[] = [
    {
      name: "Docker",
      description: "Containerized application deployment",
      icon: FaDocker,
      color: "text-blue-500",
    },
    {
      name: "Maven",
      description: "Java dependency and build management",
      icon: Boxes,
      color: "text-red-500",
    },
    {
      name: "Swagger / OpenAPI",
      description: "REST API documentation",
      icon: SiSwagger,
      color: "text-green-500",
    },
    {
      name: "Postman",
      description: "API development and testing",
      icon: SiPostman,
      color: "text-orange-500",
    },
    {
      name: "Axios",
      description: "Frontend HTTP client",
      icon: SiAxios,
      color: "text-purple-500",
    },
    {
      name: "Cloudinary",
      description: "Media storage and delivery",
      icon: SiCloudinary,
      color: "text-blue-400",
    },
    {
      name: "Git",
      description: "Version control",
      icon: FaGitAlt,
      color: "text-orange-600",
    },
    {
      name: "GitHub",
      description: "Source control and collaboration",
      icon: FaGithub,
      color: "text-foreground",
    },
  ];

  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* ================================================= */}
      {/* Background Decoration */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-32 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl dark:bg-purple-400/5"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">

        {/* ================================================= */}
        {/* Heading */}
        {/* ================================================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Architecture
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How my{" "}
            <span className="text-blue-600 dark:text-blue-400">
              applications work.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A visual overview of how my frontend, backend, security,
            database, and development tools work together to build
            complete applications.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* Main Architecture Flow */}
        {/* ================================================= */}

        <div className="mt-16">

          <ArchitectureLayer
            number="01"
            icon={<FaReact size={27} />}
            title="Frontend"
            description="React interfaces communicate with backend services through HTTP APIs."
            color="text-cyan-400"
            iconAnimation="spin"
          />

          <Connection />

          <ArchitectureLayer
            number="02"
            icon={<Server size={25} />}
            title="Backend"
            description="Java and Spring Boot handle business logic and REST API operations."
            color="text-green-500"
            iconAnimation="pulse"
          />

          <Connection />

          <ArchitectureLayer
            number="03"
            icon={<ShieldCheck size={25} />}
            title="Security"
            description="Spring Security protects application resources using JWT and OAuth2."
            color="text-pink-500"
            iconAnimation="pulse"
          />

          <Connection />

          <ArchitectureLayer
            number="04"
            icon={<Database size={25} />}
            title="Data Layer"
            description="JPA and Hibernate manage persistence while MySQL stores application data."
            color="text-blue-500"
            iconAnimation="pulse"
          />

          <Connection />

          <ArchitectureLayer
            number="05"
            icon={<Boxes size={25} />}
            title="Development & Deployment"
            description="Docker, Maven, Git, Swagger and Postman support the development lifecycle."
            color="text-orange-500"
            iconAnimation="pulse"
          />
        </div>

        {/* ================================================= */}
        {/* Technology Groups */}
        {/* ================================================= */}

        <div className="mt-16 space-y-16">

          <TechnologyGroup
            title="Frontend"
            description="The client-side layer responsible for the user interface and API communication."
            nodes={frontend}
          />

          <TechnologyGroup
            title="Backend"
            description="Java and Spring Boot provide the core application and REST API layer."
            nodes={backend}
          />

          <TechnologyGroup
            title="Security & Authentication"
            description="Authentication and authorization mechanisms protect application resources."
            nodes={security}
          />

          <TechnologyGroup
            title="Persistence"
            description="JPA and Hibernate provide ORM while MySQL handles relational data storage."
            nodes={data}
          />

          <TechnologyGroup
            title="Tools & Infrastructure"
            description="Supporting tools used for development, testing, documentation, version control and deployment."
            nodes={tools}
          />
        </div>

        {/* ================================================= */}
        {/* Architecture Summary */}
        {/* ================================================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 overflow-hidden rounded-3xl border border-border bg-muted/30 p-7 sm:p-9"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">

              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
              >
                <Workflow size={24} />
              </motion.div>

              <div>
                <h3 className="font-semibold">
                  From interface to database
                </h3>

                <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
                  React communicates with Spring Boot REST APIs.
                  Spring Security protects resources using JWT and
                  OAuth2. JPA and Hibernate manage persistence while
                  MySQL stores application data.
                </p>
              </div>
            </div>

            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex shrink-0 items-center gap-3 text-muted-foreground"
            >
              <Code2 size={18} />

              <span className="text-sm font-medium">
                Full-stack architecture
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ========================================================= */
/* Architecture Layer */
/* ========================================================= */

const ArchitectureLayer = ({
  number,
  icon,
  title,
  description,
  color,
  iconAnimation,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  iconAnimation: "spin" | "pulse";
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
      }}
      animate={{
        y: [0, -3, 0],
      }}
      whileHover={{
        y: -7,
        scale: 1.015,
      }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30 dark:hover:shadow-blue-400/5 sm:p-6"
    >
      {/* Animated background glow */}

      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">

        {/* Number */}

        <motion.span
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xs font-bold tracking-[0.2em] text-muted-foreground"
        >
          {number}
        </motion.span>

        {/* Icon */}

        <motion.div
          animate={
            iconAnimation === "spin"
              ? {
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }
              : {
                  scale: [1, 1.08, 1],
                  rotate: [0, 2, -2, 0],
                }
          }
          transition={{
            duration: iconAnimation === "spin" ? 8 : 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted ${color}`}
        >
          {icon}
        </motion.div>

        {/* Content */}

        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* ========================================================= */
/* Animated Connection */
/* ========================================================= */

const Connection = () => {
  return (
    <div className="relative flex h-16 justify-center">

      {/* Main line */}

      <div className="relative h-full w-px overflow-hidden bg-border">

        {/* Continuous glowing flow */}

        <motion.div
          animate={{
            y: ["-120%", "220%"],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"
        />

      </div>

      {/* Moving data packet */}

      <motion.div
        animate={{
          y: [0, 48],
          opacity: [0, 1, 1, 0],
          scale: [0.7, 1.15, 1, 0.7],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60"
      />

    </div>
  );
};

/* ========================================================= */
/* Technology Group */
/* ========================================================= */

const TechnologyGroup = ({
  title,
  description,
  nodes,
}: {
  title: string;
  description: string;
  nodes: TechNode[];
}) => {
  return (
    <motion.div
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
        duration: 0.6,
      }}
    >
      {/* Group Heading */}

      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Technology Cards */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.name}
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
                delay: index * 0.06,
              }}
              animate={{
                y: [0, -2, 0],
              }}
              whileHover={{
                y: -7,
                scale: 1.025,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30 dark:hover:shadow-blue-400/5"
            >

              {/* Hover glow */}

              <motion.div
                animate={{
                  opacity: [0, 0.25, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.25,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl"
              />

              <div className="relative flex items-start gap-4">

                {/* Icon */}

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.12,
                    ease: "easeInOut",
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/70"
                >
                  <Icon
                    size={27}
                    className={`${node.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                </motion.div>

                {/* Content */}

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold">
                    {node.name}
                  </h4>

                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    {node.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Architecture;
