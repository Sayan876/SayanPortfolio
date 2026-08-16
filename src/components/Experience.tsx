import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "CMS IT Services Pvt. Ltd.",
      role: "Full-time Executive Engineer",
      period: "June 2026 – Present",
      location: "Kolkata, India",
      current: true,
      description:
        "Promoted to Full-time Executive Engineer, contributing to enterprise application support and technical improvements while continuing to strengthen backend development and software engineering skills.",
      highlights: [
        "Applying Java, Spring Boot, REST APIs, and SQL knowledge to application-related technical work.",
        "Contributing to application troubleshooting, issue resolution, and technical improvements.",
        "Working in an enterprise environment with a focus on application reliability and operational support.",
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "SQL"],
    },
    {
      company: "CMS IT Services Pvt. Ltd.",
      role: "Associate Engineer",
      period: "April 2025 – June 2026",
      location: "Kolkata, India",
      current: false,
      description:
        "Supported enterprise IT infrastructure and application environments while collaborating with teams on software improvements and technical issues.",
      highlights: [
        "Supported and maintained critical IT infrastructure and application environments for enterprise clients.",
        "Collaborated with teams on software improvements, bug fixes, and minor feature enhancements.",
        "Developed practical exposure to Java, Spring Boot, cloud platforms, and system reliability.",
        "Built and strengthened full-stack development skills through independent software projects.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "SQL",
        "Cloud",
        "Application Support",
      ],
    },
    {
      company: "Freelance Software Developer",
      role: "Full Stack Developer",
      period: "December 2023 – February 2025",
      location: "Remote · Upwork & Fiverr",
      current: false,
      description:
        "Built full-stack web applications independently, working across frontend interfaces, backend services, authentication, databases, and third-party integrations.",
      highlights: [
        "Built full-stack web applications using Java, Spring Boot, React, and MySQL.",
        "Developed RESTful APIs with secure authentication, authorization, and JWT-based access control.",
        "Integrated Cloudinary for media uploads and content management.",
        "Worked across frontend and backend layers to deliver complete application features.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "JWT",
        "Cloudinary",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
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
            Experience
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building experience across{" "}
            <span className="text-blue-600 dark:text-blue-400">
              technology & enterprise systems.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            My professional journey combines enterprise IT experience with
            hands-on backend and full-stack development.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-20px)] w-px bg-border sm:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative sm:pl-12"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 hidden h-[23px] w-[23px] items-center justify-center rounded-full border bg-background sm:flex ${
                    experience.current
                      ? "border-blue-600 dark:border-blue-400"
                      : "border-border"
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      experience.current
                        ? "bg-blue-600 dark:bg-blue-400"
                        : "bg-muted-foreground"
                    }`}
                  />
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 dark:hover:border-blue-400/30 sm:p-7">
                  {/* Header */}
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <BriefcaseBusiness
                          size={17}
                          strokeWidth={1.8}
                          className="text-blue-600 dark:text-blue-400"
                        />

                        <span className="text-sm font-medium text-muted-foreground">
                          {experience.company}
                        </span>

                        {experience.current && (
                          <span className="rounded-full bg-blue-600/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                        {experience.role}
                      </h3>
                    </div>

                    <div className="shrink-0 lg:text-right">
                      <p className="text-sm font-medium text-foreground">
                        {experience.period}
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-6 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-blue-600/40 hover:text-blue-600 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Career progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col gap-4 rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="text-sm font-semibold text-foreground">
              Career progression
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Associate Engineer → Full-time Executive Engineer
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <span>Growing through experience</span>
            <ArrowUpRight size={16} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;