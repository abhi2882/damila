import type { Work } from "@/data/works";

export function MediaViewer({ work }: { work: Work }) {
  if (!work.src) {
    return (
      <div className="rounded-sm border border-border/60 bg-card/60 p-10 text-center font-display italic text-foreground/70">
        a written work — read below.
      </div>
    );
  }

  if (work.kind === "pdf") {
    return (
      <div className="rounded-sm border border-border/60 bg-card/40 overflow-hidden">
        <object
          data={work.src}
          type="application/pdf"
          className="w-full"
          style={{ height: "78vh" }}
        >
          <div className="p-8 text-center">
            <p className="font-display italic text-foreground/80">
              your reader cannot embed this pamphlet.
            </p>
            <a
              href={work.src}
              className="mt-3 inline-block text-primary underline underline-offset-4"
            >
              open the PDF →
            </a>
          </div>
        </object>
      </div>
    );
  }

  if (work.kind === "audio") {
    return (
      <div className="rounded-sm border border-border/60 bg-card/60 p-8 md:p-12">
        <div className="mx-auto max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-primary text-4xl star-pulse">◉</span>
            <div className="font-display italic text-foreground/80">
              listen with the lights low.
            </div>
          </div>
          <audio controls src={work.src} className="w-full">
            your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    );
  }

  if (work.kind === "video") {
    return (
      <div className="rounded-sm border border-border/60 bg-black overflow-hidden">
        <video
          controls
          src={work.src}
          className="w-full h-auto"
          style={{ maxHeight: "78vh" }}
        >
          your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return null;
}
