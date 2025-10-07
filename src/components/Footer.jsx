import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-border relative mt-12 flex flex-wrap justify-between border-t px-4 py-12 pt-8">
      <p>&copy; Sobhan Asadi All rights resrved.</p>

      <a
        href="#hero"
        className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2 transition-colors"
      >
        <ArrowUp />
      </a>
    </footer>
  );
}
