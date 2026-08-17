import { motion } from "framer-motion";

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
  SiMaven,
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
  icon: React.ElementType;
  color: string;
};

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
      description: "Type-safe application development",
      icon: SiTypescript,
      color: "text-blue-500",
    },
    {
      name: "Axios",
      description: "HTTP communication with backend APIs",
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
      description: "REST API and backend application layer",
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
      icon: SiMaven,
      color: "text-red-500",
    },
    {
      name: "Swagger",
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

  const NodeCard = ({
    node,
    index,
  }: {
    node: TechNode;
    index: number;
  }) => {
    const Icon = node.icon;

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
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.06,
        }}
        whileHover={{
          y: -5,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-background/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30"
      >
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/70">
            <Icon
              size={27}
              className={`${node.color} transition-transform duration-300 group-hover:scale-110`}
            />
          </div>

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
  };

  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />

        <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl dark:bg-purple-400/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">

        {/* Heading */}
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

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A look at how my frontend, backend, security, database, and
            development tools work together to build complete applications.
          </p>
        </motion.div>

        {/* Architecture flow */}
        <div className="mt-16">

          {/* Frontend */}
          <ArchitectureLayer
            number="01"
            icon={<FaReact size={24} />}
            title="Frontend"
            description="User interface and client-side communication"
            color="text-cyan-400"
          />

          <Connection />

          {/* Backend */}
          <ArchitectureLayer
            number="02"
            icon={<Server size={23} />}
            title="Backend"
            description="Business logic and REST API layer"
            color="text-green-500"
          />

          <Connection />

          {/* Security */}
          <ArchitectureLayer
            number="03"
            icon={<ShieldCheck size={23} />}
            title="Security"
            description="Authentication, authorization and access control"
            color="text-pink-500"
          />

          <Connection />

          {/* Database */}
          <ArchitectureLayer
            number="04"
            icon={<Database size={23} />}
            title="Data Layer"
            description="Persistence and relational data management"
            color="text-blue-500"
          />

          <Connection />

          {/* DevOps */}
          <ArchitectureLayer
            number="05"
            icon={<Boxes size={23} />}
            title="Development & Deployment"
            description="Build, test, document, version and deploy"
            color="text-orange-500"
          />
        </div>

        {/* Detailed technology cards */}
        <div className="mt-12 space-y-10">

          {/* Frontend */}
          <TechnologyGroup
            title="Frontend"
            description="The client communicates with backend services through HTTP APIs."
            nodes={frontend}
            NodeCard={NodeCard}
          />

          {/* Backend */}
          <TechnologyGroup
            title="Backend"
            description="Java and Spring Boot handle application logic and REST APIs."
            nodes={backend}
            NodeCard={NodeCard}
          />

          {/* Security */}
          <TechnologyGroup
            title="Security & Authentication"
            description="Secure authentication flows protect application resources."
            nodes={security}
            NodeCard={NodeCard}
          />

          {/* Data */}
          <TechnologyGroup
            title="Persistence"
            description="JPA/Hibernate connects the application layer with MySQL."
            nodes={data}
            NodeCard={NodeCard}
          />

          {/* Tools */}
          <TechnologyGroup
            title="Tools & Infrastructure"
            description="Supporting tools used throughout development and deployment."
            nodes={tools}
            NodeCard={NodeCard}
          />
        </div>

        {/* Architecture flow statement */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                <Workflow size={24} />
              </div>

              <div>
                <h3 className="font-semibold">
                  From interface to database
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                  React communicates with Spring Boot REST APIs, Spring
                  Security protects resources with JWT/OAuth2, JPA/Hibernate
                  manages persistence, and MySQL stores application data.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3 text-muted-foreground">
              <Code2 size={18} />

              <span className="text-sm font-medium">
                Full-stack architecture
              </span>
            </div>
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
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
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
      whileHover={{
        scale: 1.01,
      }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-600/30 hover:shadow-lg dark:hover:border-blue-400/30 sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

        {/* Number */}
        <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground">
          {number}
        </span>

        {/* Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted ${color} transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* ========================================================= */
/* Connection */
/* ========================================================= */

const Connection = () => {
  return (
    <div className="relative flex h-12 justify-center">
      <div className="relative h-full w-px overflow-hidden bg-border">
        <motion.div
          initial={{
            y: "-100%",
          }}
          whileInView={{
            y: "100%",
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1.2,
            ease: "linear",
          }}
          className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
        />
      </div>

      <div className="absolute bottom-0 h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30" />
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
  NodeCard,
}: {
  title: string;
  description: string;
  nodes: TechNode[];
  NodeCard: React.ComponentType<{
    node: TechNode;
    index: number;
  }>;
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
      <div className="mb-5">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node, index) => (
          <NodeCard
            key={node.name}
            node={node}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Architecture;
