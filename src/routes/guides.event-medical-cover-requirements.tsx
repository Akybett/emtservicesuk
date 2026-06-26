import { createFileRoute, Link } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

const TITLE = "Event Medical Cover Requirements — A UK Organiser's Guide | EMT Services";
const DESCRIPTION =
  "How to determine the right level of event medical cover for your UK event using The Purple Guide. Practical risk-assessment breakdown for attendance, audience profile and activity.";
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
          headline: "Event Medical Cover Requirements — A UK Organiser's Guide",
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
          Guide · Event Planning
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Event Medical Cover Requirements: A UK Organiser's Guide
        </h1>
        <div className="mt-4 h-1 w-12 rounded-full bg-navy" />
        <p className="mt-6 text-lg text-muted-foreground">
          Working out how much medical cover your event needs can feel opaque. This guide breaks
          down the risk-assessment factors UK organisers use — drawn from The Purple Guide to
          Health, Safety and Welfare at Music and Other Events — so you can plan with confidence
          and brief providers accurately.
        </p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-navy">Why event medical cover matters</h2>
            <p className="mt-3">
              Under the Health and Safety at Work etc. Act 1974 and the Management of Health and
              Safety at Work Regulations 1999, event organisers have a legal duty to protect
              attendees, staff, contractors and the public. Adequate on-site medical provision is
              a core part of that duty — and licensing authorities and Safety Advisory Groups
              (SAGs) will expect to see a documented rationale for the cover you've booked.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">The Purple Guide scoring model</h2>
            <p className="mt-3">
              Chapter 14 of The Purple Guide sets out a points-based calculator that scores an
              event across risk factors and translates the total into recommended resources
              (first aiders, ambulance technicians, paramedics, treatment centres and ambulances).
              The score is a starting point, not a ceiling — it should always be reviewed against
              your specific risk assessment.
            </p>
            <p className="mt-3">
              The headline factors fall into three groups: <strong>attendance</strong>,
              <strong> audience profile</strong>, and <strong>event nature and hazards</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">1. Attendance</h2>
            <p className="mt-3">
              The scoring rises with peak crowd size. A village fete of 500 people sits in a
              very different bracket to a 25,000-capacity music festival. When estimating, use
              <em> peak concurrent attendance</em> — not total ticket sales across a multi-day
              event — and include staff, contractors and performers.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Under 1,000: typically first-aid level cover</li>
              <li>1,000–5,000: first aid plus on-site ambulance / treatment capability</li>
              <li>5,000–20,000: paramedic-led team, treatment centre, dedicated transport</li>
              <li>20,000+: multi-vehicle, doctor-led provision and major incident planning</li>
            </ul>
            <p className="mt-3 text-sm">
              These bands are indicative only — the calculator combines them with the other
              factors below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">2. Audience profile</h2>
            <p className="mt-3">
              Who is coming changes risk dramatically. The Purple Guide adds points for audiences
              that are likely to generate more or more serious presentations:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Predominantly very young or very elderly attendees</li>
              <li>Mixed family audiences with high numbers of children</li>
              <li>Events with a high likelihood of alcohol or drug use</li>
              <li>Standing-only or front-of-stage crowds with crush potential</li>
              <li>Audiences travelling long distances or camping on site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">3. Event nature and hazards</h2>
            <p className="mt-3">
              Activity type and environment add the final layer. Higher-risk examples include
              motorsport, equestrian, contact sports, pyrotechnics, water-based activities,
              extreme weather exposure, remote rural locations with long NHS response times, and
              events running into the night. Each adds points and may also dictate specialist
              cover — for example, a doctor on scene for motorsport, or water rescue capability
              for an open-water swim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">From score to resource plan</h2>
            <p className="mt-3">
              Once you have a total score, The Purple Guide translates it into recommended
              resources: numbers of first aiders, ambulance technicians, paramedics and doctors,
              plus treatment-centre size and the number and type of ambulances. A typical
              mid-sized regional event might need a paramedic-led crew of 6–10, a dedicated
              treatment area, and at least one Emergency Ambulance capable of transporting to
              hospital.
            </p>
            <p className="mt-3">
              Whoever you appoint should be able to show you their working — the score, the
              assumptions, and how each resource maps to a foreseeable scenario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Other things organisers often miss</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>Liaison with statutory services.</strong> Engage your local SAG and the
                NHS ambulance trust early — they may have specific requirements for handover,
                radio comms or shared command.
              </li>
              <li>
                <strong>Welfare provision.</strong> Mental health, safeguarding and welfare
                support sit alongside clinical cover, not inside it.
              </li>
              <li>
                <strong>Provider governance.</strong> Ask for indemnity insurance, clinical
                governance arrangements, HCPC / NMC registrations and DBS checks.
              </li>
              <li>
                <strong>Documentation.</strong> Keep your risk assessment, medical plan, score
                sheet and provider credentials together — licensing authorities will ask.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Quick planning checklist</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Confirm peak concurrent attendance (not ticket total)</li>
              <li>Profile your audience — age, alcohol, camping, crowd dynamics</li>
              <li>List activities and environmental hazards</li>
              <li>Score the event using The Purple Guide calculator</li>
              <li>Cross-check the score against a written risk assessment</li>
              <li>Brief providers with the score, plan and any SAG feedback</li>
              <li>Document everything for licensing</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-navy/10 bg-navy/5 p-6">
            <h2 className="text-xl font-semibold text-navy">Need a second opinion?</h2>
            <p className="mt-3">
              EMT Services is an independent UK event safety company providing private event
              medical, security and fire safety cover. We're happy to sense-check your Purple
              Guide score and medical plan before you go to licensing — at no cost.
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
              Not affiliated with the NHS or any ambulance trust. We provide private event
              support alongside — not in place of — statutory emergency services.
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
