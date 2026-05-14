import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { MediaViewer } from "@/components/MediaViewer";
import { works } from "@/data/works";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const work = works.find((w) => w.slug === params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => {
    const w = loaderData?.work;
    return {
      meta: w
        ? [
            { title: `${w.title} — a sky still being named` },
            { name: "description", content: w.whisper },
            { property: "og:title", content: w.title },
            { property: "og:description", content: w.whisper },
          ]
        : [],
    };
  },
  component: WorkPage,
  notFoundComponent: () => (
    <div className="min-h-screen grain">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="font-display italic text-4xl">a star not yet named</h1>
        <p className="mt-4 text-foreground/70 font-display">
          this work has not arrived in the sky yet.
        </p>
        <Link to="/" className="mt-8 inline-block text-primary underline underline-offset-4">
          ← return to the sky
        </Link>
      </div>
    </div>
  ),
});

function WorkPage() {
  const { work } = Route.useLoaderData();

  return (
    <div className="grain min-h-screen relative">
      <SiteHeader />

      <main className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← back to the sky
          </Link>

          <header className="mt-8 mb-10 border-b border-border/50 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              <span>{work.kind}</span>
              {work.year && <span>· {work.year}</span>}
              {work.themes.map((t: string) => (
                <span key={t} className="text-accent">· {t}</span>
              ))}
            </div>
            <h1 className="mt-4 font-display italic text-4xl md:text-6xl leading-[1.05] text-foreground text-balance">
              {work.title}
            </h1>
            <p className="mt-4 font-display text-lg md:text-xl text-foreground/70 italic text-balance">
              {work.whisper}
            </p>
          </header>

          <MediaViewer work={work} />

          <section className="mt-10 mx-auto max-w-2xl">
            <p className="font-display text-lg leading-relaxed text-foreground/85">
              {work.description}
            </p>
            {work.src && (
              <a
                href={work.src}
                download
                className="mt-6 inline-block text-sm text-primary underline underline-offset-4"
              >
                ↓ take this with you
              </a>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
