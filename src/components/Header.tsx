// src/components/Header.tsx
import DarkModeToggle from "./DarkModeToggel";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-primary-200/40 
                 bg-white/70 backdrop-blur-sm 
                 dark:bg-dark-bg/80 dark:border-dark-surface"
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo / Branding */}
        <div className="font-display text-lg font-bold text-primary-700 dark:text-dark-text">
          b*nature
        </div>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-bark-700 hover:text-primary-700 
                         dark:text-dark-text dark:hover:text-primary-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Toggle */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
