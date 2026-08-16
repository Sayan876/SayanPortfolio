import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import proimage from "../assets/Sayan.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10" />

        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">

          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <div className="w-full max-w-4xl">

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
            >
              Full Stack Web Developer
            </motion.p>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: "easeOut",
              }}
              className="mt-4 text-lg font-medium tracking-wide text-muted-foreground sm:text-xl"
            >
              I'm Sayan Datta.
            </motion.h2>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Building reliable web applications with{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Java & Spring Boot.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            >
              Backend-focused developer skilled in Java and Spring Boot, with
              hands-on experience building secure REST APIs, authentication
              systems, and modern React applications.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              {/* View Projects */}
              <button
                type="button"
                onClick={() => scrollToSection("#projects")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
              >
                View Projects

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              {/* Resume */}
              <a
                href="/SayanSep_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Contact & Social links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sayan-datta-699924195/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin size={21} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Sayan876"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
              >
                <FaGithub size={21} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918016361800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-green-500"
              >
                <FaWhatsapp size={21} />
              </a>

              {/* Phone */}
              <a
                href="tel:+918016361800"
                aria-label="Call Sayan Datta"
                title="Call"
                className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone size={20} strokeWidth={1.8} />
              </a>

              {/* Email */}
              <a
                href="mailto:sayandatta9876@gmail.com"
                aria-label="Email Sayan Datta"
                title="Email"
                className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail size={20} strokeWidth={1.8} />
              </a>
            </motion.div>

            {/* Technology strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm"
            >
              <span>Java</span>
              <span className="text-border">·</span>

              <span>Spring Boot</span>
              <span className="text-border">·</span>

              <span>React</span>
              <span className="text-border">·</span>

              <span>MySQL</span>
              <span className="text-border">·</span>

              <span>Docker</span>
            </motion.div>
          </div>

          {/* ===================================================== */}
          {/* PROFILE IMAGE */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto hidden lg:block"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 scale-90 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10" />

            {/* Image container */}
            <div className="relative mx-auto h-72 w-72 xl:h-80 xl:w-80">

              {/* Subtle rotating ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-10px] rounded-full border border-dashed border-blue-600/20 dark:border-blue-400/20"
              />

              {/* Image border */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-600/20 p-2 dark:border-blue-400/20">
                <div className="h-full w-full overflow-hidden rounded-full bg-muted">
                  <img
                    src={proimage}
                    alt="Sayan Datta"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Small decorative dot */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 right-3 h-4 w-4 rounded-full border-2 border-background bg-blue-600 dark:bg-blue-400"
              />
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* MOBILE PROFILE IMAGE */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="order-first flex justify-center lg:hidden"
          >
            <div className="relative h-40 w-40 sm:h-48 sm:w-48">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-2xl dark:bg-blue-400/10" />

              {/* Rotating ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-7px] rounded-full border border-dashed border-blue-600/20 dark:border-blue-400/20"
              />

              {/* Image */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-blue-600/20 p-1.5 dark:border-blue-400/20">
                <div className="h-full w-full overflow-hidden rounded-full bg-muted">
                  <img
                    src={proimage}
                    alt="Sayan Datta"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("#about")}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={16}
            strokeWidth={1.6}
          />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;