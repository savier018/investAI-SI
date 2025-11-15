const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
          InvesAI
        </div>
        <div className="hidden items-center gap-6 sm:flex">
          <div className="flex items-center gap-10 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navigationLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
            aria-label={`Activar modo ${isDark ? "claro" : "oscuro"}`}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v1" />
                <path d="M12 20v1" />
                <path d="M5.22 5.22l.7.7" />
                <path d="M18.08 18.08l.7.7" />
                <path d="M3 12h1" />
                <path d="M20 12h1" />
                <path d="M5.22 18.78l.7-.7" />
                <path d="M18.08 5.92l.7-.7" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
