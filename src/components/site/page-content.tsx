import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CarFront,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  HeartPulse,
  House,
  Landmark,
  LifeBuoy,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/krakenimages-376KN_ISplE-unsplash.jpg";
import ushaNishadImage from "@/assets/usha-nishad.jpeg";

const phone = "8850148489";
const loanServices = [
  {
    title: "Personal loan",
    detail: "Explore options for planned expenses and life’s important moments.",
    icon: Wallet,
  },
  {
    title: "Business loan",
    detail: "Find finance options to support working capital and business growth.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Home loan",
    detail: "Get guidance as you take the next step toward owning a home.",
    icon: House,
  },
  {
    title: "Mortgage loan",
    detail: "Understand loan options against eligible property.",
    icon: Building2,
  },
  {
    title: "Vehicle loan",
    detail: "Compare available finance choices for your next vehicle.",
    icon: CarFront,
  },
  {
    title: "Unsecured overdraft",
    detail: "Ask about available short-term credit facilities for eligible applicants.",
    icon: Landmark,
  },
];

const loanLenders: Record<string, string[]> = {
  "Personal loan": [
    "Bajaj Finance",
    "Tata Capital",
    "HDB Financial",
    "Aditya Birla Finance",
    "Poonawalla Fincorp",
    "Hero FinCorp",
    "SMFG India Credit",
    "State Bank of India",
    "Bank of Baroda",
    "Punjab National Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IDFC FIRST Bank",
    "IndusInd Bank",
    "YES BANK",
    "Federal Bank",
    "RBL Bank",
    "Bandhan Bank",
  ],
  "Business loan": [
    "Bajaj Finance",
    "Tata Capital",
    "HDB Financial",
    "Aditya Birla Finance",
    "Poonawalla Fincorp",
    "L&T Finance",
    "Shriram Finance",
    "Cholamandalam Finance",
    "UGRO Capital",
    "Lendingkart",
    "FlexiLoans",
    "Piramal Finance",
    "IIFL Finance",
    "Hero FinCorp",
    "SMFG India Credit",
    "State Bank of India",
    "Bank of Baroda",
    "Punjab National Bank",
    "Union Bank of India",
    "Bank of India",
    "Central Bank of India",
    "UCO Bank",
    "Bank of Maharashtra",
    "Punjab & Sind Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IDFC FIRST Bank",
    "IndusInd Bank",
    "YES BANK",
    "Federal Bank",
    "South Indian Bank",
    "RBL Bank",
    "Bandhan Bank",
    "Karnataka Bank",
    "City Union Bank",
    "DCB Bank",
    "Karur Vysya Bank",
  ],
  "Home loan": [
    "Tata Capital",
    "L&T Finance",
    "Piramal Finance",
    "State Bank of India",
    "Bank of Baroda",
    "Punjab National Bank",
    "Canara Bank",
    "Union Bank of India",
    "Bank of India",
    "Indian Bank",
    "Central Bank of India",
    "UCO Bank",
    "Bank of Maharashtra",
    "Indian Overseas Bank",
    "Punjab & Sind Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IDFC FIRST Bank",
    "IndusInd Bank",
    "Federal Bank",
    "South Indian Bank",
    "Bandhan Bank",
    "Karnataka Bank",
    "City Union Bank",
    "DCB Bank",
    "Karur Vysya Bank",
  ],
  "Mortgage loan": [
    "Bajaj Finance",
    "Tata Capital",
    "Aditya Birla Finance",
    "Cholamandalam Finance",
    "Piramal Finance",
    "IIFL Finance",
    "Bank of Baroda",
    "Canara Bank",
    "Indian Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IDFC FIRST Bank",
    "IndusInd Bank",
    "YES BANK",
    "DCB Bank",
  ],
  "Vehicle loan": [
    "Shriram Finance",
    "Cholamandalam Finance",
    "State Bank of India",
    "Punjab National Bank",
    "Bank of India",
    "Indian Overseas Bank",
    "IndusInd Bank",
  ],
  "Unsecured overdraft": ["State Bank of India", "Bank of Baroda", "HDFC Bank", "Axis Bank"],
};

