import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[var(--color-background)]/90 backdrop-blur-xl">
        <nav className="container flex h-[var(--navbar-height)] items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Go to homepage"
            onClick={closeMenu}
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:bg-black/5 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={21} />
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[var(--color-background)] lg:hidden">
          <div className="sticky top-0 z-10 border-b border-black/5 bg-[var(--color-background)]/95 backdrop-blur-xl">
            <div className="container flex h-[var(--navbar-height)] items-center justify-between">
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={closeMenu}
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:bg-black/5"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <X size={21} />
              </button>
            </div>
          </div>

          <div className="container py-6">
            <div className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-2 shadow-[var(--shadow-small)]">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `
                      block rounded-2xl px-4 py-4
                      text-lg font-semibold transition
                      ${
                        isActive
                          ? "bg-[var(--color-primary)] text-white"
                          : "text-[var(--color-text)] hover:bg-black/5"
                      }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <Button variant="secondary" className="w-full">
                  <Download size={18} />
                  View résumé
                </Button>
              </a>

              <Link to="/contact" onClick={closeMenu}>
                <Button className="w-full">Let&apos;s talk</Button>
              </Link>
            </div>

            <p className="mt-8 text-center text-xs text-[var(--color-text-muted)]">
              {siteConfig.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
