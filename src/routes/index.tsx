import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  HeartPulse,
  Users,
  Flame,
  CheckCircle2,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Star,
  
  Menu,
  X,
  Award,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroBg from "@/assets/hero-bg.jpg";
import castleAsset from "@/assets/herstmonceux-castle.jpg.asset.json";
import festivalAsset from "@/assets/open-air-festival.avif.asset.json";
import indoorAsset from "@/assets/indoor-music.jpg.asset.json";
import camperAsset from "@/assets/camper-marmalade.jpg.asset.json";
import wellbeingAsset from "@/assets/wellbeing-festival.jpg.asset.json";
const imgCastle = castleAsset.url;
const imgCultural = festivalAsset.url;
const imgIndoor = indoorAsset.url;
const imgCamper = camperAsset.url;
const imgWellbeing = wellbeingAsset.url;
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";
import securityAsset from "@/assets/security.jpg.asset.json";
import medicalAsset from "@/assets/medical.jpg.asset.json";
import stewardAsset from "@/assets/steward.jpg.asset.json";
import firemarshalAsset from "@/assets/firemarshal.jpg.asset.json";
import aohtAsset from "@/assets/aoht-member.png.asset.json";
import protrainingsAsset from "@/assets/protrainings.png.asset.json";
import icoAsset from "@/assets/ico-logo.jpg.asset.json";

const imgSecurity = securityAsset.url;
const imgMedical = medicalAsset.url;
const imgStewards = stewardAsset.url;
const imgFire = firemarshalAsset.url;


const TITLE = "EMT Services | Professional Medical & Security Event Support";
const DESCRIPTION =
  "Independent UK event safety company providing professional medical cover, SIA-licensed security, stewarding and fire safety for festivals, cultural and corporate events. Owner-operated with 35 years of hands-on experience.";
const SITE_URL = "https://emtservices.uk/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: heroBg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: heroBg },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "EMT Services",
          alternateName: "Event Management Team Services",
          description: DESCRIPTION,
          url: SITE_URL,
          email: "info@emtservices.uk",
          areaServed: [
            { "@type": "AdministrativeArea", name: "South East England" },
            { "@type": "Country", name: "United Kingdom" },
          ],
          address: { "@type": "PostalAddress", addressCountry: "GB", addressRegion: "South East England" },
          sameAs: [
            "https://www.facebook.com/EventManagementTeamServices",
            "https://www.instagram.com/emtservices.uk/",
            "https://www.linkedin.com/company/emt-servicesuk/",
          ],
          slogan: "Independent private event medical, security and safety support across the UK.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Foundations", href: "#foundations" },
  { label: "Trust", href: "#trust" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Shield,
    title: "SIA-Licensed Security",
    image: imgSecurity,
    copy: "Our SIA-licensed security personnel are experienced professionals with genuine operational background. Our team is built through personal recommendations and direct approaches from trusted colleagues. Every operative is personally vetted by the directors, with references actively followed up before anyone is placed on an event.",
  },
  {
    icon: HeartPulse,
    title: "Medical & First Aid Cover",
    image: imgMedical,
    copy: "We provide on-site medical planning and first aid cover. We are not CQC-registered and do not offer patient conveyance. For events requiring clinical or ambulance provision, we work closely alongside trusted CQC-registered providers to ensure the right level of care is in place. We will never overstate our own clinical capacity.",
  },
  {
    icon: Users,
    title: "Professional Stewarding",
    image: imgStewards,
    copy: "We bring in specialist stewards for each event rather than maintaining a permanent roster. This keeps us flexible and ensures the right personnel are matched to the right event. Our stewards come to us through personal recommendation and are vetted directly — not sourced from an agency pool.",
  },
  {
    icon: Flame,
    title: "Fire Safety Operations",
    image: imgFire,
    copy: "Fire safety planning and on-site compliance, structured in accordance with current legislation and industry guidance. Andy holds a NEBOSH certification — a gold-standard credential in occupational health, safety, and risk management — ensuring director-level qualification is applied to every event we cover.",
  },
];

