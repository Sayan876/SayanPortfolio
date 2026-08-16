import {
  Download,
  ExternalLink,
  FileText,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import resume from "../assets/SayanSep_1.pdf";

const ResumeCTA = () => {
  return (
    <section
      id="resume"
      className="bg-muted/30 py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-3xl border border-border bg-background px-6 py-12 shadow-sm sm:px-10 sm:py-16 lg:px-16"
        >
          {/* Decorative background elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5"
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
            >
              <FileText size={23} strokeWidth={1.7} />
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-7 max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Resume
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Want to know more about
                <span className="block text-muted-foreground">
                  my experience?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Download my resume to explore my professional experience,
                technical skills, certifications, and qualifications in
                greater detail.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              {/* Download Resume */}
              <motion.a
                href={resume}
                download="SayanDatta_Resume.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
              >
                <Download
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                />

                Download Resume
              </motion.a>

              {/* View LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/sayan-datta-699924195/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                View LinkedIn

                <ExternalLink
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </motion.a>
            </motion.div>

            {/* Small supporting line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span>
                Open to opportunities and professional conversations.
              </span>

              <ArrowRight
                size={15}
                className="hidden sm:block"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCTA;