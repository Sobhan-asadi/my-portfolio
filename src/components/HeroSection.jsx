import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen overflow-hidden px-4 pt-28 pb-10 sm:px-6 lg:px-8 lg:pt-32 lg:pb-8"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] left-[8%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.07] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] bottom-[5%] h-[340px] w-[340px] rounded-full bg-indigo-500/[0.05] blur-[110px]"
      />

      {/* Large background name */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[17%] hidden overflow-hidden select-none lg:block"
      >
        <p className="text-center text-[clamp(8rem,16vw,17rem)] leading-none font-black tracking-[-0.08em] whitespace-nowrap text-white/[0.018]">
          SOBHAN
        </p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-between">
        {/* Top meta */}
        <div className="animate-fade-in-delay-1 flex items-center justify-between opacity-0">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-semibold tracking-[0.15em] text-white/55 uppercase">
              Available for opportunities
            </span>
          </div>

          <span className="hidden text-xs font-medium tracking-[0.15em] text-white/40 uppercase sm:block">
            Portfolio / 2026
          </span>
        </div>

        {/* Main hero */}
        <div className="my-auto grid items-end gap-10 py-14 lg:grid-cols-[1fr_380px] lg:gap-16 lg:py-10">
          <div>
            <p className="animate-fade-in-delay-1 mb-6 text-xs font-semibold tracking-[0.18em] text-violet-400 uppercase opacity-0 sm:text-sm">
              Front-End Developer
            </p>

            <h1 className="animate-fade-in-delay-2 max-w-[1000px] text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.82] font-semibold tracking-[-0.075em] text-white opacity-0">
              I BUILD
              <span className="block text-white/35">MODERN WEB</span>
              <span className="relative block">
                EXPERIENCES
                <span className="text-primary">.</span>
              </span>
            </h1>
          </div>

          {/* Side content */}
          <div className="animate-fade-in-delay-3 opacity-0 lg:pb-3">
            <div className="mb-6 h-px w-full bg-gradient-to-r from-violet-400/60 to-transparent" />

            <p className="max-w-md text-base leading-8 text-white/65 lg:text-[17px]">
              I&apos;m Sobhan Asadi. I build responsive and maintainable web
              applications with a focus on thoughtful interfaces and practical
              product experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#08080d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100"
              >
                Explore work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="https://github.com/Sobhan-asadi"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.08] hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="animate-fade-in-delay-4 border-t border-white/[0.08] opacity-0">
          <div className="flex min-h-20 flex-col justify-between gap-6 py-5 sm:flex-row sm:items-center sm:py-0">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="flex items-center gap-5 sm:gap-7"
                >
                  <span className="text-xs font-medium tracking-[0.1em] text-white/50 uppercase sm:text-[13px]">
                    {technology}
                  </span>

                  {index !== technologies.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-violet-400/50" />
                  )}
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="group flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-white/50 uppercase transition-colors hover:text-white sm:text-[13px]"
            >
              Selected work
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-violet-400/40">
                <ArrowDownRight
                  size={15}
                  className="text-violet-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
