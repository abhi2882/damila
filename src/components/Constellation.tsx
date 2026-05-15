import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { works, constellationEdges, type Work } from "@/data/works";

const kindColor: Record<Work["kind"], string> = {
  pdf: "#ff4b4b",     // oxblood
  audio: "#b3b339",   // olive
  video: "#51a0ce",   // deep ocean blue
  text: "var(--ochre)", // chrome yellow
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
            <stop offset="0%" stopColor="var(--ochre)" stopOpacity="0.0" />
            <stop offset="50%" stopColor="var(--ochre)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--ochre)" stopOpacity="0.0" />
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
              fill="var(--parchment)"
              opacity={0.12 + ((i * 7) % 25) / 100}
            />
          );
        })}
      </svg>

      {/* the named stars */}
      {works.map((w, idx) => {
        const color = kindColor[w.kind];
        return (
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
              {/* halo — same hue as the kind */}
              <span
                className="absolute -inset-6 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle, ${color}, transparent 70%)`,
                }}
              />
              <span
                className="star-pulse relative z-10 select-none leading-none"
                style={{
                  fontSize: `${(w.magnitude ?? 1) * 1.6}rem`,
                  color,
                  textShadow: `0 0 14px ${color}`,
                }}
                aria-hidden
              >
                ✦
              </span>
              <span className="mt-2 font-display italic text-sm md:text-base text-foreground/85 group-hover:text-foreground tracking-wide whitespace-nowrap drift">
                {w.title}
              </span>
              <span
                className="mt-0.5 text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--ochre)" }}
              >
                {w.kind} · {w.year}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
