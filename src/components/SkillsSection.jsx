const skillGroups = [
  {
    number: "01",
    title: "Core",
    description: "Languages and foundations I use to build for the web.",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Frameworks & UI",
    description: "Tools for building responsive, component-based interfaces.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "State & Data",
    description: "Managing application state, server state, forms, and data.",
    skills: [
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "REST API",
    ],
  },
  {
    number: "04",
    title: "Workflow",
    description: "Tools and practices used throughout development.",
    skills: ["Git", "GitHub", "Responsive Design", "RTL Interfaces"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-48 h-[460px] w-[460px] rounded-full bg-indigo-500/[0.04] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="border-t border-white/[0.08] pt-7">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.18em] text-violet-400 uppercase">
                  03 / Capabilities
                </span>

                <span className="h-px w-14 bg-violet-400/40" />
              </div>

              <h2 className="max-w-3xl text-5xl leading-[0.94] font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Tools behind
                <span className="block text-white/35">the interface.</span>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-white/60 lg:ml-auto lg:text-[17px]">
              A focused frontend stack for building responsive interfaces,
              managing application data, validating user input, and creating
              maintainable product experiences.
            </p>
          </div>
        </div>

        {/* Skill groups */}
        <div className="mt-14 border-t border-white/[0.08] lg:mt-16">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group grid gap-6 border-b border-white/[0.08] py-7 transition-colors duration-300 hover:bg-white/[0.012] sm:py-8 lg:grid-cols-[70px_0.75fr_1.25fr] lg:items-center lg:gap-10"
            >
              {/* Number */}
              <span className="text-xs font-semibold tracking-[0.16em] text-white/35 transition-colors duration-300 group-hover:text-violet-400">
                {group.number}
              </span>

              {/* Group information */}
              <div>
                <h3 className="text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">
                  {group.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/50 sm:text-[15px]">
                  {group.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex min-h-11 items-center rounded-full border border-white/[0.1] bg-white/[0.03] px-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.07] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="grid gap-6 pt-8 sm:grid-cols-2 sm:items-end">
          <p className="max-w-lg text-sm leading-7 text-white/45">
            I choose tools based on the problem they solve rather than adding
            technology for its own sake.
          </p>

          <div className="sm:text-right">
            <span className="text-xs font-semibold tracking-[0.15em] text-white/35 uppercase">
              Frontend · State · Data · Workflow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
