import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

function ThemeToggl() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  localStorage.setItem("theme", "dark");

  useEffect(() => {
    const themeItem = localStorage.getItem("theme");

    if (themeItem === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");

      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, [isDarkMode]);

  function toggleTheme() {
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");

      setIsDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");

      setIsDarkMode(true);
    }
  }

  return (
    <button
      className={cn(
        "fixed top-5 right-5 z-50 cursor-pointer rounded-full p-2 transition-colors duration-300 max-sm:hidden",
        "focus:outline-hidden",
      )}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 text-blue-900" />
      )}
    </button>
  );
}

export default ThemeToggl;
