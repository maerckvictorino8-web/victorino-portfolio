import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site } from "../data/site.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function navClass({ isActive }) {
  const base = "block py-2 md:py-1 hover:text-white";
  return isActive
    ? `${base} text-white underline decoration-amber-400 decoration-2 underline-offset-8`
    : `${base} text-neutral-300`;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-5 py-4">
        <Link to="/" className="text-lg font-semibold text-white" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <button
          type="button"
          className="rounded border border-neutral-700 px-3 py-1 text-sm text-neutral-200 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col py-2 md:flex-row md:gap-6 md:py-0">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className={navClass} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
