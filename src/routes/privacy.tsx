import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE = "Privacy Policy — EMT Services";
const DESCRIPTION =
  "How EMT Services collects, uses and protects personal information under UK GDPR. ICO-registered event safety, medical and security provider.";
const URL = "https://emtservices.uk/privacy";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-navy">Who We Are</h2>
            <p className="mt-3">
              EMT Services ("we", "our", "us") is committed to protecting and respecting
              your privacy. We are registered with the Information Commissioner's Office
              (ICO) and comply strictly with UK GDPR regulations. This policy explains how
              we collect, use, and protect any personal information you provide when using
              our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Information We Collect</h2>
            <p className="mt-3">
              Through this website, we may collect your name, email address, and telephone
              number when you submit an enquiry, details regarding your event requirements,
              and standard website usage data to ensure the site functions correctly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">How We Use Your Information</h2>
            <p className="mt-3">
              We use your personal data exclusively to respond to your requests for quotes,
              maintain internal administrative records, and comply with our legal and
              regulatory obligations as an event safety and medical provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Data Security and Sharing</h2>
            <p className="mt-3">
              We will never sell, distribute, or lease your personal information to third
              parties. We will only share your data if required by law, or with trusted
              operational partners strictly necessary to fulfil our contractual obligations
              to you. We have implemented robust physical and electronic procedures to
              safeguard the information we collect online.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Your Rights</h2>
            <p className="mt-3">
              Under UK GDPR, you have the right to request details of the personal
              information we hold about you, request corrections to any inaccurate data, or
              ask for your data to be deleted. To exercise these rights, please contact us
              at{" "}
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
