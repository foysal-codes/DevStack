import { useState } from "react";
import logoImage from "../assets/logo-text.png";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <button
          type="button"
          className="text-2xl leading-none text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true">&#9776;</span>
        </button>

        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          aria-label="Dev Stack home"
        >
          <img src={logoImage} alt="Dev Stack" className="h-8 w-auto" />
        </a>

        <nav
          className="hidden items-center gap-8 text-xs font-medium text-slate-600 md:flex"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-pink-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 text-xs font-medium md:flex">
          <button type="button" className="text-slate-700 hover:text-pink-600">
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-semibold md:hidden">
          <button type="button" className="text-slate-700">
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-white"
          >
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-slate-100 bg-white px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 text-sm text-slate-600">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
