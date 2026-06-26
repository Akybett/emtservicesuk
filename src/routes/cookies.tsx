import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE = "Cookie Notice — EMT Services";
const DESCRIPTION =
  "How EMT Services uses cookies and similar technologies on this website.";
const URL = "https://emtservices.uk/cookies";

export const Route = createFileRoute("/cookies")({
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
  component: CookiesPage,
});

function CookiesPage() {
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
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Cookie Notice
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />

        <p className="mt-8 text-sm italic text-muted-foreground">
          This notice is maintained by EMT Services and explains how cookies and
          similar technologies are used on this website.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-navy">What Are Cookies?</h2>
            <p className="mt-3">
              Cookies are small text files placed on your device when you visit a
              website. They are widely used to make sites work properly, to
              improve user experience, and to provide information to site owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Cookies We Use</h2>
            <p className="mt-3">
              This site is intentionally lightweight. We do not run advertising,
              behavioural tracking, or third-party analytics cookies. The only
              storage used is whatever is strictly required for the website to
              function and for the contact form to communicate securely with our
              form-handling provider when you submit an enquiry.
            </p>
            <p className="mt-3">
              We do not set marketing cookies and do not share usage data with
              advertising networks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Third-Party Services</h2>
            <p className="mt-3">
              When you submit the contact form, your submission is processed by
              our form-handling provider in order to deliver the enquiry to us.
              That request may set technical cookies belonging to that provider.
              No data is shared for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Managing Cookies</h2>
            <p className="mt-3">
              You can control and delete cookies through your browser settings at
              any time. Blocking essential cookies may affect the operation of
              this and other websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              Questions about cookies on this site can be sent to{" "}
              <a
                href="mailto:info@emtservices.uk"
                className="font-medium text-navy underline underline-offset-2 hover:text-navy/80"
              >
                info@emtservices.uk
              </a>
              .
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
