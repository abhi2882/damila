import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="relative z-10 px-6 md:px-12 pt-8 pb-4">
      <div className="flex items-baseline justify-between gap-6">
        <Link to="/" className="group">
          <div className="font-display italic text-2xl md:text-3xl text-foreground leading-none">
            a sky still being named
          </div>
          <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.35em] text-muted-foreground">
            an anti-caste · queer · trans worldbuilding
          </div>
        </Link>
        <nav className="flex items-center gap-5 md:gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-foreground transition-colors">sky</Link>
          <Link to="/index-of-works" activeProps={{ className: "text-primary" }} className="hover:text-foreground transition-colors">index</Link>
          <Link to="/about" activeProps={{ className: "text-primary" }} className="hover:text-foreground transition-colors">manifesto</Link>
        </nav>
      </div>
    </header>
  );
}