const eventTypes = [
  "Music Festivals",
  "Cultural Events",
  "Carnivals & Parades",
  "Pride Events",
  "Rockabilly Events",
  "Camping Shows",
  "Castle & Estate Events",
  "Fireworks Displays",
  "Corporate Events",
  "Charity Events",
  "Historical Events",
  "Sporting Events",
];

const foundations = [
  {
    title: "How We Staff Events",
    copy: "We do not maintain a large permanent roster. Instead, we bring in vetted specialists suited to each event. This keeps us flexible and means we only place people we genuinely trust. We are always honest about our capacity and will never overpromise on staffing numbers.",
  },
  {
    title: "Vetting & Accountability",
    copy: "Our team is built through personal recommendations and direct approaches — not agency pools. We personally vet every operative, actively follow up references, and consult trusted industry colleagues. Our SIA staff are seasoned professionals with real operational experience.",
  },
  {
    title: "Qualified at Director Level",
    copy: "As co-owners, Sid and Andy both hold a wide variety of professional and industry-recognised qualifications. Specifically regarding health, safety, and fire safety, Andy holds a NEBOSH certification, ensuring EMT Services brings director-level qualification to this critical area. Both directors are also registered trainers for Highfield and Pro Trainings, and members of the Association of Healthcare Trainers (AOHT). This is offered as reassurance, not as a boast.",
  },
  {
    title: "Directors on the Ground",
    copy: "As co-owners, Sid and Andy typically work on the ground at events themselves — either as team leads or as additional personnel. This is always subject to our availability and other commitments, but it reflects the hands-on approach that has been central to how we have operated throughout our careers.",
  },
  {
    title: "Experienced, Seasoned Teams",
    copy: "The majority of our team brings a wealth of life experience and a seasoned professional background to their work. That maturity — in how they handle people, read situations, and de-escalate — is something we actively look for and value when building our teams.",
  },
  {
    title: "Pricing & Fair Pay",
    copy: "We are not interested in competing on price alone. We pay our staff fairly for the skill and experience they bring, and that is reflected in what we charge. We are unlikely to be the cheapest option — but our pricing will always be fair, transparent, and clearly explained.",
  },
  {
    title: "Operating to the Highest Standards",
    copy: (
      <>
        Every event we plan and manage is structured in strict accordance with the{" "}
        <a
          href="https://www.thepurpleguide.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-navy underline underline-offset-2 hover:text-navy/80"
        >
          Purple Guide
        </a>{" "}
        and the{" "}
        <a
          href="https://sgsa.org.uk/greenguide/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-navy underline underline-offset-2 hover:text-navy/80"
        >
          SGSA's Green Guide
        </a>
        .
      </>
    ),
  },
  {
    title: "Inclusive by Necessity",
    copy: "We actively build teams that reflect the crowds they manage. Understanding the people in front of you matters. Over the years we have found that diverse, well-matched teams simply perform better in complex crowd environments.",
  },
  {
    title: "ICO Registered & Know Our Limits",
    copy: "We are registered with the Information Commissioner's Office (ICO). Any data you share with us is held securely under current legislation. And if a project is genuinely beyond what we can deliver to our standard, we say so — we would rather lose the work than let a client down.",
  },
];

const memberships = [
  {
    org: "Association of Healthcare Trainers",
    status: "Member",
    description:
      "Committed to delivering training that meets recognised healthcare standards.",
    icon: Award,
    logo: aohtAsset.url,
    logoAlt: "Association of Healthcare Trainers (AOHT) official member logo",
  },
  {
    org: "ProTrainings & Highfield",
    status: "Registered Trainers",
    description:
      "Fully certified to deliver accredited, high-quality training programmes.",
    icon: ShieldCheck,
    logo: protrainingsAsset.url,
    logoAlt: "ProTrainings UK registered trainer official logo",
  },
  {
    org: "Information Commissioner's Office",
    status: "Registered",
    description:
      "Fully compliant with UK data protection legislation.",
    icon: FileCheck,
    logo: icoAsset.url,
    logoAlt: "Information Commissioner's Office (ICO) official logo",
  },
  {
    org: "ResusReady",
    status: "Member RR-715313",
    description:
      "Actively registered and maintaining current resuscitation training standards.",
    icon: HeartPulse,
  },
];

