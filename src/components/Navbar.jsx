const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-semibold text-slate-800">InvesAI</div>
        <div className="hidden items-center gap-10 text-sm font-medium text-slate-600 sm:flex">
          {navigationLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-blue-500"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
