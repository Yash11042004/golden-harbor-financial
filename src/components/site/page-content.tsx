import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Building2, CarFront,
  Check, ChevronDown, CircleHelp, Clock3, FileCheck2, HeartPulse, House,
  Landmark, LifeBuoy, Phone, ShieldCheck, Sparkles, Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/northstar-finance-hero.jpg";

const phone = "8850148489";
const loanServices = [
  { title: "Personal loan", detail: "Explore options for planned expenses and life’s important moments.", icon: Wallet },
  { title: "Business loan", detail: "Find finance options to support working capital and business growth.", icon: BriefcaseBusiness },
  { title: "Home loan", detail: "Get guidance as you take the next step toward owning a home.", icon: House },
  { title: "Mortgage loan", detail: "Understand loan options against eligible property.", icon: Building2 },
  { title: "Vehicle loan", detail: "Compare available finance choices for your next vehicle.", icon: CarFront },
  { title: "Unsecured overdraft", detail: "Ask about available short-term credit facilities for eligible applicants.", icon: Landmark },
];
const insuranceServices = [
  { title: "Health insurance", detail: "Explore cover options for you and your family.", icon: HeartPulse },
  { title: "Term insurance", detail: "Review life cover choices to help protect those who depend on you.", icon: ShieldCheck },
  { title: "Vehicle insurance", detail: "Get help comparing available cover for your vehicle.", icon: CarFront },
  { title: "Group insurance", detail: "Ask about group cover solutions for eligible organisations.", icon: LifeBuoy },
];

