import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE = "Terms of Service — EMT Services";
const DESCRIPTION =
  "The terms that apply when engaging EMT Services for event medical, security, stewarding and fire safety support across the UK.";
const URL = "https://emtservices.uk/terms";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

function TermsPage() {
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
          Terms of Service
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />

        <p className="mt-8 text-sm italic text-muted-foreground">
          These terms are maintained by EMT Services and describe the basis on
          which we provide our services. They do not replace any individual
          contract or booking agreement signed with a client.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-navy">About Us</h2>
            <p className="mt-3">
              EMT Services ("we", "our", "us") is an independent, privately-owned
              UK event safety company providing medical cover, SIA-licensed
              security, stewarding and fire safety personnel to event organisers.
              We are not affiliated with the NHS or any statutory ambulance trust.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Use of This Website</h2>
            <p className="mt-3">
              This website is provided for informational purposes and to allow
              prospective clients to enquire about our services. By using the site
              you agree not to misuse it, attempt to disrupt its operation, or
              submit information that is unlawful, misleading or infringes the
              rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Enquiries and Quotations</h2>
            <p className="mt-3">
              Enquiries submitted through this site do not create a binding
              contract. Any work we carry out is governed by a separate written
              agreement, quotation or booking confirmation issued by EMT Services
              and accepted by the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Scope of Service</h2>
            <p className="mt-3">
              We are transparent about our capabilities. We are not CQC-registered
              and do not provide patient conveyance. Where clinical or ambulance
              provision is required, we partner with appropriately registered
              providers. We will never overstate our clinical or operational
              capacity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Intellectual Property</h2>
            <p className="mt-3">
              All content on this site — including text, photography, logos and
              branding — is owned by EMT Services or its licensors and may not be
              reproduced without permission, except for fair personal or
              evaluative use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Liability</h2>
            <p className="mt-3">
              Information on this site is provided in good faith. We make no
              warranties as to completeness or fitness for a specific purpose.
              Liability for any contracted service is governed by the individual
              client agreement and applicable UK law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Governing Law</h2>
            <p className="mt-3">
              These terms are governed by the laws of England and Wales. Any
              dispute relating to your use of this website will be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
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
