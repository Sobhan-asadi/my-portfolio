import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Nexa Store",
    category: "E-Commerce",
    description:
      "A responsive e-commerce application focused on product discovery and a practical shopping flow. It includes product details, persistent cart and wishlist state, search, filtering, sorting, and a demo checkout experience.",
    image: "/projects/nexa-store-portfolio.webp",
    tags: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
    ],
    demoUrl: "https://nex-astore.netlify.app/",
    githubUrl: "https://github.com/Sobhan-asadi/nexaStore",
  },
  {
    id: 2,
    number: "02",
    title: "Hotel Booking",
    category: "Hospitality",
    description:
      "A responsive hotel discovery and booking experience with room search, filtering, sorting, pagination, authentication, room details, demo booking flows, and an owner interface for managing rooms.",
    image: "/projects/hotel-booking-portfolio.webp",
    tags: ["React", "Clerk", "React Router", "Tailwind CSS", "LocalStorage"],
    demoUrl: "https://hootelbook.netlify.app/",
    githubUrl: "https://github.com/Sobhan-asadi/-Hotel-Booking",
  },
  {
    id: 3,
    number: "03",
    title: "SkillMaine",
    category: "Learning Platform",
    description:
      "An online learning platform with course discovery, dynamic course pages, search, filtering, sorting, curated learning paths, server-state management, and a persistent course cart.",
    image: "/projects/skillmaine-portfolio.webp",
    tags: [
      "React",
      "TanStack Query",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "LocalStorage",
    ],
    demoUrl: "https://skillmaine.netlify.app/",
    githubUrl: "https://github.com/Sobhan-asadi/skillmaine",
  },
];

export default function AllProject() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pt-6 pb-12 text-white sm:px-6 lg:px-8">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-[10%] h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] bottom-[15%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.04] blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Page navigation */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <Link
            to="/"
            className="group flex items-center gap-3 text-sm font-semibold tracking-[0.1em] text-white/60 uppercase transition-colors hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-violet-400/40">
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </span>
            Back home
          </Link>

          <span className="hidden text-xs font-semibold tracking-[0.15em] text-white/40 uppercase sm:block">
            Sobhan Asadi / Work
          </span>
        </div>

        {/* Hero */}
        <header className="py-20 sm:py-24 lg:py-28">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-violet-400 uppercase">
              Selected Projects
            </span>

            <span className="h-px w-14 bg-violet-400/40" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <h1 className="text-[clamp(4rem,11vw,10rem)] leading-[0.8] font-semibold tracking-[-0.08em]">
              WORK
              <span className="text-primary">.</span>
            </h1>

            <div className="lg:pb-2">
              <div className="mb-6 h-px bg-gradient-to-r from-violet-400/60 to-transparent" />

              <p className="max-w-lg text-base leading-8 text-white/60 lg:text-[17px]">
                A collection of frontend projects built around different product
                problems, from e-commerce and hospitality to online learning.
              </p>

              <p className="mt-5 text-xs font-medium tracking-[0.14em] text-white/40 uppercase">
                03 projects / React ecosystem
              </p>
            </div>
          </div>
        </header>

        {/* Project archive */}
        <section className="border-t border-white/[0.08]">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border-b border-white/[0.08] py-14 sm:py-16 lg:py-20"
            >
              {/* Project metadata */}
              <div className="mb-7 flex items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <span className="text-xs font-semibold tracking-[0.15em] text-white/40">
                    {project.number}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/20" />

                  <span className="text-xs font-semibold tracking-[0.14em] text-violet-400 uppercase">
                    {project.category}
                  </span>
                </div>

                <ArrowUpRight className="hidden h-6 w-6 text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-400 sm:block" />
              </div>

              {/* Title */}
              <h2 className="mb-9 text-[clamp(3rem,7vw,7rem)] leading-[0.85] font-medium tracking-[-0.07em] text-white">
                {project.title}
                <span className="text-primary">.</span>
              </h2>

              {/* Image */}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live project`}
                className="group/image relative block"
              >
                <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/[0.045] opacity-0 blur-3xl transition-opacity duration-700 group-hover/image:opacity-100" />

                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/image:scale-[1.015]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />

                  <div className="absolute right-5 bottom-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>

              {/* Project information */}
              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
                <p className="max-w-2xl text-base leading-8 text-white/60 lg:text-[17px]">
                  {project.description}
                </p>

                <div>
                  <div className="flex flex-wrap gap-x-5 gap-y-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium tracking-[0.1em] text-white/50 uppercase sm:text-[13px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#08080d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100"
                    >
                      Live project
                      <ExternalLink
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.07] hover:text-white"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom navigation */}
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              More code
            </p>

            <p className="mt-2 text-base leading-7 text-white/60">
              Explore the rest of my work on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Sobhan-asadi"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-4 text-base font-semibold"
          >
            GitHub profile
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
              <ArrowUpRight
                size={17}
                className="text-violet-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