function SectionIntro({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy: string; dark?: boolean }) {
  return (
    <div className={`max-w-2xl ${dark ? "text-primary-foreground" : "text-foreground"}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">{eyebrow}</span>
      <div className="gold-rule mt-4" />
      <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
      <p className={`mt-4 text-base leading-7 ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{copy}</p>
    </div>
  );
}

function ServiceCard({ title, detail, icon: Icon }: { title: string; detail: string; icon: typeof Wallet }) {
  return (
    <div className="group flex min-h-52 flex-col border border-border bg-background p-6 transition-colors duration-200 hover:border-accent">
      <span className="flex size-11 items-center justify-center border border-border text-primary transition-colors group-hover:border-accent group-hover:text-accent-foreground">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 font-display text-xl text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
    </div>
  );
}

function EnquiryForm() {
  const [messageUrl, setMessageUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const interest = String(form.get("interest") ?? "").trim();
    const message = `Hello Ace Logistic Finance, my name is ${name}. I would like to enquire about ${interest}. My contact number is ${contact}.`;
    setMessageUrl(`https://wa.me/91${phone}?text=${encodeURIComponent(message)}`);
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium text-foreground">Full name<Input autoComplete="name" name="name" placeholder="Your name" required /></label>
      <label className="grid gap-2 text-sm font-medium text-foreground">Phone number<Input autoComplete="tel" inputMode="tel" name="contact" placeholder="Your phone number" required /></label>
      <label className="grid gap-2 text-sm font-medium text-foreground">I’m interested in
        <select className="h-10 w-full border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue="" name="interest" required>
          <option disabled value="">Choose a service</option>
          {[...loanServices.map((service) => service.title), ...insuranceServices.map((service) => service.title)].map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </label>
      <Button className="mt-1 w-full" size="lg" variant="gold" type="submit">Continue enquiry <ArrowUpRight aria-hidden="true" /></Button>
      {messageUrl && <p aria-live="polite" className="border border-border bg-secondary p-4 text-sm leading-6">Your enquiry is ready. <a className="font-semibold text-primary underline underline-offset-4" href={messageUrl} rel="noreferrer" target="_blank">Continue on WhatsApp <ArrowUpRight aria-hidden="true" className="inline size-4" /></a></p>}
      <p className="text-xs leading-5 text-muted-foreground">Your enquiry does not guarantee approval. Loan and insurance terms are set by the respective provider.</p>
    </form>
  );
}

export function HomePage() {
  return (
    <>
      <section className="site-hero relative isolate min-h-[620px] overflow-hidden bg-primary sm:min-h-[680px]">
        <img alt="A professional in a modern financial district office" className="absolute inset-0 size-full object-cover object-[64%_center]" fetchPriority="high" height={1152} src={heroImage} width={1792} />
        <div className="site-hero-shade absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-16 sm:min-h-[680px] sm:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"><span className="gold-rule" /> Ace Logistic Finance</span>
            <h1 className="mt-7 max-w-xl font-display text-5xl leading-[1.08] sm:text-6xl">Move forward with <span className="text-accent">confidence.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-primary-foreground/85 sm:text-lg">Thoughtful loan and insurance assistance, with options from a network of banks, NBFCs and insurance providers.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gold"><Link to="/apply">Start an enquiry <ArrowUpRight aria-hidden="true" /></Link></Button>
              <Button asChild className="border-primary-foreground/45 text-primary-foreground hover:bg-primary-foreground/10" size="lg" variant="outline"><Link to="/loan-services">Explore loan options <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/25 pt-5 text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-2"><Check aria-hidden="true" className="size-4 text-accent" /> Multiple provider tie-ups</span>
              <span className="inline-flex items-center gap-2"><Check aria-hidden="true" className="size-4 text-accent" /> Guided documentation</span>
            </div>
          </div>
        </div>
        <span className="absolute bottom-6 right-8 z-10 hidden text-xs uppercase tracking-[0.15em] text-primary-foreground/65 lg:block">Kandivali East · Mumbai</span>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-5 sm:px-8 md:grid-cols-4 md:divide-y-0">
          {[{ icon: Landmark, title: "Multiple lenders", detail: "Banks & NBFCs" }, { icon: FileCheck2, title: "Clear guidance", detail: "Documentation support" }, { icon: Clock3, title: "Responsive support", detail: "Prompt application follow-up" }, { icon: BadgeCheck, title: "Personal attention", detail: "A real person to speak with" }].map(({ icon: Icon, title, detail }) => (
            <div className="flex min-h-28 items-center gap-3 p-4 sm:gap-4 sm:px-6" key={title}>
              <Icon aria-hidden="true" className="size-5 shrink-0 text-accent-foreground" />
              <div><p className="text-sm font-semibold text-primary">{title}</p><p className="mt-1 text-xs text-muted-foreground">{detail}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro eyebrow="Finance, made more considered" title="Find a loan that fits your next step." copy="From personal plans to business ambitions, our team helps you understand available options across multiple lending partners." />
          <Button asChild className="w-fit" variant="outline"><Link to="/loan-services">View all loan services <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loanServices.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionIntro eyebrow="Protect what matters" title="Insurance guidance with your needs in mind." copy="Explore health, term, vehicle and group insurance options through tie-ups with multiple insurance companies." />
          <div className="grid gap-3 sm:grid-cols-2">
            {insuranceServices.map(({ title, detail, icon: Icon }) => <div className="flex gap-4 border-b border-border py-5" key={title}><span className="flex size-10 shrink-0 items-center justify-center border border-border bg-background text-accent-foreground"><Icon aria-hidden="true" className="size-5" /></span><div><h3 className="font-display text-lg text-primary">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p></div></div>)}
            <Button asChild className="mt-3 w-fit" variant="outline"><Link to="/insurance">Explore insurance <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <SectionIntro dark eyebrow="A more personal approach" title="Here to help you make an informed choice." copy="Founded by Usha Nishad, Ace Logistic Finance brings lending and insurance options together with one-to-one assistance from first conversation to application follow-up." />
            <Button asChild className="mt-8" variant="gold"><Link to="/about">Meet Ace Logistic Finance <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="grid gap-0 border-y border-primary-foreground/20">
            {["Understand your requirement", "Review available provider options", "Get support with documentation", "Follow your application progress"].map((item, index) => <div className="flex items-center gap-5 border-b border-primary-foreground/15 py-5 last:border-0" key={item}><span className="font-display text-2xl text-accent">0{index + 1}</span><p className="text-sm text-primary-foreground/85">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.9fr]">
        <div className="self-center"><SectionIntro eyebrow="Your next step" title="Start with a conversation." copy="Tell us what you’re looking for. Our team will help you understand the next steps and the information you may need." /><a className="gold-hover mt-7 inline-flex items-center gap-2 text-lg font-medium text-primary" href={`tel:${phone}`}><Phone aria-hidden="true" className="size-5 text-accent-foreground" /> 88501 48489</a></div>
        <div className="border border-border p-6 sm:p-8"><h2 className="font-display text-2xl text-primary">Request a callback</h2><p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">Share a few details to continue your enquiry on WhatsApp.</p><EnquiryForm /></div>
      </section>
      <p className="mx-auto max-w-7xl px-5 pb-8 text-xs leading-5 text-muted-foreground sm:px-8">All applications are subject to the relevant lender’s or insurer’s eligibility criteria, verification and terms. Rates, processing times and approval decisions vary by provider and applicant.</p>
    </>
  );
}

const pageCopy: Record<string, { eyebrow: string; title: string; intro: string }> = {
  about: { eyebrow: "About us", title: "A finance partner who listens first.", intro: "Ace Logistic Finance helps individuals and businesses explore loan and insurance options from multiple providers, with personal guidance at every step." },
  "loan-services": { eyebrow: "Loan services", title: "Financing options for the life you’re building.", intro: "Explore a range of loan products through our bank and NBFC tie-ups. We help you understand the process, prepare documents and connect with a suitable provider." },
  insurance: { eyebrow: "Insurance", title: "Cover for the people and things you value.", intro: "Ace Logistic Finance provides assistance with health, term, vehicle and group insurance through tie-ups with multiple insurance companies." },
  partners: { eyebrow: "Our partners", title: "More provider options. One helpful conversation.", intro: "We work with multiple banks, NBFCs, private-sector banks, nationalised banks and insurance companies to help you explore available options." },
  faqs: { eyebrow: "FAQs", title: "Good questions deserve clear answers.", intro: "A few helpful details about loan and insurance enquiries with Ace Logistic Finance." },
  contact: { eyebrow: "Contact us", title: "Let’s talk about what you need.", intro: "Reach out to our Kandivali East team for loan and insurance assistance, or visit us above Sandeep Hotel near Kandivali East Station." },
  apply: { eyebrow: "Apply now", title: "Tell us what you’re looking for.", intro: "Share your contact details and the service you’re interested in. We’ll prepare an enquiry for you to send directly to our team." },
};

function PageBanner({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</span><h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75">{intro}</p></div></section>;
}

function LoanPage() {
  return <><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><SectionIntro eyebrow="Available loan types" title="A range of ways to move forward." copy="The right product depends on your needs and eligibility. Speak with our team to learn which options may be available." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{loanServices.map((service) => <ServiceCard key={service.title} {...service} />)}</div><div className="mt-12 border-l-2 border-accent bg-secondary p-6 sm:p-8"><h2 className="font-display text-2xl text-primary">Support from enquiry to application</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">We can explain the documentation typically requested and help you submit an enquiry to a suitable lending partner. Final rates, processing, eligibility and approval are determined by the lender.</p><Button asChild className="mt-6" variant="gold"><Link to="/apply">Enquire about a loan <ArrowUpRight aria-hidden="true" /></Link></Button></div></div></>;
}

function InsurancePage() {
  return <><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><SectionIntro eyebrow="Insurance services" title="Explore cover with a helping hand." copy="We work with multiple insurance companies and can help you understand the documents and steps involved in an enquiry." /><div className="mt-10 grid gap-4 sm:grid-cols-2">{insuranceServices.map((service) => <ServiceCard key={service.title} {...service} />)}</div><p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">Coverage, premium, exclusions, underwriting and approval are determined by the insurer and the specific policy. Please review policy wording before purchase.</p><Button asChild className="mt-8" variant="gold"><Link to="/apply">Ask about insurance <ArrowUpRight aria-hidden="true" /></Link></Button></div></>;
}

function AboutPage() {
  return <><div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr]"><div><SectionIntro eyebrow="Our approach" title="Personal guidance. Practical next steps." copy="Ace Logistic Finance brings loan and insurance enquiries together under one roof. We listen to what matters to you, help explain provider options and guide you through the documentation process." /><p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">With tie-ups across banks, NBFCs and insurance companies, we aim to make it easier to understand where to begin and what to ask. Every application is considered independently by its provider.</p></div><div className="border border-border bg-secondary p-7 sm:p-9"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">Founded by</span><h2 className="mt-3 font-display text-3xl text-primary">Usha Nishad</h2><div className="gold-rule mt-5"/><p className="mt-5 text-sm leading-7 text-muted-foreground">Ace Logistic Finance is built around personal service, clear communication and helpful assistance through the application journey.</p><Button asChild className="mt-7" variant="outline"><Link to="/contact">Get in touch <ArrowRight aria-hidden="true" /></Link></Button></div></div><section className="bg-primary py-16 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-3">{[{ title: "Listen", copy: "Understand the goals behind your enquiry." }, { title: "Explore", copy: "Review available options across our provider network." }, { title: "Assist", copy: "Help you prepare and follow through on next steps." }].map((item, index) => <div className="border-t border-accent pt-5" key={item.title}><span className="text-xs font-semibold uppercase tracking-widest text-accent">0{index + 1}</span><h3 className="mt-3 font-display text-2xl">{item.title}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/70">{item.copy}</p></div>)}</div></section></>;
}

function PartnersPage() {
  const partners = [{ title: "Banks", detail: "Loan enquiries across available bank products.", icon: Landmark }, { title: "NBFCs", detail: "Additional lending options from non-bank financial companies.", icon: Building2 }, { title: "Private-sector banks", detail: "Provider choices based on current availability and eligibility.", icon: BriefcaseBusiness }, { title: "Nationalised banks", detail: "Explore products offered by participating public-sector banks.", icon: Landmark }, { title: "Insurance companies", detail: "Multiple insurance tie-ups for a range of cover needs.", icon: ShieldCheck }];
  return <><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><SectionIntro eyebrow="Provider network" title="A network designed to widen the conversation." copy="Ace Logistic Finance has tie-ups with multiple providers in India. Availability may vary by product, location and applicant eligibility."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{partners.map(({ title, detail, icon: Icon })=><div className="border border-border p-6" key={title}><Icon aria-hidden="true" className="size-6 text-accent-foreground"/><h2 className="mt-5 font-display text-xl text-primary">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p></div>)}</div><p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">Provider names and logos are not shown here. Specific provider options and product terms can be discussed with our team during your enquiry.</p></div></>;
}

const faqs = [
  { q: "What loan services can I enquire about?", a: "You can enquire about personal, business, home, mortgage and vehicle loans, as well as unsecured overdraft options. Availability and eligibility are determined by each lender." },
  { q: "What types of insurance do you assist with?", a: "We assist with enquiries about health, term, vehicle and group insurance through tie-ups with multiple insurance companies." },
  { q: "What documents will I need?", a: "Requirements vary by product and provider. After learning more about your enquiry, our team can share the documentation typically requested by the relevant provider." },
  { q: "How long does approval take?", a: "Processing and approval timelines vary by provider, application completeness and verification. The lender or insurer makes the final decision." },
  { q: "Can you guarantee a loan rate or approval?", a: "No. Interest rates, premiums, eligibility, processing time and approval are determined by the selected provider after its assessment." },
  { q: "Where are you located?", a: "We are at 3rd Floor, 35 No., above Sandeep Hotel, Kandivali East Station, Mumbai. Call 88501 48489 before visiting." },
];

function FaqPage() {
  return <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.65fr_1fr]"><div><SectionIntro eyebrow="Frequently asked questions" title="A little more clarity." copy="Still have a question? Call us and we’ll be glad to help."/><Button asChild className="mt-7" variant="outline"><Link to="/contact">Contact our team <ArrowRight aria-hidden="true"/></Link></Button></div><div className="divide-y divide-border border-y border-border">{faqs.map((faq)=><details className="group py-5" key={faq.q}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-primary"><span>{faq.q}</span><ChevronDown aria-hidden="true" className="size-5 shrink-0 text-accent-foreground transition-transform group-open:rotate-180"/></summary><p className="max-w-2xl pt-4 text-sm leading-6 text-muted-foreground">{faq.a}</p></details>)}</div></div>;
}

function ContactPage() {
  return <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr]"><div><SectionIntro eyebrow="Visit or call" title="We’re here in Kandivali East." copy="Speak with our team about loan and insurance options, documents or the next step in your enquiry."/><a className="gold-hover mt-8 inline-flex items-center gap-3 font-medium text-primary" href={`tel:${phone}`}><span className="flex size-11 items-center justify-center border border-border"><Phone aria-hidden="true" className="size-5 text-accent-foreground"/></span>88501 48489</a><div className="mt-7 flex items-start gap-3"><span className="flex size-11 shrink-0 items-center justify-center border border-border"><Building2 aria-hidden="true" className="size-5 text-accent-foreground"/></span><p className="pt-1 text-sm leading-6 text-muted-foreground">3rd Floor, 35 No.<br/>Above Sandeep Hotel<br/>Kandivali East Station, Mumbai</p></div><Button asChild className="mt-7" variant="outline"><a href="https://www.google.com/maps/search/?api=1&query=35%20No%20above%20Sandeep%20Hotel%20Kandivali%20East%20Station%20Mumbai" rel="noreferrer" target="_blank">Open directions <ArrowUpRight aria-hidden="true"/></a></Button></div><div className="border border-border p-6 sm:p-8"><h2 className="font-display text-2xl text-primary">Send an enquiry</h2><p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">Share a few details and continue directly with our team on WhatsApp.</p><EnquiryForm/></div></div>;
}

