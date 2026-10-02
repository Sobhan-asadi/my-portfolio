import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-5",
          isScrolled
            ? "border-white/[0.08] bg-[#080811]/80 py-2.5 shadow-[0_12px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            : "border-transparent bg-transparent py-3",
        )}
      >
        {/* Brand */}
        <a
          href="#home"
          aria-label="Sobhan Asadi — Home"
          className="group relative z-50 flex items-center gap-3"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.3),transparent_65%)]" />

            <span className="relative text-sm font-bold tracking-[-0.02em] text-white">
              SA
            </span>
          </span>

          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold tracking-[0.1em] text-white">
              SOBHAN ASADI
            </span>

            <span className="mt-0.5 text-[11px] font-medium tracking-[0.1em] text-white/50 uppercase">
              Front-End Developer
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative px-5 py-2 text-sm font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="bg-primary absolute right-5 bottom-0 left-5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://github.com/Sobhan-asadi"
          target="_blank"
          rel="noreferrer"
          className="group relative z-50 hidden min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/10 md:flex"
        >
          GitHub
          <ArrowUpRight
            size={16}
            className="text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Mobile button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-[#05050b]/95 px-6 pt-28 backdrop-blur-2xl transition-all duration-500 md:hidden",
          isMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        <span className="mb-8 text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
          Navigation
        </span>

        <div className="border-t border-white/[0.08]">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-between border-b border-white/[0.08] py-5"
            >
              <span className="text-3xl font-medium tracking-[-0.04em] text-white">
                {item.label}
              </span>

              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-white/40">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-white/[0.08] py-8">
          <div>
            <p className="text-xs tracking-[0.14em] text-white/45 uppercase">
              Portfolio
            </p>

            <p className="mt-1.5 text-base text-white/80">Sobhan Asadi</p>
          </div>

          <a
            href="https://github.com/Sobhan-asadi"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-base font-medium text-white"
          >
            GitHub
            <ArrowUpRight size={16} className="text-primary" />
          </a>
        </div>
      </div>
    </header>
  );
}
