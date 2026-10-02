import { ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Nexa Store",
    category: "E-Commerce Experience",
    description:
      "A responsive e-commerce experience with product discovery, persistent cart and wishlist, search, filtering, sorting, and a demo checkout flow.",
    image: "/projects/nexa-store-portfolio.webp",
    tags: ["React", "JavaScript", "Redux Toolkit", "Tailwind CSS"],
    demoUrl: "https://nex-astore.netlify.app/",
    githubUrl: "https://github.com/Sobhan-asadi/nexaStore",
  },
  {
    id: 2,
    number: "02",
    title: "Hotel Booking",
    category: "Hospitality Platform",
    description:
      "A modern hotel discovery and booking interface with room search, filtering, authentication, booking flows, and an owner management experience.",
    image: "/projects/hotel-booking-portfolio.webp",
    tags: ["React", "Clerk", "React Router", "Tailwind CSS"],
    demoUrl: "https://hootelbook.netlify.app/",
    githubUrl: "https://github.com/Sobhan-asadi/-Hotel-Booking",
  },
  {
    id: 3,
    number: "03",
    title: "SkillMaine",
    category: "Learning Platform",
    description:
      "An online learning platform with course discovery, dynamic course pages, curated learning paths, server-state management, and a persistent learning cart.",
    image: "/projects/skillmaine-portfolio.webp",
    tags: ["React", "TanStack Query", "Redux Toolkit", "Tailwind CSS"],
    demoUrl: "https://skillmaine.netlify.app/",
    githubUrl: "https://github.com/Sobhan-asadi/skillmaine",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mb-14 border-t border-white/[0.08] pt-7 lg:mb-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.18em] text-violet-400 uppercase">
                  01 / Selected Work
                </span>

                <span className="h-px w-14 bg-violet-400/40" />
              </div>

              <h2 className="max-w-3xl text-5xl leading-[0.92] font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Projects built
                <span className="block text-white/35">to be used.</span>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-white/60 lg:ml-auto lg:text-[17px]">
              A selection of frontend projects focused on practical product
              flows, responsive interfaces, and maintainable implementation.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className="border-t border-white/[0.08] py-12 first:pt-0 sm:py-14 lg:py-16"
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 ${
                    isReversed ? "lg:grid-cols-[1.18fr_0.82fr]" : ""
                  }`}
                >
                  {/* Information */}
                  <div
                    className={isReversed ? "lg:order-2 lg:pl-4" : "lg:pr-4"}
                  >
                    <div className="mb-7 flex items-center justify-between gap-5 border-b border-white/[0.08] pb-4">
                      <span className="text-xs font-semibold tracking-[0.15em] text-white/40">
                        {project.number}
                      </span>

                      <span className="text-xs font-semibold tracking-[0.14em] text-violet-400 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-[clamp(2.8rem,5vw,5.3rem)] leading-[0.88] font-semibold tracking-[-0.065em] text-white">
                      {project.title}
                      <span className="text-primary">.</span>
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-8 text-white/60 lg:text-[17px]">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium tracking-[0.1em] text-white/50 uppercase sm:text-[13px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#08080d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100"
                      >
                        Live project
                        <ExternalLink
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.07] hover:text-white"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    </div>
                  </div>

                  {/* Preview */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live project`}
                    className={`group relative block ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/[0.045] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025]">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute right-4 bottom-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Archive */}
        <div className="flex justify-center border-t border-white/[0.08] pt-9 sm:justify-end">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-4 text-base font-semibold text-white"
          >
            View all projects
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
              <ArrowRight
                size={17}
                className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
