import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Conta", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handelScroll() {
      setIsScrolled(window.screenY > 10);
    }
    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <nav
      className={cn(
        "bg-background/80 fixed z-40 w-full items-center transition-all duration-300",
        isScrolled
          ? "bg-background/80 py-3 text-2xl shadow-md backdrop-blur-md"
          : "py-5 md:py-6",
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-primary flex items-center text-xl font-bold"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">SOBHAN-</span>
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden space-x-8 md:flex md:px-9">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile nav */}

        <button
          className="text-foreground z-50 p-2 md:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "bg-background/95 backdroup-blur-md fixed inset-0 z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                onClick={() => setIsMenuOpen(false)}
                to={item.href}
                key={item.id}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