const GOOGLE_REVIEW_URL =
  "https://g.page/r/CWbm1yja006BEBM/review";

const gallery = [
  { src: imgCamper, alt: "Outdoor festival stage at Camper Marmalade", label: "Camper Marmalade" },
  { src: imgCultural, alt: "Open-air festival crowd at sunset", label: "Open-Air Festival" },
  { src: imgWellbeing, alt: "Wellbeing festival gathering in summer sun", label: "Wellbeing Festival" },
  { src: imgIndoor, alt: "Indoor live music event with stage lighting", label: "Indoor Music Event" },
  { src: imgCastle, alt: "Herstmonceux Castle, East Sussex", label: "Herstmonceux Castle" },
];

const reviews = [
  {
    name: "Niki Y",
    text: "Excellent service! Contacted about help with an event and the team were so professional, thoroughly discussed our options and did exactly what was needed. Fantastic!",
  },
  {
    name: "Mel Martin",
    text: "Alan arrived in good time — a likeable man. Luckily only 2 plasters were needed during the event. EMT were our first choice for medical cover this year and we will certainly be booking them for future events.",
  },
  {
    name: "The Wandering Wizard",
    text: "Had the absolute pleasure of working alongside Andy and his team at Inter the Wild festival. Absolute legend, knowledgeable, professional and a joy to work alongside. Look forward to working with EMT anytime. 💜🧙‍♂️⚡",
  },
  {
    name: "Tamsyn Deane",
    text: "For anyone who goes out to events or runs them — these guys are amazing! All medical, security and event essentials. This is the team you need. EMT — for a personal touch and the extra mile.",
  },
];

const faqs = [
  {
    q: "Are you part of the NHS or an ambulance service?",
    a: "No. EMT Services is an independent, privately-owned event safety company. We are not affiliated with the NHS, NHS Ambulance Trusts (such as SECAmb or EMAS), or any statutory emergency service. We are contracted directly by event organisers to provide on-site medical, security, stewarding and fire safety cover.",
  },
  {
    q: "How does your independent private event support actually work?",
    a: "Event organisers engage us directly. We assess the event's risk profile, agree the right level of cover, and deploy a vetted team — medics, SIA-licensed security, stewards, and fire safety personnel — for the duration of the event. In a genuine emergency our on-site team stabilises and, where clinically necessary, hands over to the statutory NHS ambulance service in the normal way. We complement public emergency services on-site; we do not replace them.",
  },
  {
    q: "What level of medical cover do you provide?",
    a: "We supply trained event medics and first-aid cover scaled to your event's risk assessment. We are not CQC-registered and do not provide patient conveyance. When clinical or ambulance provision is required, we partner with trusted CQC-registered providers so the right level of care is in place. We are always transparent about our scope and will never overstate our clinical capacity.",
  },
  {
    q: "Are your security staff fully licensed?",
    a: "Yes. Every member of our security team holds a valid SIA licence and is highly experienced in crowd management, conflict resolution, and working dynamically in environments ranging from local festivals to major stadiums.",
  },
  {
    q: "How do you ensure overall event safety and compliance?",
    a: "Safety is built into the foundation of our service. Our operations are guided by director-level NEBOSH certifications and Level 4 Safeguarding qualifications, ensuring that every deployment strictly adheres to current UK health, safety, and welfare legislation.",
  },
  {
    q: "Can you assist with event planning and risk assessments?",
    a: "Absolutely. With decades of hands-on experience, we offer comprehensive consultancy services. We can assist with drafting safety management plans, medical risk assessments, and liaising with local authorities or Safety Advisory Groups (SAG) on your behalf.",
  },
];

