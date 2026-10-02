import { ArrowUpRight } from "lucide-react";

const details = [
  {
    number: "01",
    label: "Focus",
    value: "Front-End Development",
  },
  {
    number: "02",
    label: "Core stack",
    value: "React · Next.js · TypeScript",
  },
  {
    number: "03",
    label: "Approach",
    value: "Responsive · Component-Based",
  },
  {
    number: "04",
    label: "Work",
    value: "Personal + Client Projects",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[15%] right-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.045] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section label */}
        <div className="border-t border-white/[0.08] pt-7">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-violet-400 uppercase">
              02 / About
            </span>

            <span className="h-px w-14 bg-violet-400/40" />
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20 lg:py-16">
          <div>
            <p className="max-w-4xl text-[clamp(3rem,5.5vw,6rem)] leading-[0.96] font-medium tracking-[-0.06em] text-white">
              I turn ideas into
              <span className="block text-white/35">practical interfaces.</span>
            </p>
          </div>

          <div>
            <div className="mb-7 h-px w-full bg-gradient-to-r from-violet-400/60 to-transparent" />

            <p className="max-w-xl text-base leading-8 text-white/65 lg:text-[17px] lg:leading-8">
              I&apos;m Sobhan Asadi, a Front-End Developer focused on building
              responsive web applications with React, Next.js, and TypeScript. I
              enjoy turning product requirements into structured, maintainable
              interfaces and building the frontend flows that make an
              application useful in practice.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/50 lg:text-[17px] lg:leading-8">
              My work includes personal portfolio projects as well as a
              commercial client project, with experience across e-commerce,
              learning platforms, admin interfaces, forms, authentication flows,
              and state management.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex w-fit items-center gap-3 text-sm font-semibold text-white"
            >
              Let&apos;s work together
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
                <ArrowUpRight
                  size={16}
                  className="text-violet-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>

        {/* Details */}
        <div className="grid border-y border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item, index) => (
            <div
              key={item.label}
              className={`group relative px-0 py-6 sm:px-6 lg:px-7 lg:py-7 ${
                index !== details.length - 1
                  ? "border-b border-white/[0.08] sm:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 0 || index === 2
                  ? "sm:border-r sm:border-white/[0.08]"
                  : ""
              }`}
            >
              <div className="flex min-h-28 flex-col justify-between gap-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.14em] text-white/35">
                    {item.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/40 transition-all duration-300 group-hover:bg-violet-400 group-hover:shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-white/45 uppercase">
                    {item.label}
                  </p>

                  <p className="mt-2 max-w-[240px] text-base leading-6 font-medium text-white/85">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className="flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium tracking-[0.14em] text-white/35 uppercase">
            Building for the modern web
          </p>

          <p className="text-xs font-medium tracking-[0.14em] text-white/35 uppercase">
            React ecosystem · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
