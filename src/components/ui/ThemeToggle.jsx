import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-1 rounded-full border border-line bg-muted p-1 ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          !isDark ? "bg-accent text-accent-fg" : "text-nav"
        }`}
      >
        <Sun className="h-4 w-4" />
      </span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          isDark ? "bg-accent text-accent-fg" : "text-nav"
        }`}
      >
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}
