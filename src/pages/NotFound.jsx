import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#05050b] px-4 text-white sm:px-6 lg:px-8">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[150px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col">
        {/* Top */}
        <header className="flex items-center justify-between border-b border-white/[0.08] py-6">
          <Link
            to="/"
            className="text-[11px] font-semibold tracking-[0.16em] text-white/70"
          >
            SOBHAN ASADI
          </Link>

          <span className="text-[10px] font-medium tracking-[0.18em] text-white/25 uppercase">
            Error / 404
          </span>
        </header>

        {/* Content */}
        <div className="flex flex-1 items-center py-16">
          <div className="w-full">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-violet-400 uppercase">
                Page not found
              </span>

              <span className="h-px w-12 bg-violet-400/40" />
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <div>
                <h1 className="text-[clamp(8rem,24vw,22rem)] leading-[0.7] font-semibold tracking-[-0.09em] text-white">
                  404<span className="text-primary">.</span>
                </h1>

                <p className="mt-10 max-w-2xl text-[clamp(2rem,4vw,4.5rem)] leading-[0.95] font-medium tracking-[-0.05em] text-white/30">
                  Looks like this page
                  <span className="block text-white">doesn&apos;t exist.</span>
                </p>
              </div>

              <div className="lg:pb-3">
                <div className="mb-6 h-px bg-gradient-to-r from-violet-400/60 to-transparent" />

                <p className="max-w-sm text-sm leading-7 text-white/45">
                  The page you&apos;re looking for may have been moved, removed,
                  or the URL might be incorrect.
                </p>

                <Link
                  to="/"
                  className="group mt-8 inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 text-xs font-semibold text-[#08080d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100"
                >
                  <ArrowLeft
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Back home
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <footer className="flex items-center justify-between border-t border-white/[0.08] py-7">
          <span className="text-[10px] font-medium tracking-[0.15em] text-white/20 uppercase">
            Front-End Developer
          </span>

          <a
            href="https://github.com/Sobhan-asadi"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-white/30 uppercase transition-colors hover:text-white"
          >
            GitHub
            <ArrowUpRight
              size={12}
              className="text-violet-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </footer>
      </div>
    </main>
  );
}
