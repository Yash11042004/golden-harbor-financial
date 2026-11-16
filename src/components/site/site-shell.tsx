import { useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Loan Services", to: "/loan-services" },
  { label: "Insurance", to: "/insurance" },
  { label: "Our Partners", to: "/partners" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between gap-4 px-5 text-xs sm:px-8">
          <span className="hidden sm:inline">Thoughtful finance. A clearer way forward.</span>
          <a
            className="ml-auto inline-flex items-center gap-2 font-medium gold-hover"
            href="tel:8850148489"
          >
            <Phone aria-hidden="true" className="size-3.5 text-accent" />
            88501 48489
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <Link
            aria-label="Ace Logistic Finance home"
            className="flex shrink-0 items-center"
            to="/"
          >
            <img
              src="/logo.png"
              alt="Ace Logistic Finance"
              className="h-14 w-auto max-w-[220px] object-contain"
            />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                aria-current={location.pathname === item.to ? "page" : undefined}
                className="gold-hover border-b-2 border-transparent py-2 text-[13px] font-medium text-foreground aria-[current=page]:border-accent aria-[current=page]:text-primary"
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild className="hidden sm:inline-flex" variant="gold">
              <Link to="/apply">
                Apply Now <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              className="xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              size="icon"
              variant="outline"
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-border bg-background px-5 py-3 xl:hidden"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-4">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  className="gold-hover border-b border-border py-3 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="gold-hover py-3 text-sm font-semibold text-primary sm:hidden"
                onClick={() => setMenuOpen(false)}
                to="/apply"
              >
                Apply Now <ArrowUpRight aria-hidden="true" className="ml-1 inline size-4" />
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link
              aria-label="Ace Logistic Finance home"
              className="inline-flex items-center"
              to="/"
            >
              <img
                src="/logo.png"
                alt="Ace Logistic Finance"
                className="h-12 w-auto max-w-[220px] object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/75">
              Finance and insurance assistance, guided by real conversations and options from
              multiple providers.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Explore
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-primary-foreground/80">
              {navigation.slice(1).map((item) => (
                <Link className="gold-hover w-fit" key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Speak with us
            </h2>
            <a className="gold-hover mt-4 block w-fit text-lg" href="tel:8850148489">
              88501 48489
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/75">
              3rd Floor, 35 No., above Sandeep Hotel, Kandivali East Station, Mumbai
            </p>
            <Button asChild className="mt-5" variant="gold">
              <Link to="/apply">
                Start an enquiry <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-primary-foreground/60 sm:px-8 sm:flex-row sm:justify-between">
            <span>© {new Date().getFullYear()} Ace Logistic Finance</span>
            <span>Finance and insurance are subject to provider terms and eligibility.</span>
          </div>
        </div>
      </footer>
      <a
        aria-label="Call Ace Logistic Finance"
        className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center border border-accent bg-primary text-accent shadow-lg md:hidden"
        href="tel:8850148489"
      >
        <Phone aria-hidden="true" className="size-5" />
      </a>
    </div>
  );
}
