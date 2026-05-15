import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { works, type Work } from "@/data/works";

export const Route = createFileRoute("/index-of-works")({
  head: () => ({
    meta: [
      { title: "Index — a sky still being named" },
      { name: "description", content: "A linear index of all works in the world." },
    ],
  }),
  component: IndexOfWorks,
});

const kindColor: Record<Work["kind"], string> = {
  pdf: "#ff4b4b",
  audio: "#b3b339",
  video: "#51a0ce",
  text: "var(--ochre)",
};

function IndexOfWorks() {
  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-3xl">
          <p
            className="text-[11px] uppercase tracking-[0.4em]"
            style={{ color: "var(--ochre)" }}
          >
            the index
          </p>
          <h1 className="mt-3 font-display italic text-4xl md:text-5xl text-foreground">
            for those who prefer a list to a sky.
          </h1>

          {/* legend */}
          <div className="mt-8 flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {(["pdf", "audio", "video"] as const).map((k) => (
              <span key={k} className="inline-flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{
                    background: kindColor[k],
                    boxShadow: `0 0 10px ${kindColor[k]}`,
                  }}
                />
                {k}
              </span>
            ))}
          </div>

          <ul className="mt-10 divide-y divide-border/50">
            {works.map((w) => {
              const color = kindColor[w.kind];
              return (
                <li key={w.slug}>
                  <Link
                    to="/works/$slug"
                    params={{ slug: w.slug }}
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-6"
                  >
                    <span
                      className="font-mono text-xs uppercase tracking-widest w-16"
                      style={{ color, textShadow: `0 0 8px ${color}` }}
                    >
                      {w.kind}
                    </span>
                    <div className="border-l-2 pl-4" style={{ borderColor: color }}>
                      <div
                        className="font-display italic text-2xl md:text-3xl text-foreground transition-colors"
                        style={{ ["--hover" as string]: color }}
                      >
                        {w.title}
                      </div>
                      <div
                        className="mt-1 font-display italic"
                        style={{ color: "var(--ochre)" }}
                      >
                        {w.whisper}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tabular-nums">
                      {w.year ?? "—"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

