import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  MapPin,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  /*
   * Scroll progress for the complete experience timeline.
   *
   * The blue trace starts when the timeline enters the viewport
   * and progressively travels through the complete timeline.
   */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 25%"],
  });

  /*
   * Height of the completed glowing trace.
   */
  const traceHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  /*
   * Trace visibility.
   */
  const traceOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 1],
    [0, 1, 1]
  );

  const experiences = [
    {
      company: "CMS IT Services Pvt. Ltd.",
      role: "Full-time Executive Engineer",
      period: "June 2026 – Present",
      location: "Kolkata, India",
      current: true,
      accent: "blue",
      description:
        "Promoted to Full-time Executive Engineer, contributing to enterprise application development and technical improvements while working with Java, Spring            Boot, REST APIs, and SQL to support application functionality, troubleshooting, and backend engineering initiatives.",
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
      accent: "violet",
      description:
        "Supported enterprise IT infrastructure and application environments while collaborating with teams on software improvements and technical issues.",
      highlights: [
        "Supported and maintained critical IT infrastructure and application environments for enterprise clients.",
        "Collaborated with teams on software improvements, bug fixes, and minor feature enhancements.",
        "Developed practical exposure to Java, Spring Boot, cloud platforms, and system reliability.",
        "Built and strengthened full-stack development skills through software projects.",
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
      accent: "emerald",
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
      {/* ========================================================= */}
      {/* Background Decorations */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5"
        />

        <motion.div
          animate={{
            scale: [1.08, 1, 1.08],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/5 blur-3xl dark:bg-violet-400/5"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* ========================================================= */}
        {/* Section Heading */}
        {/* ========================================================= */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
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

        {/* ========================================================= */}
        {/* Experience Timeline */}
        {/* ========================================================= */}

        <div
          ref={timelineRef}
          className="relative mt-16"
        >
          {/* ===================================================== */}
          {/* Timeline Line */}
          {/* ===================================================== */}

          <div className="absolute left-[11px] top-2 h-[calc(100%-8px)] w-px">
            {/* Base Timeline */}

            <div className="absolute inset-0 bg-border" />

            {/* ================================================= */}
            {/* Completed Blue Trace */}
            {/* ================================================= */}

            <motion.div
              style={{
                height: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-0 top-0 w-px bg-blue-500 dark:bg-blue-400"
            />

            {/* ================================================= */}
            {/* Soft Blue Glow */}
            {/* ================================================= */}

            <motion.div
              style={{
                height: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-1/2 top-0 w-[5px] -translate-x-1/2 bg-blue-500/20 blur-[5px] dark:bg-blue-400/25"
            />

            {/* ================================================= */}
            {/* Moving Glow */}
            {/* ================================================= */}

            <motion.div
              style={{
                top: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[7px] dark:bg-blue-400/30"
            />

            {/* ================================================= */}
            {/* Bright Leading Point */}
            {/* ================================================= */}

            <motion.div
              style={{
                top: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_10px_4px_rgba(59,130,246,0.75)] dark:bg-blue-300 dark:shadow-[0_0_12px_4px_rgba(96,165,250,0.8)]"
            />
          </div>

          {/* ===================================================== */}
          {/* Experience Items */}
          {/* ===================================================== */}

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.65,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="relative pl-10 sm:pl-12"
              >
                {/* ================================================= */}
                {/* Timeline Node */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  className={`absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background shadow-sm ${
                    experience.current
                      ? "bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.45)] dark:bg-blue-400 dark:shadow-[0_0_12px_rgba(96,165,250,0.55)]"
                      : "bg-background border-border"
                  }`}
                >
                  <motion.span
                    animate={
                      experience.current
                        ? {
                            scale: [1, 1.35, 1],
                            opacity: [1, 0.65, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`h-1.5 w-1.5 rounded-full ${
                      experience.current
                        ? "bg-white dark:bg-slate-950"
                        : "bg-muted-foreground"
                    }`}
                  />
                </motion.div>

                {/* ================================================= */}
                {/* Experience Card */}
                {/* ================================================= */}

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 dark:bg-card/60 sm:p-7"
                >
                  {/* Card Glow */}

                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                      experience.current
                        ? "bg-blue-500/10 opacity-60 dark:bg-blue-400/10"
                        : experience.accent === "violet"
                          ? "bg-violet-500/10 opacity-40 dark:bg-violet-400/10"
                          : "bg-emerald-500/10 opacity-40 dark:bg-emerald-400/10"
                    }`}
                  />

                  {/* ================================================= */}
                  {/* Header */}
                  {/* ================================================= */}

                  <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            rotate: -4,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            experience.current
                              ? "bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
                              : experience.accent === "violet"
                                ? "bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400"
                                : "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                          }`}
                        >
                          <BriefcaseBusiness
                            size={18}
                            strokeWidth={1.7}
                          />
                        </motion.div>

                        <span className="text-sm font-medium text-muted-foreground">
                          {experience.company}
                        </span>

                        {experience.current && (
                          <motion.span
                            initial={{
                              opacity: 0,
                              scale: 0.8,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.35,
                              delay: 0.25,
                            }}
                            className="rounded-full bg-blue-600/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
                          >
                            Current
                          </motion.span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
                        {experience.role}
                      </h3>
                    </div>

                    {/* Date / Location */}

                    <div className="shrink-0 lg:text-right">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <BriefcaseBusiness
                          size={15}
                          strokeWidth={1.8}
                          className="text-blue-600 dark:text-blue-400"
                        />

                        <p className="text-sm font-medium text-foreground">
                          {experience.period}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center gap-2 lg:justify-end">
                        <MapPin
                          size={15}
                          strokeWidth={1.8}
                          className="text-muted-foreground"
                        />

                        <p className="text-sm text-muted-foreground">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* Description */}
                  {/* ================================================= */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15,
                    }}
                    className="relative mt-6 max-w-3xl leading-7 text-muted-foreground"
                  >
                    {experience.description}
                  </motion.p>

                  {/* ================================================= */}
                  {/* Divider */}
                  {/* ================================================= */}

                  <div className="my-7 h-px bg-border" />

                  {/* ================================================= */}
                  {/* Highlights Heading */}
                  {/* ================================================= */}

                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                    >
                      <CheckCircle2
                        size={19}
                        strokeWidth={1.7}
                      />
                    </motion.div>

                    <div>
                      <h4 className="text-base font-semibold">
                        Key Highlights
                      </h4>

                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Responsibilities and professional contributions
                      </p>
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* Highlights */}
                  {/* ================================================= */}

                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {experience.highlights.map(
                      (highlight, highlightIndex) => (
                        <motion.li
                          key={highlight}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.15,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: highlightIndex * 0.06,
                            ease: "easeOut",
                          }}
                          whileHover={{
                            x: 4,
                          }}
                          className="group/highlight flex gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.25,
                              rotate: 8,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="mt-1 shrink-0"
                          >
                            <CheckCircle2
                              size={17}
                              className="text-emerald-600 dark:text-emerald-400"
                            />
                          </motion.div>

                          <span className="transition-colors duration-200 group-hover/highlight:text-foreground">
                            {highlight}
                          </span>
                        </motion.li>
                      )
                    )}
                  </ul>

                  {/* ================================================= */}
                  {/* Technologies */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2,
                    }}
                    className="relative mt-7"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Code2
                        size={16}
                        strokeWidth={1.8}
                        className="text-amber-500"
                      />

                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Technologies
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map(
                        (technology, technologyIndex) => (
                          <motion.span
                            key={technology}
                            initial={{
                              opacity: 0,
                              scale: 0.9,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: technologyIndex * 0.04,
                            }}
                            whileHover={{
                              y: -2,
                            }}
                            className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-amber-500/40 hover:text-amber-600 dark:hover:border-amber-400/40 dark:hover:text-amber-400"
                          >
                            {technology}
                          </motion.span>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* Career Progression */}
        {/* ========================================================= */}

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
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm sm:p-7"
        >
          {/* Background Glow */}

          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl dark:bg-rose-400/10" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400"
                >
                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.8}
                  />
                </motion.div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Career progression
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Associate Engineer → Full-time Executive Engineer
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{
                x: 4,
              }}
              className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400"
            >
              <span>Growing through experience</span>

              <ArrowUpRight size={16} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
