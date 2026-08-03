import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Download, Menu, X } from "lucide-react";

import { siteConfig } from "../../data/site";

import Button from "../common/Button";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Journey", path: "/journey" },
  { label: "Achievements", path: "/achievements" },
  { label: "Life", path: "/life" },
  { label: "Gallery", path: "/gallery" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[var(--color-background)]/90 backdrop-blur-xl">
      <nav className="container flex h-[var(--navbar-height)] items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <span className="h-3 w-3 rounded-full bg-[var(--color-primary)] shadow-[0_0_0_6px_rgba(49,94,251,0.12)]" />

          <div className="leading-tight">
            <p className="text-base font-bold tracking-[-0.035em] sm:text-lg">
              {siteConfig.name}
            </p>

            <p className="text-[11px] font-medium text-[var(--color-text-muted)] sm:text-xs">
              {siteConfig.role}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  text-sm font-medium transition
                  ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteConfig.resumePath} target="_blank" rel="noreferrer">
            <Button variant="secondary">
              <Download size={17} />
              Résumé
            </Button>
          </a>

          <Link to="/contact">
            <Button>Let&apos;s talk</Button>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full p-2 hover:bg-black/5 lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--color-background)] lg:hidden">
          <div className="container flex h-[var(--navbar-height)] items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-3 w-3 rounded-full bg-[var(--color-primary)] shadow-[0_0_0_6px_rgba(49,94,251,0.12)]" />

              <div className="leading-tight">
                <p className="text-base font-bold tracking-[-0.035em]">
                  {siteConfig.name}
                </p>

                <p className="text-[11px] font-medium text-[var(--color-text-muted)]">
                  {siteConfig.role}
                </p>
              </div>
            </Link>

            <button
              type="button"
              className="rounded-full p-2 hover:bg-black/5"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="container flex flex-col gap-2 pt-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `
                    rounded-2xl px-4 py-4
                    text-2xl font-semibold
                    ${
                      isActive
                        ? "bg-[var(--color-primary)] text-white"
                        : "hover:bg-black/5"
                    }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4"
            >
              <Button variant="secondary" className="w-full">
                <Download size={18} />
                View résumé
              </Button>
            </a>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4"
            >
              <Button className="w-full">Let&apos;s talk</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
