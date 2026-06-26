import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE = "Event Medical Cover: What Organisers Should Be Thinking About | EMT Services";
const DESCRIPTION =
  "A heads-up for UK event organisers on scoping medical cover — the factors that move the needle, the gotchas that catch people out, and when to pick up the phone.";
const URL = "https://emtservicesuk.lovable.app/guides/event-medical-cover-requirements";

export const Route = createFileRoute("/guides/event-medical-cover-requirements")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Event Medical Cover: What Organisers Should Be Thinking About",
          description: DESCRIPTION,
          author: { "@type": "Organization", name: "EMT Services" },
          publisher: { "@type": "Organization", name: "EMT Services" },
          mainEntityOfPage: URL,
        }),
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
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
          For event organisers
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Event Medical Cover: What You Should Be Thinking About
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />
        <p className="mt-6 text-lg text-muted-foreground">
          A short heads-up for organisers in the early planning stages. Not a checklist to
          replace your risk assessment — just the things that tend to move the needle, and
          the bits that catch people out.
        </p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-navy">Start with the bigger picture</h2>
            <p className="mt-3">
              Medical cover for a UK event is shaped by The Purple Guide and your local Safety
              Advisory Group. Numbers on a page only get you so far — what matters is whether
              your provision matches the event you are actually running, on the day, in that
              venue, with that crowd.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">What moves the needle</h2>
            <p className="mt-3">
              Three things usually drive the size and shape of cover more than anything else.
              Worth having a rough answer to each before you brief a provider:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>Crowd.</strong> Peak concurrent attendance — not total ticket sales —
                and who is in it (families, older audiences, alcohol, camping).
              </li>
              <li>
                <strong>Activity.</strong> What is happening on site? Music, sport, motorsport,
                water, pyrotechnics, heritage re-enactment — each carries its own pattern of
                injuries.
              </li>
              <li>
                <strong>Environment.</strong> Indoor or outdoor, terrain, weather exposure,
                how far you are from the nearest A&E, how long an NHS crew would realistically
                take to reach you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Things that catch people out</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Ticket totals being used in place of peak concurrent attendance</li>
              <li>Welfare and mental health being lumped in with clinical cover</li>
              <li>Late engagement with the local SAG and NHS ambulance trust</li>
              <li>Providers who cannot show their working, insurance or governance</li>
              <li>Multi-day events scoped as if they were a single day</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">What "good" looks like in a brief</h2>
            <p className="mt-3">
              A useful conversation with a medical provider usually starts with a one-pager:
              dates, venue, peak crowd, audience profile, activities, alcohol policy, on-site
              hours, and anything unusual. From that, a decent provider can sketch a plan and
              explain the trade-offs in plain English — before any quote.
            </p>
          </section>

          <section className="rounded-2xl border border-navy/10 bg-navy/5 p-6">
            <h2 className="text-xl font-semibold text-navy">
              Want us to walk you through it?
            </h2>
            <p className="mt-3">
              We are a working provider, not a free consultancy — but a short, friendly chat is
              usually possible. Tell us roughly what you are planning and, where we can, we will
              point you in the right direction on what cover tends to look like for that kind of
              event and what your SAG is likely to expect.
            </p>
            <p className="mt-3">
              If you have engaged us for an event, you naturally get more of our time as a
              value add — joining SAG meetings where useful, sharing templates and additional
              resources, and being on the end of the phone in the run-up. It is not a
              full-time advisory service, just something we extend to clients we are already
              working with.
            </p>
            <p className="mt-4">
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-deep"
              >
                Get in touch →
              </Link>
            </p>
            <p className="mt-3 text-sm">
              Independent UK event safety company. Not affiliated with the NHS or any
              ambulance trust — we provide private event support alongside statutory services.
            </p>
          </section>
        </div>

        <div className="mt-14">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-navy underline underline-offset-2 hover:text-navy/80"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
