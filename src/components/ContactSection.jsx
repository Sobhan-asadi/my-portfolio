import { ArrowUpRight, Github, Mail, MessageCircle, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "sobhanasadi703@gmail.com",
    href: "mailto:sobhanasadi703@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+98 936 257 2474",
    href: "tel:+989362572474",
    icon: Phone,
  },
  {
    label: "Telegram",
    value: "@SobhanAsadi",
    href: "https://t.me/SobhanAsadi",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "Sobhan-asadi",
    href: "https://github.com/Sobhan-asadi",
    icon: Github,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 pt-20 pb-8 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-violet-500/[0.065] blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section label */}
        <div className="border-t border-white/[0.08] pt-7">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-violet-400 uppercase">
              04 / Contact
            </span>

            <span className="h-px w-14 bg-violet-400/40" />
          </div>
        </div>

        {/* Main CTA */}
        <div className="py-14 sm:py-16 lg:py-20">
          <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
            Have a project or opportunity?
          </p>

          <a href="mailto:sobhanasadi703@gmail.com" className="group block">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-6xl text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[0.82] font-semibold tracking-[-0.075em] text-white">
                LET&apos;S BUILD
                <span className="block text-white/35 transition-colors duration-500 group-hover:text-violet-400">
                  SOMETHING.
                </span>
              </h2>

              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:rotate-45 group-hover:border-violet-400/40 group-hover:bg-violet-400/10 sm:h-20 sm:w-20">
                <ArrowUpRight size={26} className="text-violet-400" />
              </span>
            </div>
          </a>
        </div>

        {/* Contact links */}
        <div className="grid border-y border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.label === "Telegram" || item.label === "GitHub"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.label === "Telegram" || item.label === "GitHub"
                    ? "noreferrer"
                    : undefined
                }
                className={`group flex flex-col justify-between gap-8 py-6 transition-colors duration-300 hover:bg-white/[0.015] sm:px-6 lg:min-h-36 lg:px-7 lg:py-7 ${
                  index !== contactLinks.length - 1
                    ? "border-b border-white/[0.08] sm:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 0 || index === 2
                    ? "sm:border-r sm:border-white/[0.08]"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-white/50 transition-all duration-300 group-hover:border-violet-400/30 group-hover:text-violet-400">
                    <Icon size={17} />
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-400"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm font-medium break-all text-white/80 sm:text-base">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium tracking-[0.12em] text-white/40 uppercase">
            Sobhan Asadi · Front-End Developer
          </p>

          <a
            href="#home"
            className="group flex w-fit items-center gap-2 text-xs font-semibold tracking-[0.12em] text-white/45 uppercase transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight
              size={14}
              className="text-violet-400 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
