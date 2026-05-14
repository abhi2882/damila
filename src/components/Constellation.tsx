import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { works, constellationEdges, type Work } from "@/data/works";

const kindGlyph: Record<Work["kind"], string> = {
  pdf: "❋",
  audio: "◉",
  video: "▲",
  text: "✦",
};

export function Constellation() {
  const edges = useMemo(constellationEdges, []);
  const bySlug = useMemo(
    () => Object.fromEntries(works.map((w) => [w.slug, w])),
    [],
  );

  return (
    <div className="relative w-full" style={{ aspectRatio: "16 / 11" }}>
      {/* connective tissue */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="thread" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--clay)" stopOpacity="0.0" />
            <stop offset="50%" stopColor="var(--moss)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--clay)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {edges.map(([a, b], i) => {
          const A = bySlug[a];
          const B = bySlug[b];
          if (!A || !B) return null;
          return (
            <line
              key={i}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="url(#thread)"
              strokeWidth={0.18}
              strokeDasharray="0.6 0.8"
            />
          );
        })}
      </svg>

      {/* faint background stars */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        {Array.from({ length: 80 }).map((_, i) => {
          const cx = (i * 53) % 100;
          const cy = (i * 97) % 100;
          return (
            <circle
              key={i}
              cx={`${cx}%`} cy={`${cy}%`} r={0.6}
              fill="var(--moss)"
              opacity={0.18 + ((i * 7) % 30) / 100}
            />
          );
        })}
      </svg>

      {/* the named stars */}
      {works.map((w, idx) => (
        <Link
          key={w.slug}
          to="/works/$slug"
          params={{ slug: w.slug }}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${w.x}%`,
            top: `${w.y}%`,
            animationDelay: `${idx * 0.4}s`,
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* halo */}
            <span
              className="absolute -inset-6 rounded-full blur-xl opacity-40 group-hover:opacity-90 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--clay) 60%, transparent), transparent 70%)",
              }}
            />
            <span
              className="star-pulse text-primary relative z-10 select-none"
              style={{ fontSize: `${(w.magnitude ?? 1) * 1.6}rem` }}
              aria-hidden
            >
              {kindGlyph[w.kind]}
            </span>
            <span className="mt-2 font-display italic text-sm md:text-base text-foreground/80 group-hover:text-foreground tracking-wide whitespace-nowrap drift">
              {w.title}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              {w.kind} · {w.year}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