const lenderGroups = [
  {
    title: "NBFCs",
    names: [
      "Bajaj Finance",
      "Tata Capital",
      "HDB Financial",
      "Aditya Birla Finance",
      "Poonawalla Fincorp",
      "L&T Finance",
      "Shriram Finance",
      "Cholamandalam Finance",
      "UGRO Capital",
      "Lendingkart",
      "FlexiLoans",
      "Piramal Finance",
      "IIFL Finance",
      "Hero FinCorp",
      "SMFG India Credit",
    ],
  },
  {
    title: "Public-sector banks",
    names: [
      "State Bank of India",
      "Bank of Baroda",
      "Punjab National Bank",
      "Canara Bank",
      "Union Bank of India",
      "Bank of India",
      "Indian Bank",
      "Central Bank of India",
      "UCO Bank",
      "Bank of Maharashtra",
      "Indian Overseas Bank",
      "Punjab & Sind Bank",
    ],
  },
  {
    title: "Private-sector banks",
    names: [
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank",
      "IDFC FIRST Bank",
      "IndusInd Bank",
      "YES BANK",
      "Federal Bank",
      "South Indian Bank",
      "RBL Bank",
      "Bandhan Bank",
      "Karnataka Bank",
      "City Union Bank",
      "DCB Bank",
      "Karur Vysya Bank",
    ],
  },
];

const insurancePartnerGroups = [
  {
    title: "Life insurance",
    partners: [
      { name: "HDFC Life", products: "Term, Savings, Retirement" },
      { name: "ICICI Prudential Life", products: "Term, ULIP, Savings" },
      { name: "SBI Life", products: "Term, Group, Savings" },
      { name: "Axis Max Life", products: "Term, Protection, Savings" },
      { name: "Tata AIA Life", products: "Term, Wealth, Retirement" },
    ],
  },
  {
    title: "General insurance",
    partners: [
      { name: "ICICI Lombard", products: "Motor, Business, Travel" },
      { name: "HDFC ERGO", products: "Motor, Health, Property" },
      { name: "Bajaj General Insurance", products: "Motor, Commercial, General" },
      { name: "Tata AIG", products: "Motor, Travel, Business" },
      { name: "SBI General", products: "Motor, Property, Business" },
    ],
  },
  {
    title: "Health insurance",
    partners: [
      { name: "Star Health Insurance", products: "Individual, Family, Senior citizen" },
      { name: "Care Health Insurance", products: "Family Floater, Individual" },
      { name: "Niva Bupa", products: "Family, Individual, Senior citizen" },
    ],
  },
  {
    title: "Vehicle insurance",
    partners: [
      { name: "ICICI Lombard", products: "All motor categories" },
      { name: "HDFC ERGO", products: "Car, bike, commercial" },
      { name: "Bajaj General", products: "Car, bike, commercial" },
      { name: "Tata AIG", products: "Car, commercial" },
      { name: "Go Digit", products: "Digital motor insurance" },
      { name: "IndusInd General", products: "Car, commercial" },
      { name: "SBI General", products: "Car, bike, commercial" },
      { name: "Shriram General", products: "Commercial and private vehicles" },
    ],
  },
];