function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center ${className}`} aria-label="EM Services">
      <img
        src={logoFull}
        alt="EM Services"
        className={`h-14 w-auto sm:h-16 ${light ? "invert brightness-0" : ""}`}
        style={light ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </a>
  );
}

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/85 text-white backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 lg:px-8 sm:h-24">
          <Logo light />
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white hover:text-navy"
            >
              <a href="#contact">Request Cover</a>
            </Button>
          </nav>
          <button
            className="lg:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 bg-navy-deep lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <Button
                asChild
                variant="outline"
                className="mt-2 border-white/40 bg-transparent text-white hover:bg-white hover:text-navy"
              >
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Request Cover
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>


      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <img
          src={heroBg}
          alt="EMT Services event safety team providing medical cover and SIA-licensed security at a UK outdoor event"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/85 to-navy-deep" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center lg:py-36 lg:px-8">
          <img
            src={logoIcon}
            alt="EM Services"
            className="h-48 w-auto sm:h-60"
            style={{ filter: "brightness(0) invert(1)" }}
          />

          <h1 className="mx-auto mt-10 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Event Safety.
            <br />
            35 Years of Hands-On Experience.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-white/75 sm:text-lg">
            A small, owner-operated firm led by two directors with over three decades of
            ground-level experience — honest about what we do, transparent about how we
            work, and personally invested in every event we cover.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-xs uppercase tracking-[0.2em] text-white/55">
            Independent private event medical & security support — not an NHS ambulance service.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white px-7 text-navy hover:bg-white/90"
            >
              <a href="#contact">Request Cover</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
          <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs uppercase tracking-wider text-white/70 sm:text-sm">
            {[
              "35 Years' Experience",
              "Owner-Operated",
              "SIA-Licensed",
              "NEBOSH Qualified",
              "ICO Registered",
            ].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-white/60" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 text-center text-xs uppercase tracking-[0.18em] text-white/55">
            Based in the South East · Covering the UK on request
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            kicker="What we do"
            title="Core Services"
            subtitle="A small, flexible operation. Rather than holding a large permanent roster, we bring in vetted specialists to suit each event. What you always get is direct access to the directors and full accountability for the team we provide."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-navy">
                      <s.icon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold leading-tight text-navy">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-sm sm:p-8">
            <span className="font-semibold text-navy">Staffing capacity:</span>{" "}
            We can supply anywhere from a core team of two up to approximately thirty
            personnel for an event. This is always subject to our other commitments and
            the availability of our vetted team at the time — something we will always
            be upfront about when you enquire.
          </div>

          {/* Event types */}
          <div className="mt-24">
            <h3 className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Types of events we cover
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              From intimate gatherings to large-scale events
            </p>
            <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-2.5">
              {eventTypes.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dark interstitial — events we've supported */}
        <div className="mt-24 bg-navy-deep py-16 text-white">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Among the events we have been proud to support are cultural occasions
              such as the{" "}
              <a
                href="https://www.gofundme.com/f/the-revival-of-eastbourne-lammas-festival"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Lammas Festival
              </a>
              ,{" "}
              <a
                href="https://www.eastbournecarnival.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Eastbourne Carnival
              </a>
              , and{" "}
              <a
                href="https://www.eastbourne-pride.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Eastbourne Pride
              </a>
              .
            </p>
            <p className="mt-5 text-sm text-white/60">
              Not sure if your event fits?{" "}
              <a href="#contact" className="text-white underline underline-offset-4">
                Get in touch
              </a>{" "}
              — we will tell you honestly whether we are the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section id="foundations" className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            kicker="Foundations"
            title="The Foundation of Our Service"
            subtitle="We are not a large company, and we do not pretend to be. These are the principles the directors of EMT Services have worked to every day across 35 years in the industry."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {foundations.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-navy">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-navy">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.copy}
                </p>
              </article>
            ))}
          </div>

          {/* Memberships & Accreditations */}
          <div className="mt-20">
            <h2 className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Memberships & Accreditations
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {memberships.map((m) => {
                const Icon = m.icon;
                return (
                  <article
                    key={m.org}
                    className="relative flex flex-col rounded-2xl bg-card p-7 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_8px_28px_-10px_rgba(15,23,42,0.18)]"
                  >
                    {m.logo && (
                      <img
                        src={m.logo}
                        alt={m.logoAlt}
                        loading="lazy"
                        className="absolute right-6 top-6 h-12 w-auto max-w-[110px] object-contain opacity-90"
                      />
                    )}
                    <div
                      aria-hidden="true"
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-navy"
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="pr-28 text-xl font-bold leading-snug tracking-tight text-navy">
                      {m.org}
                    </h3>
                    <div className="mt-2">
                      <span className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                        {m.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {m.description}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* Google Reviews CTA */}
            <div className="mt-10 flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">
                Worked with us? We&rsquo;d love your feedback.
              </p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                <Star size={16} aria-hidden="true" />
                Leave us a Google Review
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Trust: gallery + reviews */}
      <section id="trust" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            kicker="Track record"
            title="Events We Have Covered"
            subtitle="An honest cross-section of the work we do — from small community events to larger gatherings. We do not pick and choose what to show based on scale."
            align="left"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <figure
                key={g.label}
                className="group relative overflow-hidden rounded-xl bg-muted"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1280}
                  height={768}
                  className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Reviews */}
          <div className="mt-24 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight text-navy">
                  Google Reviews
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="font-medium text-foreground">5.0</span>
                  <span>· {reviews.length} reviews</span>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {reviews.map((r) => (
                  <blockquote
                    key={r.name}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                      “{r.text}”
                    </p>
                    <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      — {r.name}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-navy">
                Follow Us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We share updates, event coverage, and behind-the-scenes content on our
                socials. Follow us to see what we have been working on.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    icon: Facebook,
                    label: "EventManagementTeamServices",
                    sub: "Follow us on Facebook",
                    href: "https://www.facebook.com/EventManagementTeamServices",
                  },
                  {
                    icon: Instagram,
                    label: "@emtservices.uk",
                    sub: "Follow our events on Instagram",
                    href: "https://www.instagram.com/emtservices.uk/",
                  },
                  {
                    icon: Linkedin,
                    label: "EMT Services",
                    sub: "Connect with us on LinkedIn",
                    href: "https://www.linkedin.com/company/emt-servicesuk/",
                  },
                  {
                    icon: Star,
                    label: "Google Reviews",
                    sub: "Leave us a review",
                    href: GOOGLE_REVIEW_URL,
                  },
                ].map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition hover:border-navy/40 hover:bg-muted"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                        <s.icon size={16} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-navy">
                          {s.label}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {s.sub}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading
            kicker="FAQ"
            title="Common Questions"
            subtitle="Straight answers to the things people ask us most before making an enquiry."
          />
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold text-navy hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading kicker="Contact" title="Get in Touch" />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                You will hear back from one of the directors directly — not a sales
                team. We always love to sit down and discuss your needs, see where we
                can help, and suggest ideas. Fill in what you can — including a phone
                number and the best time to reach you if you would prefer a call — and
                we will give you an honest assessment of what your event requires and
                whether we are the right fit.
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:info@emtservices.uk"
                  className="mt-2 flex items-center gap-2 text-base font-semibold text-navy"
                >
                  <Mail size={16} />
                  info@emtservices.uk
                </a>
                <p className="mt-2 text-xs text-muted-foreground">
                  We will get back to you as soon as possible.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Areas We Cover
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Based in the <span className="font-semibold text-navy">South East of England</span> — our home patch for festivals, castle and estate events, and cultural gatherings.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We cover events across the wider UK on request. Get in touch and we will let you know honestly whether we are the right fit for your location and dates.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Follow us on socials
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/EventManagementTeamServices", label: "Facebook" },
                    { Icon: Instagram, href: "https://www.instagram.com/emtservices.uk/", label: "Instagram" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/emt-servicesuk/", label: "LinkedIn" },
                    { Icon: Star, href: "https://g.page/r/CWbm1yja006BEBM/review", label: "Google Reviews" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-navy transition hover:bg-navy hover:text-white"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <Logo light />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                Independent private event medical, security and safety services across
                the UK. Owner-operated, 35 years of experience.{" "}
                <span className="text-white/55">Not affiliated with the NHS or any ambulance trust.</span>
              </p>
              <a
                href="mailto:info@emtservices.uk"
                className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Mail size={14} />
                info@emtservices.uk
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Navigate
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/80">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Follow us on socials
              </p>
              <div className="mt-4 flex gap-2">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/EventManagementTeamServices", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/emtservices.uk/", label: "Instagram" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/emt-servicesuk/", label: "LinkedIn" },
                  { Icon: Star, href: "https://g.page/r/CWbm1yja006BEBM/review", label: "Google Reviews" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/55">
                Registered with the Information Commissioner's Office (ICO).
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} EMT Services. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookies</Link></li>
              <li><Link to="/accessibility" className="hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {kicker}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-navy ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const WEB3FORMS_KEY = "22160d78-fa02-41fa-bdee-389912551032";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold text-green-900">Thank You!</h3>
        <p className="mt-2 text-green-800">
          Your enquiry has been sent successfully. One of the directors will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const get = (id: string) => String(data.get(id) ?? "");

        const payload = {
          access_key: WEB3FORMS_KEY,
          name: get("name"),
          email: get("email"),
          subject: `Event Enquiry — ${get("org") || get("name") || "New enquiry"}`,
          message: [
            `Name: ${get("name")}`,
            `Email: ${get("email")}`,
            `Phone: ${get("phone")}`,
            `Organisation / Event: ${get("org")}`,
            `Event Date: ${get("date")}`,
            `Event Location: ${get("location")}`,
            `Expected Attendance: ${get("attendance")}`,
            `Services Required: ${get("services")}`,
            ``,
            `Preferred Contact Method & Times:`,
            get("contact-pref"),
          ].join("\n"),
        };

        setStatus("sending");
        setErrorMsg("");
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const json = await res.json().catch(() => ({}));
          if (res.ok && json.success) {
            setStatus("success");
            form.reset();
          } else {
            setStatus("error");
            setErrorMsg(json.message || "Something went wrong. Please email info@emtservices.uk directly.");
          }
        } catch {
          setStatus("error");
          setErrorMsg("Network error. Please email info@emtservices.uk directly.");
        }
      }}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <fieldset disabled={status === "sending"} className="contents">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Full Name" required />
          <Field id="email" label="Email Address" type="email" required />
          <Field id="phone" label="Phone (optional)" type="tel" />
          <Field id="org" label="Organisation / Event Name (optional)" />
          <Field id="date" label="Event Date" type="date" />
          <Field id="location" label="Event Location" />
          <Field id="attendance" label="Expected Attendance (optional)" />
          <Field id="services" label="Services Required" />
          <div className="sm:col-span-2">
            <Label htmlFor="contact-pref" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Preferred Contact Method & Times (optional)
            </Label>
            <Textarea
              id="contact-pref"
              name="contact-pref"
              rows={4}
              className="mt-2"
              placeholder="e.g. Phone after 4pm, weekdays"
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={status === "sending"}
          className="mt-7 w-full bg-navy text-white hover:bg-navy-deep sm:w-auto sm:px-10"
        >
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </Button>
      </fieldset>
      {status === "error" && (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {errorMsg}
        </p>
      )}
      <p className="mt-5 text-xs text-muted-foreground">
        Your details are used solely to respond to your enquiry. See our{" "}
        <Link to="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}


function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>
      <Input id={id} name={id} type={type} required={required} className="mt-2" />
    </div>
  );
}

