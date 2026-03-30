import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 relative">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-xl font-semibold tracking-tight">
          <span className="text-purple-400">{"<"}</span>
          <span className="text-neutral-100">AS</span>
          <span className="text-purple-400">/&gt;</span>
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-300"
          aria-label="Toggle menu"
          type="button"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-neutral-100"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`
                }
              >
                {link.to === "/" ? (
                  <span><span className="text-purple-400">./</span>home</span>
                ) : (
                  <span>{link.label.toLowerCase()}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-neutral-950 border-b border-neutral-800 flex flex-col">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between w-full">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="font-mono text-xl font-semibold tracking-tight">
              <span className="text-purple-400">{"<"}</span>
              <span className="text-neutral-100">AS</span>
              <span className="text-purple-400">/&gt;</span>
            </NavLink>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-neutral-300"
              aria-label="Close menu"
              type="button"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex-1 flex flex-col items-center justify-center space-y-8 font-mono text-xl">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-neutral-100"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`
                    }
                >
                  {link.to === "/" ? (
                    <span><span className="text-purple-400">./</span>home</span>
                  ) : (
                    <span>{link.label.toLowerCase()}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
