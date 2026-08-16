import {
  Code2,
  Database,
  
  ShieldCheck,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const expertise = [
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building RESTful APIs and backend services with Java, Spring Boot, Spring Security, JPA, and Hibernate.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Applications",
      description:
        "Implementing JWT authentication, OAuth2, role-based access control, BCrypt, and secure session management.",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Creating modern web applications with React, TypeScript, Vite, Tailwind CSS, and Spring Boot.",
    },
    {
      icon: Database,
      title: "Data & Integration",
      description:
        "Working with MySQL, JDBC, JPA/Hibernate, Cloudinary, and third-party services to build complete applications.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Turning technical knowledge into{" "}
            <span className="text-blue-600 dark:text-blue-400">
              practical solutions.
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-lg font-medium leading-8 text-foreground">
              I'm a Computer Science graduate and Full Stack Web Developer
              focused on backend development with Java and Spring Boot.
            </p>

            <p className="mt-5 leading-7 text-muted-foreground">
              My professional experience began in enterprise IT environments,
              where I worked with application and infrastructure support. This
              gave me practical exposure to troubleshooting, system
              reliability, and working with production environments.
            </p>

            <p className="mt-5 leading-7 text-muted-foreground">
              Alongside my professional work, I have developed full-stack
              applications using Java, Spring Boot, React, and MySQL. I
              particularly enjoy building backend systems, designing REST APIs,
              and implementing authentication and authorization using Spring
              Security, JWT, and OAuth2.
            </p>

            <p className="mt-5 leading-7 text-muted-foreground">
              I also work with Docker, Git, CI/CD, Swagger, Postman, and
              Cloudinary to build, test, integrate, and deploy modern web
              applications.
            </p>

            {/* Education / experience highlight */}
            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-border pt-7">
              <div>
                <p className="text-2xl font-bold text-foreground">8.24</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  B.Tech CGPA
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-foreground">Java</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Backend Focus
                </p>
              </div>
            </div>
          </motion.div>

          {/* Expertise cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 dark:hover:border-blue-400/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technology line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 border-t border-border pt-8"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-muted-foreground">
            <span className="text-foreground">Core Stack</span>

            <span className="text-border">·</span>

            <span>Java</span>

            <span className="text-border">·</span>

            <span>Spring Boot</span>

            <span className="text-border">·</span>

            <span>Spring Security</span>

            <span className="text-border">·</span>

            <span>React</span>

            <span className="text-border">·</span>

            <span>MySQL</span>

            <span className="text-border">·</span>

            <span>Docker</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;