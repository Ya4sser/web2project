import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// The links shown in the navigation bar
const links = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  // Controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // NavLink gives us "isActive" so we can highlight the current page
  const linkClass = ({ isActive }) =>
    isActive ? "text-clay font-semibold" : "hover:text-clay";

  return (
    <header className="sticky top-0 z-10 border-b border-sand bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-serif text-2xl font-bold">
          Folio<span className="text-clay">.</span>
        </Link>

        {/* Desktop links (hidden on small screens) */}
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="rounded-full border border-ink px-4 py-1.5 text-sm hover:bg-ink hover:text-white">
            Cart
          </Link>

          {/* Hamburger button (only on small screens) */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="space-y-1 border-t border-sand px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                <span className="block py-2">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
