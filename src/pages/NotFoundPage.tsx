import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router";

import Button from "../components/common/Button";

function NotFoundPage() {
  return (
    <section className="container flex min-h-[70vh] items-center py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          404
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
          This page wandered off.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
          The link may be outdated, the page may have moved, or this route
          simply doesn&apos;t exist.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/">
            <Button>
              <Home size={18} />
              Go home
            </Button>
          </Link>

          <button type="button" onClick={() => window.history.back()}>
            <Button variant="secondary">
              <ArrowLeft size={18} />
              Go back
            </Button>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
