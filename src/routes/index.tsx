import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Constellation } from "@/components/Constellation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "a sky still being named — a queer, anti-caste worldbuilding" },
      {
        name: "description",
        content:
          "A speculative world rooted in Indian anti-caste, anti-class, queer and trans thought. Wander a constellation of writings, sound, and moving image.",
      },
      { property: "og:title", content: "a sky still being named" },
      {
        property: "og:description",
        content:
          "A speculative world rooted in anti-caste, queer and trans thought. Wander the constellation.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="grain min-h-screen relative">
      <SiteHeader />

      <main className="px-6 md:px-12 pb-24">
        <section className="mx-auto max-w-3xl text-center pt-6 pb-12">
          <p
            className="text-[11px] uppercase tracking-[0.4em]"
            style={{ color: "var(--ochre)" }}
          >
            entry · the sky
          </p>
          <h1 className="mt-5 font-display italic text-4xl md:text-6xl leading-[1.05] text-balance text-foreground">
            this is not a portfolio.
            <br />
            it is a country
            <br />
            still learning its own borders.
          </h1>
          <p className="mt-6 font-display text-base md:text-lg text-foreground/75 text-balance">
            each star is a work — a pamphlet, a recording, a moving image, a
            small heresy. follow the threads. they were drawn by what these
            works share: caste refused, kinship remade, language borrowed
            back.
          </p>
        </section>

        <section className="mx-auto max-w-6xl">
          <Constellation />
        </section>

        <section className="mx-auto mt-16 max-w-2xl text-center">
          <div
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ color: "var(--ochre)" }}
          >
            ✦ tap any star ✦
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 md:px-12 py-10 border-t border-border/40">
        <div className="flex flex-wrap items-baseline justify-between gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>built slow · built tender</span>
          <span>no gods · no caste · no closets</span>
        </div>
      </footer>
    </div>
  );
}
