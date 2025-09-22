// src/components/DarkModeToggle.tsx
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  // Initiale Erkennung
  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.classList.add("dark");
      setEnabled(true);
    } else {
      root.classList.remove("dark");
      setEnabled(false);
    }
  }, []);

  const toggle = () => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setEnabled(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setEnabled(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-primary-300 bg-white/70 px-3 py-2 shadow-sm 
                 backdrop-blur transition hover:bg-primary-100 
                 dark:border-dark-surface dark:bg-dark-surface dark:hover:bg-dark-surface/80"
      aria-label="Toggle Dark Mode"
    >
      <span className="text-lg">{enabled ? "🌙" : "☀️"}</span>
    </button>
  );
}
