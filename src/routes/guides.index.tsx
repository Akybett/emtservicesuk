import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE = "Event Safety Guides — EMT Services";
const DESCRIPTION =
  "Practical, plain-English guides for UK event organisers on medical cover, security and compliance — written by an independent event safety company.";
const URL = "https://emtservicesuk.lovable.app/guides";

const guides = [
  {
    to: "/guides/event-medical-cover-requirements",
    title: "Event Safety Cover: Medical, Security & Stewarding — A UK Organiser's Overview",
    description:
      "A heads-up on scoping medical, security and stewarding together — what drives the size of each, what catches people out, and what a useful brief looks like.",
    tag: "Planning",
  },
];

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10 bg-navy-deep/95 text-white">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="inline-flex items-center" aria-label="EMT Services — home">
            <img
              src={logoFull}
              alt="EMT Services"
              className="h-9 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <Link to="/" className="text-sm font-medium text-white/85 hover:text-white">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Knowledge base
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Event Safety Guides
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />
        <p className="mt-6 text-lg text-muted-foreground">
          Plain-English reference material for UK event organisers — written by people who
          actually staff the events.
        </p>

        <ul className="mt-12 space-y-5">
          {guides.map((g) => (
            <li key={g.to}>
              <Link
                to={g.to}
                className="block rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-navy/30 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {g.tag}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-navy">{g.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {g.description}
                </p>
                <p className="mt-4 text-sm font-medium text-navy">Read the guide →</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