function ApplyPage() {
  return <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr]"><div><SectionIntro eyebrow="Start an enquiry" title="Let’s find a useful place to start." copy="Choose the service you have in mind and tell us how to reach you. Our team can help outline possible next steps."/><div className="mt-8 space-y-5 border-t border-border pt-6">{[{ icon: CircleHelp, text: "Tell us what you need" }, { icon: Sparkles, text: "Discuss available provider options" }, { icon: FileCheck2, text: "Get guidance on documentation" }].map(({icon:Icon,text})=><div className="flex items-center gap-3 text-sm text-muted-foreground" key={text}><Icon aria-hidden="true" className="size-5 text-accent-foreground"/>{text}</div>)}</div></div><div className="border border-border p-6 sm:p-8"><h2 className="font-display text-2xl text-primary">Your details</h2><p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">Enquiries are sent by you to our team through WhatsApp.</p><EnquiryForm/></div></div>;
}

export function ContentPage({ page }: { page: keyof typeof pageCopy }) {
  const config = pageCopy[page];
  let body;
  switch (page) {
    case "about": body = <AboutPage/>; break;
    case "loan-services": body = <LoanPage/>; break;
    case "insurance": body = <InsurancePage/>; break;
    case "partners": body = <PartnersPage/>; break;
    case "faqs": body = <FaqPage/>; break;
    case "contact": body = <ContactPage/>; break;
    case "apply": body = <ApplyPage/>; break;
  }
  return <><PageBanner {...config}/>{body}<div className="bg-secondary"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between"><p className="max-w-xl text-sm leading-6 text-muted-foreground">Speak with Ace Logistic Finance to understand what may be available for you.</p><a className="gold-hover inline-flex items-center gap-2 font-semibold text-primary" href={`tel:${phone}`}><Phone aria-hidden="true" className="size-4 text-accent-foreground"/> 88501 48489 <ArrowRight aria-hidden="true" className="size-4"/></a></div></div></>;
}