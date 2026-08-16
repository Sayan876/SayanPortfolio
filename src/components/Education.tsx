import {
  BookOpen,
  Brain,
  GraduationCap,
  MapPin,
  Puzzle,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />

        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

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
            Education
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Academic{" "}
            <span className="text-blue-600 dark:text-blue-400">
              foundation.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            My academic background in Computer Science and Engineering
            provided the foundation for my software development journey.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* EDUCATION CARD */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="group relative mt-14 overflow-hidden rounded-3xl border border-border bg-background/60 p-7 backdrop-blur-sm transition-all duration-500 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30 sm:p-9 lg:p-10"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10" />

          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">

            {/* Degree icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-400/10 dark:text-blue-400">
              <GraduationCap
                size={32}
                strokeWidth={1.6}
              />
            </div>

            {/* Main information */}
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Bachelor's Degree
                </span>

                <span className="hidden text-border sm:inline">
                  •
                </span>

                <span className="text-sm text-muted-foreground">
                  Aug 2018 – Jun 2022
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                B.Tech in Computer Science and Engineering
              </h3>

              <p className="mt-2 text-base font-medium text-foreground/80">
                Bengal College of Engineering and Technology
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} />
                  Durgapur, West Bengal, India
                </span>

                <span className="inline-flex items-center gap-2">
                  <BookOpen size={15} />
                  Computer Science & Engineering
                </span>
              </div>
            </div>

            {/* CGPA */}
            <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                CGPA
              </span>

              <span className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                8.24
              </span>

              <span className="text-xs text-muted-foreground">
                / 10
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* BEYOND CODE */}
        {/* ===================================================== */}

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
            delay: 0.15,
          }}
          className="mt-16"
        >
          {/* Sub-heading */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <Brain size={20} strokeWidth={1.7} />
            </div>

            <div>
              <h3 className="font-semibold">
                Beyond Code
              </h3>

              <p className="text-sm text-muted-foreground">
                Interests that keep me curious and engaged
              </p>
            </div>
          </div>

          {/* Interest card */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">

            {/* Chess */}
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
                duration: 0.5,
              }}
              className="group rounded-2xl border border-border bg-background/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 dark:hover:border-blue-400/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-400/10 dark:text-blue-400">
                  <span className="text-2xl">♟</span>
                </div>

                <Trophy
                  size={18}
                  className="text-muted-foreground/40"
                />
              </div>

              <h4 className="mt-5 text-lg font-semibold">
                Chess & Strategy
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                I enjoy playing chess and exploring different positions,
                strategies, and ways to approach complex problems.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Strategy
                </span>

                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Analysis
                </span>

                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Problem Solving
                </span>
              </div>
            </motion.div>

            {/* Technology / Learning */}
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
                duration: 0.5,
                delay: 0.08,
              }}
              className="group rounded-2xl border border-border bg-background/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 dark:hover:border-blue-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-400/10 dark:text-blue-400">
                <Puzzle size={23} strokeWidth={1.7} />
              </div>

              <h4 className="mt-5 text-lg font-semibold">
                Exploring Technology
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                I enjoy experimenting with new technologies and building
                side projects to understand how different systems work
                together.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Backend
                </span>

                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Architecture
                </span>

                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Learning
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* BOTTOM NOTE */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-12 flex items-start gap-3 border-t border-border pt-8 text-sm leading-6 text-muted-foreground"
        >
          <BookOpen
            size={17}
            className="mt-0.5 shrink-0"
          />

          <p>
            My academic background in computer science complements my
            hands-on experience with Java, Spring Boot, React, databases,
            security, and full-stack application development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;