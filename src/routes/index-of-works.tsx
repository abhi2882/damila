import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { works } from "@/data/works";

export const Route = createFileRoute("/index-of-works")({
  head: () => ({
    meta: [
      { title: "Index — a sky still being named" },
      { name: "description", content: "A linear index of all works in the world." },
    ],
  }),
  component: IndexOfWorks,
});

function IndexOfWorks() {
  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            the index
          </p>
          <h1 className="mt-3 font-display italic text-4xl md:text-5xl">
            for those who prefer a list to a sky.
          </h1>

          <ul className="mt-12 divide-y divide-border/50">
            {works.map((w) => (
              <li key={w.slug}>
                <Link
                  to="/works/$slug"
                  params={{ slug: w.slug }}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-6"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground w-16">
                    {w.kind}
                  </span>
                  <div>
                    <div className="font-display italic text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                      {w.title}
                    </div>
                    <div className="mt-1 font-display text-foreground/65 italic">
                      {w.whisper}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {w.year ?? "—"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
