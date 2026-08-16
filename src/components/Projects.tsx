import {
  ArrowUpRight,
  Cloud,
  Database,
  KeyRound,
  Layers3,
  LockKeyhole,
  Play,
  Search,
  
  ShieldCheck,
  Video,
} from "lucide-react";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

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
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
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
            A selection of full-stack applications focused on backend
            architecture, authentication, security, APIs, and modern
            frontend development.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* VIDEO STREAMING PROJECT */}
        {/* ========================================================= */}

        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="group relative mt-14 overflow-hidden rounded-3xl border border-border bg-background/60 backdrop-blur-sm transition-all duration-500 hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30"
        >
          {/* Project glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10" />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* Project visual */}
            <div className="relative min-h-[340px] overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.08] via-transparent to-transparent dark:from-blue-400/[0.08]" />

              {/* Browser mockup */}
              <div className="absolute inset-6 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:inset-10">

                {/* Browser bar */}
                <div className="flex h-10 items-center gap-1.5 border-b border-border bg-muted/40 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                  <div className="ml-3 h-5 flex-1 rounded-md bg-background/70" />
                </div>

                {/* Application preview */}
                <div className="relative h-full overflow-hidden p-5">

                  <div className="flex items-center justify-between">
                    <div className="h-5 w-24 rounded bg-foreground/10" />

                    <div className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-600/20" />
                      <div className="h-5 w-5 rounded-full bg-foreground/10" />
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="aspect-video rounded-xl bg-blue-600/10 dark:bg-blue-400/10" />

                    <div className="aspect-video rounded-xl bg-muted" />

                    <div className="aspect-video rounded-xl bg-muted" />

                    <div className="aspect-video rounded-xl bg-blue-600/5 dark:bg-blue-400/5" />
                  </div>

                  {/* Play button */}
                  <div className="absolute left-1/2 top-[55%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-500">
                    <Play
                      size={22}
                      fill="currentColor"
                      className="ml-0.5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project information */}
            <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">

              {/* Label */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <Video size={17} />
                  Featured Project
                </div>

                <span className="rounded-full border border-green-600/20 bg-green-600/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-600 dark:border-green-400/20 dark:bg-green-400/5 dark:text-green-400">
                  Live
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                Video Streaming Platform
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                A full-stack video streaming platform built with Java,
                Spring Boot and React, featuring authentication, media
                uploads, streaming, search, profiles and account
                verification.
              </p>

              {/* Features */}
              <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3">

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck
                    size={15}
                    className="shrink-0 text-blue-600 dark:text-blue-400"
                  />
                  JWT Authentication
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Video
                    size={15}
                    className="shrink-0 text-blue-600 dark:text-blue-400"
                  />
                  Video Streaming
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Search
                    size={15}
                    className="shrink-0 text-blue-600 dark:text-blue-400"
                  />
                  Video Search
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Cloud
                    size={15}
                    className="shrink-0 text-blue-600 dark:text-blue-400"
                  />
                  Cloudinary
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "Spring Security",
                  "React",
                  "MySQL",
                  "Cloudinary",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3">

                {/* Live Demo */}
                <a
                  href="https://video-streaming-frontend-eight.vercel.app/"
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

                {/* Frontend */}
                <a
                  href="https://github.com/Sayan876/VideoStreaming-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <FaGithub size={16} />
                  Frontend
                </a>

                {/* Backend */}
                <a
                  href="https://github.com/Sayan876/SECOND_BACKENDVideostreaming2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <FaGithub size={16} />
                  Backend
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ========================================================= */}
        {/* AUTHENTICATION PROJECT */}
        {/* ========================================================= */}

        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="group relative mt-6 overflow-hidden rounded-3xl border border-border bg-background/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 dark:hover:border-blue-400/30 sm:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Project information */}
            <div>

              <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                <LockKeyhole size={17} />
                Security & Authentication
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                Secure Authentication System
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                A secure authentication system designed around Spring
                Security, JWT and OAuth2, with short-lived access tokens,
                refresh-token sessions and secure frontend integration.
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <KeyRound
                    size={15}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  JWT + Refresh Tokens
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck
                    size={15}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  OAuth2
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <LockKeyhole
                    size={15}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  HTTP-only Cookies
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Database
                    size={15}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  Secure Backend
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "Spring Security",
                  "OAuth2",
                  "JWT",
                  "TypeScript",
                  "React",
                  "Vite",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action panel */}
            <div className="flex shrink-0 flex-col gap-3 lg:min-w-[180px]">

              {/* Live Demo */}
              <a
                href="https://auth-third-end-front-end.vercel.app/"
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

              {/* Frontend */}
              <a
                href="https://github.com/Sayan876/auth-thirdEnd-frontEnd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                <FaGithub size={16} />
                Frontend
              </a>

              {/* Backend */}
              <a
                href="https://github.com/Sayan876/authApp_backend_Spring"
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
          className="mt-12 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <Layers3 size={17} />

          <span>
            Built with a focus on backend architecture, security and
            real-world application development.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;