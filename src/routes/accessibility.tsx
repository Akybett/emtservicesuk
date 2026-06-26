import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE = "Accessibility Statement — EMT Services";
const DESCRIPTION =
  "How EMT Services approaches accessibility on this website and how to get in touch if you experience a barrier.";
const URL = "https://emtservices.uk/accessibility";

export const Route = createFileRoute("/accessibility")({
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
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
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
          Accessibility
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Accessibility Statement
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />

        <p className="mt-8 text-sm italic text-muted-foreground">
          This statement is maintained by EMT Services. We want this site to be
          usable by as many people as possible — please tell us if anything
          stands in your way.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-navy">Our Commitment</h2>
            <p className="mt-3">
              EMT Services aims to follow the Web Content Accessibility Guidelines
              (WCAG) 2.1 at Level AA as a working standard for this site. We
              recognise accessibility is an ongoing process and welcome feedback
              that helps us improve.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">What We Have Done</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Semantic HTML structure with clear headings and landmarks.</li>
              <li>Descriptive alternative text on meaningful images.</li>
              <li>Keyboard-focusable navigation and form controls with visible focus styles.</li>
              <li>Sufficient colour contrast between text and background in body content.</li>
              <li>Form fields with clear labels and error messages.</li>
              <li>Responsive layout that works across phones, tablets and desktop.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Known Limitations</h2>
            <p className="mt-3">
              Some content — particularly third-party embeds and decorative
              imagery — may not always meet the standard above. We address issues
              as we become aware of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Reporting a Barrier</h2>
            <p className="mt-3">
              If you encounter an accessibility barrier on this site, or you need
              information from us in an alternative format, please email{" "}
              <a
                href="mailto:info@emtservices.uk"
                className="font-medium text-navy underline underline-offset-2 hover:text-navy/80"
              >
                info@emtservices.uk
              </a>
              . We aim to respond within a reasonable timeframe and to work with
              you on a suitable alternative.
            </p>
          </section>
        </div>

        <div className="mt-14">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-deep"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