const insuranceServices = [
  {
    title: "Health insurance",
    detail: "Explore cover options for you and your family.",
    icon: HeartPulse,
  },
  {
    title: "Term insurance",
    detail: "Review life cover choices to help protect those who depend on you.",
    icon: ShieldCheck,
  },
  {
    title: "Vehicle insurance",
    detail: "Get help comparing available cover for your vehicle.",
    icon: CarFront,
  },
  {
    title: "Group insurance",
    detail: "Ask about group cover solutions for eligible organisations.",
    icon: LifeBuoy,
  },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${dark ? "text-primary-foreground" : "text-foreground"}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
        {eyebrow}
      </span>
      <div className="gold-rule mt-4" />
      <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
      <p
        className={`mt-4 text-base leading-7 ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}
      >
        {copy}
      </p>
    </div>
  );
}

function ServiceCard({
  title,
  detail,
  icon: Icon,
}: {
  title: string;
  detail: string;
  icon: typeof Wallet;
}) {
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

function WhatsAppFloatingButton() {
  const message =
    "Hello Ace Logistic Finance, I would like to know more about your loan and insurance services.";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      aria-label="Chat with Ace Logistic Finance on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-[#1FBD5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-7 sm:right-7"
      href={whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      <span>Chat on WhatsApp</span>
    </a>
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
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Full name
        <Input autoComplete="name" name="name" placeholder="Your name" required />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Phone number
        <Input
          autoComplete="tel"
          inputMode="tel"
          name="contact"
          placeholder="Your phone number"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        I’m interested in
        <select
          className="h-10 w-full border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          defaultValue=""
          name="interest"
          required
        >
          <option disabled value="">
            Choose a service
          </option>
          {[
            ...loanServices.map((service) => service.title),
            ...insuranceServices.map((service) => service.title),
          ].map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <Button className="mt-1 w-full" size="lg" variant="gold" type="submit">
        Continue enquiry <ArrowUpRight aria-hidden="true" />
      </Button>
      {messageUrl && (
        <p aria-live="polite" className="border border-border bg-secondary p-4 text-sm leading-6">
          Your enquiry is ready.{" "}
          <a
            className="font-semibold text-primary underline underline-offset-4"
            href={messageUrl}
            rel="noreferrer"
            target="_blank"
          >
            Continue on WhatsApp <ArrowUpRight aria-hidden="true" className="inline size-4" />
          </a>
        </p>
      )}
      <p className="text-xs leading-5 text-muted-foreground">
        Your enquiry does not guarantee approval. Loan and insurance terms are set by the respective
        provider.
      </p>
    </form>
  );
}

export function HomePage() {
  return (
    <>
      <section className="site-hero relative isolate min-h-[620px] overflow-hidden bg-primary sm:min-h-[680px]">
        <img
          alt="A professional in a modern financial district office"
          className="absolute inset-0 size-full object-cover object-[64%_center]"
          fetchPriority="high"
          height={1152}
          src={heroImage}
          width={1792}
        />
        <div className="site-hero-shade absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-16 sm:min-h-[680px] sm:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="gold-rule" /> Ace Logistic Finance
            </span>
            <h1 className="mt-7 max-w-xl font-display text-5xl leading-[1.08] sm:text-6xl">
              Move forward with <span className="text-accent">Excellence.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-primary-foreground/85 sm:text-lg">
              Thoughtful loan and insurance assistance, with options from a network of banks, NBFCs
              and insurance providers.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gold">
                <Link to="/apply">
                  Start an enquiry <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                className="border-primary-foreground/45 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                size="lg"
                variant="outline"
              >
                <Link to="/loan-services">
                  Explore loan options <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/25 pt-5 text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-2">
                <Check aria-hidden="true" className="size-4 text-accent" /> Multiple provider
                tie-ups
              </span>
              <span className="inline-flex items-center gap-2">
                <Check aria-hidden="true" className="size-4 text-accent" /> Guided documentation
              </span>
            </div>
          </div>
        </div>
        <span className="absolute bottom-6 right-8 z-10 hidden text-xs uppercase tracking-[0.15em] text-primary-foreground/65 lg:block">
          Kandivali East · Mumbai
        </span>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-5 sm:px-8 md:grid-cols-4 md:divide-y-0">
          {[
            { icon: Landmark, title: "Multiple lenders", detail: "Banks & NBFCs" },
            { icon: FileCheck2, title: "Clear guidance", detail: "Documentation support" },
            { icon: Clock3, title: "Responsive support", detail: "Prompt application follow-up" },
            {
              icon: BadgeCheck,
              title: "Personal attention",
              detail: "A real person to speak with",
            },
          ].map(({ icon: Icon, title, detail }) => (
            <div className="flex min-h-28 items-center gap-3 p-4 sm:gap-4 sm:px-6" key={title}>
              <Icon aria-hidden="true" className="size-5 shrink-0 text-accent-foreground" />
              <div>
                <p className="text-sm font-semibold text-primary">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Finance, made more considered"
            title="Find a loan that fits your next step."
            copy="From personal plans to business ambitions, our team helps you understand available options across multiple lending partners."
          />
          <Button asChild className="w-fit" variant="outline">
            <Link to="/loan-services">
              View all loan services <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loanServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionIntro
            eyebrow="Protect what matters"
            title="Insurance guidance with your needs in mind."
            copy="Explore health, term, vehicle and group insurance options through tie-ups with multiple insurance companies."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {insuranceServices.map(({ title, detail, icon: Icon }) => (
              <div className="flex gap-4 border-b border-border py-5" key={title}>
                <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-background text-accent-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-primary">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
            <Button asChild className="mt-3 w-fit" variant="outline">
              <Link to="/insurance">
                Explore insurance <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <SectionIntro
              dark
              eyebrow="A more personal approach"
              title="Here to help you make an informed choice."
              copy="Founded by Usha Nishad, Ace Logistic Finance brings lending and insurance options together with one-to-one assistance from first conversation to application follow-up."
            />
            <Button asChild className="mt-8" variant="gold">
              <Link to="/about">
                Meet Ace Logistic Finance <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-0 border-y border-primary-foreground/20">
            {[
              "Understand your requirement",
              "Review available provider options",
              "Get support with documentation",
              "Follow your application progress",
            ].map((item, index) => (
              <div
                className="flex items-center gap-5 border-b border-primary-foreground/15 py-5 last:border-0"
                key={item}
              >
                <span className="font-display text-2xl text-accent">0{index + 1}</span>
                <p className="text-sm text-primary-foreground/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.9fr]">
        <div className="self-center">
          <SectionIntro
            eyebrow="Your next step"
            title="Start with a conversation."
            copy="Tell us what you’re looking for. Our team will help you understand the next steps and the information you may need."
          />
          <a
            className="gold-hover mt-7 inline-flex items-center gap-2 text-lg font-medium text-primary"
            href={`tel:${phone}`}
          >
            <Phone aria-hidden="true" className="size-5 text-accent-foreground" /> 88501 48489
          </a>
        </div>
        <div className="border border-border p-6 sm:p-8">
          <h2 className="font-display text-2xl text-primary">Request a callback</h2>
          <p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">
            Share a few details to continue your enquiry on WhatsApp.
          </p>
          <EnquiryForm />
        </div>
      </section>
      <p className="mx-auto max-w-7xl px-5 pb-8 text-xs leading-5 text-muted-foreground sm:px-8">
        All applications are subject to the relevant lender’s or insurer’s eligibility criteria,
        verification and terms. Rates, processing times and approval decisions vary by provider and
        applicant.
      </p>
      <WhatsAppFloatingButton />
    </>
  );
}

const pageCopy: Record<string, { eyebrow: string; title: string; intro: string }> = {
  about: {
    eyebrow: "About us",
    title: "A finance partner who listens first.",
    intro:
      "Ace Logistic Finance helps individuals and businesses explore loan and insurance options from multiple providers, with personal guidance at every step.",
  },
  "loan-services": {
    eyebrow: "Loan services",
    title: "Financing options for the life you’re building.",
    intro:
      "Explore a range of loan products through our bank and NBFC tie-ups. We help you understand the process, prepare documents and connect with a suitable provider.",
  },
  insurance: {
    eyebrow: "Insurance",
    title: "Cover for the people and things you value.",
    intro:
      "Ace Logistic Finance provides assistance with health, term, vehicle and group insurance through tie-ups with multiple insurance companies.",
  },
  partners: {
    eyebrow: "Our partners",
    title: "More provider options. One helpful conversation.",
    intro:
      "We work with multiple banks, NBFCs, private-sector banks, nationalised banks and insurance companies to help you explore available options.",
  },
  faqs: {
    eyebrow: "FAQs",
    title: "Good questions deserve clear answers.",
    intro: "A few helpful details about loan and insurance enquiries with Ace Logistic Finance.",
  },
  contact: {
    eyebrow: "Contact us",
    title: "Let’s talk about what you need.",
    intro:
      "Reach out to our Kandivali East team for loan and insurance assistance, or visit us above Sandeep Hotel near Kandivali East Station.",
  },
  apply: {
    eyebrow: "Apply now",
    title: "Tell us what you’re looking for.",
    intro:
      "Share your contact details and the service you’re interested in. We’ll prepare an enquiry for you to send directly to our team.",
  },
};

function PageBanner({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75">{intro}</p>
      </div>
    </section>
  );
}

function LoanPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionIntro
          eyebrow="Available loan types"
          title="A range of ways to move forward."
          copy="The right product depends on your needs and eligibility. Speak with our team to learn which options may be available."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loanServices.map((service) => (
            <div className="flex flex-col border border-border bg-background" key={service.title}>
              <ServiceCard {...service} />
              <div className="border-t border-border bg-secondary/60 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  Lenders listed for this loan
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(loanLenders[service.title] ?? []).map((lender) => (
                    <span
                      className="border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                      key={lender}
                    >
                      {lender}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-xs leading-5 text-muted-foreground">
          Lender names are displayed based on the list shared with Ace Logistic Finance. Product
          availability and eligibility vary by lender. Please confirm current sourcing arrangements
          and active product offerings before relying on any lender listing.
        </p>
        <div className="mt-12 border-l-2 border-accent bg-secondary p-6 sm:p-8">
          <h2 className="font-display text-2xl text-primary">
            Support from enquiry to application
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            We can explain the documentation typically requested and help you submit an enquiry to a
            suitable lending partner. Final rates, processing, eligibility and approval are
            determined by the lender.
          </p>
          <Button asChild className="mt-6" variant="gold">
            <Link to="/apply">
              Enquire about a loan <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

function InsurancePage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionIntro
          eyebrow="Insurance services"
          title="Explore cover with a helping hand."
          copy="Explore life, health, general and vehicle insurance options through the insurer network shared with Ace Logistic Finance."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {insuranceServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-16">
          <SectionIntro
            eyebrow="Insurance provider network"
            title="Insurance partners and product categories."
            copy="Browse the insurance companies and product areas listed for each category."
          />
          <div className="mt-8 space-y-8">
            {insurancePartnerGroups.map((group) => (
              <section className="border border-border bg-background p-6 sm:p-8" key={group.title}>
                <h3 className="font-display text-2xl text-primary">{group.title}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.partners.map((partner) => (
                    <div className="border border-border bg-secondary/50 p-4" key={partner.name}>
                      <h4 className="font-semibold text-primary">{partner.name}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {partner.products}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-xs leading-5 text-muted-foreground">
          Insurance company names and product categories are based on the list shared with Ace
          Logistic Finance. Product availability, coverage, premiums, exclusions, underwriting and
          approval are determined by the insurer and the specific policy. Please confirm active
          arrangements and review policy wording before purchase.
        </p>
        <Button asChild className="mt-8" variant="gold">
          <Link to="/apply">
            Ask about insurance <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </>
  );
}

function AboutPage() {
  const expertise = [
    "Personal & Business Loan Advisory",
    "Home Loan & Mortgage Finance",
    "Loan Against Property (LAP)",
    "MSME & Business Finance",
    "Unsecured Overdraft & Working Capital",
    "Banking & NBFC Partnerships",
    "Financial Consultation & Customer Relationship Management",
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-accent" />
            <img
              alt="Usha Nishad, Founder and Owner of ACE Logistic Finance"
              className="relative aspect-[4/5] w-full object-cover object-center"
              height={900}
              src={ushaNishadImage}
              width={720}
            />
            <div className="absolute inset-x-0 bottom-0 bg-primary/90 p-5 text-primary-foreground">
              <p className="font-display text-2xl">Usha Nishad</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Owner & Founder
              </p>
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Meet our founder"
              title="Experience-led guidance. A personal approach to finance."
              copy="Usha Nishad is the Founder and Owner of ACE Logistic Finance, bringing an MBA in Finance and more than 10 years of professional experience in the financial services industry."
            />
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              With expertise in financial planning, loan advisory, credit solutions and customer
              relationship management, she is committed to helping individuals, entrepreneurs and
              businesses explore financial solutions suited to their requirements and eligibility.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Under her leadership, ACE Logistic Finance aims to build strong relationships with
              nationalised banks, private-sector banks and NBFCs, giving customers access to a broad
              range of financial products and informed guidance along the way.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Her vision is to make financial services more accessible, transparent and
              customer-focused through professional guidance, dependable support and solutions
              tailored to each customer’s financial needs.
            </p>
            <Button asChild className="mt-7" variant="gold">
              <Link to="/contact">
                Connect with our team <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionIntro
            eyebrow="Core expertise"
            title="Financial guidance across key needs."
            copy="From personal borrowing to business funding, Usha’s experience spans a range of financial advisory and customer support areas."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                className="flex items-start gap-3 border border-border bg-background p-4"
                key={item}
              >
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-accent-foreground"
                />
                <span className="text-sm leading-6 text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            dark
            eyebrow="Our vision"
            title="Empowering better financial futures."
            copy="To become a trusted financial advisory and loan distribution partner, empowering individuals and businesses with the right financial solutions for a better financial future."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionIntro
          eyebrow="How we work"
          title="Personal guidance. Practical next steps."
          copy="We listen to each customer’s needs, help explain available provider options and offer support through the documentation and application process."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Listen",
              copy: "Understand the goals and financial requirements behind each enquiry.",
            },
            {
              title: "Explore",
              copy: "Review relevant options across banks, NBFCs and insurance providers.",
            },
            {
              title: "Assist",
              copy: "Provide guidance with documentation and application follow-up.",
            },
          ].map((item, index) => (
            <div className="border-t border-accent pt-5" key={item.title}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function PartnersPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionIntro
          eyebrow="Provider network"
          title="A network designed to widen the conversation."
          copy="Explore the banks, NBFCs and insurance companies included in the provider lists shared with Ace Logistic Finance."
        />

        <div className="mt-12">
          <SectionIntro
            eyebrow="Lending network"
            title="Banks and NBFCs"
            copy="Lender names are grouped by institution type for easier reference."
          />
          <div className="mt-8 space-y-6">
            {lenderGroups.map((group) => (
              <section className="border border-border bg-background p-6 sm:p-8" key={group.title}>
                <h3 className="font-display text-2xl text-primary">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.names.map((name) => (
                    <span
                      className="border border-border bg-secondary/60 px-3 py-2 text-sm text-muted-foreground"
                      key={name}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionIntro
            eyebrow="Insurance network"
            title="Life, health, general and vehicle insurers"
            copy="Insurance providers are grouped by the product categories listed by the client."
          />
          <div className="mt-8 space-y-6">
            {insurancePartnerGroups.map((group) => (
              <section className="border border-border bg-background p-6 sm:p-8" key={group.title}>
                <h3 className="font-display text-2xl text-primary">{group.title}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.partners.map((partner) => (
                    <div className="border border-border bg-secondary/50 p-4" key={partner.name}>
                      <h4 className="font-semibold text-primary">{partner.name}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {partner.products}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-xs leading-5 text-muted-foreground">
          Provider names and product categories are based on lists shared with Ace Logistic Finance.
          Their inclusion here does not by itself confirm an active sourcing or distribution
          agreement. Please verify current partnerships, product availability and applicable
          eligibility before publication or customer commitment. Final loan and insurance terms are
          set by the respective provider.
        </p>
      </div>
    </>
  );
}

const faqs = [
  {
    q: "What loan services can I enquire about?",
    a: "You can enquire about personal, business, home, mortgage and vehicle loans, as well as unsecured overdraft options. Availability and eligibility are determined by each lender.",
  },
  {
    q: "What types of insurance do you assist with?",
    a: "We assist with enquiries about health, term, vehicle and group insurance through tie-ups with multiple insurance companies.",
  },
  {
    q: "What documents will I need?",
    a: "Requirements vary by product and provider. After learning more about your enquiry, our team can share the documentation typically requested by the relevant provider.",
  },
  {
    q: "How long does approval take?",
    a: "Processing and approval timelines vary by provider, application completeness and verification. The lender or insurer makes the final decision.",
  },
  {
    q: "Can you guarantee a loan rate or approval?",
    a: "No. Interest rates, premiums, eligibility, processing time and approval are determined by the selected provider after its assessment.",
  },
  {
    q: "Where are you located?",
    a: "We are at 3rd Floor, 35 No., above Sandeep Hotel, Kandivali East Station, Mumbai. Call 88501 48489 before visiting.",
  },
];

function FaqPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.65fr_1fr]">
      <div>
        <SectionIntro
          eyebrow="Frequently asked questions"
          title="A little more clarity."
          copy="Still have a question? Call us and we’ll be glad to help."
        />
        <Button asChild className="mt-7" variant="outline">
          <Link to="/contact">
            Contact our team <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <details className="group py-5" key={faq.q}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-primary">
              <span>{faq.q}</span>
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 text-accent-foreground transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="max-w-2xl pt-4 text-sm leading-6 text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr]">
      <div>
        <SectionIntro
          eyebrow="Visit or call"
          title="We’re here in Kandivali East."
          copy="Speak with our team about loan and insurance options, documents or the next step in your enquiry."
        />
        <a
          className="gold-hover mt-8 inline-flex items-center gap-3 font-medium text-primary"
          href={`tel:${phone}`}
        >
          <span className="flex size-11 items-center justify-center border border-border">
            <Phone aria-hidden="true" className="size-5 text-accent-foreground" />
          </span>
          88501 48489
        </a>
        <div className="mt-7 flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center border border-border">
            <Building2 aria-hidden="true" className="size-5 text-accent-foreground" />
          </span>
          <p className="pt-1 text-sm leading-6 text-muted-foreground">
            3rd Floor, 35 No.
            <br />
            Above Sandeep Hotel
            <br />
            Kandivali East Station, Mumbai
          </p>
        </div>
        <Button asChild className="mt-7" variant="outline">
          <a
            href="https://www.google.com/maps/search/?api=1&query=35%20No%20above%20Sandeep%20Hotel%20Kandivali%20East%20Station%20Mumbai"
            rel="noreferrer"
            target="_blank"
          >
            Open directions <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
      <div className="border border-border p-6 sm:p-8">
        <h2 className="font-display text-2xl text-primary">Send an enquiry</h2>
        <p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">
          Share a few details and continue directly with our team on WhatsApp.
        </p>
        <EnquiryForm />
      </div>
    </div>
  );
}

function ApplyPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr]">
      <div>
        <SectionIntro
          eyebrow="Start an enquiry"
          title="Let’s find a useful place to start."
          copy="Choose the service you have in mind and tell us how to reach you. Our team can help outline possible next steps."
        />
        <div className="mt-8 space-y-5 border-t border-border pt-6">
          {[
            { icon: CircleHelp, text: "Tell us what you need" },
            { icon: Sparkles, text: "Discuss available provider options" },
            { icon: FileCheck2, text: "Get guidance on documentation" },
          ].map(({ icon: Icon, text }) => (
            <div className="flex items-center gap-3 text-sm text-muted-foreground" key={text}>
              <Icon aria-hidden="true" className="size-5 text-accent-foreground" />
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className="border border-border p-6 sm:p-8">
        <h2 className="font-display text-2xl text-primary">Your details</h2>
        <p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">
          Enquiries are sent by you to our team through WhatsApp.
        </p>
        <EnquiryForm />
      </div>
    </div>
  );
}

export function ContentPage({ page }: { page: keyof typeof pageCopy }) {
  const config = pageCopy[page];
  if (!config) return null;
  let body;
  switch (page) {
    case "about":
      body = <AboutPage />;
      break;
    case "loan-services":
      body = <LoanPage />;
      break;
    case "insurance":
      body = <InsurancePage />;
      break;
    case "partners":
      body = <PartnersPage />;
      break;
    case "faqs":
      body = <FaqPage />;
      break;
    case "contact":
      body = <ContactPage />;
      break;
    case "apply":
      body = <ApplyPage />;
      break;
  }
  return (
    <>
      <PageBanner {...config} />
      {body}
      <div className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Speak with Ace Logistic Finance to understand what may be available for you.
          </p>
          <a
            className="gold-hover inline-flex items-center gap-2 font-semibold text-primary"
            href={`tel:${phone}`}
          >
            <Phone aria-hidden="true" className="size-4 text-accent-foreground" /> 88501 48489{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
      <WhatsAppFloatingButton />
    </>
  );
}
