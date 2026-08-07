import { BookOpen, Languages } from "lucide-react";

import { books, languages } from "../../data/life";

function LifeExtras() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-small)] sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
              <BookOpen size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                Reading
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">
                Stories I&apos;ve enjoyed.
              </h2>
            </div>
          </div>

          <p className="mt-6 leading-7 text-[var(--color-text-muted)]">
            Reading has been part of my life since childhood, especially
            fiction. I&apos;ve always enjoyed books that pull me into a world,
            mystery or idea for a while.
          </p>

          <div className="mt-6 grid gap-3">
            {books.map((book) => (
              <div
                key={book.title}
                className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-background)] p-4"
              >
                <p className="font-bold">{book.title}</p>

                {book.author && (
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {book.author}
                  </p>
                )}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface-dark)] p-7 text-white shadow-[var(--shadow-medium)] sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <Languages size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                Languages
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">
                Different ways to communicate.
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex items-center justify-between rounded-[var(--radius-medium)] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-lg font-bold">{language.name}</p>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/70">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default LifeExtras;
