import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE =
  "Event Safety Cover: Medical, Security & Stewarding — A UK Organiser's Overview | EMT Services";
const DESCRIPTION =
  "A heads-up for UK event organisers on scoping medical, security and stewarding cover — the factors that move the needle, the bits that catch people out, and when to pick up the phone.";
const URL =
  "https://emtservicesuk.lovable.app/guides/event-medical-cover-requirements";

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
          headline:
            "Event Safety Cover: Medical, Security & Stewarding — A UK Organiser's Overview",
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
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="inline-flex items-center" aria-label="EMT Services — home">
            <img
              src={logoFull}
              alt="EMT Services"
              className="h-14 w-auto"
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
          Event Safety Cover: Medical, Security &amp; Stewarding
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />
        <p className="mt-6 text-lg text-muted-foreground">
          A short heads-up for organisers in the early planning stages — covering the three
          areas we are most often asked about. Not a checklist to replace your risk
          assessment, and not us telling you how to suck eggs. Just the things that tend to
          move the needle, and the bits that catch people out.
        </p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-navy">Start with the bigger picture</h2>
            <p className="mt-3">
              Cover for a UK event is shaped by The Purple Guide, your licence conditions and
              your local Safety Advisory Group. Numbers on a page only get you so far — what
              matters is whether your provision matches the event you are actually running, on
              the day, in that venue, with that crowd. Medical, security and stewarding are
              best scoped together so they complement each other rather than overlap or leave
              gaps.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Medical cover</h2>
            <p className="mt-3">
              The size and shape of medical cover is usually driven by three things more than
              anything else:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>Crowd.</strong> Peak concurrent attendance — not total ticket sales —
                and who is in it (families, older audiences, alcohol, camping).
              </li>
              <li>
                <strong>Activity.</strong> Music, sport, motorsport, water, pyrotechnics,
                heritage re-enactment — each carries its own pattern of injuries.
              </li>
              <li>
                <strong>Environment.</strong> Indoor or outdoor, terrain, weather exposure,
                and how long an NHS crew would realistically take to reach you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Security cover</h2>
            <p className="mt-3">
              Security is not just "doors and bags". A workable plan tends to think about each
              of these together:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>SIA-licensed roles.</strong> Door supervisors, search teams and close
                protection where the role legally requires a licence.
              </li>
              <li>
                <strong>Perimeter and access.</strong> Ingress and egress flow, accreditation,
                back-of-house separation, vehicle control.
              </li>
              <li>
                <strong>Threat picture.</strong> What is realistic for this event — alcohol,
                protest, lone-actor concern, cash handling, VIPs — and how that scales
                staffing.
              </li>
              <li>
                <strong>Counter-terrorism awareness.</strong> Proportionate to scale, but
                worth touching even at smaller events (HVM, ACT, briefings).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Stewarding</h2>
            <p className="mt-3">
              Stewards are not security and the distinction matters — for licensing, for
              insurance and for what you can lawfully ask them to do. A good steward plan
              usually covers:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>Crowd management.</strong> Flow, density, queue dynamics, pinch
                points, signage.
              </li>
              <li>
                <strong>Customer-facing roles.</strong> Welcome, information, accessibility
                support, lost children, lost property.
              </li>
              <li>
                <strong>Safety roles.</strong> Fire stewards, evacuation marshals, pit and
                barrier teams where relevant.
              </li>
              <li>
                <strong>Training and briefing.</strong> Site induction, radio discipline,
                escalation routes to security and medical.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">A few legal and guidance baselines</h2>
            <p className="mt-3">
              Organisers often ask "what is the minimum cover we need for a festival?" The honest
              answer is: there is rarely a fixed statutory number. What the licensing authority and
              Safety Advisory Group expect is that your provision matches your risk assessment — your
              crowd demographics, the activities you are running, the experience of your audience,
              the weather, terrain and many other factors. This is a guide to start the conversation,
              not a science. Exact numbers always come from your specific risk assessment and SAG.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>Bar and alcohol areas.</strong> A venue or event that sells alcohol usually
                has licensing conditions that require SIA-licensed door supervision or stewarding in
                specific ratios. The exact requirement comes from your licensing officer and SAG, but
                a common starting point in busy bar or late-night areas is around one SIA door
                supervisor per 100 people. Stewards cannot be substituted for SIA roles here.
              </li>
              <li>
                <strong>Crowd-to-medic thinking.</strong> Industry guidance (including the Purple
                Guide) discusses medical cover in terms of peak crowd density, activity type and
                ambulance handover time, not a flat headcount ratio. A low-risk seated event may
                need very different cover to a mosh pit or motorsport arena with the same ticket
                sales.
              </li>
              <li>
                <strong>Stewards vs SIA roles.</strong> Only SIA-licensed staff can do certain
                security work by law. Asking a steward to act as a door supervisor or to use force
                can breach licensing conditions and invalidate insurance.
              </li>
            </ul>
            <p className="mt-3">
              The best use of these numbers is as a sense-check, not a final specification. If
              your event is anything more than a small, low-risk gathering, it is worth running the
              numbers past your SAG and a provider who can show their working.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Things that catch people out</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Ticket totals being used in place of peak concurrent attendance</li>
              <li>Stewards being asked to do work that legally requires SIA cover</li>
              <li>Welfare and mental health being lumped in with clinical cover</li>
              <li>Late engagement with the SAG, licensing authority and NHS ambulance trust</li>
              <li>Providers who cannot show their working, insurance or governance</li>
              <li>Multi-day events scoped as if they were a single day</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">What "good" looks like in a brief</h2>
            <p className="mt-3">
              A useful first conversation usually starts with a one-pager: dates, venue, peak
              crowd, audience profile, activities, alcohol policy, on-site hours and anything
              unusual. From that, a decent provider can sketch medical, security and
              stewarding together and explain the trade-offs in plain English — before any
              quote.
            </p>
          </section>

          <section className="rounded-2xl border border-navy/10 bg-navy/5 p-6">
            <h2 className="text-xl font-semibold text-navy">
              Want us to walk you through it?
            </h2>
            <p className="mt-3">
              We are a working provider, not a free consultancy — but a short, friendly chat
              is usually possible. Tell us roughly what you are planning and, where we can, we
              will point you in the right direction on what medical, security and stewarding
              tend to look like for that kind of event and what your SAG is likely to expect.
            </p>
            <p className="mt-3">
              If you have engaged us for an event, you naturally get more of our time as a
              value add — joining SAG meetings where useful, sharing templates and additional
              resources, and being on the end of the phone in the run-up.
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
