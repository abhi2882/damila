import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Manifesto — a sky still being named" },
      {
        name: "description",
        content:
          "A short manifesto for this speculative world: anti-caste, anti-class, queer, trans.",
      },
      { property: "og:title", content: "Manifesto — a sky still being named" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="px-6 md:px-12 pb-24">
        <article className="mx-auto max-w-2xl pt-6">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            the manifesto
          </p>
          <h1 className="mt-4 font-display italic text-4xl md:text-6xl leading-[1.05] text-balance">
            we are building a country that has no use for purity.
          </h1>

          <div className="mt-10 space-y-6 font-display text-lg leading-relaxed text-foreground/85">
            <p>
              this is a worldbuilding, not a portfolio. each work hung in the
              sky is a fragment of a country we are still drafting — a country
              rooted in anti-caste, anti-class, queer, and trans thought from
              the subcontinent and its diasporas.
            </p>
            <p>
              we borrow from the bhakti poets who refused the priest, from
              ambedkar who refused the village, from the hijra elders who
              refused the binary, from every kitchen that fed the wrong
              guest. our cosmology is small and stubborn.
            </p>
            <p>
              you will find pamphlets, sound, moving image, and writing. some
              works are finished, some are still becoming. the constellation
              is drawn by what they share, not by what they explain.
            </p>
            <p className="text-primary">
              there are no gods here. only the slow, tender labour of
              imagining otherwise.
            </p>
          </div>

          <hr className="my-14 border-border/50" />

          <section>
            <h2 className="font-display italic text-2xl md:text-3xl">
              a note on adding works
            </h2>
            <div className="mt-4 space-y-4 font-display text-foreground/80">
              <p>
                files (pdf, mp3, mp4) live in <code className="font-mono text-sm bg-muted/60 px-1.5 py-0.5 rounded">public/works/</code>.
                drop a file there and reference it from{" "}
                <code className="font-mono text-sm bg-muted/60 px-1.5 py-0.5 rounded">src/data/works.ts</code>{" "}
                with a slug, themes, and a position in the sky. the
                constellation will draw itself.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
