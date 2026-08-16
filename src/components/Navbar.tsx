import { useState } from "react";
import { Menu, ArrowUpRight, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ];

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
        <nav
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          {/* Main Navbar */}
          <div className="flex h-18 items-center justify-between">

            {/* Brand */}
            <a
              href="#home"
              onClick={(event) => handleNavClick(event, "#home")}
              className="shrink-0 text-xl font-bold tracking-tight text-slate-950 transition-colors dark:text-white"
            >
              Sayan
              <span className="text-blue-600 dark:text-blue-400">
                Datta
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(event) =>
                      handleNavClick(event, item.href)
                    }
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 lg:flex">

              <ThemeToggle />

              {/* Desktop Let's Talk */}
              <button
                type="button"
                onClick={handleContactClick}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
              >
                Let's Talk

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">

              <ThemeToggle />

              <button
                type="button"
                aria-label={
                  isMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {isMenuOpen ? (
                  <X size={23} strokeWidth={1.8} />
                ) : (
                  <Menu size={23} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
              isMenuOpen
                ? "max-h-[600px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-slate-200/70 pt-4 dark:border-slate-800/70">

              {/* Mobile Links */}
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(event) =>
                        handleNavClick(event, item.href)
                      }
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Let's Talk */}
              <button
                type="button"
                onClick={handleContactClick}
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
              >
                Let's Talk

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navbar;