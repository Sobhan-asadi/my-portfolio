import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
      id="hero"
    >
      <div className="z=10 container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="opacitey-0 animate-fede-in">Hi,I'm </span>
            <span className="text-primary animate-fade-in-delay-1 opacity-0">
              Sobhan{" "}
            </span>
            <span className="text-gradient animate-fade-in-delay-2 ml-2 opacity-0">
              Asadi
            </span>
          </h1>

          <p className="text-muted-foreground max-2-2xl animate-fade-in-delay-3 mx-auto text-lg opacity-0">
            Front-End Developer & Creative Technologist — crafting modern,
            user-focused web experiences with design, code, and passion.
          </p>

          <div className="animate-fade-in-delay-4 pt-4 opacity-0">
            <Link to="projects" className="cosmic-button">
              View My Work
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center">
        <span className="text-muted-foreground mb-2 text-sm">Scroll</span>
        <ArrowDown className="text-primary h-5 w-5" />
      </div>
    </section>
  );
}
